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
    let elem: JSX.IntrinsicElements
    switch (key) {
      case "title2":
        elem = <h2>{value}</h2>;
        break;
      case "title3":
        elem = <h3>{value}</h3>;
        break;
      case "title4":
        elem = <h4>{value}</h4>;
        break;
      case "title5":
        elem = <h5>{value}</h5>;
        break;
      case "title6":
        elem = <h6>{value}</h6>;
        break;
      case "dialogue":
        elem = <Dialogue>{value}</Dialogue>;
        break;
      case "encadre":
        if (value.constructor.name === "Array") {
          elem = <Encadre>{formatContent(value)}</Encadre>

        } else {
          elem = <Encadre><Markdown>{value}</Markdown></Encadre>;
        }
        break;
      case "citation": {
        let citation = JSON.parse(value);
        elem = <Citation author={citation.author} location={citation.location}>{citation.content}</Citation>;
      }
        break;
      case "author":
        elem = <Author>{value}</Author>;
        break;
      case "officiel":
        elem = <Officiel>{value}</Officiel>;
        break;
      case "paragraph":
        elem = <Markdown>{value}</Markdown>;
        break;
      case "table":
        let head: [] = value.head
        let body: [] = value.body

        elem = <table>
          {head ? <thead>
          <tr>
            {head.map(el => <td>{el}</td>)}
          </tr>
          </thead> : ''}
          {body ? <tbody>
          {body.map(el => <tr>{
            el.map(e => {
              return (<td>{
                e.startsWith("**") && e.endsWith('**') ? <strong>{e.substring(2,e.length-2)}</strong> : e
              }</td>)
            })
          }</tr>)}
          </tbody> : ''}
        </table>
        break;
      case "ulist":
        elem = <ul>{value.map((el) => <li>{el}</li>)}</ul>;
        break;
      case "olist":
        elem = <ol>{value.map((el) => <li>{el}</li>)}</ol>;
        break;
      default:
        elem = ""
        break;
    }
    if (obj.content) {
      // console.log(elem)
      return [elem, formatContent(obj.content)]
    }
    return elem
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