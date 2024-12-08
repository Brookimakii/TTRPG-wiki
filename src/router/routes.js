import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import {PlayerGuide, Resources, Rules, Tips, Universe} from "../pages/dnd/DnD";
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
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {
  Layout5e, Layout5eHome
} from "../layout/5eLayout";
import {
  Aventure,
  Caracteristique,
  CharacterCreation, Combat, Conditions, FeatList, Incantation, Multiclass, Personalisation,
  PlayerBackground,
  PlayerClasses, PlayerEquipment,
  PlayerRaces, SpellList
} from "../pages/dnd/chara crea/CharacterCreation";
import {Layout5eClasses} from "../layout/5eClasses";
import AideDD from "../pages/AideDD";
import {Layout5eSpells} from "../layout/5eSpells";
import {Layout5eRaces} from "../layout/layout5eRaces";
import {Layout5eFeats} from "../layout/layout5eFeats";
import {Layout5eBackgrounds} from "../layout/layout5eBackgrounds";
import {Layout5eOptionFeatures} from "../layout/layout5eOptionFeatures";
import {Layout5eItems} from "../layout/layout5eItems";
import {Layout5eRules} from "../layout/layout5eRules";
import {Layout5eCondition} from "../layout/layout5eCondition";
import {Layout5eBestiary} from "../layout/layout5eBestiary";

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
        id: "dnd-system",
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
    element: <Layout5e/>,
    children: [
      {
        id: "5eHome",
        path: "",
        element: <Layout5eHome/>
      },
      {
        id: "5eRaces",
        path: "races",
        element: <Layout5eRaces/>,
      },
      {
        id: "5eClasses",
        path: "classes",
        element: <Layout5eClasses/>,
      },
      {
        id: "5eFeat",
        path: "feats",
        element: <Layout5eFeats/>,
      },
      {
        id: "5eFeaturesOptions",
        path: "optionsFeatures",
        element: <Layout5eOptionFeatures/>,
      },
      {
        id: "5eBackgrounds",
        path: "backgrounds",
        element: <Layout5eBackgrounds/>,
      },
      {
        id: "5eItems",
        path: "items",
        element: <Layout5eItems/>,
      },
      {
        id: "5eSpells",
        path: "spells",
        element: <Layout5eSpells/>,
      },
      {
        id: "5eRules",
        path: "rules",
        element: <Layout5eRules/>,
      },
      {
        id: "5eConditions",
        path: "conditions",
        element: <Layout5eCondition/>,
      },
      {
        id: "5eBestiary",
        path: "bestiary",
        element: <Layout5eBestiary/>,
      }
    ]
  }

]

// export const router = createHashRouter(
export const router = createBrowserRouter(
  routes
)