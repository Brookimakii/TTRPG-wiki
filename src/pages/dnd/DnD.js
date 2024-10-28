import PrimaryMenu from "../../menu/PrimaryMenu";
import {CHARACTER_CREATION, DND_SELECTOR} from "../../menu/Menus";

import {Aside} from "../../layout/Layouts";
import {Outlet} from "react-router-dom";
import SecondaryMenu from "../../menu/SecondaryMenu";

export const DnD = () => {
  // Header(DND_SELECTOR)
  return (
    <>
      {/*<PrimaryMenu links={DND_SELECTOR}/>*/}
      {/*<Header primaryMenu={DND_SELECTOR}/>*/}
      {/*<Aside name="Character Creation">*/}
      {/*  <SecondaryMenu links={CHARACTER_CREATION}/>*/}
      {/*</Aside>*/}
      {/*<Main name={"Dungeon & Dragon"} lastUnit={true}>*/}

      {/*</Main>*/}
      <Outlet/>
    </>
  )
}
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