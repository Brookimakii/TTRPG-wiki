class PlayerClass {
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

class Feature {
  name: string
  source: string
  page: number
  className: string
  classSource: string
  subclassShortName: string
  subclassSource: string
  level: number
  entries: [string]
}

class PlayerRace {

}

class PlayerFeat {

}

class PlayerBackground {

}

class Spell {

}

class Monster {

}

class Item {

}