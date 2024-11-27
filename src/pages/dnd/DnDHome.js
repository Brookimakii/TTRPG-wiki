import {Main} from "../../layout/Layouts";
import {Link} from "react-router-dom";

export default function DnDHome(){
  return (
    <>
      <Main name={"Dungeon & Dragon"} size={3}>
        <Link to="player">Créer son personnage</Link>
      </Main>
      <Main name={"Dungeon & Dragon"} size={2}></Main>
    </>
  )
}