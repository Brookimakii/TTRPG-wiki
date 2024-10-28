import {createBrowserRouter, createHashRouter, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import {DnD, PlayerGuide, Resources, Rules, Tips, Universe} from "../pages/dnd/DnD";
import {CharacterCreation, PlayerRaces} from "../pages/dnd/chara crea/CharacterCreation";
import DnDHome from "../pages/dnd/DnDHome";
import {RacesDetail} from "../pages/dnd/chara crea/Details";
import ReactDOM from "react-dom/client";
import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const routes = [
  {
    id: "homepage",
    path: "/TTRPG-wiki",
    element: <>

      <Header />
      <div class="main">
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
        element: <DnD/>,
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
                path: "class",
                element: "",
                children: [
                  {
                    id: "class-details",
                    path: ":classId",
                    element: "",
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
          },
          {
            id: "tips",
            path: "tips",
            element: <Tips/>,
            children: [
              {
                id: "tips-intro",
                path: "",
                element: <></>
              }
            ]
          },
          {
            id: "universe",
            path: "universes",
            element: <Universe/>,
            children: [
              {
                id: "universe-intro",
                path: "",
                element: <></>
              }
            ]
          }
        ]
      }
    ]
  }


]

// export const router = createHashRouter(
export const router = createBrowserRouter(
  routes
)