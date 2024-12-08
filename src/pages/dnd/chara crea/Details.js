import {useParams} from "react-router-dom";
import {Main} from "../../../layout/Layouts";
import {Author, Citation, Dialogue, Encadre, Officiel} from "../../../layout/BoxesLayout";
import Markdown from "react-markdown";


function getResources(data, id) {
  // console.log(id);
  // console.log(data);
  for (let r in data) {
    let obj = data[r]
    // console.log(data[r])
    if (obj.id === id) {
      return obj
    }
  }
}

export const formatContent = (contents: [{}]) => {
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
                e.startsWith("**") && e.endsWith('**') ? <strong>{e.substring(2, e.length - 2)}</strong> : e
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
      case "html":
        elem = <div dangerouslySetInnerHTML={{__html: value}}></div>
        break;
      default:
        elem = <p>Not Yet Implemented: "{key}"</p>
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
  const race = getResources(require("../../../resources/.races.json"), useParams().raceId)
  return (
    <Main name={race.name} lastUnit={true}>
      {formatContent(race.content)}
    </Main>
  )
}

export const ClassDetail = () => {
  // const [params, setParams] = useState()
  const clazz = getResources(require("../../../resources/.classes.json"), useParams().classId)
  // console.log(useParams())
  return (
    <Main name={clazz.name} lastUnit={true}>
      {formatContent(clazz.content)}
    </Main>
  )
}

export const BackgroundDetail = () => {
  // const [params, setParams] = useState()
  const background = getResources(require("../../../resources/.backgrounds.json"), useParams().backgroundId)
  // console.log(useParams())
  return (
    <Main name={background.name} lastUnit={true}>
      <div dangerouslySetInnerHTML={{__html: formatContent(background.content[0].html)}}></div>
    </Main>
  )
}

export const EquipmentDetail = () => {
  // const [params, setParams] = useState()
  const equipment = getResources(require("../../../resources/.equipments.json"), useParams().equipementId)
  // console.log(useParams())
  return (
    <Main name={equipment.name} lastUnit={true}>
      {formatContent(equipment.content)}
    </Main>
  )
}

export const Spells = () => {
  // const [params, setParams] = useState()
  const spell = getResources(require("../../../resources/.spells.json"), useParams().spellId)
  // console.log(useParams())
  return (
    <div className="content-container unit size4of5 lastUnit spellSheet">
      <div className="col">
        <div className="col1">
          <h1>{spell.name}</h1>
          <div className="ecole">niveau {spell.level} - {spell.school}</div>
          <div className="t"><strong>Temps d'incantation</strong>: {spell.castingTime}</div>
          <div className="r"><strong>Portée</strong>: {spell.range}</div>
          <div className="c"><strong>Composantes</strong>: {spell.component}</div>
          <div className="d"><strong>Durée</strong>: {spell.duration}</div>
          <div className="description">{spell.entries}</div>
          {spell.casters ? spell.casters.map((e) => <div className="classe">{e}</div>) : <></>}
          <div className="source">{spell.source}</div>
        </div>
      </div>
    </div>
  )
}

export const FeatDetails = () => {
  // const [params, setParams] = useState()
  const feat = getResources(require("../../../resources/.feats.json"), useParams().featId)
  // console.log(useParams())
  return (
    <div className="content-container unit size4of5 lastUnit spellSheet">
      <div className="col">
        <div className="col1">
          <h1>{feat.name}</h1>
        </div>
      </div>
    </div>
  )
}