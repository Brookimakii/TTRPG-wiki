import {act} from "react";
import {mountPage} from "../testUtils/mount";
import {Dnd5eRaces} from "../5etoolLayout/dnd/Races";
import {Dnd5eBackgrounds} from "../5etoolLayout/dnd/Backgrounds";
import {Dnd5eFeats} from "../5etoolLayout/dnd/Feats";
import {Dnd5eItems} from "../5etoolLayout/dnd/Items";

const data = {
  races: require("../resources/dnd5e/races.json"),
  backgrounds: require("../resources/dnd5e/backgrounds.json"),
  feats: require("../resources/dnd5e/feats.json"),
  items: require("../resources/dnd5e/items.json"),
};

// Opens every real record on its page and reports the ones that crash or print raw objects.
async function problems(Page, entries) {
  const bad = [];
  for (const entry of entries) {
    const page = await mountPage(Page, "#" + entry.id);
    const failure = page.thrown
      ? "threw: " + String(page.thrown.message).slice(0, 80)
      : page.errors.find(e => /Objects are not valid/.test(e)) ? "rendered an object as a React child" : null;
    if (failure) bad.push(entry.id + " -> " + failure);
    await page.unmount();
  }
  return bad;
}

describe("legacy race content is visible", () => {
  test("a subrace's lore ({\"\": text}) and the Elf trait {Transe: text} appear on the page", async () => {
    const aasimar = data.races.find(r => r.id === "aasimar");
    const lore = aasimar.subraces[0].info[""].slice(0, 30);
    const elf = data.races.find(r => r.id === "elf");
    const transe = Object.values(elf.traits.find(t => !t.type))[0].slice(0, 30);

    const subracePage = await mountPage(Dnd5eRaces, "#aasimar-(fallen)");
    const infoTab = [...subracePage.container.querySelectorAll("[role=tab]")].find(t => t.textContent === "Info");
    await act(async () => { infoTab.click(); }); // lore lives in the Info tab
    expect(subracePage.text()).toContain(lore);
    await subracePage.unmount();

    const elfPage = await mountPage(Dnd5eRaces, "#elf");
    expect(elfPage.text()).toContain(transe);
    await elfPage.unmount();
  });
});

describe("every real record renders", () => {
  test("races", async () => { expect(await problems(Dnd5eRaces, data.races)).toEqual([]); }, 120000);
  test("backgrounds", async () => { expect(await problems(Dnd5eBackgrounds, data.backgrounds)).toEqual([]); }, 120000);
  test("feats", async () => { expect(await problems(Dnd5eFeats, data.feats)).toEqual([]); }, 120000);
  test("items that have an id", async () => {
    expect(await problems(Dnd5eItems, data.items.filter(i => i.id))).toEqual([]);
  }, 240000);
});
