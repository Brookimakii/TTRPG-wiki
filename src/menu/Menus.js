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
    name: "Maître du Donjon"
  }
]


function buildMenuFromJson(racesData, parentUrl): [] {
  racesData.sort(function (a, b) {
    let textA = a.id.toUpperCase();
    let textB = b.id.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  })
  let races = [];
  // console.log(racesData)
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

