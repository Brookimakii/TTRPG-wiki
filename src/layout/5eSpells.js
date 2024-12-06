import spells from "./5e/resources/spells.json";
import {FilterManager, Selector5e} from "./5eModules";
import React, {useEffect} from "react";
import {Parser} from "./5e/js/parser";
import {TableHeader} from "./5eLayout";

export const Layout5eSpells = () => {

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-2-9", colClass: "bold ve-col-2-9 pl-0 pr-1"
    },
    {
      id: "Niveau", sortId: "level", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
    },
    {
      id: "Incantation", sortId: "castingTime", classSize: "ve-col-1-7", colClass: "ve-col-1-7 px-1 ve-text-center"
    },
    {
      id: "School", sortId: "school", classSize: "ve-col-1-2", colClass: "ve-col-1-2 px-1 ve-text-center"
    },
    {
      id: "C", sortId: "concentration", classSize: "ve-col-0-6", colClass: "ve-col-0-6 px-1 ve-text-center"
    },
    {
      id: "Range", sortId: "range", classSize: "ve-col-2-4", colClass: "ve-col-2-4 px-1 ve-text-right"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-1-7 ve-text-center pl-1 pr-0"
    }
  ]

  const spells: [] = require('./5e/resources/spells.json')
  // const [elements, setElements] = useState(spells)
  // const [sorting, setSorting] = useState("")
  // const [selected, setSelected] = useState(
  //   // setSelectFromHash([...spells], useLocation().hash)
  // )
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState, DisplayList, DetailsHeader
  } = Selector5e(spells, columns, "name");

  const {filters, toggleFilter} = FilterManager()

  function extractNestedValue(obj, path) {
    return path.split('.').reduce((o, i) => o?.[i], obj)
  }

  function doFilter(key, element, state) {
    const [nestedKey, expectedValue] = key.split("-");

    // console.log(key, nestedKey, expectedValue, element)

    const nestedValue = extractNestedValue(element, nestedKey);
    // console.log(nestedKey, expectedValue, nestedValue)

    if (state === 'positive') {
      return Array.isArray(nestedValue)
        ? nestedValue.includes(expectedValue)
        : nestedValue === expectedValue;
    } else if (state === 'negative') {
      return Array.isArray(nestedValue)
        ? !nestedValue.includes(expectedValue)
        : nestedValue !== expectedValue;
    }
    return true;
  }

  useEffect(() => {
    const activeFilters = Object.entries(filters).filter(
      ([, state]) => state !== 'disabled'
    );
    // console.log("activeFilters", activeFilters)
    let updatedElements = [...spells]
    if (activeFilters.length > 0) {
      updatedElements = [...spells].filter((element) => {
        return activeFilters.some(([key, state]) => doFilter(key, element, state));
      });
    }
    // console.log(sorting)
    updatedElements = updateSortElementsState(sorting, updatedElements, false); // Pass a flag to prevent state updates
    setElements(updatedElements)
  }, [filters, setElements]);

  const casters = {}
  const casterObj = {
    "casters.classes": [
      "Artificier",
      "Barde",
      "Clerc",
      "Druide",
      "Ensorceleur",
      "Magicien",
      "Moine",
      "Occultiste",
      "Paladin",
      "Ranger"
    ],
    "caster.subclasses": [],
    "caster.races": []
  }


  Object.entries(casterObj).map(([path, list], idx) => {
    list.map(element => casters[element] = path)
  })

  // console.log(casters)

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <div className="fltr__mini-view ve-btn-group">
          {Object.keys(casters).map((caster, idx) => {
            const path = casters[caster]
            return <div className="fltr__mini-pill"
                        data-state={filters[path + "-" + caster] ?? "disabled"}
                        onClick={() => toggleFilter(path + "-" + caster)}
            >
              {caster}
            </div>
          })}
        </div>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ?
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
        <div className="view-col" id="contentwrapper">
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                className="glyphicon glyphicon-new-window"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                className="glyphicon glyphicon-magnet"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span></button>
            </div>
          </div>
          <div id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader />
              <tr>
                <td colSpan="6"><i>{selected.school} de Niveau {selected.level} </i></td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-2">
                  <b>Casting Time:</b> {selected.castingTime}{selected.ritual ? " ou en rituel" : ""}
                </td>
              </tr>
              <tr>
                <td colSpan="6"><b>Range:</b> {selected.range}</td>
              </tr>
              <tr>
                <td colSpan="6"><b>Components:</b> {selected.component}</td>
              </tr>
              <tr>
                <td colSpan="6" className="pb-2">
                  <b>Duration:</b> {selected.concentration ? "Concentration, jusqu'à" : ""}{selected.duration ?? ""}
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  <div className="rd__b  rd__b--2">
                    {selected.longDesc ?? selected.shortDesc}
                  </div>
                  {selected.upCast ? <div className="rd__b  rd__b--3">
                    <p></p>
                    <div data-roll-name-ancestor="Using a Higher-Level Spell Slot" className="rd__b  rd__b--3">
                      <p>
                        <span className="rd__h rd__h--3" data-title-index="6">
                          <span className="entry-title-inner">Using a Higher-Level Spell Slot.</span>
                        </span>
                        The spell's duration increases by 48 hours for
                        each spell slot level above 2.
                      </p>
                    </div>
                  </div> : ""}
                  {/*TODO: Put caster here.*/}
                  {Object.entries(selected.casters).map(([type, casters]) => {
                    if (casters.length === 0) return;
                    return <div>
                      <span className="bold">{type.substring(0, 1).toUpperCase() + type.substring(1)}: </span>
                      {casters.map((caster, idx) => {
                        return <>
                          <span className="italic">{caster}</span>
                          {idx === casters.length - 1 ? "." : ", "}
                        </>
                      })}
                    </div>
                  })}
                  <div></div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page.
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </div>
  </div>)

}