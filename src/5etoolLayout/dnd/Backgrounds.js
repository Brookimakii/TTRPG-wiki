import {getResource, Resources} from "../../ResourcesFetch";
import {RenderModule, Selector5e} from "../5eLayoutModules";
import {Parser} from "../../layout/5e/js/parser";
import React from "react";
import type {PlayerBackground} from "../../layout/5e/Models";

export const Dnd5eBackgrounds = () => {

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-2-5", colClass: "bold ve-col-2-9 pl-0 pr-1"
    },
    {
      id: "Ability", sortId: "bonus", classSize: "ve-col-3-5", colClass: "bold ve-col-2-9 pl-0 pr-1"
    },
    {
      id: "Maîtrise de compétences", sortId: "skills", classSize: "ve-col-4", colClass: "bold ve-col-2-9 pl-0 pr-1"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "bold ve-col-2-9 pl-0 pr-1"
    }
  ]

  const background = getResource(Resources.background)
  // const [elements, setElements] = useState(buildRace(background))
  // const [sorting, setSorting] = useState("")
  // const [selectedBackground, setSelected] = useState(
  //   // setSelectFromHash([...background], useLocation().hash)
  // )
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState,
    TableHeader, DisplayList, DetailsHeader, TempFilters
  } = Selector5e(background, columns, "name");

  const selectedBackground: PlayerBackground = {...selected}
  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selectedBackground || Object.keys(selectedBackground).length === 0 ?
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
        </div> : <div className="view-col" id="contentwrapper">
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
              <DetailsHeader selectedBackground={selectedBackground}/>
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selectedBackground.entries)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selectedBackground.source]}>{selectedBackground.source}</i>, page
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>}
    </div>
  </div>)
}