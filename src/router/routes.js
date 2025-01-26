import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import {PlayerGuide, Resources, Rules} from "../pages/dnd/DnD";
import DnDHome from "../pages/dnd/DnDHome";
import {
  BackgroundDetail,
  ClassDetail,
  EquipmentDetail,
  FeatDetails,
  RacesDetail,
  Spells
} from "../pages/dnd/chara crea/Details";
import React from "react";
import {Layout5e, Layout5eHome, LayoutHeader, LayoutSystemSelection} from "../5etoolLayout/5eLayout";
import {
  Aventure,
  Caracteristique,
  CharacterCreation,
  Combat,
  Conditions,
  FeatList,
  Incantation,
  Multiclass,
  Personalisation,
  PlayerBackground,
  PlayerClasses,
  PlayerEquipment,
  PlayerRaces,
  SpellList
} from "../pages/dnd/chara crea/CharacterCreation";
import {Dnd5eClasses} from "../5etoolLayout/dnd/Classes";
import AideDD from "../pages/AideDD";
import {Dnd5eSpells} from "../5etoolLayout/dnd/Spells";
import {Dnd5eRaces} from "../5etoolLayout/dnd/Races";
import {Dnd5eFeats} from "../5etoolLayout/dnd/Feats";
import {Dnd5eBackgrounds} from "../5etoolLayout/dnd/Backgrounds";
import {Dnd5eOptionFeatures} from "../5etoolLayout/dnd/OptionAndFeatures";
import {Dnd5eItems} from "../5etoolLayout/dnd/Items";
import {Dnd5eRules} from "../5etoolLayout/dnd/Rules";
import {Dnd5eCondition} from "../5etoolLayout/dnd/Condition";
import {Dnd5eBestiary} from "../5etoolLayout/dnd/Bestiary";
import {Changelog} from "../ChangeLog/Changelog";
import {DnDCheatsheet} from "../5etoolLayout/dnd/Cheatsheet";

const routes = [
  {
    id: "base",
    path: "",
    element: <>
      <Link to="old">To AideDD Layout</Link><br/>
      <Link to="TTRPG-wiki">To 5e Layout</Link><br/>
      <Link to="tests">To test Layout</Link>
    </>,
    children: []
  },
  {
    id: "homepage",
    path: "/old",
    element: <AideDD/>,
    children: [
      {
        id: "home",
        path: "",
        element: <Home/>
      },
      {
        id: "dnd-system-old",
        path: "dnd",
        element: <Outlet/>,
        redirect: "dnd",
        children: [
          {
            id: "dnd-home",
            path: "",
            element: <DnDHome/>
          },
          {
            id: "rules",
            path: "rules",
            element: <Rules/>,
            children: [
              {
                id: "rules.intro",
                path: "",
                element: <></>
              }
            ]
          },
          {
            id: "player-guide",
            path: "player",
            element: <PlayerGuide/>,
            children: [
              {
                id: "player.intro",
                path: "",
                element: <CharacterCreation/>
              },
              {
                id: "races",
                path: "races",
                element: <Outlet/>,
                children: [
                  {
                    id: "race-intro",
                    path: "",
                    element: <PlayerRaces/>,
                    children: []
                  },
                  {
                    id: "race-details",
                    path: ":raceId",
                    element: <RacesDetail/>,
                    children: []
                  },
                ]
              },
              {
                id: "class",
                path: "classes",
                element: <Outlet/>,
                children: [
                  {
                    id: "class-intro",
                    path: "",
                    element: <PlayerClasses/>,
                    children: []
                  },
                  {
                    id: "class-details",
                    path: ":classId",
                    element: <ClassDetail/>,
                    children: []
                  }
                ]
              },
              {
                id: "backgrounds",
                path: "backgrounds",
                element: <Outlet/>,
                children: [
                  {
                    id: "background-intro",
                    path: "",
                    element: <PlayerBackground/>,
                    children: []
                  },
                  {
                    id: "background-details",
                    path: ":backgroundId",
                    element: <BackgroundDetail/>,
                    children: []
                  }
                ]
              },
              {
                id: "equipments",
                path: "equipments",
                element: <Outlet/>,
                children: [
                  {
                    id: "equipment-intro",
                    path: "",
                    element: <PlayerEquipment/>,
                    children: []
                  },
                  {
                    id: "equipment-details",
                    path: ":equipementId",
                    element: <EquipmentDetail/>,
                    children: []
                  }
                ]
              },
              {
                id: "incantation",
                path: "incantation",
                element: <Incantation/>,
                children: []
              },
              {
                id: "personalize",
                path: "personalisation",
                element: <Outlet/>,
                children: [
                  {
                    id: "personalize-intro",
                    path: "",
                    element: <Personalisation/>,
                    children: []
                  },
                  {
                    id: "multiclass",
                    path: "multiclassage",
                    element: <Multiclass/>,
                    children: []
                  },
                  {
                    id: "feats",
                    path: "dons",
                    element: <Outlet/>,
                    children: [
                      {
                        id: "feats-list",
                        path: "",
                        element: <FeatList/>,
                        children: []
                      },
                      {
                        id: "feats-details",
                        path: ":featId",
                        element: <FeatDetails/>,
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                id: "abilities",
                path: "caracteristique",
                element: <Caracteristique/>,
                children: []
              },
              {
                id: "adventure",
                path: "aventure",
                element: <Aventure/>,
                children: []
              },
              {
                id: "combat",
                path: "combat",
                element: <Combat/>,
                children: []
              },
              {
                id: "spells",
                path: "spells",
                element: <Outlet/>,
                children: [
                  {
                    id: "spell-intro",
                    path: "",
                    element: <SpellList/>,
                    children: []
                  },
                  {
                    id: "spell-details",
                    path: ":spellId",
                    element: <Spells/>,
                    children: []
                  }
                ]
              },
              {
                id: "conditions",
                path: "conditions",
                element: <Conditions/>,
                children: []
              }

            ]
          },
          {
            id: "resources",
            path: "resources",
            element: <Resources/>,
            children: [
              {
                id: "resources-intro",
                path: "",
                element: <></>
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tests",
    path: "/TTRPG-wiki",
    element: <LayoutHeader/>,
    children: [
      {
        id: "dnd-system",
        path: "dnd5e",
        element: <Layout5e title={"DnD 5e"} base={"/dnd5e"}/>,
        children: [
          {
            id: "DnD5eHome",
            path: "",
            element: <Layout5eHome/>
          },
          {
            id: "5eRaces",
            path: "races",
            element: <Dnd5eRaces/>,
          },
          {
            id: "5eClasses",
            path: "classes",
            element: <Dnd5eClasses/>,
          },
          {
            id: "5eFeat",
            path: "feats",
            element: <Dnd5eFeats/>,
          },
          {
            id: "5eFeaturesOptions",
            path: "optionsFeatures",
            element: <Dnd5eOptionFeatures/>,
          },
          {
            id: "5eBackgrounds",
            path: "backgrounds",
            element: <Dnd5eBackgrounds/>,
          },
          {
            id: "5eItems",
            path: "items",
            element: <Dnd5eItems/>,
          },
          {
            id: "5eSpells",
            path: "spells",
            element: <Dnd5eSpells/>,
          },
          {
            id: "5eRules",
            path: "rules",
            element: <Dnd5eRules/>,
          },
          {
            id: "5eConditions",
            path: "conditions",
            element: <Dnd5eCondition/>,
          },
          {
            id: "5eBestiary",
            path: "bestiary",
            element: <Dnd5eBestiary/>,
          },
          {
            id: "5eCheatsheet",
            path: "cheatsheet",
            element: <DnDCheatsheet/>,
          }
        ]
      },
      {
        id: "pathfinder-system",
        path: "pathfinder2e",
        element: <Layout5e title={"Pathfinder 2e"} base={"/pathfinder2e"}/>,
        children: [
          {
            id: "Pathfinder2eHome",
            path: "",
            element: <Layout5eHome/>
          },
        ]
      },

      {
        id: "5eHome",
        path: "",
        element: <LayoutSystemSelection title={"System Selection"}/>
      },
      {
        id: "changelog",
        path: "changelog",
        element: <Changelog/>
      }
    ]
  }

]

// export const router = createHashRouter(
export const router = createBrowserRouter(
  routes
)