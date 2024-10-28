import {Main} from "../layout/Layouts";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <Main name={"Table Tops RPG"} size={3}>
      </Main>
      <Main name={"Systems"} size={2}>
        <Link to="dnd">DND 5e</Link>
      </Main>
    </>
  )
}