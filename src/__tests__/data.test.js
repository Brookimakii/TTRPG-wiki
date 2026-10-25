const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "../resources/dnd5e");
const read = (file) => JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));

describe("resource files", () => {
  test.each(["races", "backgrounds", "feats", "items", "spells", "classes", "features", "bestiary", "conditions", "rules"])(
    "%s.json is a JSON array",
    (name) => { expect(Array.isArray(read(name + ".json"))).toBe(true); }
  );

  // Pages select an entry from the URL hash by id, so ids must exist and be unique.
  test.each(["races", "backgrounds", "feats", "spells"])("%s: every entry has a unique id", (name) => {
    const ids = read(name + ".json").map(e => e.id);
    expect(ids.filter(id => !id)).toEqual([]);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicates).toEqual([]);
  });

  test("classes: ids are unique", () => {
    const ids = read("classes.json").map(c => c.id);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });

  test("items: ids that exist are unique", () => {
    const ids = read("items.json").map(e => e.id).filter(Boolean);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });
});

// Tag lint: "{@tag ...}" must be closed and never nested inside another tag
// (the renderer reads one level of braces, so a nested tag leaks raw text on the page).
const KNOWN_BAD_TAGS = [
  // classes.json, classes[3] = Paladin, subclassFeatures[24] table row 4: "{@spell {@spell immobilisation de monstre|PHB24}|PHB24}"
  "classes.json:/3/subclassFeatures/24/entries/1/rows/4/1",
];

function badTagLocations(value, where, found) {
  if (typeof value === "string") {
    const opens = (value.match(/\{@/g) || []).length;
    const wellFormed = (value.match(/\{@[^{}]*\}/g) || []).length;
    if (opens !== wellFormed) found.push(where);
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => badTagLocations(v, where + "/" + i, found));
  } else if (value && typeof value === "object") {
    Object.entries(value).forEach(([k, v]) => badTagLocations(v, where + "/" + k, found));
  }
  return found;
}

describe("tag lint", () => {
  test.each(["races", "backgrounds", "feats", "items", "classes", "features", "conditions", "rules"])(
    "%s.json has no unclosed or nested {@tags}",
    (name) => {
      const file = name + ".json";
      const found = badTagLocations(read(file), "", []).map(w => file + ":" + w);
      expect(found.filter(f => !KNOWN_BAD_TAGS.includes(f))).toEqual([]);
    }
  );

  test("the lint itself catches both kinds of mistake", () => {
    expect(badTagLocations(["{@spell a|PHB}", "{@spell {@spell b|PHB}|PHB}", "{@dice 1d6"], "", []))
      .toEqual(["/1", "/2"]);
  });
});
