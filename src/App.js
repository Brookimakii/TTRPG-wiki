import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes";
import React from "react";
import { ChangelogPopup } from './components/ChangelogPopup';

export default App;

function App() {

  return (
    <>
      <ChangelogPopup />
      <RouterProvider router={router}/>
    </>
  )
}
