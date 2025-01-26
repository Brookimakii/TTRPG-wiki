import spell from "./dnd5e/spells.json"
import item from "./dnd5e/items.json"
import feature from "./dnd5e/features.json"
import clazz from "./dnd5e/classes.json"
import race from "./dnd5e/races.json"
import background from "./dnd5e/backgrounds.json"
import bestiary from "./dnd5e/bestiary.json"
import feat from "./dnd5e/feats.json"
import condition from "./dnd5e/conditions.json"
import rule from "./dnd5e/rules.json"

export class Resources {
}

Resources.race = {
  dev: race,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/races.json?token=GHSAT0AAAAAACZTRR2NDY4MX2YGFB5CKGKCZ2TMQ4A"
}
Resources.clazz = {
  dev: clazz,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/classes.json?token=GHSAT0AAAAAACZTRR2NQTZXSGILY5NVSI52Z2TMQZQ"
}
Resources.feat = {
  dev: feat,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/feats.json?token=GHSAT0AAAAAACZTRR2MCD6W56BXY52Y73UWZ2TMQYQ"
}
Resources.feature = {
  dev: feature,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/features.json?token=GHSAT0AAAAAACZTRR2MJKBDSJWE5SQQIOMAZ2TMQ2A"
}
Resources.background = {
  dev: background,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/backgrounds.json?token=GHSAT0AAAAAACZTRR2NWADQMCMQEP3MC2JOZ2TMQAQ"
}
Resources.item = {
  dev: item,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/items.json?token=GHSAT0AAAAAACZTRR2NHKBQYFEORBBFUBJCZ2TMQ3A"
}
Resources.spell = {
  dev: spell,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/spells.json?token=GHSAT0AAAAAACZTRR2NPHJBNJR3TIAE5TJAZ2TMQ7Q"
}
Resources.rule = {
  dev: rule,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/rules.json?token=GHSAT0AAAAAACZTRR2MWPFMROODKL4DW5A6Z2TMQ6A"
}
Resources.condition = {
  dev: condition,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/conditions.json?token=GHSAT0AAAAAACZTRR2M2HX2UAYT3RHM3BDGZ2TMQXQ"
}
Resources.bestiary = {
  dev: bestiary,
  prod: "https://raw.githubusercontent.com/Brookimakii/TTRPG-wiki/refs/heads/master/src/resources/bestiary.json?token=GHSAT0AAAAAACZTRR2NZ5JFMX3I7PH3CY3KZ2TMQUQ"
}


// async function fetching (page){
//   const myHeaders = new Headers();
//   myHeaders.append("Authorization", "token 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");
//
//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow"
//   };
//
//   const response = await fetch(`https://api.github.com/repos/Brookimakii/TTRPG-wiki/contentssrc/resources/${page}`, requestOptions)
//   return await await response.json()["content"]
// }

export const getResource = (resources: { dev: [], prod: "" }) => {
  const env = !process.env.NODE_ENV || process.env.NODE_ENV === "development"

  // console.log(fetching("spells.json"))
  return resources.dev
}