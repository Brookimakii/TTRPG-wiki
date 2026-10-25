import React from "react";
import {MemoryRouter} from "react-router-dom";
import {renderToStaticMarkup} from "react-dom/server";
import {RenderModule} from "../5etoolLayout/5eLayoutModules";

// Renders 5etools-style entries to static HTML (inside a router, because tags can produce links).
// `entries` blocks are delegated to the page, so the test provides a minimal renderer for them.
const renderer = {
  defaultString: (s) => <>{s}</>,
  renderEntries: (entry) => <section><h3>{entry.name}</h3>{RenderModule(renderer).render(entry.entries)}</section>,
};
const html = (entries) =>
  renderToStaticMarkup(<MemoryRouter>{RenderModule(renderer).render(entries)}</MemoryRouter>)
    .replace(/&#x27;/g, "'"); // React escapes apostrophes

describe("inline tags", () => {
  test("{@filter} links to the target page and keeps the filters in the tooltip", () => {
    const out = html("{@filter 5e|spells|level=5|class=Clerc}");
    expect(out).toContain('href="/TTRPG-wiki/dnd5e/spells"');
    expect(out).toContain(">5e</a>");
    expect(out).toContain('title="level : 5 | class : Clerc"');
  });

  test("{@filter} with an unknown page degrades to plain text instead of a dead link", () => {
    const out = html("{@filter texte|nopage|a=b}");
    expect(out).not.toContain("<a ");
    expect(out).toContain("texte");
  });

  test("{@5etools} links to a page of the wiki", () => {
    expect(html("{@5etools dons|feats.html}")).toContain('href="/TTRPG-wiki/dnd5e/feats"');
  });

  test.each([
    ["{@atkr m}", "Jet d'attaque de corps à corps :"],
    ["{@atkr r}", "Jet d'attaque à distance :"],
    ["{@atkr m,r}", "Jet d'attaque de corps à corps ou à distance :"],
    ["{@atk mw}", "Attaque au corps à corps avec une arme :"],
    ["{@atk mw,rw}", "Attaque au corps à corps avec une arme ou Attaque à distance avec une arme :"],
  ])("attack tag %s", (tag, expected) => {
    expect(html(tag)).toContain(expected);
  });

  test("tags with a display text show that text, not the first segment", () => {
    expect(html("{@itemProperty R|PHB24|Reach}")).toContain("Reach");
    expect(html("{@itemProperty R|PHB24|Reach}")).not.toMatch(/>R</);
    expect(html("{@book Dungeon Master's Guide|XDMG|6|Crafting Magic Items}")).toContain("Crafting Magic Items");
    expect(html("{@classFeature Flash of Genius|Artificer|EFA|7|EFA|Éclair de génie}")).toContain("Éclair de génie");
  });

  test("a tag the site does not know never leaks its raw braces", () => {
    expect(html("avant {@skill Discrétion|PHB24} après")).not.toContain("{@");
  });
});

describe("tables", () => {
  const table = {
    type: "table",
    colLabels: ["Niveau", "{@dice 1d6}"],
    rows: [["1", "Lumières dansantes"], ["2", {type: "bonus", value: 2}]],
  };

  test("a table without colStyles (typical of 2024 data) renders instead of crashing", () => {
    const out = html(table);
    expect(out).toContain("Lumières dansantes");
    expect(out).toContain("<table");
  });

  test("tags in column headers are rendered", () => {
    expect(html(table)).not.toContain("{@dice");
  });

  test("a table without column labels or rows still renders", () => {
    expect(() => html({type: "table", rows: [["a", "b"]]})).not.toThrow();
    expect(() => html({type: "table"})).not.toThrow();
  });

  test("cell objects: bonus and bonusSpeed", () => {
    expect(html({type: "bonus", value: 2})).toContain("+2");
    expect(html({type: "bonusSpeed", value: 10})).toContain("+10 ft.");
    expect(html({type: "bonusSpeed", value: 0})).toContain("—");
  });
});

describe("entries", () => {
  test("lists use entries", () => {
    const out = html({type: "list", entries: ["un", "deux"]});
    expect(out).toContain("un");
    expect(out).toContain("deux");
  });

  test("an object with entries but no type (5etools trait/action) renders as an entries block", () => {
    const out = html([{name: "Scimitar", entries: ["Coup de cimeterre."]}]);
    expect(out).toContain("Scimitar");
    expect(out).toContain("Coup de cimeterre.");
  });

  test("legacy {\"\": text} and {Title: text} objects of the old race data are shown, not dropped", () => {
    expect(html({"": "Paragraphe de lore."})).toContain("Paragraphe de lore.");
    const titled = html({"Transe": "Les elfes méditent."});
    expect(titled).toContain("Transe");
    expect(titled).toContain("Les elfes méditent.");
  });

  test("an empty legacy placeholder renders nothing", () => {
    expect(html([{"": ""}])).toBe("");
  });

  test("plain strings and nested named entries render", () => {
    const out = html(["Intro.", {type: "entries", name: "Sous-titre", entries: ["Contenu."]}]);
    expect(out).toContain("Intro.");
    expect(out).toContain("Sous-titre");
    expect(out).toContain("Contenu.");
  });
});
