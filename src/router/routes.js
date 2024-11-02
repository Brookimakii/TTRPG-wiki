import {createBrowserRouter, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import {PlayerGuide, Resources, Rules, Tips, Universe} from "../pages/dnd/DnD";
import {CharacterCreation, PlayerClasses, PlayerRaces} from "../pages/dnd/chara crea/CharacterCreation";
import DnDHome from "../pages/dnd/DnDHome";
import {ClassDetail, RacesDetail} from "../pages/dnd/chara crea/Details";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {Layout5e} from "../layout/5eLayout";

const routes = [
  {
    id: "homepage",
    path: "/TTRPG-wiki",
    element: <>

      <Header/>
      <div className="main">
        <div className="inner typography line">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </>,
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
    path: "/tests",
    element: <Layout5e/>
  }

]

// export const router = createHashRouter(
export const router = createBrowserRouter(
  routes
)