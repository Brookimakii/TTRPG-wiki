import {Parser} from "../../layout/5e/js/parser";
import {getResource, Resources} from "../../resources/ResourcesFetch";
import {FilterManager, RenderModule, Selector5e} from "../5eLayoutModules";
import React from "react";
import type {PlayerOptionNFeature} from "../../layout/5e/Models";
import {Armor, Weapon} from "../../layout/5e/Models";

export const Dnd5eOptionFeatures = () => {

  function tableDisplayOption(column, string, element: PlayerOptionNFeature) {
    switch (column.sortId) {
      case "finalFeatureTypesAbv": {
        return <span className={column.colClass}>{string.join(", ")}</span>
      }
      case "level": {
        return <span className={column.colClass}>{element.prerequisite?.[0]?.level?.level ?? "—"}</span>
      }
      case "prerequisite": {
        return <span className={column.colClass}>{element.prerequisite?.[0]?.item?.join(", ") ?? "—"}</span>
      }
      default:
        // console.log(column, string, element)
        // return ""
        return <span className={column.colClass}>{string}</span>
    }
  }

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-3", colClass: "bold ve-col-3 px-1"
    },
    {
      id: "Type", sortId: "finalFeatureTypesAbv", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
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
  const features: [PlayerOptionNFeature] = getResource(Resources.feature).filter(f => f.id && f.id !== "")
  features.forEach(feature => {
    const finalFeatureTypes = []
    const finalFeatureTypesAbv = []

    feature.featureType.forEach(type => {
      switch (type) {
        case "AI": {
          finalFeatureTypes.push("Infusion d'Artificier")
          finalFeatureTypesAbv.push("IA")
          break;
        }
        case "AS": {
          finalFeatureTypes.push("Tir Arcanique");
          finalFeatureTypesAbv.push("TA");
          break;
        }
        case "ED": {
          finalFeatureTypes.push("Discipline Élémentaire");
          finalFeatureTypesAbv.push("DE");
          break;
        }
        case "EI": {
          finalFeatureTypes.push("Invocation Occulte");
          finalFeatureTypesAbv.push("IO");
          break;
        }
        case "FS:F": {
          finalFeatureTypes.push("Style de Combat: Guerrier");
          finalFeatureTypesAbv.push("SC:G");
          break;
        }
        case "FS:B": {
          finalFeatureTypes.push("Style de Combat: Barde");
          finalFeatureTypesAbv.push("SC:B");
          break;
        }
        case "FS:P": {
          finalFeatureTypes.push("Style de Combat: Paladin");
          finalFeatureTypesAbv.push("SC:P");
          break;
        }
        case "FS:R": {
          finalFeatureTypes.push("Style de Combat: Rôdeur");
          finalFeatureTypesAbv.push("SC:R");
          break;
        }
        case "MM": {
          finalFeatureTypes.push("Métamagie");
          finalFeatureTypesAbv.push("MM");
          break;
        }
        case "MV:B": {
          finalFeatureTypes.push("Manœuvres");
          finalFeatureTypesAbv.push("MV:MdG");
          break;
        }
        case "PB": {
          finalFeatureTypes.push("Pacte");
          finalFeatureTypesAbv.push("PO");
          break;
        }
        default:
          console.log("feature", feature.name, type)
      }
    })

    feature.finalFeatureTypes = finalFeatureTypes
    feature.finalFeatureTypesAbv = finalFeatureTypesAbv
  })

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
  } = Selector5e(features.sort((a, b) => {
    const textA = a.name.toLowerCase();
    const textB = b.name.toLowerCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0
  }), columns, "name", tableDisplayOption);

  const {filters, toggleFilter} = FilterManager(setElements, updateSortElementsState, features)

  const casters = {}
  const casterObj = {
    "finalFeatureTypes": [
      "Infusion d'Artificier", "Invocation Occulte", "Tir Arcanique", "Pacte", "Manœuvres",
      "Métamagie", "Style de Combat: Rôdeur", "Style de Combat: Paladin", "Style de Combat: Barde",
      "Style de Combat: Guerrier", "Invocation Occulte", "Discipline Élémentaire"
    ].sort()
  }

  // console.log(elements)
  Object.entries(casterObj).map(([path, list]) => {
    list.map(element => casters[element] = path)
  })

  const selectedOptionFeature: PlayerOptionNFeature = {...selected}
  // console.log(filters)

  const props = {}

  function formatFeaturesType(finalFeatureTypes) {
    return finalFeatureTypes.join(", ").replaceAll(/,(.*?):/g, ",").replace(/,([^,]*)$/g, " et $1")
  }

  function formatPrerequisite(prerequisite) {
    const list = []
    Object.keys(prerequisite[0]).forEach((key)=>{
      const value = prerequisite[0][key]
      if (!value) return
      switch (key) {
        case "level":
          list.push("Niveau " + value.level + "+")
          break
        case "item":
          list.push(value.join(", "))
          break
        default:
          console.log(key, value)
      }
    })
    return list.join(", ").trim().replaceAll(/,$/g,"")
  }

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
        {DisplayList(elements)}
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
            <div className="opt-feature-type">
              <span className="">{formatFeaturesType(selectedOptionFeature.finalFeatureTypes)}</span>
            </div>
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
              {(selectedOptionFeature.prerequisite) ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>
                    Prérequis: {formatPrerequisite(selectedOptionFeature.prerequisite)}
                  </i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule(props).render(selectedOptionFeature.entries)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selectedOptionFeature.source]}>{selectedOptionFeature.source}</i>,
                  page {selectedOptionFeature.page}
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