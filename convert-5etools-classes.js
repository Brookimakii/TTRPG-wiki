#!/usr/bin/env node
/**
 * convert-5etools-classes.js
 * -----------------------------------------------------------------------
 * Converts standard 5etools class-bundle JSON files (the
 * `class/class-<name>.json` shape used in the 5etools-src repo and most
 * 5etools-format homebrew/brew exports — a bundle of sibling arrays
 * `class`, `subclass`, `classFeature`, `subclassFeature`) into the class
 * record shape this project's own `classes.json` (and the Class Lab tool)
 * expects.
 *
 * USAGE
 *   node convert-5etools-classes.js <input1.json> [<input2.json> ...] \
 *        -o output-classes.json [--merge existing-classes.json]
 *
 *   -o, --out <file>      Where to write the resulting JSON array.
 *                         Defaults to stdout if omitted.
 *   --merge <file>        An existing classes.json to merge into — classes
 *                         are matched/replaced by "id", everything else is
 *                         kept. Without this flag, the output is just the
 *                         freshly converted classes.
 *   --pretty               Pretty-print output (default: 2-space indent).
 *                          Pass --pretty=0 for compact single-line JSON.
 *
 * WHAT IT DOES
 *   For every entry in the input file(s)' `class` array, this builds:
 *     - info.{name,source,page,spellcastingAbility,hitDice,proficiencies,
 *             startingEquipment,tableGroup}
 *     - classFeatures: full feature objects resolved from the sibling
 *       `classFeature` array (5etools only stores reference strings
 *       "Name|Class|Source|Level" on the class itself — this script
 *       resolves them for you).
 *     - subclasses: [{name, shortName, source, page, subclassFeatures:
 *       [ref strings]}] (kept as reference strings, matching this
 *       project's own on-disk format).
 *     - subclassFeatures: every full subclassFeature object belonging to
 *       any of this class's subclasses (matched by subclassShortName +
 *       subclassSource), flattened at the class-record level.
 *
 * TRANSLATIONS APPLIED
 *   - Ability abbreviations: 5etools uses English (str/dex/con/int/wis/cha).
 *     This project's `saves` and `multiclass.requirements` fields use the
 *     French abbreviations (for/dex/con/int/sag/cha) — this script maps
 *     str->for and wis->sag (the rest are shared letters).
 *   - `spellcastingAbility` is stored here as a full French word
 *     (Intelligence/Sagesse/Charisme/...) rather than 5etools' 3-letter
 *     abbreviation — mapped accordingly.
 *   - `startingProficiencies.skills` — 5etools' {choose:{from:[...],
 *     count}} / {any:N} shape is flattened into this project's
 *     {pool:[...], count} shape. Skill names are translated from the
 *     English SRD names to the French names already used across this
 *     project's data (Acrobatics -> Acrobaties, Sleight of Hand ->
 *     Escamotage, etc.) via SKILL_EN_TO_FR below.
 *
 * WHAT IS **NOT** TRANSLATED (best-effort / flagged instead)
 *   This project's simpler schema has no structured way to express
 *   "choose one of these three tools" or a specific weapon-proficiency
 *   pick — and English/French homebrew mixes vary too much to safely
 *   auto-translate free text. Where the source data uses one of these
 *   richer 5etools shapes, this script:
 *     - flattens `tools` "choose" objects into one descriptive string
 *       (in whichever language the source options were already in), and
 *     - copies specific-weapon `{item: "..."}` proficiencies through as
 *       their raw item name (stripping the `|SOURCE` suffix),
 *   and prints a one-line warning to stderr so you know to eyeball it
 *   in the Class Lab's Proficiencies section afterwards. It does NOT
 *   invent English->French weapon/tool name translations — that part is
 *   still a manual pass in the UI (which already has a French weapon
 *   checklist plus a free-text "Autre" field for exactly this).
 *
 * This is a plain Node script — no dependencies, run directly with node.
 * -----------------------------------------------------------------------
 */
"use strict";
const fs = require("fs");
const path = require("path");

/* ============================================================
   REFERENCE TABLES
   ============================================================ */
const ABILITY_ABV_EN_TO_FR = { str: "for", dex: "dex", con: "con", int: "int", wis: "sag", cha: "cha" };
const ABILITY_ABV_TO_FULL_FR = {
  str: "Force", dex: "Dextérité", con: "Constitution",
  int: "Intelligence", wis: "Sagesse", cha: "Charisme",
};
// English SRD skill name -> this project's French skill name.
const SKILL_EN_TO_FR = {
  "acrobatics": "Acrobaties",
  "animal handling": "Dressage",
  "arcana": "Arcanes",
  "athletics": "Athlétisme",
  "deception": "Tromperie",
  "history": "Histoire",
  "insight": "Intuition",
  "intimidation": "Intimidation",
  "investigation": "Investigation",
  "medicine": "Médecine",
  "nature": "Nature",
  "perception": "Perception",
  "performance": "Représentation",
  "persuasion": "Persuasion",
  "religion": "Religion",
  "sleight of hand": "Escamotage",
  "stealth": "Discrétion",
  "survival": "Survie",
};
const ALL_SKILLS_FR = Object.values(SKILL_EN_TO_FR);

let warnings = 0;
function warn(msg) {
  warnings++;
  process.stderr.write("  ! " + msg + "\n");
}

/* ============================================================
   SMALL HELPERS
   ============================================================ */
function slugify(name) {
  return String(name || "class")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "class";
}

function refKey(parts) {
  return parts.map(p => String(p ?? "").trim().toLowerCase()).join("|");
}

// Reference strings look like "Name|ClassName|ClassSource|Level" or, for
// subclass features, "Name|ClassName|ClassSource|SubclassShortName|SubclassSource|Level".
// 5etools sometimes omits the trailing pieces when they match the parent
// class/subclass already, so we resolve leniently: try an exact match
// first, then fall back to matching on name (+ level, when present).
function buildFeatureIndex(list, keyFields) {
  const byFullKey = new Map();
  const byName = new Map();
  (list || []).forEach(f => {
    const full = refKey(keyFields.map(k => f[k]));
    byFullKey.set(full, f);
    const nameKey = String(f.name || "").trim().toLowerCase();
    if (!byName.has(nameKey)) byName.set(nameKey, []);
    byName.get(nameKey).push(f);
  });
  return { byFullKey, byName };
}

function resolveClassFeatureRef(ref, index) {
  const parts = String(ref).split("|");
  const [name, className, classSource, level] = parts;
  const full = refKey([name, className, classSource, level]);
  if (index.byFullKey.has(full)) return index.byFullKey.get(full);
  const candidates = index.byName.get(String(name || "").trim().toLowerCase()) || [];
  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1 && level) {
    const byLevel = candidates.find(c => String(c.level) === String(level));
    if (byLevel) return byLevel;
  }
  return null;
}

function normalizeTableRows(rows, colCount) {
  return Array.from({ length: 20 }, (_, lvl) => {
    const src = Array.isArray(rows) && Array.isArray(rows[lvl]) ? rows[lvl] : [];
    return Array.from({ length: colCount }, (_, ci) => (src[ci] ?? 0));
  });
}

/* ============================================================
   FIELD CONVERTERS
   ============================================================ */
function convertSaves(proficiencyArr) {
  return (proficiencyArr || []).map(a => {
    const abv = String(a).toLowerCase();
    if (ABILITY_ABV_EN_TO_FR[abv]) return ABILITY_ABV_EN_TO_FR[abv];
    warn(`unrecognized saving-throw ability "${a}" — copied through as-is`);
    return a;
  });
}

function convertSpellcastingAbility(abv) {
  if (!abv) return "";
  const key = String(abv).toLowerCase();
  if (ABILITY_ABV_TO_FULL_FR[key]) return ABILITY_ABV_TO_FULL_FR[key];
  warn(`unrecognized spellcastingAbility "${abv}" — copied through as-is`);
  return abv;
}

function convertArmor(armorArr) {
  return (armorArr || []).map(a => {
    const s = String(a).toLowerCase();
    return s === "shields" ? "shield" : s;
  });
}

function convertWeapon(weaponArr, className) {
  const out = [];
  (weaponArr || []).forEach(w => {
    if (typeof w === "string") { out.push(w.toLowerCase()); return; }
    if (w && typeof w === "object") {
      if (w.item) { out.push(String(w.item).split("|")[0].toLowerCase()); return; }
      if (w.proficiency) { out.push(String(w.proficiency).toLowerCase()); return; }
    }
    warn(`[${className}] unrecognized weapon proficiency entry ${JSON.stringify(w)} — skipped, add manually`);
  });
  return out;
}

function convertTools(toolsArr, className) {
  const out = [];
  (toolsArr || []).forEach(t => {
    if (typeof t === "string") { out.push(t); return; }
    if (t && typeof t === "object") {
      if (Array.isArray(t.choose && t.choose.from)) {
        out.push(`un outil au choix parmi : ${t.choose.from.join(", ")}`);
        warn(`[${className}] flattened a tool "choose" list into free text — reword if needed`);
        return;
      }
      if (t.any) {
        out.push("un outil au choix");
        warn(`[${className}] flattened a tool "any" entry into free text — reword if needed`);
        return;
      }
    }
    warn(`[${className}] unrecognized tool proficiency entry ${JSON.stringify(t)} — skipped, add manually`);
  });
  return out;
}

function convertSkills(skillsArr, className) {
  const entry = Array.isArray(skillsArr) ? skillsArr[0] : skillsArr;
  if (!entry) return { pool: [], count: 0 };
  if (entry.any) {
    return { pool: ALL_SKILLS_FR.slice(), count: Number(entry.any) || 0 };
  }
  const choose = entry.choose || entry;
  const from = choose.from || [];
  const pool = from.map(s => {
    const key = String(s).trim().toLowerCase();
    if (SKILL_EN_TO_FR[key]) return SKILL_EN_TO_FR[key];
    // maybe it's already a French name (homebrew authored directly in French)
    if (ALL_SKILLS_FR.includes(s)) return s;
    warn(`[${className}] unrecognized skill name "${s}" in skill pool — copied through as-is`);
    return s;
  });
  return { pool, count: Number(choose.count) || 1 };
}

function convertStartingEquipment(se) {
  if (!se) return { goldAlternative: "", equipement: [] };
  const goldAlternative = Array.isArray(se.goldAlternative)
    ? se.goldAlternative.join(" ")
    : (se.goldAlternative || "");
  const equipement = se.default || se.equipement || [];
  return { goldAlternative, equipement };
}

function convertTableGroups(groups, className) {
  return (groups || []).map(g => {
    const colLabels = Array.isArray(g.colLabels) && g.colLabels.length ? g.colLabels.slice() : ["Col. 1"];
    const rows = normalizeTableRows(g.rows, colLabels.length);
    if (Array.isArray(g.rows) && g.rows.length !== 20) {
      warn(`[${className}] table group "${g.title || "(untitled)"}" had ${g.rows.length} rows — padded/truncated to 20`);
    }
    const out = { colLabels, rows };
    if (g.title) out.title = g.title;
    if (g.before) out.before = true;
    return out;
  });
}

function convertMulticlass(mc) {
  if (!mc) return undefined;
  const out = {};
  if (mc.requirements) {
    out.requirements = {};
    Object.entries(mc.requirements).forEach(([abv, val]) => {
      const key = ABILITY_ABV_EN_TO_FR[abv.toLowerCase()] || abv;
      out.requirements[key] = val;
    });
  }
  const gained = mc.proficienciesGained || mc.proficiencies;
  if (gained) {
    out.proficiencies = {};
    if (gained.armor) out.proficiencies.armor = convertArmor(gained.armor);
    if (gained.weapons || gained.weapon) out.proficiencies.weapon = convertWeapon(gained.weapons || gained.weapon, mc.name || "multiclass");
    if (gained.tools) out.proficiencies.tools = convertTools(gained.tools, mc.name || "multiclass");
  }
  return out;
}

/* ============================================================
   PER-CLASS CONVERSION
   ============================================================ */
function convertClass(cls, classFeatureIdx, subclassList, subclassFeatureAll, usedIds) {
  const name = cls.name || "Unnamed Class";
  const source = cls.source || "";

  let id = slugify(name);
  if (usedIds.has(id)) id = slugify(name + "-" + source);
  usedIds.add(id);

  const prof = cls.startingProficiencies || {};

  const info = {
    name,
    source,
    page: cls.page ?? null,
    spellcastingAbility: convertSpellcastingAbility(cls.spellcastingAbility),
    hitDice: { amount: (cls.hd && cls.hd.number) ?? 1, faces: (cls.hd && cls.hd.faces) ?? 8 },
    proficiencies: {
      armor: convertArmor(prof.armor),
      weapon: convertWeapon(prof.weapons, name),
      tools: convertTools(prof.tools, name),
      skills: convertSkills(prof.skills, name),
      saves: convertSaves(cls.proficiency),
    },
    startingEquipment: convertStartingEquipment(cls.startingEquipment),
    tableGroup: convertTableGroups(cls.classTableGroups, name),
  };
  const multiclass = convertMulticlass(cls.multiclassing);
  if (multiclass) info.multiclass = multiclass;

  // classFeatures: resolve each reference string against the sibling
  // classFeature[] array.
  const classFeatures = [];
  (cls.classFeatures || []).forEach(ref => {
    const refStr = typeof ref === "string" ? ref : (ref && ref.classFeature);
    if (!refStr) return;
    const full = resolveClassFeatureRef(refStr, classFeatureIdx);
    if (!full) { warn(`[${name}] could not resolve classFeature ref "${refStr}" — skipped`); return; }
    classFeatures.push({
      name: full.name || "", source: full.source || source, page: full.page ?? null,
      className: name, classSource: source, level: full.level ?? 1, entries: full.entries || [],
    });
  });
  if (!classFeatures.length) warn(`[${name}] ended up with 0 class features — check the source file has a matching "classFeature" array`);

  // subclasses belonging to this class (matched by className+classSource)
  const ownSubclasses = (subclassList || []).filter(sc =>
    (sc.className || "").toLowerCase() === name.toLowerCase() &&
    (sc.classSource || "").toLowerCase() === source.toLowerCase()
  );

  const subclasses = [];
  const subclassFeatures = [];
  ownSubclasses.forEach(sc => {
    const scShort = sc.shortName || sc.name || "";
    const scSource = sc.source || source;
    const owned = (subclassFeatureAll || []).filter(f =>
      (f.subclassShortName || "").toLowerCase() === scShort.toLowerCase() &&
      (f.subclassSource || "").toLowerCase() === scSource.toLowerCase()
    );
    owned.forEach(f => {
      const entry = {
        name: f.name || "", source: f.source || scSource, page: f.page ?? null,
        className: name, classSource: source,
        subclassShortName: scShort, subclassSource: scSource,
        level: f.level ?? 3, entries: f.entries || [],
      };
      if (f.header !== undefined) entry.header = f.header;
      subclassFeatures.push(entry);
    });
    if (!owned.length) warn(`[${name}] subclass "${sc.name}" has 0 matching entries in "subclassFeature" — check source/shortName spelling`);
    subclasses.push({
      name: sc.name || "", shortName: scShort, source: scSource, page: sc.page ?? null,
      subclassFeatures: (sc.subclassFeatures || []).map(r => (typeof r === "string" ? r : (r && r.subclassFeature) || "")),
    });
  });

  return { id, info, subclasses, classFeatures, subclassFeatures };
}

/* ============================================================
   MAIN
   ============================================================ */
function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function main() {
  const args = process.argv.slice(2);
  const inputs = [];
  let outFile = null;
  let mergeFile = null;
  let pretty = 2;

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "-o" || a === "--out") { outFile = args[++i]; }
    else if (a === "--merge") { mergeFile = args[++i]; }
    else if (a.startsWith("--pretty")) {
      const eq = a.indexOf("=");
      pretty = eq === -1 ? 2 : (Number(a.slice(eq + 1)) || 0);
    }
    else if (a === "-h" || a === "--help") { printHelp(); process.exit(0); }
    else inputs.push(a);
  }

  if (!inputs.length) { printHelp(); process.exit(1); }

  const convertedByFile = [];
  inputs.forEach(file => {
    process.stderr.write(`Reading ${file}...\n`);
    const data = loadJson(file);
    const classList = data.class || data.classes || [];
    const classFeatureAll = data.classFeature || [];
    const subclassList = data.subclass || [];
    const subclassFeatureAll = data.subclassFeature || [];

    if (!classList.length) {
      warn(`${file}: no "class" array found — is this a standard 5etools class-bundle file?`);
      return;
    }
    const classFeatureIdx = buildFeatureIndex(classFeatureAll, ["name", "className", "classSource", "level"]);
    const usedIds = new Set();
    classList.forEach(cls => {
      const converted = convertClass(cls, classFeatureIdx, subclassList, subclassFeatureAll, usedIds);
      convertedByFile.push(converted);
      process.stderr.write(`  -> ${converted.info.name} (${converted.classFeatures.length} features, ${converted.subclasses.length} subclasses)\n`);
    });
  });

  let finalList = convertedByFile;
  if (mergeFile) {
    process.stderr.write(`Merging into ${mergeFile}...\n`);
    const existing = loadJson(mergeFile);
    const byId = new Map(existing.map(c => [c.id, c]));
    convertedByFile.forEach(c => byId.set(c.id, c));
    finalList = Array.from(byId.values());
  }

  const json = pretty ? JSON.stringify(finalList, null, pretty) : JSON.stringify(finalList);
  if (outFile) {
    fs.writeFileSync(outFile, json);
    process.stderr.write(`\nWrote ${finalList.length} classes to ${outFile}\n`);
  } else {
    process.stdout.write(json + "\n");
  }
  if (warnings) process.stderr.write(`\n${warnings} warning(s) — review before using in the Class Lab.\n`);
}

function printHelp() {
  process.stderr.write(`
Usage: node convert-5etools-classes.js <input1.json> [<input2.json> ...] [-o output.json] [--merge existing-classes.json] [--pretty=0]

Converts 5etools class-bundle JSON files (class/subclass/classFeature/subclassFeature)
into this project's classes.json class-record format.
`);
}

main();
