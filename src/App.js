import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes";
import React from "react";

export default App;

function App() {

  return (
    <RouterProvider router={router}/>
  )
}
