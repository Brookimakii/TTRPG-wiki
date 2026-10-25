# Tests

Run with `npm test` (watch mode) or `CI=true npm test -- --watchAll=false` (once).

| File | What it covers |
| --- | --- |
| `renderModule.test.js` | Inline tags (`@filter`, `@atkr`, ...), tables, cell objects, typeless entries blocks |
| `classes.page.test.js` | Every class page mounts: no crash, no `[object Object]`, all features found, all tags rendered |
| `resources.pages.test.js` | 5etools 2024 sample -> importer -> Races / Backgrounds / Feats / Items / Bestiary pages |
| `real-data.pages.test.js` | Every real race, background, feat and item opens on its page |
| `importer.test.js` | `codex-forge-5etools-importer.html` converters (species, backgrounds, feats, items, monsters) |
| `builder.test.js` | `codex-forge-resource-builder.html`: nested entries editor, 5.5e fields, existing data |
| `data.test.js` | JSON shape, unique ids, tag lint (`KNOWN_BAD_TAGS` lists mistakes still in the content) |

Helpers live in `src/testUtils/` (outside `__tests__` so Jest does not collect them); `fixtures/5etools-2024.json` holds hand-made 5etools-shaped samples.
The two standalone HTML tools are loaded as-is (importer converters through `vm`, builder through jsdom),
so there is nothing to export from them.
