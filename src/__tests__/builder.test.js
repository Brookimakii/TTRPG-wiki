import {openBuilder} from "../testUtils/builder";

const races = require("../resources/dnd5e/races.json");
const feats = require("../resources/dnd5e/feats.json");
const backgrounds = require("../resources/dnd5e/backgrounds.json");

let builder;
afterEach(() => { builder && builder.close(); builder = null; });

describe("builder: entries editor", () => {
  test("a named block can hold any entry type, nested several levels deep", async () => {
    builder = await openBuilder();
    builder.open("Races", {create: true});
    const traits = builder.section("Traits");
    builder.add(traits, "+ Named Block");
    const level1 = traits.querySelector(".nested-entries");
    expect(level1).not.toBeNull();

    builder.add(level1, "+ Table");
    builder.add(level1, "+ List");
    builder.add(level1, "+ Quote");
    builder.add(level1, "+ Inset Box");
    const level2 = [...traits.querySelectorAll(".nested-entries .nested-entries")].pop();
    expect(level2).toBeDefined();
    builder.add(level2, "+ Table");

    const entries = builder.current().traits[0].entries;
    expect(entries[0]).toBe(""); // a new block starts with one empty paragraph
    expect(entries.filter(e => typeof e === "object").map(e => e.type)).toEqual(["table", "list", "quote", "inset"]);
    const inset = entries.find(e => e.type === "inset");
    expect(inset.entries.some(e => e.type === "table")).toBe(true); // level 2
    expect(builder.errors).toEqual([]);
  });

  test("Races Lore, Bestiary traits and actions offer the full toolbar, not just paragraphs", async () => {
    builder = await openBuilder();
    builder.open("Races", {create: true});
    const toolbar = (section) => builder.toolbar(section).map(b => b.textContent);
    expect(toolbar(builder.section("Lore / Info"))).toEqual(expect.arrayContaining(["+ Table", "+ List", "+ Named Block"]));
    builder.open("Bestiary", {create: true});
    expect(toolbar(builder.section("Actions"))).toEqual(expect.arrayContaining(["+ Table", "+ Named Block"]));
    expect(toolbar(builder.section("Traits"))).toEqual(expect.arrayContaining(["+ Table", "+ Named Block"]));
  });
});

describe("builder: 5.5e fields write the JSON the site reads", () => {
  test("backgrounds", async () => {
    builder = await openBuilder();
    builder.open("Backgrounds", {create: true});
    builder.set("Name", "Acolyte");
    builder.set("Ability Scores (5.5e)", "Intelligence, Sagesse, Charisme");
    builder.set("Origin Feat (5.5e)", "{@feat Initié à la magie|XPHB}");
    builder.set("Skill Proficiencies (5.5e)", "Intuition, Religion");
    builder.set("Tool Proficiency (5.5e)", "Matériel de calligraphe");
    expect(builder.current()).toMatchObject({
      name: "Acolyte", ability: "Intelligence, Sagesse, Charisme", feat: "{@feat Initié à la magie|XPHB}",
      skills: "Intuition, Religion", tools: "Matériel de calligraphe", equipment: [],
    });
  });

  test("feats", async () => {
    builder = await openBuilder();
    builder.open("Feats", {create: true});
    builder.set("Category (5.5e)", "Origine");
    builder.set("Ability Score Increase (5.5e)", "For ou Dex +1");
    builder.set("Repeatable", true);
    expect(builder.current()).toMatchObject({cat: "Origine", ability: "For ou Dex +1", repeatable: true});
  });

  test("items: weapon mastery is offered for weapons", async () => {
    builder = await openBuilder();
    builder.open("Items", {create: true});
    expect(builder.current()).toHaveProperty("mastery", []);
    expect(builder.hasField("Weapon Mastery (5.5e)")).toBe(true);
  });

  test("bestiary: stat block fields write the nested model of the site", async () => {
    builder = await openBuilder();
    builder.open("Bestiary", {create: true});
    builder.set("Name", "Gobelin");
    builder.set("Creature Type", "Humanoïde");
    builder.set("Size", "S");
    builder.set("Armor Class", "15");
    builder.set("Initiative bonus", "2");
    builder.set("HP dice (count)", "2");
    builder.set("HP dice (sides)", "6");
    builder.set("STR (For)", "8");
    builder.set("WIS (Sag)", "9");
    builder.set("STR save (override)", "+5");
    const m = builder.current();
    expect(m.identity).toMatchObject({type: "Humanoïde", size: "S"});
    expect(m.defense).toMatchObject({ca: "15", initiative: 2});
    expect(m.defense.hpRoll.dice).toEqual({amount: 2, sides: 6});
    expect(m.attribut).toMatchObject({for: 8, sag: 9});
    expect(m.proficiencies.saves.for).toBe("+5");
    ["Traits", "Actions", "Bonus Actions", "Reactions", "Legendary Actions", "Lair Actions", "Regional Effects"]
      .forEach(title => expect(builder.section(title)).toBeDefined());
  });

  test("races: bonus is optional for 5.5e species, with a hint", async () => {
    builder = await openBuilder();
    builder.open("Races", {create: true});
    expect(builder.document.body.textContent).toContain("5.5e species have no ability bonus");
  });
});

describe("builder: legacy entries without a type", () => {
  // races.json still holds {"": ""} placeholders and {"Transe": "texte"} objects from the old format.
  const legacyRace = {id: "legacy", name: "Ancienne", source: "TEST", info: [{"": ""}, "Un vrai paragraphe."], traits: [{"Transe": "Ils méditent."}]};

  test("they never show as [object Object]", async () => {
    builder = await openBuilder({races: [legacyRace]});
    builder.open("Races");
    builder.rows()[0].click();
    const values = [...builder.document.querySelectorAll("input,textarea,select")].map(el => el.value);
    expect(values.filter(v => v.includes("[object Object]"))).toEqual([]);
    expect(builder.document.body.textContent).not.toContain("[object Object]");
  });

  test("a placeholder shows as an empty paragraph and becomes a string when typed in", async () => {
    builder = await openBuilder({races: [legacyRace]});
    builder.open("Races");
    builder.rows()[0].click();
    const box = builder.section("Lore / Info").querySelector(".entry-block textarea");
    expect(box.value).toBe("");
    box.value = "Du texte.";
    box.dispatchEvent(new builder.window.Event("input", {bubbles: true}));
    expect(builder.current().info[0]).toBe("Du texte.");
  });

  test("a {Name: text} object is editable as JSON and can be converted to a named block", async () => {
    builder = await openBuilder({races: [legacyRace]});
    builder.open("Races");
    builder.rows()[0].click();
    const traits = builder.section("Traits");
    expect(traits.querySelector(".raw-json-ta").value).toContain("Transe");
    const convert = [...traits.querySelectorAll("button")].find(b => b.textContent === "Convert to named block");
    expect(convert).toBeDefined();
    convert.click();
    expect(builder.current().traits[0]).toEqual({type: "entries", name: "Transe", entries: ["Ils méditent."]});
    expect(builder.section("Traits").querySelector("input").value).toBe("Transe"); // now a named block
  });
});

describe("builder: subraces", () => {
  const withSubraces = {
    id: "aasimar", name: "Aasimar", source: "VGM", traits: [], info: [],
    subraces: [
      {id: "fallen", name: "Déchu", source: "VGM", bonus: ";Con+1", traits: [{type: "entries", name: "Linceul", entries: ["Texte."]}],
        info: {"": "Lore du déchu."}, images: []},
      {id: "scourge", name: "Fléau", source: "VGM", bonus: ";Con+1", traits: [], info: [], images: []},
    ],
  };
  const open = async (race = withSubraces) => {
    builder = await openBuilder({races: [race]});
    builder.open("Races");
    builder.rows()[0].click();
    return builder.section("Subraces / Lineages");
  };
  const cards = (section) => [...section.querySelectorAll(":scope > div > .subrace-card, .subrace-card")];

  test("each existing subrace gets its own card with fields, traits and lore", async () => {
    const section = await open();
    expect(cards(section)).toHaveLength(2);
    expect(section.textContent).toContain("Déchu");
    const first = cards(section)[0];
    expect([...first.querySelectorAll("input")].map(i => i.value)).toEqual(expect.arrayContaining(["Déchu", "fallen", "VGM", ";Con+1"]));
    expect(first.querySelector(".nested-entries, .entry-block")).not.toBeNull();
    expect(builder.document.body.textContent).not.toContain("[object Object]");
  });

  test("legacy lore objects ({\"\": text}) are shown as a paragraph and saved as a list", async () => {
    const section = await open();
    const loreBox = cards(section)[0].querySelectorAll("textarea");
    expect([...loreBox].some(t => t.value === "Lore du déchu.")).toBe(true);
    const lore = [...loreBox].find(t => t.value === "Lore du déchu.");
    lore.value = "Lore modifié.";
    lore.dispatchEvent(new builder.window.Event("input", {bubbles: true}));
    expect(builder.current().subraces[0].info).toEqual(["Lore modifié."]);
  });

  test("editing a subrace field writes to that subrace only", async () => {
    const section = await open();
    const name = cards(section)[1].querySelector("input");
    name.value = "Fléau modifié";
    name.dispatchEvent(new builder.window.Event("input", {bubbles: true}));
    expect(builder.current().subraces.map(s => s.name)).toEqual(["Déchu", "Fléau modifié"]);
  });

  test("add, reorder and delete subraces", async () => {
    let section = await open({...withSubraces, subraces: []});
    expect(section.textContent).toContain("No subrace");
    builder.add(section, "+ Add subrace");
    section = builder.section("Subraces / Lineages");
    expect(builder.current().subraces).toHaveLength(1);
    expect(builder.current().subraces[0]).toMatchObject({traits: [], info: [], bonus: ""});

    builder.add(section, "+ Add subrace");
    builder.section("Subraces / Lineages").querySelectorAll(".subrace-card")[1].querySelector("input").value = "Second";
    const second = builder.section("Subraces / Lineages").querySelectorAll(".subrace-card")[1];
    const nameInput = second.querySelector("input");
    nameInput.value = "Second";
    nameInput.dispatchEvent(new builder.window.Event("input", {bubbles: true}));

    const up = [...builder.section("Subraces / Lineages").querySelectorAll(".subrace-card")[1].querySelectorAll("button")].find(b => b.textContent === "↑");
    up.click();
    expect(builder.current().subraces.map(s => s.name)).toEqual(["Second", ""]);

    builder.window.confirm = () => true;
    const del = [...builder.section("Subraces / Lineages").querySelectorAll(".subrace-card")[0].querySelectorAll("button")].find(b => b.textContent === "✕");
    del.click();
    expect(builder.current().subraces.map(s => s.name)).toEqual([""]);
  });

  describe("folding", () => {
    const body = (card) => card.querySelector(".subrace-body");
    const head = (card) => card.querySelector(".subrace-head");
    const click = (el) => el.dispatchEvent(new builder.window.MouseEvent("click", {bubbles: true}));

    test("with several subraces they start collapsed, with a caret and aria-expanded", async () => {
      const section = await open();
      cards(section).forEach(card => {
        expect(body(card).hidden).toBe(true);
        expect(head(card).getAttribute("aria-expanded")).toBe("false");
        expect(card.querySelector(".subrace-caret").textContent).toBe("▸");
      });
    });

    test("a lone subrace starts open", async () => {
      const section = await open({...withSubraces, subraces: [withSubraces.subraces[0]]});
      expect(body(cards(section)[0]).hidden).toBe(false);
    });

    test("clicking the header folds and unfolds, without touching the data", async () => {
      const section = await open();
      const card = cards(section)[0];
      click(head(card));
      expect(body(card).hidden).toBe(false);
      expect(card.querySelector(".subrace-caret").textContent).toBe("▾");
      expect(head(card).getAttribute("aria-expanded")).toBe("true");
      click(head(card));
      expect(body(card).hidden).toBe(true);
      expect(builder.current().subraces).toHaveLength(2);
      expect(builder.current().subraces[0].name).toBe("Déchu");
    });

    test("the action buttons do not fold the card", async () => {
      const section = await open();
      const card = cards(section)[0];
      const down = [...card.querySelectorAll(".subrace-actions button")].find(b => b.textContent === "↓");
      down.click(); // moves it, must not toggle
      const moved = cards(builder.section("Subraces / Lineages"))[1];
      expect(body(moved).hidden).toBe(true);
      expect(builder.current().subraces.map(x => x.name)).toEqual(["Fléau", "Déchu"]);
    });

    test("Enter on the header folds too (keyboard)", async () => {
      const section = await open();
      const card = cards(section)[0];
      head(card).dispatchEvent(new builder.window.KeyboardEvent("keydown", {key: "Enter", bubbles: true}));
      expect(body(card).hidden).toBe(false);
    });

    test("the title follows the name while the card is folded", async () => {
      const section = await open();
      const card = cards(section)[0];
      const name = card.querySelector("input");
      name.value = "Déchu renommé";
      name.dispatchEvent(new builder.window.Event("input", {bubbles: true}));
      expect(card.querySelector(".subrace-title").textContent).toContain("Déchu renommé");
      expect(body(card).hidden).toBe(true);
    });

    test("Expand all / Collapse all", async () => {
      let section = await open();
      const bar = (label) => [...section.querySelectorAll(".entries-toolbar button")].find(b => b.textContent === label);
      bar("Expand all").click();
      section = builder.section("Subraces / Lineages");
      expect(cards(section).map(c => body(c).hidden)).toEqual([false, false]);
      [...section.querySelectorAll(".entries-toolbar button")].find(b => b.textContent === "Collapse all").click();
      expect(cards(builder.section("Subraces / Lineages")).map(c => body(c).hidden)).toEqual([true, true]);
    });

    test("no fold-all buttons for a single subrace; a new subrace opens and others keep their state", async () => {
      let section = await open();
      click(head(cards(section)[1])); // open the second one
      builder.add(section, "+ Add subrace");
      section = builder.section("Subraces / Lineages");
      expect(cards(section).map(c => body(c).hidden)).toEqual([true, false, false]); // 1st folded, 2nd kept open, new one open

      const single = await open({...withSubraces, subraces: [withSubraces.subraces[0]]});
      expect(builder.toolbar(single).map(b => b.textContent)).toEqual(["+ Add subrace"]); // own toolbar only
    });
  });

  test("a subrace's traits accept every entry type, like the race's own", async () => {
    const section = await open();
    const traitsEditor = cards(section)[1].querySelector(".entries-toolbar").parentElement;
    builder.add(traitsEditor, "+ Table");
    expect(builder.current().subraces[1].traits.map(t => t.type)).toEqual(["table"]);
  });
});

describe("builder: existing data", () => {
  test.each([
    ["races", "Races", races],
    ["feats", "Feats", feats],
    ["backgrounds", "Backgrounds", backgrounds],
    ["items", "Items", require("../resources/dnd5e/items.json")],
    ["features", "Features", require("../resources/dnd5e/features.json")],
    ["rules", "Rules", require("../resources/dnd5e/rules.json")],
  ])("every %s item opens in the editor without errors or [object Object]", async (key, label, data) => {
    builder = await openBuilder({[key]: data});
    builder.open(label);
    const rows = builder.rows();
    expect(rows).toHaveLength(data.length);
    const showingObjects = [];
    rows.forEach((row, i) => {
      row.click();
      const values = [...builder.document.querySelectorAll("input,textarea,select")].map(el => el.value);
      if (values.some(v => v.includes("[object Object]"))) showingObjects.push(i + ": " + row.textContent.trim().slice(0, 30));
    });
    expect(showingObjects).toEqual([]);
    expect(builder.errors).toEqual([]);
  });
});