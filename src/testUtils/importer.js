// The 5etools importer is a standalone HTML tool with its converters inlined in a <script>.
// This helper evaluates only the pure conversion functions (no DOM) so they can be unit-tested.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

export function loadImporter() {
  const html = fs.readFileSync(path.resolve(__dirname, "../../codex-forge-5etools-importer.html"), "utf8");
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  const js = scripts[scripts.length - 1][1];
  const start = js.indexOf("function slug(name)");
  const end = js.indexOf("function extractArray");
  if (start < 0 || end < 0) throw new Error("importer layout changed: converter section markers not found");
  const context = vm.createContext({console, Math, Number, String, Object, Array, JSON});
  vm.runInContext(
    js.slice(start, end) + "\n;this.API = {convertRace, convertBackground, convertFeat, convertItem, convertMonster, detectType};",
    context
  );
  const plain = (value) => JSON.parse(JSON.stringify(value)); // drop the vm realm
  const convert = (name) => (raw) => {
    const warnings = [];
    const out = context.API[name](raw, warnings);
    return {out: plain(out), warnings: plain(warnings)};
  };
  return {
    race: convert("convertRace"),
    background: convert("convertBackground"),
    feat: convert("convertFeat"),
    item: convert("convertItem"),
    monster: convert("convertMonster"),
    detectType: (sample) => context.API.detectType(sample),
  };
}
