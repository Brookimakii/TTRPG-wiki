import {useParams} from "react-router-dom";
import {useState} from "react";
import racesData from "../../../resources/races.json";
import {Main} from "../../../layout/Layouts";
import {Author, Citation, Dialogue, Encadre, Officiel} from "../../../layout/BoxesLayout";
import Markdown from "react-markdown";


function getResources(data, id) {
  for (let r in data) {
    let obj = racesData[r]
    if (obj.id === id) {
      // console.log(obj)
      return obj
    }
  }
}

function formatContent(contents: [{}]) {
  if (!contents) return
  return contents.map((obj) => {
    const key = Object.keys(obj)[0];
    const value = obj[key]
    console.log(obj)
    switch (key) {
      case "title2":
        return <h2>{value}</h2>;
      case "title3":
        return <h3>{value}</h3>;
      case "title4":
        return <h4>{value}</h4>;
      case "title5":
        return <h5>{value}</h5>;
      case "title6":
        return <h6>{value}</h6>;
      case "dialogue":
        return <Dialogue>{value}</Dialogue>;
      case "encadre":
        return <Encadre>{value}</Encadre>;
      case "citation": {
        let citation = JSON.parse(value);
        return <Citation author={citation.author} location={citation.location}>{citation.content}</Citation>;
      }
      case "author":
        return <Author>{value}</Author>;
      case "officiel":
        return <Officiel>{value}</Officiel>;
      case "paragraph":
        return <Markdown>{value}</Markdown>;
      case "table":
        let table = JSON.parse(value)
        return <p>{table}</p>;
      case "ulist":
        let ulist = JSON.parse(value)
        return <ul>{ulist.map((el) => <li>{el}</li>)}</ul>;
      case "olist":
        let olist = JSON.parse(value)
        return <ol>{olist.map((el) => <li>{el}</li>)}</ol>;
      default:
        return ""
    }
  })
}

export const RacesDetail = () => {
  // const [params, setParams] = useState()
  const race = getResources(require("../../../resources/races.json"), useParams().raceId)
  return (
    <Main name={race.name} lastUnit={true}>
      {formatContent(race.content)}
    </Main>
  )
}
export const ClassDetail = () => {
  // const [params, setParams] = useState()
  const clazz = useState(getResources(require("../../../resources/classes.json"), useParams().classId))
  return (
    <Main name={clazz.name} lastUnit={true}>
      {formatContent(clazz.content)}
    </Main>
  )
}