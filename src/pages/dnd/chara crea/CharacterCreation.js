import {Main} from "../../../layout/Layouts";
import React, {useState} from "react";
import {Link} from "react-router-dom";

export const CharacterCreation = () => {
  return (
    <Main name={"Création d'un personnage"} lastUnit={true}>
      <h2>Player Guide</h2>
    </Main>
  )
}
export const PlayerRaces = () => {
  return (
    <Main name={"Races"} lastUnit={true}>
      <h2>Race</h2>
    </Main>
  )
}

export const PlayerClasses = () => {
  return (
    <Main name={"Classes"} lastUnit={true}>
      <h2>Classes</h2>
    </Main>
  )
}

export const PlayerBackground = () => {
  return (
    <Main name={"Historique"} lastUnit={true}>
      <h2>Historique</h2>
    </Main>
  )
}

export const PlayerEquipment = () => {
  return (
    <Main name={"Équipement"} lastUnit={true}>
      <h2>Équipement</h2>
    </Main>
  )
}

export const Personalisation = () => {
  return (
    <Main name={"Personalisation"} lastUnit={true}>
      <h2>Personalisation</h2>
    </Main>
  )
}

export const Multiclass = () => {
  return (
    <Main name={"Multiclassage"} lastUnit={true}>
      <h2>Multiclassage</h2>
    </Main>
  )
}

export const FeatList = () => {
  const [feats, setFeats] = useState(require("../../../resources/feats.json"))
  const [sorting, setSorting] = useState("")
  const [categories, setCategories] = useState([])

  const columns = [
    {id: "Alphabetically", sortId: "name", categories: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    // {id: "By Level", sortId: "level", categories: "0123456789"},
    // {id: "By School", sortId: "school", categories: ["Abjuration","Conjuration","Divination","Enchantement","Evocation","Illusion","Necromancie","Transmutation"]},
    // {id: "By Caster", sortId: "caster", categories: [""]}
  ]

  const getCategories = (don, type) => {

    if (type === "res") {
      return []
    }
    let cats = columns.filter((a) => a.sortId.startsWith(don))[0].categories
    if (typeof cats === typeof "") {
      cats = cats.split('')
    }
    cats.sort()
    if (type === "des") {
      cats.reverse()
    }
    return cats
  }


  const handleSort = (type) => {
    const shouldReset = sorting === type + ".des"
    const shouldAscend = !sorting.startsWith(type)
    const shouldDescend = sorting === type + ".asc"

    if (shouldAscend) {
      // console.log("Should now ascend: " + type + ".asc")
      setSorting(type + ".asc")
      setCategories(getCategories(type, "asc"))
    } else if (shouldDescend) {
      // console.log("Should now descend: " + type + ".des")
      setSorting(type + ".des")
      setCategories(getCategories(type, "des"))
    } else if (shouldReset) {
      // console.log("Should reset.")
      type = "id"
      setSorting("")
      setCategories(getCategories(type, "res"))
    }

    feats.sort(function (a, b) {
      let textA = a[type].toString().toUpperCase();
      let textB = b[type].toString().toUpperCase();
      if (shouldAscend || shouldReset) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      }
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
    })
  }

  return (
    <Main name={"Liste des Dons"} lastUnit={true}>
      {columns.map((col) => {
        return (
          <button type="button" className={"sort ve-btn ve-btn-default ve-btn-xs"}
                  onClick={() => handleSort(col.sortId)}>
            {col.id}
            <span
              className={"lst__caret" + (sorting.startsWith(col.sortId) ? " lst__caret--active" : "") + (sorting === col.sortId + ".des" ? " lst__caret--reverse" : "")}></span>
          </button>)
      })}
      {categories.length === 0 ?
        <><br/><br/>
          {feats.map((feat) =>
            <li style={{display: "block", width: "33%", float: "left"}}>
              <Link to={"/TTRPG-wiki/dnd/player/personalisation/dons/"+feat.id}>{feat.name}</Link>
            </li>
          )}
        </> :
        <>
          {categories.map((category) => {
            let subFeats = []
            // for (let spell of spells){
            //   console.log(spell.school.toUpperCase().replace("É","E"))
            // }
            if (sorting.startsWith("name")) {
              subFeats = structuredClone(feats).filter((a) => a.name.toUpperCase().startsWith(category.toUpperCase()))
            }
            else if (sorting.startsWith("level")) {
              subFeats = structuredClone(feats).filter((a) => a.level.toString() === category)
            }
            else if (sorting.startsWith("school")) {
              subFeats = structuredClone(feats).filter((a) => a.school.toUpperCase().replace("É","E") === category.toUpperCase())
            }
            return (<>
              <hr style={{margin:0,borderTop: "1px solid #fff",}}/>
              <h2 style={{marginTop:"10px"}}>- {category} -</h2>
              <ul>
                {subFeats.map((feat) =>
                  <li style={{display: "block", width: "33%", float: "left"}}><Link
                    to={"/TTRPG-wiki/dnd/player/spells/"+feat.id}>{feat.name}</Link></li>
                )}
              </ul>
            </>)
          })}
        </>
      }


    </Main>
  )
}

export const Caracteristique = () => {
  return (
    <Main name={"Caracteristique"} lastUnit={true}>
      <h2>Caracteristique</h2>
    </Main>
  )
}

export const Aventure = () => {
  return (
    <Main name={"Aventure"} lastUnit={true}>
      <h2>Aventure</h2>
    </Main>
  )
}

export const Combat = () => {
  return (
    <Main name={"Combat"} lastUnit={true}>
      <h2>Combat</h2>
    </Main>
  )
}

export const Incantation = () => {
  return (
    <Main name={"Incantation"} lastUnit={true}>
      <h2>Incantation</h2>
    </Main>
  )
}

export const SpellList = () => {
  const [spells, setSpells] = useState(require("../../../resources/spells.json"))
  const [sorting, setSorting] = useState("")
  const [categories, setCategories] = useState([])

  const columns = [
    {id: "Alphabetically", sortId: "name", categories: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {id: "By Level", sortId: "level", categories: "0123456789"},
    {id: "By School", sortId: "school", categories: ["Abjuration","Conjuration","Divination","Enchantement","Evocation","Illusion","Necromancie","Transmutation"]},
    // {id: "By Caster", sortId: "caster", categories: [""]}
  ]

  const getCategories = (sort, type) => {

    if (type === "res") {
      return []
    }
    let cats = columns.filter((a) => a.sortId.startsWith(sort))[0].categories
    if (typeof cats === typeof "") {
      cats = cats.split('')
    }
    cats.sort()
    if (type === "des") {
      cats.reverse()
    }
    return cats
  }


  const handleSort = (type) => {
    const shouldReset = sorting === type + ".des"
    const shouldAscend = !sorting.startsWith(type)
    const shouldDescend = sorting === type + ".asc"

    if (shouldAscend) {
      // console.log("Should now ascend: " + type + ".asc")
      setSorting(type + ".asc")
      setCategories(getCategories(type, "asc"))
    } else if (shouldDescend) {
      // console.log("Should now descend: " + type + ".des")
      setSorting(type + ".des")
      setCategories(getCategories(type, "des"))
    } else if (shouldReset) {
      // console.log("Should reset.")
      type = "id"
      setSorting("")
      setCategories(getCategories(type, "res"))
    }

    spells.sort(function (a, b) {
      let textA = a[type].toString().toUpperCase();
      let textB = b[type].toString().toUpperCase();
      if (shouldAscend || shouldReset) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      }
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
    })
  }

  return (
    <Main name={"Liste des Sorts"} lastUnit={true}>
      {columns.map((col) => {
        return (
          <button type="button" className={"sort ve-btn ve-btn-default ve-btn-xs"}
                  onClick={() => handleSort(col.sortId)}>
            {col.id}
            <span
              className={"lst__caret" + (sorting.startsWith(col.sortId) ? " lst__caret--active" : "") + (sorting === col.sortId + ".des" ? " lst__caret--reverse" : "")}></span>
          </button>)
      })}
      {categories.length === 0 ?
        <><br/><br/>
          {spells.map((spell) =>
            <li style={{display: "block", width: "33%", float: "left"}}>
              <Link to={"/TTRPG-wiki/dnd/player/spells/"+spell.id}>{spell.name}</Link>
            </li>
          )}
        </> :
        <>
        {categories.map((category) => {
          let subSpells = []
          // for (let spell of spells){
          //   console.log(spell.school.toUpperCase().replace("É","E"))
          // }
          if (sorting.startsWith("name")) {
            subSpells = structuredClone(spells).filter((a) => a.name.toUpperCase().startsWith(category.toUpperCase()))
          }
          else if (sorting.startsWith("level")) {
            subSpells = structuredClone(spells).filter((a) => a.level.toString() === category)
          }
          else if (sorting.startsWith("school")) {
            subSpells = structuredClone(spells).filter((a) => a.school.toUpperCase().replace("É","E") === category.toUpperCase())
          }
          return (<>
            <hr style={{margin:0,borderTop: "1px solid #fff",}}/>
            <h2 style={{marginTop:"10px"}}>- {category} -</h2>
            <ul>
              {subSpells.map((spell) =>
                <li style={{display: "block", width: "33%", float: "left"}}><Link
                  to={"/TTRPG-wiki/dnd/player/spells/"+spell.id}>{spell.name}</Link></li>
              )}
            </ul>
          </>)
        })}
        </>
      }


    </Main>
  )
}

export const Conditions = () => {
  return (
    <Main name={"Conditions"} lastUnit={true}>
      <h2>Conditions</h2>
    </Main>
  )
}