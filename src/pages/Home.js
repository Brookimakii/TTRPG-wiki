import PrimaryMenu from "../menu/PrimaryMenu";
import {SYSTEM_SELECTION} from "../menu/Menus";
import {Main} from "../layout/Layouts";
import {Link, Outlet} from "react-router-dom";

export default function Home() {
  return (
    <>
      <PrimaryMenu links={SYSTEM_SELECTION}/>
      <Main name={"Table Tops RPG"} size={3}>
      </Main>
      <Main name={"Systems"} size={2}>
        {/*<Link to="/dnd" >DND 5e</Link>*/}

        <a href="/dnd">DND 5e</a>
      </Main>
      <Outlet/>
    </>
  )
}