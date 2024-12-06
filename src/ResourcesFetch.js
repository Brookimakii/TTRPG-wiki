import spell from "./resources/spells.json"
import item from "./resources/items.json"
import feature from "./resources/features.json"
import clazz from "./resources/classes.json"
import race from "./resources/races.json"
import background from "./resources/backgrounds.json"
import bestiary from "./resources/bestiary.json"
import feat from "./resources/feats.json"
import condition from "./resources/conditions.json"
import rule from "./resources/rules.json"

export class Resources{
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

export const getResource = (resources:{dev:[],prod:""}) => {
  const env = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
  return env ? resources.dev : require(resources.prod);
}