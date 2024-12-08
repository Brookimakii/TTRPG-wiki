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

  findFeatureInClass(values: string): Feature | undefined {
    values = values.split("|")
    if (values.length === 4) {
      const [featureName, className, classSource, level] = values
      return this.classFeatures.find((feature) => {
        return (feature.name === featureName && feature.className === className && feature.classSource === classSource && feature.level === Number(level))
      })
    }
    else if (values.length === 6) {
      const [featureName, className, classSource, subClassName, subClassSource, level] = values
      // console.log("-------------------------------------------------------------")
      // console.log(featureName, className, classSource, subClassName, subClassSource, level)
      // console.log(selectedClass.subclassFeatures)
      return this.subclassFeatures.find((feature) => {
        return (
          feature.name === featureName &&
          feature.className === className &&
          feature.classSource === classSource &&
          feature.subclassShortName === subClassName &&
          feature.subclassSource === subClassSource &&
          feature.level === Number(level)
        )
      })
    }
  }

  constructor() {
  }

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
  castingTime: string

}

export class Monster {

}

export class Item {

}

export default class Clazz {}