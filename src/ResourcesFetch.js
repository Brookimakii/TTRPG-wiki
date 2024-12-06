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
  prod: ""
}
Resources.clazz = {
  dev: clazz,
  prod: ""
}
Resources.feat = {
  dev: feat,
  prod: ""
}
Resources.feature = {
  dev: feature,
  prod: ""
}
Resources.background = {
  dev: background,
  prod: ""
}
Resources.item = {
  dev: item,
  prod: ""
}
Resources.spell = {
  dev: spell,
  prod: ""
}
Resources.rule = {
  dev: rule,
  prod: ""
}
Resources.condition = {
  dev: condition,
  prod: ""
}
Resources.bestiary = {
  dev: bestiary,
  prod: ""
}

export const getResource = (resources:{dev:[],prod:""}) => {
  const env = !process.env.NODE_ENV || process.env.NODE_ENV === "development"
  return env ? resources.dev : require(resources.prod);
}