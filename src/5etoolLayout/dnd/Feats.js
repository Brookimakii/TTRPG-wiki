import {getResource, Resources} from "../../resources/ResourcesFetch";
import React from "react";
import {RenderModule, Selector5e} from "../5eLayoutModules";
import {Parser} from "../../layout/5e/js/parser";
import {PlayerFeat} from "../../layout/5e/Models";


const FILTER_OPTIONS = [
  // {category: "casters", subcategory: "classes", label: "Artificier"},
];

const FILTER_FEAT_KEY = "featFilters"
const SAVED_FEAT_KEY = "featPinned"

export const Dnd5eFeats = () => {
  // TODO: Finish Data Set.

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-3-2", colClass: "bold ve-col-3-2 px-1"
    },
    {
      id: "Catégorie", sortId: "cat", classSize: "ve-col-1-3", colClass: "ve-col-1-3 px-1 ve-text-center italic"
    },
    {
      id: "Capacité", sortId: "ability", classSize: "ve-col-2-5", colClass: "ve-col-2-5 px-1 "
    },
    {
      id: "Prérequis", sortId: "prerequisite", classSize: "ve-col-3", colClass: "ve-col-3 px-1 "
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "source ve-col-1-7 ve-text-center pl-1 pr-0"
    }
  ]
  const feat = getResource(Resources.feat)

  function tableDisplayOption(column, string, elem) {
    switch (column.sortId) {
      case "ability" :
        return <span className={column.colClass}>{elem.ability ?? "None"}</span>
      case "cat" :
        return <span className={column.colClass}>{elem.cat ?? "—"}</span>
      case "prerequisite" :
        return <span className={column.colClass}>{elem.prerequisite ?? "—"}</span>
      default:
        return undefined
    }
  }

  const {
    selected,
    elements,
    setElements,
    pinnedElements,
    setPinnedElements,
    updateSortElementsState,
    TableHeader,
    DisplayListPinned,
    DisplayList,
    DetailsHeader,
    TempFilters
  } = Selector5e([...feat], columns, "name", tableDisplayOption);

  // console.log(feat)

  const selectedFeat: PlayerFeat = {...selected}

  const renderEntries = (entry, toggle, depth) => {
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
        {DisplayList(elements)}
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {Object.keys(selectedFeat).length === 0 ?
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
              <DetailsHeader selected={selectedFeat}/>
              {selectedFeat.prerequisite ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>Prérequis: {selectedFeat.prerequisite}</i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule(renderProps).render(selectedFeat.entries)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selectedFeat.source]}>{selectedFeat.source}</i>, page
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