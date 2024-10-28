export const BASED_URL = "/TTRPG-wiki"


const dnd = BASED_URL + "/dnd"
const player = dnd + "/player"


export const SYSTEM_SELECTION = [
  {
    href: dnd,
    title: "Dungeons & Dragons",
    name: "D&D"
  },
  {
    href: "pf",
    title: "Pathfinder",
    name: "Pathfinder"
  }
]
export const DND_SELECTOR = [
  {
    href: dnd + "/rules",
    title: "",
    name: "Rules"
  },
  {
    href: player,
    title: "",
    name: "Character Creation"
  },
  {
    href: dnd + "/resources",
    title: "",
    name: "Resources"
  },
  {
    href: dnd + "/tips",
    title: "",
    name: "Tips"
  },
  {
    href: dnd + "/universes",
    title: "",
    name: "Universe"
  },
]


function buildMenuFromJson(racesData, parentUrl): [] {
  let races = [];
  console.log(racesData)
  for (let race in racesData) {
    let obj = racesData[race]
    races.push({
      id: obj.id,
      href: parentUrl + obj.id,
      name: obj.name,
      sublist: []
    })
  }
  return races
}

export const CHARACTER_CREATION = [

  {
    id: "intro",
    href: player,
    name: "Introduction",
    sublist: []
  },
  {
    id: "races",
    href: player + "/races",
    name: "Races",
    sublist: buildMenuFromJson(require("../resources/races.json"), player + "/races/")
  },
  {
    id: "classes",
    href: player + "/classes",
    name: "Classes",
    sublist: buildMenuFromJson(require("../resources/classes.json"), player + "/classes/")
  }
]

