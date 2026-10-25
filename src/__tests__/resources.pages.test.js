import {mountPage} from "../testUtils/mount";
import {loadImporter} from "../testUtils/importer";
import {Resources} from "../resources/ResourcesFetch";
import {Dnd5eRaces} from "../5etoolLayout/dnd/Races";
import {Dnd5eBackgrounds} from "../5etoolLayout/dnd/Backgrounds";
import {Dnd5eFeats} from "../5etoolLayout/dnd/Feats";
import {Dnd5eItems} from "../5etoolLayout/dnd/Items";
import {Dnd5eBestiary} from "../5etoolLayout/dnd/Bestiary";

// Pages read their data through getResource(): swap it for fixtures, fall back to the real data otherwise.
const mockOverrides = new Map();
jest.mock("../resources/ResourcesFetch", () => {
  const actual = jest.requireActual("../resources/ResourcesFetch");
  return {...actual, getResource: (resource) => mockOverrides.has(resource) ? mockOverrides.get(resource) : actual.getResource(resource)};
});

const F = require("./fixtures/5etools-2024.json");
const importer = loadImporter();
const converted = (kind, key) => importer[kind](F[key]).out; // end-to-end: 5etools raw -> importer -> page

beforeAll(() => {
  mockOverrides.set(Resources.race, [converted("race", "speciesElf"), converted("race", "speciesHuman"), converted("race", "race2014")]);
  mockOverrides.set(Resources.background, [
    converted("background", "backgroundAcolyte"),
    {id: "legacy", name: "Ancien historique", source: "PHB", entries: [{html: "<p>Texte ancien.</p>"}]},
  ]);
  mockOverrides.set(Resources.feat, [converted("feat", "featAlert"), converted("feat", "featBoon"), converted("feat", "featArchery"), converted("feat", "feat2014")]);
  mockOverrides.set(Resources.item, [converted("item", "itemDagger")]);
  mockOverrides.set(Resources.bestiary, [converted("monster", "monsterGoblin")]);
});

async function details(Page, hash) {
  const page = await mountPage(Page, hash);
  expect(page.thrown).toBeNull();
  expect(page.errors.filter(e => /Objects are not valid|Cannot read|is not a function/.test(e))).toEqual([]);
  const text = page.text();
  await page.unmount();
  return text;
}

describe("species page (5.5e)", () => {
  test("a species has no ability row, shows its traits and the lineage table", async () => {
    const text = await details(Dnd5eRaces, "#elf");
    expect(text).toContain("Darkvision");
    expect(text).toContain("Dancing Lights"); // table without colStyles
    expect(text).not.toContain("Score de capacité");
  });

  test("the list shows a dash instead of an empty ability cell", async () => {
    const page = await mountPage(Dnd5eRaces);
    expect(page.text()).toContain("—");
    await page.unmount();
  });

  test("a species offering two sizes shows both", async () => {
    const page = await mountPage(Dnd5eRaces);
    expect(page.text()).toContain("Moyenne ou Petite");
    await page.unmount();
  });

  test("a 2014 race still shows its ability bonus", async () => {
    const text = await details(Dnd5eRaces, "#dwarf");
    expect(text).toMatch(/Score de capacité:\s*Constitution \+2/);
  });
});

describe("backgrounds page (5.5e)", () => {
  test("shows the structured fields", async () => {
    const text = await details(Dnd5eBackgrounds, "#acolyte");
    expect(text).toContain("Scores de caractéristiques: Intelligence, Sagesse, Charisme");
    expect(text).toContain("Magic Initiate"); // origin feat tag rendered, not raw braces
    expect(text).not.toContain("{@feat");
    expect(text).toContain("Maîtrise de compétences: Intuition, Religion");
    expect(text).toMatch(/Équipement:\s*Option A : .* ou Option B : 50 po/);
    expect(text).toContain("Flavor text.");
  });

  test("a 2014 background (HTML entries) still renders, with dashes in the new columns", async () => {
    const page = await mountPage(Dnd5eBackgrounds, "#legacy");
    expect(page.thrown).toBeNull();
    expect(page.text()).toContain("Texte ancien.");
    expect(page.text()).toContain("—");
    await page.unmount();
  });
});

describe("feats page (5.5e)", () => {
  test("shows category, ability increase and prerequisite", async () => {
    const text = await details(Dnd5eFeats, "#Alert");
    expect(text).toContain("Don : Origine");
    expect(text).toContain("Augmentation de caractéristique : For ou Dex +1");
    expect(text).toContain("First"); // list rendered from 5etools "items"
  });

  test("epic boon shows its level prerequisite", async () => {
    const text = await details(Dnd5eFeats, "#Boon_of_Combat_Prowess");
    expect(text).toContain("Don : Faveur épique");
    expect(text).toContain("Prérequis: Niveau 19");
  });

  test("a 2014 feat (no category, no ability) renders without the new rows", async () => {
    const text = await details(Dnd5eFeats, "#Actor");
    expect(text).toContain("Prérequis: Cha 13+");
    expect(text).not.toContain("Augmentation de caractéristique");
    expect(text).not.toContain("Don :");
  });
});

describe("items page (5.5e)", () => {
  test("a weapon shows its mastery with the rule text", async () => {
    const text = await details(Dnd5eItems, "#dagger");
    expect(text).toContain("Maîtrise : Entaille (Nick)");
    expect(text).toContain("action bonus");
  });
});

describe("items page: weapons without damage", () => {
  test("a weapon with no damage type (the net) renders instead of crashing the page", async () => {
    mockOverrides.set(Resources.item, [{id: "net", name: "Filet", source: "PHB", itemType: "weapon", weaponType: "martial",
      weaponCategory: "ranged", weaponProperty: ["S", "T"], weight: 1.5, value: 1, range: "9/36"}]);
    const text = await details(Dnd5eItems, "#net");
    expect(text).toContain("Filet");
    mockOverrides.set(Resources.item, [converted("item", "itemDagger")]);
  });
});

describe("bestiary page (5.5e stat block)", () => {
  let text;
  beforeAll(async () => { text = await details(Dnd5eBestiary, "#goblin_warrior"); });

  test("identity, defense and challenge", () => {
    expect(text).toContain("Goblin Warrior");
    expect(text).toMatch(/Initiative\s*\+4 \(14\)/);
    expect(text).toMatch(/10 \(3d6\)/); // average of 3d6 is 10, not 9
    expect(text).toContain("1/4 (PX 50)");
  });

  test("passive Perception uses Wisdom or the Perception skill, never Strength", () => {
    expect(text).toContain("Passive 11"); // 10 + Perception +1
  });

  test("skills, resistances and conditions are labelled and comma separated, without array indexes", () => {
    expect(text).toContain("Compétences discrétion +6, perception +1");
    expect(text).toContain("Résistances feu, froid (from nonmagical attacks)");
    expect(text).toContain("Immunités aux états charmé");
    expect(text).not.toContain("0feu");
    expect(text).not.toContain("Faiblesses"); // no vulnerabilities on this creature
  });

  test("attack tags in actions are rendered", () => {
    expect(text).toContain("Jet d'attaque de corps à corps :");
    expect(text).not.toContain("{@");
  });

  test("an empty entry or one with missing optional parts does not crash the page", async () => {
    mockOverrides.set(Resources.bestiary, [{id: "minimal", name: "Minimal", source: "TEST"}]);
    const minimal = await details(Dnd5eBestiary, "#minimal");
    expect(minimal).toContain("Minimal");
    mockOverrides.set(Resources.bestiary, [converted("monster", "monsterGoblin")]);
  });
});
