// Opens the standalone resource builder (codex-forge-resource-builder.html) in its own jsdom window.
const fs = require("fs");
const path = require("path");
const {JSDOM} = require("jsdom");

export async function openBuilder(seed = {}) {
  const html = fs.readFileSync(path.resolve(__dirname, "../../codex-forge-resource-builder.html"), "utf8");
  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    pretendToBeVisual: true,
    url: "http://localhost/",
    beforeParse(window) {
      // the builder keeps its data in localStorage under "codexforge:v1:<type>"
      Object.entries(seed).forEach(([type, items]) => window.localStorage.setItem("codexforge:v1:" + type, JSON.stringify(items)));
    },
  });
  const errors = [];
  dom.window.addEventListener("error", (e) => errors.push(e.message));
  await new Promise((resolve) => setTimeout(resolve, 50));
  const w = dom.window, d = w.document;

  const api = {
    window: w, document: d, errors,
    close: () => w.close(),
    // switch the rail to a resource type, optionally creating a new item
    open(label, {create = false} = {}) {
      const tab = [...d.querySelectorAll("#railNav > *")].find(x => x.textContent.trim().startsWith(label));
      if (!tab) throw new Error("no rail entry: " + label);
      tab.click();
      if (create) d.getElementById("btnNew").click();
    },
    rows: () => [...d.querySelectorAll("#itemList .item-row")],
    labels: () => [...d.querySelectorAll("label")].map(l => l.textContent.trim()).filter(Boolean),
    hasField: (label) => api.labels().some(l => l.startsWith(label)),
    field(label) {
      const lab = [...d.querySelectorAll("label")].find(l => l.textContent.trim().startsWith(label));
      if (!lab) throw new Error("no field: " + label);
      return (lab.closest(".field") || lab.parentElement);
    },
    set(label, value) {
      const wrap = api.field(label);
      const checkbox = wrap.querySelector("input[type=checkbox]");
      if (checkbox) {
        checkbox.checked = !!value;
        checkbox.dispatchEvent(new w.Event("change", {bubbles: true}));
        return;
      }
      const input = wrap.querySelector("input,select,textarea");
      input.value = value;
      input.dispatchEvent(new w.Event(input.tagName === "SELECT" ? "change" : "input", {bubbles: true}));
      input.dispatchEvent(new w.Event("change", {bubbles: true}));
    },
    sections: () => [...d.querySelectorAll(".section")],
    section: (title) => api.sections().find(s => s.querySelector(".section-title")?.textContent === title),
    // buttons of an editor's own toolbar (the first one in DOM order; nested editors come after it)
    toolbar: (root) => [...(root.querySelector(".entries-toolbar")?.querySelectorAll("button") ?? [])],
    // click "+ Something" in the toolbar of an entries editor (a section or a .nested-entries block)
    add(root, buttonLabel) {
      const btn = api.toolbar(root).find(b => b.textContent === buttonLabel);
      if (!btn) throw new Error("no toolbar button: " + buttonLabel);
      btn.click();
    },
    // the item currently being edited, read back from the Raw JSON box
    current() {
      const box = [...d.querySelectorAll("textarea")].find(t => t.value.trim().startsWith("{") && t.value.includes('"id"'));
      return box ? JSON.parse(box.value) : null;
    },
  };
  return api;
}
