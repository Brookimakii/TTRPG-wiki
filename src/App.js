import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes";
import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default App;

function App() {

  return (

      <RouterProvider router={router}/>
  )
}
