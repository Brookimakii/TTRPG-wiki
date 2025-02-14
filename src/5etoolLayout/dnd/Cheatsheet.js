import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

import '../css/quickref.css'
import '../css/icons.css'
import React, {useState} from "react";
import {RenderModule, ToggleState} from "../5eLayoutModules";


export const DnDCheatsheet = () => {

  const [selected, setSelected] = useState(undefined)

  const movement = [
    {
      title: "Se déplacer",
      icon: "run",
      subtitle: "Coût : 1m50 par 1m50",
      description: "Coût de déplacement : 1m50 par 1m50 déplacés",
      reference: "PHB, pg. 190.",
      bullets: [
        "Si vous avez plus d'une vitesse, comme votre vitesse de marche et une vitesse de vol, vous pouvez basculer entre vos vitesses pendant votre mouvement. Chaque fois que vous changez de vitesse, soustrayez la distance que vous avez déjà parcourue de la nouvelle vitesse.",
        "Vous pouvez vous déplacer dans l'espace d'une créature non hostile.",
        "Vous ne pouvez vous déplacer dans l'espace d'une créature hostile que si la créature est au moins deux tailles plus grande ou plus petite que vous.",
        "L'espace d'une autre créature est un terrain difficile pour vous.",
        "Qu'une créature soit un ami ou un ennemi, vous ne pouvez pas volontairement terminer votre mouvement dans son espace."
      ]
    },
    {
      title: "Grimper",
      icon: "crags",
      subtitle: "Coût : 3m par 1m50",
      description: "Coût de déplacement : 3m par 1m50 escaladés",
      reference: "PHB, pg. 182.",
      bullets: [
        "Peut impliquer un test de Force (Athlétisme) si la montée est difficile"
      ]
    },
    {
      title: "Nager",
      icon: "at-sea",
      subtitle: "Coût : 3m par 1m50",
      description: "Coût de déplacement : 3m par 1m50 nagés",
      reference: "PHB, pg. 182.",
      bullets: [
        "Peut impliquer un test de Force (Athlétisme) si la nage est difficile"
      ]
    },
    {
      title: "Tomber au sol",
      icon: "falling",
      subtitle: "Coût : 0m",
      description: "Coût de déplacement : 0m (gratuit)",
      reference: "PHB, pgs. 190-191,292.",
      bullets: [
        "Vous pouvez tomber à plat ventre sans utiliser votre vitesse.",
        "Pour vous déplacer en position couchée, vous devez ramper ou utiliser la magie comme la téléportation.",
        "Tomber à terre ajoute la condition {@i À Terre} (les attaques de mêlée contre vous ont un avantage, les attaques à distance contre vous ont un désavantage, vos propres attaques ont un désavantage)"
      ]
    },
    {
      title: "Ramper",
      icon: "crawl",
      subtitle: "Coût : 3m par 1m50",
      description: "Coût de déplacement : 3m par 1m50 rampés",
      reference: "PHB, pg. 182.",
      bullets: []
    },
    {
      title: "Se lever",
      icon: "strong",
      subtitle: "Coût : moitié de la vitesse de déplacement",
      description: "Movement cost: half of your speed",
      reference: "PHB, pg. 190-191.",
      bullets: [
        "Vous ne pouvez pas vous lever si vous n'avez plus assez de mouvement ou si votre vitesse est de 0"
      ]
    },
    {
      title: "Saut en hauteur",
      icon: "wingfoot",
      subtitle: "Coût : 1m50 par 1m50",
      description: "Coût de déplacement : 1m50 par 1m50 sautés",

      reference: "PHB, pg. 182.",
      bullets: [
        "Vous sautez en l'air d'un nombre de mètres égal à {@b votre valeur de Force divisée par 3 + 1} si vous prenez un élan d'au moins 3 mètres.",
        "Lorsque vous faites un saut sans élan, vous ne pouvez sauter que la moitié de cette distance.",
        "Vous pouvez étendre vos bras à la moitié de votre taille au-dessus de vous pendant le saut. Cela vous permet d'atteindre une hauteur égale à la hauteur du saut plus une fois et demi votre taille.",
        "Dans certaines circonstances, votre MD peut vous permettre de faire un test de Force (Athlétisme) pour sauter plus haut que vous ne le pouvez normalement."
      ]
    },
    {
      title: "Saut en longueur",
      icon: "wingfoot",
      subtitle: "Coût : 1m50 par 1m50",
      description: "Coût de déplacement : 1m50 par 1m50 sautés",
      reference: "PHB, pg. 182.",
      bullets: [
        "Vous couvrez un certain nombre de mètres jusqu'à votre {@b valeur de force divisée par 3} si vous prenez un élan d'au moins 3 mètres",
        "Lorsque vous faites un saut en longueur sans élan, vous ne pouvez sauter que la moitié de cette distance",
        "Peut impliquer un test de Force (Athlétisme) DD 10 pour franchir un obstacle bas (pas plus haut qu'un quart de la distance du saut). Vous percutez l'obstacle lors d'un test raté.",
        "Peut impliquer un test de Dextérité (Acrobatie) DD 10 pour atterrir sur vos pieds en terrain difficile. Vous atterrissez à terre sur un test raté."
      ]
    },
    {
      title: "Improviser",
      icon: "juggler",
      subtitle: "Toute cascade ne figurant pas sur cette liste",
      description: "Effectuez n'importe quel mouvement ou cascade que vous pouvez imaginer",
      bullets: [
        "Lorsque vous décrivez un type de mouvement qui n'est pas détaillé ailleurs dans les règles, le MD vous indique si c'est possible et quel type de jet vous devez faire, le cas échéant, pour déterminer le succès ou l'échec."
      ]
    },
    {
      title: "Terrain difficile",
      icon: "stone-pile",
      subtitle: "Modificateur de coût : +1m50 par 1m50",
      reference: "PHB, pg. 182.",
      description: "Se déplacer en terrain difficile coûte 1m50 supplémentaires par 1m50 de mouvement",
      bullets: []
    },
    {
      title: "Mouvement en empoignade",
      icon: "grab",
      subtitle: "Modificateur : vitesse réduite de moitié",
      description: "Traînez ou portez la créature que vous avez empoigné",
      reference: "PHB, pg. 195.",
      bullets: [
        "Si vous vous déplacez tout en agrippant une autre créature, votre vitesse est réduite de moitié, à moins que la créature ne soit deux tailles ou plus plus petite que vous.",
        "Voir l'action d'attaque pour savoir comment agripper une créature."
      ]
    }
  ]
  const actions = [
    {
      title: "Attack",
      icon: "crossed-swords",
      subtitle: "Attaque au corps à corps ou à distance",
      description: "Effectuez une attaque au corps à corps ou à distance avec votre arme",
      reference: "PHB, pgs. 192,194-195.",
      bullets: [
        "Certaines compétences, telles que la compétence {@i Attaque supplémentaire}, vous permettent de faire plus d'une attaque avec cette action. Chacune de ces attaques est un jet séparé et peut cibler différentes créatures. Vous pouvez vous déplacer entre ces attaques.",
        "Lorsque vous attaquez avec une arme de mêlée légère, vous pouvez utiliser une action bonus pour attaquer avec votre autre main (voir l'action bonus {@i Attaque seconde main}).",
        "Vous pouvez remplacer l'une de vos attaques de mêlée par {@i Empoigner} ou {@i Bousculer}.",
        "Certaines conditions donnent un avantage à l'attaque : attaques contre des cibles aveuglées, paralysées, pétrifiées, entravées, étourdies ou inconscientes ; attaques de mêlée contre des cibles à terre ; attaques d'attaquants invisibles ou cachés.",
        "Certaines conditions donnent un désavantage à l'attaque : attaques contre des cibles invisibles ou cachées ; attaques à distance contre des cibles couchées ; attaques par des attaquants aveuglés, effrayés, empoisonnés ou retenus."
      ]
    },
    {
      title: "Empoigner",
      icon: "grab",
      subtitle: "Agripper une créature",
      description: "Tenter d'agripper une créature ou de lutter avec elle",
      reference: "PHB, pg. 195.",
      bullets: [
        "Vous pouvez utiliser l'action {@i Attaquer} pour effectuer une attaque spéciale au corps à corps, une empoignade. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
        "La cible de votre empoignade ne doit pas faire plus d'une taille de plus que vous, et elle doit être à votre portée.",
        "Avec au moins une main libre, vous tentez de saisir la cible en effectuant un test de Force (Athlétisme) contesté par le test de Force (Athlétisme) ou de Dextérité (Acrobatie) de la cible (la cible choisit la capacité à utiliser). ",
        "Si vous réussissez, vous soumettez la cible à la condition Agrippé (sa vitesse est réduite à 0).",
      ]
    },
    {
      title: "Bousculer",
      icon: "hand",
      subtitle: "Repousser une créature",
      description: "Pousser une créature, soit pour la mettre à terre, soit pour la repousser",
      reference: "PHB, pg. 195.",
      bullets: [
        "En utilisant l'action {@i Attaquer}, vous pouvez effectuer une attaque spéciale au corps à corps pour repousser une créature. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
        "La cible de votre poussée ne doit pas faire plus d'une taille de plus que vous, et elle doit être à votre portée.",
        "Vous faites un jet de Force (Athlétisme) contesté par le jet de Force (Athlétisme) ou de Dextérité (Acrobatie) de la cible (la cible choisit la capacité à utiliser).",
        "Si vous remportez l'opposition, soit vous renversez la cible, soit vous la poussez à 1,50m de vous.",
        "Vous pouvez également tenter de pousser la cible à 1,50m dans un espace différent à portée (sur le côté, pas plus loin de vous), mais vous avez alors un désavantage à votre jet."
      ]
    },
    {
      title: "Jeter un sort",
      icon: "magic-swirl",
      subtitle: "Temps d'incantation de 1 action",
      description: "Lancer un sort avec un temps d'incantation de 1 action",
      reference: "PHB, pg. 192.",
      bullets: [
        "Vous ne pouvez pas lancer un sort avec votre action et un sort différent avec votre action bonus dans le même tour, sauf si l'action est utilisée pour lancer un sort mineur (niveau 0).",
        "La cible d'un sort doit être dans la portée du sort. Pour cibler quelque chose, vous devez avoir un chemin clair vers lui, donc il ne peut pas être derrière une couverture totale.",
        "Les sorts avec des composants matériels ne consomment pas le matériel sauf indication explicite. À moins que le coût d'un matériel ne soit donné, vous pouvez supposer que le coût est négligeable et que le matériel est simplement disponible dans une pochette de composants.",
        "Certains sorts nécessitent que vous mainteniez la concentration afin de garder leur magie active. Si vous perdez la concentration, un tel sort prend fin. Vous perdez la concentration sur un sort si vous lancez un autre sort qui nécessite de la concentration ou lorsque vous êtes {@i incapable d'agir}. Chaque fois que vous prenez dégâts, vous devez effectuer un jet de sauvegarde de Constitution pour maintenir votre concentration. Le DD est égal à 10 ou à la moitié des dégâts que vous subissez, selon le nombre le plus élevé."
      ]
    },
    {
      title: "Foncer",
      icon: "sprint",
      subtitle: "Double vitesse de déplacement",
      description: "Gagnez du mouvement supplémentaire pour le tour en cours",
      reference: "PHB, pg. 192.",
      bullets: [
        "L'augmentation est égale à votre vitesse, après application des modificateurs."
      ]
    },
    {
      title: "Se désengager",
      icon: "journey",
      subtitle: "Évite les attaques d'opportunité",
      description: "Votre mouvement ne provoque pas d'attaques d'opportunité pour le reste du tour",
      reference: "PHB, pg. 192.",
      bullets: []
    },
    {
      title: "Esquiver",
      icon: "dodging",
      subtitle: "Améliore vos défenses",
      description: "Se concentrer entièrement sur la prévention des attaques",
      reference: "PHB, pg. 192.",
      bullets: [
        "Jusqu'au début de votre prochain tour, tout jet d'attaque effectué contre vous a un désavantage si vous pouvez voir l'attaquant, et vous faites des jets de sauvegarde de Dextérité avec un avantage.",
        "Vous perdez cet avantage si vous êtes {@i incapable d'agir} ou si votre vitesse tombe à 0."
      ]
    },
    {
      title: "Se libérer",
      icon: "manacles",
      subtitle: "Se libérer d'une empoignade",
      description: "Se libérer d'une empoignade",
      reference: "PHB, pg. 195.",
      bullets: [
        "Pour échapper à une empoignade, vous devez réussir un test de Force (Athlétisme) ou de Dextérité (Acrobatie) contesté par le test de Force (Athlétisme) de l'adversaire.",
        "Échapper à d'autres conditions qui vous retiennent (comme les menottes) peut nécessiter un test de Dextérité ou de Force, comme spécifié par la condition."
      ]
    },
    {
      title: "Aider",
      icon: "telepathy",
      subtitle: "Accorder l'avantage à un allié",
      description: "Confère un avantage à un allié lors d'un test de caractéristique ou d'une attaque",
      reference: "PHB, pg. 192.",
      bullets: [
        "La cible gagne un avantage lors du prochain test de caractéristique qu'elle effectue pour accomplir la tâche à laquelle vous participez.",
        "Alternativement, la cible gagne l'avantage au prochain jet d'attaque contre une créature à 1,50 mètre ou moins de vous.",
        "L'avantage dure jusqu'au début de votre prochain tour."
      ]
    },
    {
      title: "Utiliser un objet",
      icon: "swap-bag",
      subtitle: "Interagir, utiliser des capacités spéciales",
      description: "Interagissez avec un deuxième objet ou utilisez des capacités d'objet spéciales",
      reference: "PHB, pg. 193.",
      bullets: [
        "Vous pouvez interagir avec un objet gratuitement pendant votre tour (comme dégainer une arme ou ouvrir une porte). Si vous voulez interagir avec un deuxième objet, utilisez cette action.",
        "Lorsqu'un objet nécessite explicitement votre action pour son utilisation, vous effectuez également cette action."
      ]
    },
    {
      title: "Se cacher",
      icon: "hood",
      subtitle: "",
      description: "Tenter de se cacher",
      reference: "PHB, pg. 192.",
      bullets: [
        "Vous ne pouvez pas vous cacher d'une créature qui peut vous voir. Vous devez avoir une couverture totale, être dans une zone fortement obscurcie, être invisible ou bloquer la vision de l'ennemi.",
        "Si vous faites du bruit (comme crier un avertissement ou renverser un vase), vous trahissez votre position.",
        "Lorsque vous essayez de vous cacher, faites un test de Dextérité (Discrétion) et notez le résultat. Jusqu'à ce que vous soyez découvert ou que vous cessiez de vous cacher, le total de ce test est contesté par le test de Sagesse (Perception) de toute créature qui recherche activement des signes de votre présence.",
        "Une créature vous remarque même si elle ne cherche pas à moins que votre test de Discrétion ne soit supérieur à sa Perception passive.",
        "Hors combat, vous pouvez également utiliser un test de Dextérité (Discrétion) pour des actions telles que vous cacher des ennemis, passer les gardes, vous éclipser sans vous faire remarquer ou vous faufiler sur quelqu'un sans être vu ni entendu."
      ]
    },
    {
      title: "Chercher",
      icon: "magnifying-glass",
      subtitle: "",
      description: "Consacrer votre attention à trouver quelque chose",
      reference: "PHB, pg. 193.",
      bullets: [
        "Selon la nature de votre recherche, le MJ peut vous demander de faire un jet de Sagesse (Perception) ou un jet d'Intelligence (Investigation)."
      ]
    },
    {
      title: "Se tenir prêt",
      icon: "stopwatch",
      subtitle: "Choisissez le déclencheur et l'action",
      description: "Choisissez un déclencheur et une réaction de réponse",
      reference: "PHB, pg. 193.",
      bullets: [
        "Tout d'abord, vous décidez quelle circonstance perceptible déclenchera votre réaction.",
        "Ensuite, vous choisissez l'action que vous allez entreprendre en réponse à ce déclencheur, ou vous choisissez d'augmenter votre vitesse en réponse.",
        "Lorsque le déclencheur se produit, vous pouvez soit prendre votre réaction juste après la fin du déclencheur, soit ignorer le déclencheur.",
        "Lorsque vous préparez un sort, vous le lancez normalement mais conservez son énergie, que vous libérez avec votre réaction lorsque le déclencheur se produit. Pour être préparé, un sort doit avoir un temps d'incantation de 1 action, et conserver la magie du sort nécessite concentration"
      ]
    },
    {
      title: "Utiliser une capacité de classe",
      icon: "embrassed-energy",
      subtitle: "Certaines capacités utilisent des actions",
      description: "Utiliser une capacité raciale ou de classe qui utilise une action",
      reference: "Voir la page de votre classe pour plus d'informations.",
      bullets: []
    },
    {
      title: "Stabiliser une créature",
      icon: "first-aid",
      subtitle: "Administrer les premiers soins",
      description: "Empêcher une créature mourante d'avoir à faire des jets de sauvegarde contre la mort",
      reference: "PHB, pg. 197.",
      bullets: [
        "Faire un jet de Sagesse (Médecine) avec DD 10",
        "En cas de réussite, la créature est stable et n'a plus besoin d'effectuer de jets de sauvegarde contre la mort",
        "Une créature stable regagne 1 point de vie après 1d4 heures"
      ]
    },
    {
      title: "Improviser",
      icon: "juggler",
      subtitle: "Toute action ne figurant pas sur cette liste",
      description: "Effectuez n'importe quelle action que vous pouvez imaginer",
      reference: "PHB, pg. 193.",
      bullets: [
        "Lorsque vous décrivez une action non détaillée ailleurs dans les règles, le MJ vous indique si cette action est possible et quel type de jet vous devez effectuer, le cas échéant, pour déterminer le succès ou l'échec."
      ]
    }
  ]

  const data_special_attack = [
    {
      title: "Distraire",
      icon: "distraction",
      subtitle: "Empêcher une créature d'utiliser sa réaction",
      description: "Empêcher une créature d'utiliser sa réaction",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Lorsque vous effectuez l'action {@i Attaquer}, vous pouvez effectuer une attaque spéciale au corps à corps pour distraire un ennemi. Si vous êtes capable d'effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
        "Effectuez un test de Dextérité (Escamotage) contre le test de Sagesse (Perception) d'une créature située à 1,50 mètre ou moins de vous.",
        "Si vous remportez l'opposition, la créature ne peut pas utiliser de réaction avant le début de son prochain tour.",
      ]
    },
    {
      title: "Assommer",
      icon: "knockout",
      subtitle: "Assommer une créature non attentive",
      description: "Rendre inconsciente une créature surprise, incapable d'agir ou entravée",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Une fois par tour, lorsque vous touchez une créature surprise, incapable d'agir ou entravée avec une attaque contondante, vous pouvez essayer de l'assommer.",
        "Lancez vos dégâts normalement mais au lieu de subir des dégâts, la créature doit réussir un jet de sauvegarde de Constitution contre un DD égal à 10 ou la moitié de votre jet de dégâts, selon le plus élevé, ou elle tombe {@i inconsciente} pendant 1 minute.",
        "La cible se réveille si elle subit des dégâts ou si une autre créature utilise une action pour la réveiller.",
        "Cette capacité n'a aucun effet sur les constructions et les morts-vivants"
      ]
    },
    {
      title: "Projeter",
      icon: "catapult",
      subtitle: "Lancer une créature agrippée",
      description: "Tenter de projeter une créature agrippée",
      reference: "Homebrew (The Warrior's Codex, pg. 87.)",
      bullets: [
        "Lorsque vous agrippez une créature, vous pouvez utiliser l'action {@i Attaquer} pour effectuer une attaque spéciale au corps à corps afin de projeter la créature agrippée. Si vous pouvez effectuer plusieurs attaques avec l'action Attaquer, cette attaque remplace l'une d'entre elles.",
        "Pour lancer une autre créature, vous devez réussir un test de Force (Athlétisme), le DD étant déterminé à la fois par votre taille et par la taille de l'autre créature, comme ci-dessous. Si vous réussissez, vous projetez la créature à une distance pouvant atteindre 1,5 fois votre modificateur de Force.",
        "Lorsqu'elle atterrit, la créature projetée subit 1d6 dégâts contondants pour chaque 3 mètres parcourus. Si vous lancez la créature sur une distance plus courte, elle subit des dégâts de chute comme si vous l'aviez lancée sur toute la distance.",
        "La créature projetée atterrit {@i à terre} à moins qu'elle ne réussisse un test de Dextérité (Acrobatie) avec un DD égal au test de Force (Athlétisme) utilisé pour la lancer, ou utilise une capacité ou un sort (comme {@i feuille morte}) pour atterrir en toute sécurité.",
        "<table><tr><th style='text-align:center'>Taille</th><th></th><th></th><th style='text-align:center'>DD</th></tr><tr><td style='text-align:center'>Minuscule</td><td></td><td></td><td style='text-align:center'>5</td></tr><tr><td style='text-align:center'>Petite</td><td></td><td></td><td style='text-align:center'>11</td></tr><tr><td style='text-align:center'>Moyenne</td><td></td><td></td><td style='text-align:center'>17</td></tr><tr><td style='text-align:center'>Grande</td><td></td><td></td><td style='text-align:center'>23</td></tr><tr><td style='text-align:center'>Très Grande</td><td></td><td></td><td style='text-align:center'>29</td></tr><tr><td style='text-align:center'>Gigantesque</td><td></td><td></td><td style='text-align:center'>35</td></tr></table>",
        "Plus vous êtes grand, plus il est facile de lancer d'autres créatures. L'inverse est vrai si vous êtes plus petit. Les DD pour lancer une autre créature augmentent de 5 si votre taille est Petite, et de 10 si votre taille est Minuscule. Ils diminuent de 5 si votre taille est Grande, de 10 si votre taille est Très Grande et de 15 si votre taille est Gigantesque."
      ]
    },
  ]

  const data_special_action = [
    {
      title: "Désarmer",
      icon: "drop-weapon",
      subtitle: "Tenter de désarmer une créature",
      description: "Tenter de désarmer une créature",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Par une action, vous essayez de faire tomber une arme ou un autre objet des mains d'une cible en effectuant un jet d'attaque contesté par le test de Force (Athlétisme) ou de Dextérité (Acrobates) de la cible.",
        "Si vous gagnez, l'attaque ne cause aucun dégâts ni autre effet néfaste, mais le défenseur laisse tomber l'objet, qui atterrit dans un espace inoccupé de votre choix à moins de 3m ou moins de celui-ci. Les objets portés ou attachés ne peuvent pas être désarmés.",
        "Vous avez un désavantage à votre jet d'attaque si la cible tient l'objet à deux mains ou plus. La cible a un avantage sur son test de capacité si elle est plus grande que vous, ou un désavantage si elle est plus petite."
      ]
    },
    {
      title: "Passer en force/finesse",
      icon: "thrust",
      subtitle: "Traverser l'espace d'une créature hostile",
      description: "Tenter de traverser l'espace d'une créature hostile en force ou en finesse",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Lorsque vous essayez de traverser l'espace d'une créature hostile, vous pouvez essayer de forcer le passage. Par une action ou une action bonus (votre choix), effectuez un test de Force (Athlétisme) contesté par le test de Force (Athlétisme) de la créature.",
        "Si vous gagnez, vous pouvez traverser (mais pas y terminer votre tour) l'espace de la créature hostile une fois durant ce tour.",
        "Vous avez un avantage sur votre jet si vous êtes plus grand que la créature, ou un désavantage si vous êtes plus petit.",
        "Alternativement, vous pouvez essayer d'esquiver et de contourner la créature hostile. Par une action ou une action bonus (votre choix), effectuez un test de Dextérité (Acrobaties) contesté par le test de Dextérité (Acrobaties) de la créature.",
        "Si vous gagnez, vous pouvez traverser (mais pas y terminer votre tour) l'espace de la créature hostile une fois durant ce tour. Si la cible gagne, elle peut utiliser sa réaction pour tenter de vous repousser ou de vous renverser."
      ]
    },
    {
      title: "Retenir",
      icon: "padlock",
      subtitle: "Immobiliser complètement une cible déjà agrippée",
      description: "Immobiliser complètement une cible déjà agrippée",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Lorsque vous agrippez une cible de votre taille ou plus petite, vous pouvez essayer de l'immobiliser avec une main libre supplémentaire. En tant qu'action spéciale au corps à corps, effectuez un autre test d'empoignade.",
        "Si vous gagnez, vous et la cible êtes entravés jusqu'à ce que l'empoignade soit brisée et vous pouvez choisir l'un des effets supplémentaires suivants :<ul><li>Vous manœuvrez vers le côté ou l'arrière de la cible. Tant qu'elle est entravée, la créature ne peut pas vous attaquer.</li><li>Vous épinglez les mains et les bras de la cible. Tant qu'elle est entravée, la créature ne peut pas lancer de sort avec une composante somatique ou matérielle, dégainer ou attaquer avec une arme non légère, ou effectuer l'action Utiliser un objet.</li><li>Vous couvrez la bouche de la cible et étouffez sa voix. Tant qu'elle est retenue, la créature ne peut pas être entendue clairement au-delà de 4,5 m, ou du tout au-delà de 9 mètres. Si la créature tente de lancer un sort à composante verbale, elle doit réussir un jet de sauvegarde de Dextérité contre un DD de 8 + votre modificateur de Force ou le sort échoue mais l'emplacement de sort n'est pas perdu. Une créature plus petite que vous a un désavantage à ce jet de sauvegarde.</li></ul>",
        "Une créature ne peut être soumise qu'à un seul de ces effets par chaque créature qui l'agrippe."
      ]
    },
    {
      title: "Roquer",
      icon: "body-swapping",
      subtitle: "Échanger de position avec une créature consentante",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Par une action, vous pouvez vous déplacer dans l'espace d'une créature consentante à 1,50 mètre ou moins de vous, déplaçant la créature dans l'espace que vous occupiez auparavant.",
        "Vous devez tous les deux tenir dans l'espace disponible.",
        "Ni vous ni la cible ne provoquez d'attaques d'opportunité pour ce mouvement."
      ]
    },
    {
      title: "Coup de grâce",
      icon: "grim-reaper",
      subtitle: "Achever un ennemi en vous exposant",
      description: "Achever un ennemi en vous exposant à des attaques d'opportunité",
      reference: "Homebrew (Martial Prowess, pg. 5.)",
      bullets: [
        "Par une action, vous essayez d'achever un adversaire inconscient, paralysé ou autrement rendu incapable d'agir et d'utiliser un mouvement (l'état {@i incapable d'agir} n'est pas suffisant).",
        "Vous infligez un coup critique automatique avec une attaque de mêlée (aucun jet d'attaque n'est nécessaire).",
        "Si la créature survit aux dégâts, elle doit réussir un jet de sauvegarde de Constitution contre un DD égal à 10 ou à la moitié des dégâts infligés, selon le plus élevé. En cas d'échec, il meurt.",
        "Un roublard inflige des dégâts d'attaque sournoise lorsqu'il porte un coup de grâce.",
        "Délivrer un coup de grâce provoque des attaques d'opportunité des créatures à 1,50 mètre ou moins de vous et réduit votre vitesse à 0 jusqu'à la fin du tour."
      ]
    },
  ]
  const bonusAction = [
    {
      title: "Attaque seconde main",
      icon: "crossed-swords",
      subtitle: "À utiliser avec l'action attaquer",
      description: "Attaquez avec votre main libre",
      reference: "PHB, pgs. 192,194-195.",
      bullets: [
        "Utilisable uniquement si vous prenez l'action {@i Attaquer} et attaquez avec une arme de mêlée légère que vous tenez dans une main.",
        "Effectuez une seule attaque avec une arme de mêlée légère différente que vous tenez dans l'autre main.",
        "Vous n'ajoutez pas votre modificateur de capacité aux dégâts de l'attaque bonus, sauf si ce modificateur est négatif.",
        "Si l'une des armes a la propriété de lancer, vous pouvez lancer l'arme au lieu de faire une attaque au corps à corps avec elle."
      ]
    },
    {
      title: "Lancer un sort",
      icon: "magic-swirl",
      subtitle: "Temps d'incantation de 1 action bonus",
      description: "Lancer un sort avec un temps d'incantation de 1 action bonus",
      reference: "PHB, pg. 192.",
      bullets: [
        "Vous ne pouvez pas lancer un sort avec votre action et un sort différent avec votre action bonus dans le même tour, sauf si l'action est utilisée pour lancer un sort mineur.",
        "Pour plus de détails, voir l'action {@i Lancer un sort}."
      ]
    },
    {
      title: "Utiliser une capacité de classe",
      icon: "embrassed-energy",
      subtitle: "Certaines capacités utilisent des actions bonus",
      description: "Utiliser une caractéristique raciale ou de classe qui utilise une action bonus",
      reference: "Voir la page de classe pour plus d'informations.",
      bullets: []
    },
    {
      title: "Plaquer",
      icon: "foot-trip",
      subtitle: "À utiliser avec l'action foncer",
      description: "Plaquer une cible à terre en utilisant l'élan généré par l'action Foncer",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Vous chargez un adversaire en essayant de le maîtriser en utilisant votre élan et votre poids. Lorsque vous utilisez votre action pour foncer et que vous vous déplacez d'au moins 3 mètres en ligne droite vers une créature, vous pouvez tenter de l'agripper ou de la pousser en tant qu'action bonus.",
        "Si vous gagnez le test opposé, la cible est jetée à terre et est soit agrippée, soit poussée de 1,50 mètre (votre choix). Sinon, la cible n'est pas affectée.",
        "Dans les deux cas, vous tombez à terre avec la cible et votre vitesse devient 0 jusqu'à la fin de votre tour."
      ]
    },
    {
      title: "Charger",
      icon: "charging-bull",
      subtitle: "À utiliser avec l'action foncer",
      description: "Attaquer une cible à terre en utilisant l'élan généré par l'action Foncer",
      reference: "Homebrew (Martial Prowess, pg. 6.)",
      bullets: [
        "Vous pouvez utiliser votre élan pour attaquer une créature. Lorsque vous utilisez une action pour foncer et que vous vous déplacez d'au moins 3 mètres en ligne droite vers une créature, vous pouvez effectuer une attaque au corps à corps contre elle en tant qu'action bonus.",
        "Si vous touchez, vous infligez vos dégâts habituels et vous pouvez choisir de repousser la créature à 1,50 mètre de vous.",
        "Que vous touchiez ou non, votre vitesse devient 0 jusqu'à la fin de votre tour."
      ]
    },
  ]
  const reaction = [
    {
      title: "Attaque d'opportunité",
      icon: "crossed-swords",
      subtitle: "L'ennemi quitte votre portée",
      description: "Vous pouvez rarement dépasser vos ennemis sans vous mettre en danger",
      reference: "PHB, pg. 195.",
      bullets: [
        "Déclencheur : la créature ennemie que vous pouvez voir quitte votre portée.",
        "Effectuez une attaque au corps à corps contre la créature provoquante.",
        "L'attaque interrompt le mouvement de la créature provoquante, se produisant juste avant que la créature ne quitte votre portée.",
        "Les créatures ne provoquent pas d'attaque d'opportunité lorsqu'elles se téléportent ou lorsque quelqu'un ou quelque chose les déplace sans utiliser leur mouvement, action ou réaction."
      ]
    },
    {
      title: "Action préparée",
      icon: "stopwatch",
      subtitle: "Fait partie de l'action Se tenir prêt",
      description: "Exécutez la réaction spécifiée par votre action Se tenir prêt",
      reference: "PHB, pg. 193.",
      bullets: [
        "Déclencheur : spécifié par votre action {@i Se tenir prêt}."
      ]
    },
    {
      title: "Lancer un sort",
      icon: "magic-swirl",
      subtitle: "Temps d'incantation de 1 réaction",
      description: "Lancer un sort avec un temps d'incantation de 1 réaction",
      reference: "PHB, pg. 192.",
      bullets: [
        "Déclencheur : spécifié par le sort.",
        "Pour plus de détails, consultez l'action {@i Lancer un sort}."
      ]
    }
  ]
  const condition = [
    {
      title: "Aveuglé",
      icon: "one-eyed",
      subtitle: "Vous ne pouvez pas voir",
      description: "Vous ne pouvez pas voir",
      reference: "PHB, pg. 290.",
      bullets: [
        "Vous échouez automatiquement à tout test de caractéristique qui nécessite la vue.",
        "Vous avez un désavantage aux jets d'attaque.",
        "Les jets d'attaque contre vous ont un avantage."
      ]
    },
    {
      title: "Charmé",
      icon: "smitten",
      subtitle: "Vous êtes charmé",
      description: "Vous êtes charmé par une autre créature",
      reference: "PHB, pg. 290.",
      bullets: [
        "Vous ne pouvez pas attaquer votre charmeur ou le cibler avec des capacités nuisibles ou des effets magiques.",
        "Votre charmeur a un avantage sur les jets de caractéristiques pour interagir socialement avec vous."
      ]
    },
    {
      title: "Assourdi",
      icon: "elf-ear",
      subtitle: "Vous ne pouvez pas entendre",
      description: "Vous ne pouvez pas entendre",
      reference: "PHB, pg. 290.",
      bullets: [
        "Vous échouez automatiquement à tout jet de caractéristique qui nécessite de l'ouïe."
      ]
    },
    {
      title: "Épuisement",
      icon: "despair",
      subtitle: "Vous êtes épuisé",
      description: "L'épuisement est mesuré en six niveaux",
      reference: "PHB, pg. 291.",
      bullets: [
        {
          type: "table",
          colLabels: ["Niveau", "Effet"],
          colStyles: ["ve-col-2 ve-text-center", "ve-col-10"],
          rows: [
            [1, "Désavantage sur les jets de caractéristique"],
            [2, "Vitesse réduite de moitié"],
            [3, "Désavantage aux jets d'attaque et jets de sauvegarde"],
            [4, "Maximum de points de vie réduit de moitié"],
            [5, "Vitesse réduite à 0"],
            [6, "Mort"]
          ]
        },
        "Vous subissez l'effet de votre niveau d'épuisement actuel ainsi que tous les niveaux inférieurs.",
        "Terminer un repos long réduit votre niveau d'épuisement de 1, à condition que vous ayez également bu et mangé.",
        "De plus, être ressuscité d'entre les morts réduit le niveau d'épuisement d'une créature de 1."
      ]
    },
    {
      title: "Effrayé",
      icon: "sharp-smile",
      subtitle: "Vous êtes effrayé",
      description: "Vous êtes effrayé",
      reference: "PHB, pg. 290.",
      bullets: [
        "Vous avez un désavantage aux jets de caractéristique et aux jets d'attaque si la source de votre peur est à portée de vue.",
        "Vous ne pouvez pas vous rapprocher volontairement de la source de votre peur."
      ]
    },
    {
      title: "Agrippé",
      icon: "grab",
      subtitle: "Vous êtes agrippé",
      description: "Vous êtes agrippé",
      reference: "PHB, pg. 290.",
      bullets: [
        "Votre vitesse devient 0, et vous ne pouvez bénéficier d'aucun bonus à votre vitesse.",
        "L'état prend fin si la créature qui agrippe est incapable d'agir.",
        "L'état se termine également si un effet met la créature agrippée hors de portée de la créature ou de l'effet qui l'agrippe."
      ]
    },
    {
      title: "Incapable d'agir",
      icon: "internal-injury",
      subtitle: "Vous ne pouvez pas entreprendre d'actions ou de réactions",
      description: "Vous ne pouvez pas entreprendre d'actions ou de réactions",
      reference: "PHB, pg. 290.",
      bullets: []
    },
    {
      title: "Invisible",
      icon: "invisible",
      subtitle: "Vous ne pouvez pas être vu",
      description: "Vous ne pouvez pas être vu sans l'aide de la magie ou d'un sens spécial",
      reference: "PHB, pg. 291.",
      bullets: [
        "Lorsque vous vous cachez, vous êtes fortement obscurci.",
        "Vous pouvez toujours être détecté par tout bruit que vous faites ou par les traces que vous laissez.",
        "Vous avez l'avantage aux jets d'attaque.",
        "Les jets d'attaque contre vous ont un désavantage."
      ]
    },
    {
      title: "Paralysé",
      // icon: "bolt-spell-cast",
      icon: "internal-injury",
      subtitle: "Vous êtes paralysé",
      description: "Vous ne pouvez rien faire",
      reference: "PHB, pg. 291. & Homebrew (The Warrior's Codex, pg. 89.)",
      bullets: [
        "Vous êtes incapable d'agir et ne pouvez ni bouger ni parler.",
        "Les jets d'attaque contre vous ont un avantage.",
        "Toute attaque au corps à corps qui vous touche est un coup critique.",
        "Vous échouez automatiquement aux jets de sauvegarde et de compétence de Force et de Dextérité.",

      ]
    },
    {
      title: "Pétrifié",
      icon: "stone-pile",
      subtitle: "Vous êtes transformé en pierre",
      description: "Vous êtes transformé, avec tous les objets non magiques que vous portez ou transportez, en une substance solide inanimée (généralement de la pierre)",
      reference: "PHB, pg. 291. & Homebrew (The Warrior's Codex, pg. 89.)",
      bullets: [
        "Votre poids augmente d'un facteur dix et vous cessez de vieillir.",
        "Vous êtes incapable d'agir, ne pouvez ni bouger ni parler et vous ignorez ce qui vous entoure.",
        "Les jets d'attaque contre vous ont un avantage.",
        "Vous échouez automatiquement aux jets de sauvegarde et de compétence de Force et de Dextérité.",
        "Vous avez une résistance à tous les dégâts.",
        "Vous êtes immunisé contre le poison et la maladie, bien qu'un poison ou une maladie déjà présent dans votre système ne soit que suspendu, pas neutralisé."
      ]
    },
    {
      title: "Empoisonné",
      icon: "poison-bottle",
      subtitle: "Vous êtes empoisonné",
      description: "Vous êtes empoisonné",
      reference: "PHB, pg. 292.",
      bullets: [
        "Vous avez un désavantage aux jets d'attaque et aux jets de caractéristique."
      ]
    },
    {
      title: "À terre",
      icon: "crawl",
      subtitle: "Vous êtes à terre",
      description: "Vous êtes à terre",
      reference: "PHB, pg. 292. & Homebrew (The Warrior's Codex, pg. 89.)",
      bullets: [
        "Votre seule option de mouvement est de ramper, sauf si vous vous levez.",
        "Vous avez un désavantage aux jets d'attaque.",
        "Les jets d'attaque au corps à corps contre vous ont un avantage.",
        "Les jets d'attaque à distance contre vous ont un désavantage, sauf si l'attaquant est surélevé d'au moins 3 mètres par rapport à vous."
      ]
    },
    {
      title: "Entravé",
      icon: "imprisoned",
      subtitle: "Vous êtes entravé",
      description: "Vous êtes entravé",
      reference: "PHB, pg. 292.",
      bullets: [
        "Votre vitesse devient 0, et vous ne pouvez bénéficier d'aucun bonus à votre vitesse.",
        "Vous avez un désavantage aux jets d'attaque.",
        "Les jets d'attaque contre vous ont un avantage.",
        "Vous avez un désavantage aux jets de sauvegarde de Dextérité."
      ]
    },
    {
      title: "Étourdi",
      icon: "star-swirl",
      subtitle: "Vous êtes étourdi",
      description: "Vous êtes étourdi",
      reference: "PHB, pg. 292 & Homebrew (The Warrior's Codex, pg. 89.).",
      bullets: [
        "Vous êtes incapable d'agir, ne pouvez pas bouger et ne pouvez parler qu'en balbutiant.",
        "Les jets d'attaque contre vous ont un avantage.",
        "Vous échouez automatiquement aux jets de sauvegarde et de compétence de Force et de Dextérité."
      ]
    },
    {
      title: "Inconscient",
      icon: "coma",
      subtitle: "Vous êtes inconscient",
      description: "Vous êtes inconscient",
      reference: "PHB, pg. 292. & Homebrew (The Warrior's Codex, pg. 89.)",
      bullets: [
        "Vous êtes incapable d'agir, ne pouvez ni bouger ni parler et vous ignorez ce qui vous entoure.",
        "Vous laissez tomber tout ce que vous tenez et tombez à terre.",
        "Les jets d'attaque contre vous ont un avantage.",
        "Toute attaque au corps à corps qui vous touche est un coup critique.",
        "Vous échouez automatiquement aux jets de sauvegarde et de compétence de Force et de Dextérité.",
      ]
    },
    {
      title: "Mourant",
      icon: "dead-head",
      subtitle: "Vous êtes mourant",
      description: "Vous êtes tombé à zéro point de vie et vous êtes en train de mourir",
      reference: "PHB, pg. 197.",
      bullets: [
        "Si vous êtes réduit à 0 points de vie par des dégâts qui ne vous tuent pas, vous tombez inconscient et êtes mourant.",
        "Si vous recevez une guérison, vous reprenez immédiatement conscience et ne mourez plus.",
        "Lorsque vous mourez, au début de chacun de vos tours, vous effectuez un jet de sauvegarde contre la mort. Lancez un d20 et n'ajoutez aucun modificateur.",
        "Un 10 ou plus est un succès, 9 ou moins est un échec.",
        "À votre troisième succès, vous devenez stable.",
        "À votre troisième échec, vous mourez.",
        "Lancer un 1 compte comme deux échecs.",
        "Lancer un 20 vous fait immédiatement regagner 1 point de vie.",
        "Vous pouvez également être stabilisé par un allié effectuant l'action Stabiliser et réussissant un test de Sagesse (Médecine) DD 10.",
        "Une fois stable, vous regagnez 1 point de vie après 1d4 heures."
      ]
    }
  ]
  const environment_obscurance = [
    {
      title: "Légèrement obscurci",
      icon: "bleeding-eye",
      subtitle: "Désavantage sur la perception",
      description: "Lumière tamisée, brouillard épars, feuillage modéré",
      reference: "PHB, pg. 183.",
      bullets: [
        "Les créatures ont un {@b désavantage sur les jets de Sagesse (Perception)} qui dépendent de la vue"
      ]
    },
    {
      title: "Très obscurci",
      icon: "sight-disabled",
      subtitle: "Impossible de voir",
      description: "Obscurité, brouillard opaque, feuillage dense",
      reference: "PHB, pg. 183.",
      bullets: [
        "Une créature dans une zone fortement obscurcie souffre de la {@b condition Aveuglé}."
      ]
    }
  ]

  const environment_light = [
    {
      title: "Lumière vive",
      icon: "star-pupil",
      subtitle: "Vision normale",
      description: "La lumière vive permet à la plupart des créatures de voir normalement",
      reference: "PHB, pg. 183.",
      bullets: [
        "Même les jours sombres fournissent une lumière vive, tout comme les torches, les lanternes, les feux et autres sources d'éclairage dans un rayon spécifique."
      ]
    },
    {
      title: "Lumière faible",
      icon: "semi-closed-eye",
      subtitle: "Légèrement obscurci",
      description: "Lumière faible, également appelée ombres",
      reference: "PHB, pg. 183.",
      bullets: [
        "Crée une zone {@b légèrement obscurcie}.",
        "Une zone de faible lumière est généralement une frontière entre une source de lumière vive, telle qu'une torche, et l'obscurité environnante.",
        "La douce lumière du crépuscule et de l'aube compte également comme une faible lumière. Une pleine lune particulièrement brillante pourrait baigner la terre dans une lumière faible."
      ]
    },
    {
      title: "Ténèbre",
      icon: "worried-eyes",
      subtitle: "Très obscurci",
      description: "L'obscurité crée une zone fortement obscurcie",
      reference: "PHB, pg. 183.",
      bullets: [
        "Crée une zone {@b fortement obscurcie}.",
        "Les personnages font face à l'obscurité à l'extérieur la nuit (même la plupart des nuits éclairées par la lune), dans les confins d'un donjon non éclairé ou d'un caveau souterrain, ou dans une zone d'obscurité magique."
      ]
    }
  ]

  const environment_vision = [
    {
      title: "Vision aveugle",
      icon: "one-eyed",
      subtitle: "Percevoir sans voir",
      description: "Percevez votre environnement sans vous fier à la vue, dans un certain rayon",
      reference: "PHB, pg. 183.",
      bullets: [
        "Les créatures sans yeux, comme les vases, et les créatures avec une écholocation ou des sens accrus, comme les chauves-souris et les vrais dragons, ont ce sens."
      ]
    },
    {
      title: "Vision dans le noir",
      icon: "night-vision",
      subtitle: "Vision limitée dans l'obscurité",
      description: "Une créature avec la vision dans le noir peut mieux voir dans l'obscurité ou dans des conditions de faible luminosité, dans un certain rayon",
      reference: "PHB, pgs. 183-184.",
      bullets: [
        "Dans une plage spécifiée, une créature dotée de la vision dans le noir peut {@b voir dans l'obscurité comme si l'obscurité était une lumière faible}, de sorte que les zones d'obscurité ne sont que légèrement obscurcies en ce qui concerne cette créature.",
        "Cependant, la créature ne peut pas discerner la couleur dans l'obscurité, seulement des nuances de gris.",
        "De nombreuses créatures dans les mondes de D&D, en particulier celles qui vivent sous terre, ont une vision dans le noir."
      ]
    },
    {
      title: "Vision véritable",
      icon: "eye-shield",
      subtitle: "Vision dans les ténèbres",
      description: "Une créature avec une vision véritable peut tout voir sous sa vraie forme, indépendamment de l'environnement",
      reference: "PHB, pg. 184.",
      bullets: [
        "Une créature avec la vision véritable peut, à une distance spécifique, voir dans l'obscurité normale et magique, voir des créatures et des objets invisibles, détecter automatiquement des illusions visuelles et réussir des jets de sauvegarde contre elles, et percevoir la forme originale d'un métamorphe ou d'une créature qui est transformé par magie.",
        "De plus, la créature peut voir dans le plan éthéré."
      ]
    }
  ]

  const environment_cover = [
    {
      title: "Abri partiel",
      icon: "broken-shield",
      subtitle: "Muret, mobilier, créatures",
      description: "Une cible bénéficie d'un abri partiel si un obstacle bloque au moins la moitié de son corps",
      reference: "PHB, pg. 196.",
      bullets: [
        "L'obstacle peut être un muret, un gros meuble, un tronc d'arbre étroit ou une créature, que cette créature soit un ennemi ou un ami.",
        "Une cible à moitié couverte bénéficie d'un {@b bonus de +2 à la CA et aux jets de sauvegarde de Dextérité}.",
        "Si une cible se trouve derrière plusieurs sources de couverture, seul le degré de couverture le plus protecteur s'applique."
      ]
    },
    {
      title: "Abri important",
      icon: "cracked-shield",
      subtitle: "Herse, meurtrière",
      description: "Une cible bénéficie d'un abri important si environ les trois quarts de celle-ci sont couverts par un obstacle",
      reference: "PHB, pg. 196.",
      bullets: [
        "L'obstacle peut être une herse, une meurtrière ou un gros tronc d'arbre.",
        "Une cible ayant un abri important bénéficie d'un {@b bonus de +5 à la CA et aux jets de sauvegarde de Dextérité}.",
        "Si une cible se trouve derrière plusieurs sources de couverture, seul le degré de couverture le plus protecteur s'applique."
      ]
    },
    {
      title: "Abri total",
      icon: "shield",
      subtitle: "Complètement dissimulé",
      description: "Une cible a un abri total si elle est complètement cachée par un obstacle",
      reference: "PHB, pg. 196.",
      bullets: [
        "Une cible avec un abri total {@b ne peut pas être ciblée directement} par une attaque ou un sort, bien que certains sorts puissent atteindre une telle cible en l'incluant dans une zone d'effet.",
        "Si une cible se trouve derrière plusieurs sources de couverture, seul le degré de couverture le plus protecteur s'applique."
      ]
    }
  ]

  const buttonTab = "ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0"

  const handleClick = (name) => {
    setSelected(selected === name ? undefined : name)
  }

  const {toggleStateChange, getToggleState, addToggleableState} = ToggleState()

  function populateDiv(list, category, rbg) {
    return <>
      <div className="section-row section-subtitle text fontsize">
        You can move at any time during your turn (before, after, or during actions).
      </div>
      <div className="section-row" id="basic-movement">
        {list.map(action => <>
          <div className="item itemsize" onClick={() => handleClick(action.title)}>
            <div className={"item-icon iconsize icon-" + action.icon}></div>
            <div className="item-text-container text">
              <div className="item-title">{action.title}</div>
              <div className="item-desc">{action.subtitle}</div>
            </div>
          </div>
          {selected === action.title ?
            <div className="section-container modal-container" id="modal-container"
                 style={{backgroundColor: rbg, borderColor: rbg}}>
              <div className="section-title" id="modal-title">{action.title}
                <span className="float-right">{category}</span>
              </div>
              <div className="section-content">
                <p style={{marginTop: 0}}>{action.description}</p>
                {action.bullets ? <div id={"modal-bullets"}>
                  {action.bullets.map((bullet, idx) => <>
                    <p className={"fonstsize"} style={{marginTop: 0}}>{RenderModule({}).render(bullet)}</p>
                    {idx !== action.bullets.length - 1 ? <hr/> : ""}
                  </>)}
                </div> : ""}
              </div>
            </div> : ""}
        </>)}
      </div>
    </>;
  }

  return (<div className="view-col-group--cancer h-100 mh-0">
      <div className="container view-col-wrapper view-col-wrapper--cancer">
        <Tabs className="view-col" id="contentwrapper">
          <TabList className="w-100 ve-flex" id="stat-tabs">
            <Tab className={buttonTab + " ui-tab__btn-tab-head--active"}>Actions de Joueurs & Références Rapides</Tab>
          </TabList>
          <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className={"w-100 stats"}>
              <thead>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <tr>
                <th className="stats__th-name ve-text-left pb-0 " colSpan="6" data-page="races.html">
                  <div className="split-v-end">
                    <div className="ve-flex-v-center">
                      <h1 className="stats__h-name copyable m-0">Actions de Joueurs & Références Rapides</h1>
                    </div>
                  </div>
                </th>
              </tr>
              </thead>
              <tbody className="page fontsize" data-size="fullscreen">
              {/*Movement section*/}
              <tr>
                <td className="pt-0" colSpan="6">
                  <div id="section-movement" className="section-container">
                    <div className="section-title">
                      Mouvement <span className="float-right">limited by movement speed
                      <span
                        className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                        onClick={() => toggleStateChange("Movement")}
                      >
                        [{getToggleState("Movement") ? "–" : "+"}]
                      </span>
                      </span>
                    </div>
                    {getToggleState("Movement") ? <div className="section-content">
                      {populateDiv(movement, "Mouvement", `rgb(128, 0, 0)`)}
                    </div> : ""}
                  </div>
                </td>
              </tr>

              {/* Action section */}
              <tr>
                <td className="pt-0" colSpan="6">
                  <div id="section-action" className="section-container">
                    <div className="section-title">
                      Action <span className="float-right">1/turn
                      <span
                        className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                        onClick={() => toggleStateChange("Action")}
                      >
                        [{getToggleState("Action") ? "–" : "+"}]
                      </span>
                      </span>
                    </div>
                    {getToggleState("Action") ? <div className="section-content">
                      {populateDiv(actions, "Action", `black`)}
                    </div> : ""}
                  </div>
                </td>
              </tr>

              {/* Bonus action section */}
              <tr>
                <td className="pt-0" colSpan="6">
                  <div id="section-bonus-action" className="section-container">
                    <div className="section-title">
                      Bonus action <span className="float-right">max. 1/turn
                      <span
                        className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                        onClick={() => toggleStateChange("Bonus-Action")}
                      >
                        [{getToggleState("Bonus-Action") ? "–" : "+"}]
                      </span>
                      </span>
                    </div>
                    {getToggleState("Bonus-Action") ? <div className="section-content">
                      {populateDiv(bonusAction, "Action Bonus", `indigo`)}
                    </div> : ""}
                  </div>
                </td>
              </tr>

              {/* Reaction section */}
              <tr>
                <td className="pt-0" colSpan="6">
                  <div id="section-reaction" className="section-container">
                    <div className="section-title">
                      Reaction <span className="float-right">max. 1/round
                      <span
                        className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                        onClick={() => toggleStateChange("Reaction")}
                      >
                        [{getToggleState("Reaction") ? "–" : "+"}]
                      </span>
                      </span>
                    </div>
                    {getToggleState("Reaction") ? <div className="section-content">
                      {populateDiv(reaction, "Reaction", `DarkOliveGreen`)}
                    </div> : ""}
                  </div>
                </td>
              </tr>

              {/* Condition section */}
              <tr>
                <td className="pt-0" colSpan="6">
                  <div id="section-condition" className="section-container">
                    <div className="section-title">
                      Condition<span className="float-right">
                      <span
                        className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                        onClick={() => toggleStateChange("Condition")}
                      >
                        [{getToggleState("Condition") ? "–" : "+"}]
                      </span>
                    </span>
                    </div>
                    {getToggleState("Condition") ? <div className="section-content">
                      {populateDiv(condition, "Condition", `FireBrick`)}
                    </div> : ""}
                  </div>
                </td>
              </tr>

              {/* Environmental section */}

              <tr>
                <td className="pt-0" colSpan="6">
                  <div id="section-environment" className="section-container">
                    <div className="section-title">
                      Environmental Effects
                      <span className="float-right">
                      <span
                        className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                        onClick={() => toggleStateChange("Environmental-Effects")}
                      >
                        [{getToggleState("Environmental-Effects") ? "–" : "+"}]
                      </span>
                    </span>
                    </div>
                    {getToggleState("Environmental-Effects") ? <div className="section-content">
                      <div className="section-row section-subtitle text fontsize">
                        Effects that obscure vision can prove a significant hindrance to most adventuring tasks.
                      </div>
                      <div className="section-row" id="environment-obscurance">
                        {populateDiv(environment_obscurance, "Environnement", `ForestGreen`)}
                      </div>
                      <div className="section-row section-subtitle text fontsize">
                        The presence or absence of light in an environment creates three categories of illumination.
                      </div>
                      <div className="section-row" id="environment-light">
                        {populateDiv(environment_light, "Environnement", `ForestGreen`)}
                      </div>
                      <div className="section-row section-subtitle text fontsize">
                        Some creatures have extraordinary senses that allow them to perceive their environment.
                      </div>
                      <div className="section-row" id="environment-vision">
                        {populateDiv(environment_vision, "Environnement", `ForestGreen`)}
                      </div>
                      <div className="section-row section-subtitle text fontsize">
                        Obstacles can provide cover during combat, making a target more difficult to harm.
                      </div>
                      <div className="section-row" id="environment-cover">
                        {populateDiv(environment_cover, "Environnement", `ForestGreen`)}
                      </div>
                    </div> : ""}
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}