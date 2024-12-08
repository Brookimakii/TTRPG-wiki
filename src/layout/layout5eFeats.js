import {getResource, Resources} from "../ResourcesFetch";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {RenderModule, Selector5e} from "./5eModules";
import {Parser} from "./5e/js/parser";
import {TableHeader} from "./5eLayout";
import type {PlayerRace} from "./5e/Models";
import {PlayerFeat} from "./5e/Models";

export const Layout5eFeats = () => {
  // TODO: Finish Data Set.

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-3-2"
    },
    {
      id: "Catégorie", sortId: "cat", classSize: "ve-col-1-3"
    },
    {
      id: "Capacité", sortId: "ability", classSize: "ve-col-2-5"
    },
    {
      id: "Prérequis", sortId: "prerequisite", classSize: "ve-col-3"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow"
    }
  ]
  const feat = getResource(Resources.feat)

  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, sortElements, DisplayList, DetailsHeader
  } = Selector5e([...feat], columns);


  const selectedFeat: PlayerFeat = {...selected}


  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <DisplayList />
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
                    {RenderModule().render(selectedFeat.shortDesc)}
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