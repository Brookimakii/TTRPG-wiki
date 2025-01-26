import {getResource, Resources} from "../../resources/ResourcesFetch";
import {RenderModule, Selector5e} from "../5eLayoutModules";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {Parser} from "../../layout/5e/js/parser";
import {Link} from "react-router-dom";
import React from "react";
import type {PlayerRace} from "../../layout/5e/Models";
import {Entry} from "../../layout/5e/Models";

export function Dnd5eRaces() {

  function buildRace(elements) {
    const newElems = structuredClone(elements)
    const races = []
    newElems.map((race) => {
      if (race.subraces) {
        let subraces = structuredClone(race.subraces)
        subraces.map((subrace) => {

          subrace["id"] = race.id + "-(" + subrace.id + ")"
          subrace["name"] = race.name + " (" + subrace.name + ")"
          if (subrace.bonus.startsWith(";")) {
            subrace["bonus"] = race.bonus + "; " + subrace.bonus.replace(";", "")
          }
          subrace["size"] = race.size
          subrace["creatureType"] = race.creatureType
          if (!subrace.speed) {
            subrace["speed"] = race.speed
          }
          subrace["common"] = race.common
          subrace["traits"] = [...race.traits, ...subrace.traits]
          subrace["info"] = race.info.toSpliced(0, 0, subrace.info)

          races.push(subrace)
        })
        let newRace = structuredClone(race)
        newRace.subraces = subraces.map((subrace) => {
          return ({name: subrace.name, id: subrace.id})
        })
        // console.log(newRace)
        races.push(newRace)
        // delete races[newRace].subraces
      } else {
        races.push(race)
      }
    })
    return races.sort(function (a, b) {
      let textA = a.id.toUpperCase();
      let textB = b.id.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    })
  }

  const columns = [
    {
      id: "Name", sortId: "name", classSize: "ve-col-4", colClass: "bold ve-col-4 pl-0 pr-1"
    },
    {
      id: "Ability", sortId: "bonus", classSize: "ve-col-4", colClass: "ve-col-4 px-1 italic"
    },
    {
      id: "Size", sortId: "size", classSize: "ve-col-2", colClass: "ve-col-2 px-1 ve-text-center"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-2 ve-text-center pl-1 pr-0"
    }
  ]

  const races = getResource(Resources.race)
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState,
    TableHeader, DisplayList, DetailsHeader, TempFilters
  } = Selector5e(buildRace(races), columns);

  // console.log(races)
  // const [elements, setElements] = useState(buildRace(races))
  // const [sorting, setSorting] = useState("")

  // const [selectedRace, setSelected] = useState(setSelectFromHash([...buildRace(races)], useLocation().hash))
  // let selectedRace ={};

  // useEffect(() => {
  //   setSelected(setSelectFromHash())
  // }, []);

  const selectedRace: PlayerRace = {...selected}

  const buttonTab = "ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0"
  // console.log(elements)

  const renderEntries = (entry: Entry, toggle, depth) => {
    return <div className="rd__b rd__b--3">
      <p>
        <span className="rd__h rd__h--3" data-title-index="1">
          <span className="entry-title-inner">{entry.name}. </span>
        </span>
        {RenderModule({...renderProps, defaultString: (string) => string,}).render(entry.entries)}
      </p>
    </div>
  }

  const renderProps = {
    renderEntries: renderEntries
  }

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        {/*Include list Here (elements).*/}
        {DisplayList(elements)}
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selectedRace || Object.keys(selectedRace).length === 0 ?
        <div className="view-col" id="contentwrapper">
          <div id="wrp-pagecontent" className="relative wrp-stats-table placeholder">
            <table id="pagecontent" className="w-100 stats">
              <tbody>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <tr>
                <td colSpan="6" className="initial-message initial-message--med">Select an entry from the list to
                  view it here
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              </tbody>
            </table>
          </div>
        </div> :
        <Tabs className="view-col" id="contentwrapper">
          <TabList className="w-100 ve-flex" id="stat-tabs" defaultValue={0}
                   style={{paddingLeft: "0px", marginBottom: "0px"}}>
            <Tab className={buttonTab + " ui-tab__btn-tab-head--active"}>
              Traits
            </Tab>
            <Tab className={buttonTab}>
              Info
            </Tab>
            {(selectedRace.images && selectedRace.images.length > 0) ? <Tab className={buttonTab}>
              Images
            </Tab> : ""}
            <li key={"buttons"} className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)">
                <span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)">
                <span className="glyphicon glyphicon-new-window"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)">
                <span className="glyphicon glyphicon-magnet"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span>
              </button>
            </li>
          </TabList>
          <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <thead>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selectedRace={selectedRace}/>
              </thead>
              <tbody>
              <tr>
                <td colSpan={6} className="pt-0">
                  <ul className="rd__list rd__list-hang-notitle">
                    <li key={"ability"} className="rd__li">
                      <p className="rd__p-list-item">
                        <span className="bold rd__list-item-name">Score de capacité:</span>
                        {" " + selectedRace.bonus.split(";").map(att =>{
                          const elem = att.trim().toLowerCase().split(" ");
                          return `${Parser.attAbvToFull(elem[0])} ${elem[1]}`
                        }).join(", ")}
                      </p>
                    </li>
                    <li key={"type"} className="rd__li">
                      <p className="rd__p-list-item">
                        <span className="bold rd__list-item-name">Type de Créature:</span>
                        {" " + selectedRace.creatureType}
                      </p>
                    </li>
                    <li key={"size"} className="rd__li">
                      <p className="rd__p-list-item">
                        <span className="bold rd__list-item-name">Taille:</span>
                        {" " + selectedRace.size}
                      </p>
                    </li>
                    <li key={"speed"} className="rd__li">
                      <p className="rd__p-list-item">
                        <span className="bold rd__list-item-name">Vitesse:</span>
                        {" " + selectedRace.speed}
                      </p>
                    </li>
                  </ul>
                  <div className="w-100 py-1"></div>
                  <div className="rd__b rd__b--2">
                    {selectedRace.subraces ? <>
                      <div className="rd__b  rd__b--0">
                        <p>Cette race à plusieurs héritages comme listé ci-dessous</p>
                        <ul className="rd__list">
                          {selectedRace.subraces.map((subrace) => <li key={subrace.id} className="rd__li">
                            <Link to={"#" + subrace.id}>{subrace.name}</Link>
                          </li>)}
                        </ul>
                      </div>
                      <hr className="rd__hr rd__hr--section"/>
                    </> : <></>}
                    <div className="rd__b  rd__b--3">
                      <p>
                      <span className="rd__h rd__h--3">
                        <span className="entry-title-inner">Âge.</span>
                      </span>
                        {" " + selectedRace.common.age}
                      </p>
                    </div>
                    <div className="rd__b  rd__b--3">
                      <p>
                      <span className="rd__h rd__h--3">
                        <span className="entry-title-inner">Alignement.</span>
                      </span>
                        {" " + selectedRace.common.alignment}
                      </p>
                    </div>
                    <div className="rd__b  rd__b--3">
                      <p>
                              <span className="rd__h rd__h--3">
                                <span className="entry-title-inner">Taille.</span>
                              </span>
                        {" " + selectedRace.common.size}
                      </p>
                    </div>
                    {/*{selectedRace.traits.map((trait) => {*/}
                    {/*  const key = Object.keys(trait)[0];*/}
                    {/*  const value = trait[key]*/}

                    {/*  if (typeof value === typeof []) {*/}
                    {/*    // console.log(value)*/}
                    {/*    return (<div className="rd__b rd__b--3">*/}
                    {/*      {value.map((elem) => {*/}
                    {/*        if (typeof elem !== typeof "") {*/}
                    {/*          const keySub = Object.keys(elem)[0];*/}
                    {/*          const valueSub = elem[keySub]*/}
                    {/*          switch (keySub) {*/}
                    {/*            case "table":*/}
                    {/*              return (<table className="w-100 rd__table stripe-odd-table">*/}
                    {/*                <caption>{valueSub.caption}</caption>*/}
                    {/*                <thead>*/}
                    {/*                <tr>*/}
                    {/*                  {valueSub.head.map((head) => {*/}
                    {/*                    const idx = valueSub.head.indexOf(head)*/}
                    {/*                    return (<th className={"rd__th " + valueSub.style[idx]}>*/}
                    {/*                      {head}*/}
                    {/*                    </th>)*/}
                    {/*                  })}*/}
                    {/*                </tr>*/}
                    {/*                </thead>*/}
                    {/*                <tbody>*/}
                    {/*                {valueSub.body.map((body) => {*/}
                    {/*                  return (<tr>*/}
                    {/*                    {body.map((cell) => {*/}
                    {/*                      const idx = body.indexOf(cell)*/}
                    {/*                      return (<td className={"rd__th " + valueSub.style[idx]}>*/}
                    {/*                        {cell}*/}
                    {/*                      </td>)*/}
                    {/*                    })}*/}
                    {/*                  </tr>)*/}
                    {/*                })}*/}
                    {/*                </tbody>*/}
                    {/*              </table>)*/}
                    {/*            case "ulist":*/}
                    {/*              return (valueSub.map((list) => {*/}
                    {/*                const keyList = Object.keys(list)[0];*/}
                    {/*                const valueList = list[keyList]*/}
                    {/*                // console.log(list)*/}
                    {/*                // console.log(keyList)*/}
                    {/*                // console.log(valueList)*/}
                    {/*                return (<div className="rd__b  rd__b--3">*/}
                    {/*                  <p>*/}
                    {/*                          <span className="rd__h rd__h--3">*/}
                    {/*                            <span className="entry-title-inner">{keyList}.</span>*/}
                    {/*                          </span>*/}
                    {/*                    {" " + valueList}*/}
                    {/*                  </p>*/}
                    {/*                </div>)*/}
                    {/*              }))*/}
                    {/*            default:*/}
                    {/*              return (<p>Not Implemented: {keySub}</p>)*/}
                    {/*          }*/}
                    {/*        }*/}
                    {/*        return (<p>*/}
                    {/*          {elem === value[0] ? <>*/}
                    {/*                  <span className="rd__h rd__h--3">*/}
                    {/*                    <span className="entry-title-inner">{key}.</span>*/}
                    {/*                  </span>*/}
                    {/*            {" " + elem}*/}
                    {/*          </> : elem}*/}
                    {/*        </p>)*/}
                    {/*      })}*/}
                    {/*    </div>)*/}
                    {/*  }*/}
                    {/*  return (<div className="rd__b rd__b--3">*/}
                    {/*    <p>*/}
                    {/*            <span className="rd__h rd__h--3">*/}
                    {/*              <span className="entry-title-inner">{key}.</span>*/}
                    {/*            </span>*/}
                    {/*      {" " + value}*/}
                    {/*    </p>*/}
                    {/*  </div>)*/}
                    {/*})}*/}
                    {/*{console.log(selectedRace.traits)}*/}
                    {RenderModule({...renderProps}).render(selectedRace.traits)}
                    {/*{Renderer({...renderProps}).recursiveRender(selectedRace.traits)}*/}
                    <div className="rd__b  rd__b--3">
                      <p>
                            <span className="rd__h rd__h--3">
                            <span className="entry-title-inner">Langues.</span>
                            </span>
                        {" " + selectedRace.common.languages}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={6} className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selectedRace.source]}>{selectedRace.source}</i>
                  , page {selectedRace.page}. {selectedRace.reprinted}
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              </tbody>
            </table>
          </TabPanel>
          <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <thead>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selectedRace={selectedRace}/>
              </thead>
              <tbody>
              <tr>
                <td colSpan={6} className="pt-3">
                  <div className="rd__b rd__b--1">
                    <div className="rd__b rd__b--2">
                      {RenderModule(renderProps).render(selectedRace.info)}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              </tbody>
            </table>
          </TabPanel>
          {selectedRace.images.length === 0 ?
            <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
              <table className="w-100 stats">
                <thead>
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                <DetailsHeader selectedRace={selectedRace}/>
                </thead>
                <tbody>
                {selectedRace.images.map(image=><tr>
                  <img src={image}/>
                </tr>)}
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                </tbody>
              </table>
            </TabPanel> : ""
          }
        </Tabs>
      }
    </div>
  </div>)
}