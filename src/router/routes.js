import {createBrowserRouter, Link} from "react-router-dom";
import React from "react";
import {Layout5e, Layout5eHome, LayoutHeader, LayoutSystemSelection} from "../5etoolLayout/5eLayout";
import {Dnd5eClasses} from "../5etoolLayout/dnd/Classes";
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
import FilterDialog from "../5etoolLayout/FilterDialog";
import ParentComponent from "../5etoolLayout/FilterDialogManager";
import Report from "../ChangeLog/ReportSystem";

const routes = [
  {
    id: "base",
    path: "",
    element: <>
      <Link to="TTRPG-wiki">To 5e Layout</Link><br/>
      <Link to="tests">To test Layout</Link>
    </>,
    children: []
  },
  {
    id: "homepage",
    path: "/TTRPG-wiki",
    element: <LayoutHeader/>,
    children: [
      {
        id: "5eHome",
        path: "",
        element: <LayoutSystemSelection title={"System Selection"}/>
      },
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
        id: "changelog",
        path: "changelog",
        element: <Changelog/>
      },
      {
        id: "report",
        path: "report",
        element: <Report/>
      }
    ]
  },
  // {
  //   id: "test",
  //   path: "/tests",
  //   element: <ParentComponent/>,
  //   children: []
  // }

]

export const router = createBrowserRouter(
  routes
)