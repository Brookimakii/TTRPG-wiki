import {Parser} from "./5e/js/parser";
import {getResource, Resources} from "../ResourcesFetch";
import {FilterManager, RenderModule, Selector5e} from "./5eModules";
import React from "react";
import {TableHeader} from "./5eLayout";
import type {PlayerOptionNFeature} from "./5e/Models";

export const Layout5eOptionFeatures = () => {

  function tableDisplayOption(column, string, element) {
    switch (column.sortId) {
      case "school": {
        return (
          <span
            className={column.colClass + " sp__school-" + string}
            title={Parser.SP_SCHOOL_ABV_TO_FULL[string]}>
          {Parser.SP_SCHOOL_ABV_TO_SHORT[string]}
        </span>
        )
      }
      case "prerequisite":
      case "level": {
        return (
          <span className={column.colClass}>{string ?? "—"}</span>
        )
      }
      default:
        return <span className={column.colClass}>{string}</span>
    }
  }

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-3", colClass: "bold ve-col-3 px-1"
    },
    {
      id: "Type", sortId: "type", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
    },
    {
      id: "Prérequis", sortId: "prerequisite", classSize: "ve-col-4-7", colClass: "ve-col-4-7 px-1"
    },
    {
      id: "Niveau", sortId: "level", classSize: "ve-col-1", colClass: "ve-col-1 px-1 ve-text-center"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-1-5 ve-text-center pl-1 pr-0"
    }
  ]
  const features = getResource(Resources.feature)

  const {
    selected, _,
    elements, setElements,
    __, ___,
    ____, updateSortElementsState, DisplayList, DetailsHeader, TempFilters
  } = Selector5e(features, columns, "name", tableDisplayOption);

  const {filters, toggleFilter} = FilterManager(setElements, updateSortElementsState, elements)

  const casters = {}
  const casterObj = {
    "type": ["Infusion d'Artificier", "Invocation Occulte"]
  }

  Object.entries(casterObj).map(([path, list]) => {
    list.map(element => casters[element] = path)
  })

  const selectedOptionFeature: PlayerOptionNFeature = {...selected}

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <TempFilters filters={casters} toggleFilter={toggleFilter}/>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selectedOptionFeature || Object.keys(selectedOptionFeature).length === 0 ?
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
              <DetailsHeader selectedOptionFeature={selectedOptionFeature}/>
              {(selectedOptionFeature.prerequisite || selectedOptionFeature.level) ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>
                    Prérequis: {selectedOptionFeature.level}{(selectedOptionFeature.prerequisite && selectedOptionFeature.level) ? ", " : ""}{selectedOptionFeature.prerequisite}
                  </i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selectedOptionFeature.shortDesc)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selectedOptionFeature.source]}>{selectedOptionFeature.source}</i>,
                  page
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