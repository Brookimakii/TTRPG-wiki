class Image {
  url:string
  name:string
  caption:string
}


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
  entries: [string | Entry]
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
  images: [Image]
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
  entries: [string | {} | {html:string}]
  source: string
}

export class Spell {
  id: string
  name: string
  level: string
  school: string
  castingTime: string
  castingTimeAddition: string
  range: string
  duration: string
  component: string
  materialComponent: {
    material: string,
    cost: string
  }
  concentration: boolean
  ritual: boolean

  shortDesc: string
  entries: [string]
  upCast: string
  source: string
  page: number
  casters: {
    classes: [string],
    subclasses: [string],
    races: [string],
    backgrounds: [string],
    feats: [string],
    features: [string],
  }
  spellAttack: boolean
  savingThrow: [string]
  abilityCheck: [string]
  damageTypes: [string]
  conditionsInflicted: [string]
  affectsCreatureTypes: [string]
}

class Dice {
  amount: number
  sides: number
}

export class Monster {
  id: string
  name: string

  identity:{
    type: string,
    tag: string,
    size: string,
    alignment: string
  }
  defense: {
    ca: string,
    caPrecision: string,
    initiative: number,
    speed: number,
    hpRoll:{
      dice: Dice,
      bonus: number
    },
    otherSpeed: {
      swim:number,
      borrow:number,
      fly:number,
      climb:number
    },
    flyingBonus: string
  }
  attribut:{
    for: number,
    dex: number,
    con: number,
    int: number,
    sag: number,
    cha: number
  }
  proficiencies: {
    bonus: number,
    saves: {
      for: string,
      dex: string,
      con: string,
      int: string,
      sag: string,
      cha: string
    },
    skills: {}
  }
  affinities: {
    weakness: [string|{}],
    resistance: [string|{}],
    immunity: [string|{}],
    condition: [string|{}]
  }
  senses: []
  languages:[]
  fp: number

  traits: [string]
  actions: [string]
  bonusActions: [string]
  reactions: [string]
  legendaryActions: [string]
  lairAction: [string]
  regionEffects: [string]

  habitat: [string]

  info: [string]
  images: [Image]

  token: Image
  source: string
  page: number
}

const Rarity = Object.freeze({
  none: "none",
  common: "common",
  uncommon: "uncommon",
  rare: "rare",
  veryRare: "veryRare",
  legendary: "legendary",
  artefact: "artefact",
  varies: "varies",
  unknown: "unknown",
  other: "other"
})


export class WondrousProperties {
  rarity: string
  tier: string
}

export class Item {
  id: string
  name: string
  source: string
  page: number

  itemType: string
  finalItemType: string
  wondrous: boolean
  wondrousProperties: WondrousProperties
  weight: number
  value: number

  scfType: string
  age: string

  entries: [Entry]
}

export class Armor extends Item {
  armorType: string
  ac: number
  strength: number
  stealth: boolean
}

export class Weapon extends Item {
  weaponType: string
  weaponCategory: string
  weaponProperty: [string]
  special: string
  reload: number
  range: string
  dmg1: string
  dmg2: string
  dmgType: string
  attackAttribute: string
  isBaseWeapon: boolean
}

export const WeaponProperty = {
  A: {
    name: "Munitions",
    desc: [
      "Vous pouvez utiliser une arme avec la propriété munitions pour faire une attaque à distance uniquement si vous avez les munitions nécessaires pour tirer avec cette arme. Chaque fois que vous attaquez avec cette arme, vous utilisez une munition. Sortir la munition en question d'un carquois, d'une boîte ou d'un quelconque étui fait partie de l'attaque (vous avez besoin d'une main libre pour charger une arme à une main). À la fin de la bataille, vous pouvez récupérer la moitié des munitions que vous avez utilisées en prenant une minute pour fouiller le champ de bataille.",
      "Si vous utilisez une arme qui a la propriété munitions pour faire une attaque de corps à corps, cette arme est considérée comme une arme improvisée. Cela dit, une arme comme une fronde doit quand même être chargée pour infliger des dégâts si vous l'utilisez de cette façon"
    ],
    formating: "{{prop_name}} ({{item.range}} m.)"
  },
  AF: {
    name: "Munitions",
    desc: [
      "Vous pouvez utiliser une arme avec la propriété munitions pour faire une attaque à distance uniquement si vous avez les munitions nécessaires pour tirer avec cette arme. Chaque fois que vous attaquez avec cette arme, vous utilisez une munition. Sortir la munition en question d'un carquois, d'une boîte ou d'un quelconque étui fait partie de l'attaque (vous avez besoin d'une main libre pour charger une arme à une main). Les munitions d'une arme à feu sont détruites lors de leur utilisation.",
      "Si vous utilisez une arme qui a la propriété munitions pour faire une attaque de corps à corps, cette arme est considérée comme une arme improvisée. Cela dit, une arme comme une fronde doit quand même être chargée pour infliger des dégâts si vous l'utilisez de cette façon"
    ],
    formating: "{{prop_name}} ({{item.range}} m.)"
  },
  BF: {
    name: "Feu Nourri",
    desc: [
      "Une arme possédant la propriété feu nourri peut faire une attaque normal sur une cible unique ou arroser de tirs un cube de 3mères d'arrête situé à portée normal. Chaque créature présente dans la zone doit alors réussir un jet de sauvegarde de Dextérité DD 15, sans quoi elle subit les dégâts normaux de l'arme. Cette action nécessite dix munitions."
    ],
    formating: "{{prop_name}} "
  },
  F: {
    name: "Finesse",
    desc: [
      ". Quand vous attaquez avec une arme de finesse, vous pouvez choisir d'ajouter votre modificateur de Force ou de Dextérité aux jets d'attaque et de dégâts. Par contre, vous devez utiliser le même modificateur pour les deux jets"
    ],
    formating: "{{prop_name}}"
  },
  H: {
    name: "Lourde",
    desc: [
      "Les créatures de taille Petite sont désavantagées lors des jets d'attaques quand elles manient des armes lourdes. La taille et le poids de celles-ci les rendent en effet difficiles à manier pour une créature de taille Petite"
    ],
    formating: "{{prop_name}}"
  },
  L: {
    name: "Légère",
    desc: [
      "Une arme légère est petite et facile à manier, ce qui la rend idéale pour le combat à deux armes."
    ],
    formating: "{{prop_name}}"
  },
  LD: {
    name: "Chargement",
    desc: [
      "Cette arme nécessite un temps de chargement long qui ne vous permet de tirer qu'une seule fois quand vous utilisez une action, une action bonus ou une réaction, peu importe le nombre d'attaques que vous pouvez normalement faire. "
    ],
    formating: "{{prop_name}}"
  },
  R: {
    name: "Allonge",
    desc: [
      "Ce type d'arme vous permet de gagner 1,50 mètre d'allonge quand vous l'utilisez et quand vous déterminez votre allonge pour faire une attaque d'opportunité"
    ],
    formating: "{{prop_name}}"
  },
  RLD: {
    name: "Rechargement",
    desc: [
      "Une arme doté de la propriété rechargement peut faire un nombre de tirs limités, ensuite, son utilisateur doit la recharger avec une action ou une action bonus (à lui de choisir)."
    ],
    formating: "{{prop_name}} ({{item.reload}} shots)"
  },
  T: {
    name: "Lancer",
    desc: [
      ". Si une arme possède la propriété lancer, vous pouvez la lancer pour faire une attaque à distance. S'il s'agit d'une arme de corps à corps, vous appliquez le même modificateur de caractéristique sur le jet d'attaque et de dégâts que celui que vous appliquez pour une attaque de corps à corps avec cette arme. Par exemple, si vous lancez une hachette, vous appliquez votre Force, si vous lancez une dague, vous aurez le choix entre votre Force ou votre Dextérité dans l;i mesure où la dague possède aussi la propriété finesse. "
    ],
    formating: "{{prop_name}}"
  },
  S: {
    name: "Spécial",
    desc: [
      "Une arme qui possède la propriété spéciale utilise des règles de fonctionnement spécifiques qui sont expliquées dans la description de l'arme"
    ],
    formating: ""
  },
  "2H": {
    name: "À deux mains",

    desc: ["Pour attaquer avec cette arme, vous devez la manier à deux mains."],
    formating: "{{prop_name}}"
  },
  V: {
    name: "Polyvalente",
    desc: [
      "Une arme polyvalente peut être utilisée avec une ou deux mains. Une valeur est indiquée entre parenthèses à côté de la propriété : il s'agit de la quantité de dégâts infligés quand l'arme est tenue à deux mains."
    ],
    formating: "{{prop_name}} ({{item.dmg2}})"
  }
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
  source: string
  page: number

  featureType: [string]
  finalFeatureTypes: [string]
  finalFeatureTypesAbv: [string]
  prerequisite: [{
    item: [string],
    level: {
      level: number,
      class: {}
    }
  }]
  consumes: {
    name: string,
    amount: number,
    amountMin: number,
    amountMax: number,
  }
  entries: [string]
}