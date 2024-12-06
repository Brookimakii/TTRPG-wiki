export class PlayerClass {
  id: string
  info: {
    name: string,
    source: string,
    page: number,
    hitDice: {
      amount: number,
      faces: number
    },
    proficiencies: {
      armor: [string],
      weapon: [string],
      tools: [string],
      skills: {
        pool: [string],
        count: number
      } | { any: number },
      saves: [string]
    },
    startingEquipment: {
      goldAlternative: string,
      equipement: [string]
    },
    multiclass: {
      requirements: {},
      proficiencies: {
        armor: [string],
        weapon: [string],
        tools: [string],
        skills: {
          pool: [string],
          count: number
        } | { any: number },
      }
    },
    tableGroup: [{
      title: string,
      colLabels: [string],
      rows: [[string | number]]
    }],
    classFeatures: [string]
  }
  subclasses: [
    {
      name: string,
      shortName: string,
      source: string,
      page: number,
      subclassFeatures: [string | { classFeature: string, gainSubClassFeature: boolean }]
    }
  ]
  classFeatures: [Feature]
  subclassFeatures: [Feature]
}

export class Feature {
  name: string
  source: string
  page: number
  className: string
  classSource: string
  subclassShortName: string
  subclassSource: string
  level: number
  header: number
  entries: [string]
}

export class PlayerRace {
  "id": string
  "name": string
  "bonus": string
  "size": string
  "source": string
  "creatureType": string
  "speed": string
  "common": {
    "age": string,
    "alignment": string,
    "size": string,
    "languages": string
  }
  "traits": [{}]
  "info": [{}]
  "images": []
  "subraces": [{
      "id": string,
      "name": string,
      "bonus": string,
      "source": string,
      "traits": [{}],
      "info": {},
      "images": []
    }]
}

export class PlayerFeat {

}

export class PlayerBackground {

}

export class Spell {

}

export class Monster {

}

export class Item {

}

export default class Clazz {}