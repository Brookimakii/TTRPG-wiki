import {CHARACTER_CREATION} from "../../menu/Menus";

import {Aside} from "../../layout/Layouts";
import {Outlet} from "react-router-dom";
import SecondaryMenu from "../../menu/SecondaryMenu";


export const Rules = () => {
  return (
    <>
      <Aside name="Rules">
        <SecondaryMenu links={[]}/>
      </Aside>
      <Outlet/>
    </>
  )
}

export const PlayerGuide = () => {
  return (
    <>
      <Aside name="Player Guide">
        <SecondaryMenu links={CHARACTER_CREATION}/>
      </Aside>
      <Outlet/>
    </>
  )
}

export const Resources = () => {
  return (
    <>
      <Aside name="Resources">
        <SecondaryMenu links={[]}/>
      </Aside>
      <Outlet/>
    </>
  )
}

export const Tips = () => {
  return (
    <>
      <Aside name="Tips">
        <SecondaryMenu links={[]}/>
      </Aside>
      <Outlet/>
    </>
  )
}

export const Universe = () => {
  return (
    <>
      <Aside name="Universe">
        <SecondaryMenu links={[]}/>
      </Aside>
      <Outlet/>
    </>
  )
}