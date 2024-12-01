import Header from "../layout/Header";
import {Outlet} from "react-router-dom";
import Footer from "../layout/Footer";
import React from "react";
import "../assets/scss/layout.scss"
import "../assets/scss/all.scss"
import "../assets/scss/typography.scss"
import "../assets/scss/rest.scss"
import "../javascript/test.scss"
import "../javascript/test.scss"
import "../assets/scss/spells.scss"

export default function AideDD(){
  return (<>
    <Header/>
    <div className="main">
      <div className="inner typography line">
        <Outlet/>
      </div>
    </div>
    <Footer/>
  </>)
}