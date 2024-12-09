export class Entry {
  type: string
  subFeature: string
  style: string
  name: string
  entries: [string | {}]
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
  entries: [string|Entry]
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
    } else if (values.length === 6) {
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
}

export class PlayerRace {
  id: string
  name: string
  bonus: string
  size: string
  page: number
  reprinted: {}
  source: string
  creatureType: string
  speed: string
  common: {
    age: string,
    alignment: string,
    size: string,
    languages: string
  }
  traits: [{}]
  info: [{}]
  images: []
  subraces: [{
    id: string,
    name: string,
    bonus: string,
    source: string,
    traits: [{}],
    info: {}, 
    images: []
  }]
}

export class PlayerFeat {
  id: string
  name: string
  prerequisite: string
  entries: [string]
  source: string
}

export class PlayerBackground {
  id: string
  name: string
  entries: [string]
  source: string
}

export class Spell {
  id: string
  name: string
  level: string
  school: string
  source: string
  castingTime: string
  range: string
  duration: string
  component: string
  materialComponent:{
    material: string,
    cost: string
  }
  concentration: boolean
  ritual: boolean

  shortDesc: string
  entries: [string]
  upCast: string
  casters: {
    classes: [string]
  }
}

export class Monster {
  id: string
  name: string
  entries: [string]
  source: string
}

export class Item {
  id: string
  name: string
  entries: [string]
  source: string
}

export class Condition {
  id: string
  name: string
  entries: [string]
  source: string
}

export class Rule {
  id: string
  name: string
  entries: [string]
  source: string
}

export class PlayerOptionNFeature {
  id: string
  name: string
  prerequisite: string
  level: string
  entries: [string]
  source: string
}
