import {mountPage} from "../testUtils/mount";
import {Dnd5eClasses} from "../5etoolLayout/dnd/Classes";

const classes = require("../resources/dnd5e/classes.json");

// Known mistakes in the content itself (not in the code). Remove an entry once the data is fixed.
const KNOWN_DATA_ISSUES = {
  // subclassFeatures[24] > table row 4: "{@spell {@spell immobilisation de monstre|PHB24}|PHB24}" (tag wrapped twice)
  "paladin-24": {rawTags: true},
};

describe("classes page", () => {
  test.each(classes.map(c => [c.info.name, c.id]))("%s (%s) renders with every feature found", async (name, id) => {
    const page = await mountPage(Dnd5eClasses, "#" + id);
    expect(page.thrown).toBeNull();
    expect(page.errors.filter(e => /Objects are not valid/.test(e))).toEqual([]);
    const text = page.text();
    expect(text).toContain(name);
    expect(text).not.toMatch(/Unable to find|UnableToFind/);
    expect(text).not.toContain("[object Object]");
    expect(text).not.toMatch(/\bundefined\b/);
    if (!KNOWN_DATA_ISSUES[id]?.rawTags) expect(text).not.toContain("{@"); // every tag was rendered
    await page.unmount();
  });

  test("Barbare: rage damage column shows signed bonuses, not objects", async () => {
    const page = await mountPage(Dnd5eClasses, "#barbarian-24");
    expect(page.text()).toMatch(/\+2/);
    await page.unmount();
  });

  test("Barbare: nested run-in titles of a subclass feature are rendered with their text", async () => {
    const page = await mountPage(Dnd5eClasses, "#barbarian-24");
    const titles = [...page.container.querySelectorAll(".rd__h--3 .entry-title-inner")].map(e => e.textContent.trim());
    expect(titles).toEqual(expect.arrayContaining(["Sève cosmique.", "Force vivifiante."]));
    titles.forEach(t => expect(t).toMatch(/\S.*\.$/)); // never an empty "." or "undefined." title
    await page.unmount();
  });

  test("Barbare: level 3 subclass features resolve even though refs use English class names", async () => {
    const page = await mountPage(Dnd5eClasses, "#barbarian-24");
    expect(page.text()).toContain("Frénésie");
    await page.unmount();
  });

  test("table headers and proficiencies go through the tag renderer", async () => {
    const page = await mountPage(Dnd5eClasses, "#artificer-efa");
    const links = [...page.container.querySelectorAll("a")].map(a => a.getAttribute("href"));
    expect(links.some(h => /dnd5e\/spells$/.test(h))).toBe(true); // {@filter ...|spells|...} column headers
    await page.unmount();
  });
});
