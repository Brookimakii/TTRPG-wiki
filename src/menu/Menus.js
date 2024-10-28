export const SYSTEM_SELECTION = [
  {
    href: "/dnd",
    title: "Dungeons & Dragons",
    name: "D&D"
  },
  {
    href: "/pf",
    title: "Pathfinder",
    name: "Pathfinder"
  }
]
export const DND_SELECTOR = [
  {
    href: "/dnd/rules",
    title: "",
    name: "Rules"
  },
  {
    href: "/dnd/player",
    title: "",
    name: "Character Creation"
  },
  {
    href: "/dnd/resources",
    title: "",
    name: "Resources"
  },
  {
    href: "/dnd/tips",
    title: "",
    name: "Tips"
  },
  {
    href: "/dnd/universes",
    title: "",
    name: "Universe"
  },
]


function buildMenuFromJson(racesData): [] {
  let races = [];
  console.log(racesData)
  for (let race in racesData) {
    let obj = racesData[race]
    races.push({
      id: obj.id,
      href: "/dnd/player/races/" + obj.id,
      name: obj.name,
      sublist: []
    })
  }
  return races
}

// {
//   id: "race.elf",
//     href: "/dnd/cc/race/elf",
//   name: "Elf",
//   sublist: []
// },
// {
//   id: "race.human",
//     href: "/dnd/cc/race/human",
//   name: "Human",
//   sublist: []
// },
// {
//   id: "race.dragonborn",
//     href: "/dnd/cc/race/dragonborn",
//   name: "Dragonborn",
//   sublist: []
// },
// {
//   id: "race.aarakocra",
//     href: "/dnd/cc/race/aarakocra",
//   name: "Aarakocra",
//   sublist: []
// },
// {
//   id: "race.genasi",
//     href: "/dnd/cc/race/genasi",
//   name: "Génasi",
//   sublist: []
// },

export const CHARACTER_CREATION = [

  {
    id: "intro",
    href: "/dnd/player",
    name: "Introduction",
    sublist: []
  },
  {
    id: "races",
    href: "/dnd/player/races",
    name: "Races",
    sublist: buildMenuFromJson(require("../resources/races.json"))
  },
  {
    id: "classes",
    href: "/dnd/player/classes",
    name: "Classes",
    sublist: buildMenuFromJson(require("../resources/classes.json"))
  }
]

