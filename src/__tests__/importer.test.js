import {loadImporter} from "../testUtils/importer";

const F = require("./fixtures/5etools-2024.json");
const importer = loadImporter();

describe("5etools importer: type detection", () => {
  test.each([
    ["speciesElf", "race"],
    ["speciesHuman", "race"],
    ["race2014", "race"],
    ["backgroundAcolyte", "background"],
    ["featAlert", "feat"],
    ["featBoon", "feat"],
    ["itemDagger", "item"],
    ["monsterGoblin", "monster"],
  ])("%s is detected as %s", (key, type) => {
    expect(importer.detectType(F[key])).toBe(type);
  });
});

describe("5etools importer: species (5.5e)", () => {
  const {out, warnings} = importer.race(F.speciesElf);

  test("has no ability bonus and keeps structured size/type/speed", () => {
    expect(out.bonus).toBe("");
    expect(out.size).toBe("Moyenne");
    expect(out.creatureType).toBe("Humanoïde");
    expect(out.speed).toBe("9m");
  });

  test("drops the Creature Type / Size / Speed text entries but keeps the other traits", () => {
    expect(out.traits.map(t => t.name)).toEqual(["Darkvision", "Elven Lineage"]);
  });

  test("keeps the lineage table inside its trait", () => {
    const lineage = out.traits.find(t => t.name === "Elven Lineage");
    expect(lineage.entries.some(e => e.type === "table")).toBe(true);
  });

  test("tells the user about the 5.5e handling", () => {
    expect(warnings.join(" ")).toMatch(/5\.5e species/);
  });

  test("a species offering two sizes keeps both", () => {
    expect(importer.race(F.speciesHuman).out.size).toBe("Moyenne ou Petite");
  });

  test("2014 races are unchanged: bonus and Age block still extracted", () => {
    const dwarf = importer.race(F.race2014).out;
    expect(dwarf.bonus).toBe("Con +2");
    expect(dwarf.common.age).toMatch(/350/);
    expect(dwarf.traits.map(t => t.name)).toEqual(["Darkvision"]);
  });
});

describe("5etools importer: backgrounds (5.5e)", () => {
  const {out} = importer.background(F.backgroundAcolyte);

  test("lists the three ability scores on offer", () => {
    expect(out.ability).toBe("Intelligence, Sagesse, Charisme");
  });

  test("links the origin feat with a tag", () => {
    expect(out.feat).toBe("{@feat Magic Initiate|XPHB}");
  });

  test("localizes skills and keeps tool names", () => {
    expect(out.skills).toBe("Intuition, Religion");
    expect(out.tools).toBe("Calligrapher's Supplies");
  });

  test("builds equipment options A and B, converting copper to gold", () => {
    expect(out.equipment).toHaveLength(2);
    expect(out.equipment[0]).toMatch(/^Option A : /);
    expect(out.equipment[0]).toContain("10 Parchment");
    expect(out.equipment[0]).toContain("8 po");
    expect(out.equipment[1]).toBe("Option B : 50 po");
  });

  test("drops the redundant structured list but keeps the flavor text", () => {
    expect(out.entries).toEqual(["Flavor text."]);
  });
});

describe("5etools importer: feats (5.5e)", () => {
  test("origin feat: category, ability choice, list items renamed to entries", () => {
    const {out} = importer.feat(F.featAlert);
    expect(out.cat).toBe("Origine");
    expect(out.ability).toBe("For ou Dex +1");
    expect(out.repeatable).toBe(false);
    const list = out.entries.find(e => e && e.type === "list");
    expect(list.entries).toEqual(["First", "Second"]);
    expect(list.items).toBeUndefined();
  });

  test("epic boon with a level prerequisite and a fixed increase", () => {
    const {out} = importer.feat(F.featBoon);
    expect(out.cat).toBe("Faveur épique");
    expect(out.prerequisite).toBe("Niveau 19");
    expect(out.ability).toBe("For +1");
  });

  test("fighting style category code FS:F maps to Style de combat, with class level prerequisite", () => {
    const {out} = importer.feat(F.featArchery);
    expect(out.cat).toBe("Style de combat");
    expect(out.prerequisite).toBe("Niveau 1 de Fighter");
  });

  test("2014 feat: ability prerequisite uses the French short name, no category", () => {
    const {out} = importer.feat(F.feat2014);
    expect(out.prerequisite).toBe("Cha 13+");
    expect(out.cat).toBe("");
    expect(out.ability).toBe("");
  });
});

describe("5etools importer: items (5.5e)", () => {
  const {out} = importer.item(F.itemDagger);

  test("weapon mastery code is lowercased", () => {
    expect(out.mastery).toEqual(["nick"]);
  });

  test("properties, damage and price are converted as before", () => {
    expect(out.itemType).toBe("weapon");
    expect(out.weaponProperty).toEqual(["F", "L", "T"]);
    expect(out.dmg1).toBe("1d4");
    expect(out.value).toBe(2);
  });

  test("an unknown mastery is kept and reported", () => {
    const {out: weird, warnings} = importer.item({...F.itemDagger, mastery: ["Banana|XPHB"]});
    expect(weird.mastery).toEqual(["banana"]);
    expect(warnings.join(" ")).toMatch(/Unrecognized weapon mastery/);
  });
});

describe("5etools importer: monsters (site stat block model)", () => {
  const {out} = importer.monster(F.monsterGoblin);

  test("identity", () => {
    expect(out.identity).toEqual({type: "Fée", tag: "goblinoid", size: "S", alignment: "CN"});
  });

  test("defense: AC, initiative from proficiency, hit dice, speeds in meters", () => {
    expect(out.defense.ca).toBe("15");
    expect(out.defense.caPrecision).toBe("leather armor, shield");
    expect(out.defense.initiative).toBe(4); // Dex +2, plus 1 x proficiency bonus (+2)
    expect(out.defense.hpRoll).toEqual({dice: {amount: 3, sides: 6}, bonus: 0});
    expect(out.defense.speed).toBe(9);
    expect(out.defense.otherSpeed).toEqual({Vol: 18});
    expect(out.defense.flyingBonus).toBe("vol stationnaire");
  });

  test("abilities use the site keys (Wisdom is sag), saves and skills keep the printed bonus", () => {
    expect(out.attribut).toEqual({for: 8, dex: 15, con: 10, int: 10, sag: 8, cha: 8});
    expect(out.proficiencies.saves).toEqual({dex: "+4"});
    expect(out.proficiencies.skills).toEqual({"discrétion": "+6", "perception": "+1"});
    expect(out.proficiencies.bonus).toBe(2);
  });

  test("challenge rating shows XP; senses and habitat are localized", () => {
    expect(out.fp).toMatch(/^1\/4 \(PX 50\)$/);
    expect(out.senses).toEqual(["Vision dans le noir 18 m"]);
    expect(out.habitat).toEqual(["Forêt", "Colline"]);
  });

  test("damage types and conditions are French, with notes kept", () => {
    expect(out.affinities.resistance).toEqual(["feu", "froid (from nonmagical attacks)"]);
    expect(out.affinities.condition).toEqual(["charmé"]);
    expect(out.affinities.weakness).toEqual([]);
  });

  test("text blocks become explicit entries blocks (5etools omits the type)", () => {
    expect(out.actions[0].type).toBe("entries");
    expect(out.bonusActions[0].type).toBe("entries");
  });

  test("text blocks are carried over untouched (tags are rendered by the site)", () => {
    expect(out.actions).toHaveLength(1);
    expect(out.actions[0].entries[0]).toContain("{@atkr m}");
    expect(out.bonusActions[0].name).toBe("Nimble Escape");
  });

  test("proficiency bonus follows the challenge rating", () => {
    expect(importer.monster({...F.monsterGoblin, cr: "5"}).out.proficiencies.bonus).toBe(3);
    expect(importer.monster({...F.monsterGoblin, cr: "17"}).out.proficiencies.bonus).toBe(6);
    expect(importer.monster({...F.monsterGoblin, cr: "30"}).out.proficiencies.bonus).toBe(9);
  });

  test("a creature without hit dice gets a warning, not a crash", () => {
    const {warnings} = importer.monster({...F.monsterGoblin, hp: {special: "varies"}});
    expect(warnings.join(" ")).toMatch(/HP formula/);
  });
});
