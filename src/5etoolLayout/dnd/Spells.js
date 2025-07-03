import {FilterManager, RenderModule, Selector5e} from "../5eLayoutModules";
import React, {useEffect, useState} from "react";
import {Parser} from "../../layout/5e/js/parser";
import {getResource, Resources} from "../../resources/ResourcesFetch";
import {Entry, Spell} from "../../layout/5e/Models";
import FilterDialogManager, {getOptionId} from "../FilterDialogManager";
import Filters from "../FilterDialog";
import {loadFromLocalStorage, saveToLocalStorage} from "../PersistData";

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
    case "concentration": {
      return (
        <span className={column.colClass} title="Concentration">
          {element.concentration ? "×" : ""}
        </span>
      )
    }
    case "level": {
      return (
        <span className={column.colClass}>
          {string + (element.ritual ? " (rit.)" : "")}
        </span>
      )
    }
    default:
      return undefined
  }
}

const FILTER_OPTIONS = [
  {category: "casters", subcategory: "classes", label: "Artificier"},
  {category: "casters", subcategory: "classes", label: "Barde"},
  {category: "casters", subcategory: "classes", label: "Clerc"},
  {category: "casters", subcategory: "classes", label: "Druide"},
  {category: "casters", subcategory: "classes", label: "Ensorceleur"},
  {category: "casters", subcategory: "classes", label: "Magicien"},
  {category: "casters", subcategory: "classes", label: "Occultiste"},
  {category: "casters", subcategory: "classes", label: "Paladin"},
  {category: "casters", subcategory: "classes", label: "Rôdeur"},
  {category: "school", value: "A", label: "Abjuration"},
  {category: "school", value: "C", label: "Conjuration"},
  {category: "school", value: "D", label: "Divination"},
  {category: "school", value: "En", label: "Enchantment"},
  {category: "school", value: "Ev", label: "Enchantment"},
  {category: "school", value: "I", label: "Illusion"},
  {category: "school", value: "N", label: "Necromancy"},
  {category: "school", value: "T", label: "Transmutation"},
  {category: "level", value: "0", label: "Sort Mineur"},
  {category: "level", label: "1"},
  {category: "level", label: "2"},
  {category: "level", label: "3"},
  {category: "level", label: "4"},
  {category: "level", label: "5"},
  {category: "level", label: "6"},
  {category: "level", label: "7"},
  {category: "level", label: "8"},
  {category: "level", label: "9"},
  // {category: "castingTime", value: "action", label: "Action"},
  // {category: "castingTime", value: "reaction", label: "Reaction"},
  // {category: "castingTime", value: "1hour", label: "1 Hour"}
];
const FILTER_OPTIONS_ALIAS_LABELS = {
  "": ""
}

const FILTER_SPELL_KEY = "spellFilters"
const SAVED_SPELL_KEY = "spellPinned"

export const Dnd5eSpells = () => {

  const columns = [
    {
      id: "Nom",
      sortId: "name",
      classSize: "ve-col-2-9",
      colClass: "bold ve-col-2-9 pl-0 pr-1",
      classSizePinned: "ve-col-3-2",
      colClassPinned: "bold ve-col-3-2 pl-0 pr-1"
    },
    {
      id: "Niveau", sortId: "level", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
    },
    {
      id: "Incantation",
      sortId: "castingTime",
      classSize: "ve-col-1-7",
      colClass: "ve-col-1-7 px-1 ve-text-center",
      classSizePinned: "ve-col-1-8",
      colClassPinned: "ve-col-1-8 px-1 ve-text-center"
    },
    {
      id: "School",
      sortId: "school",
      classSize: "ve-col-1-2",
      colClass: "ve-col-1-2 px-1 ve-text-center",
      classSizePinned: "ve-col-1-6",
      colClassPinned: "ve-col-1-6 px-1 ve-text-center"
    },
    {
      id: "C",
      sortId: "concentration",
      classSize: "ve-col-0-6",
      colClass: "ve-col-0-6 px-1 ve-text-center",
      classSizePinned: "ve-col-0-7",
      colClassPinned: "ve-col-0-7 px-1 ve-text-center"
    },
    {
      id: "Range",
      sortId: "range",
      classSize: "ve-col-2-4",
      colClass: "ve-col-2-4 px-1 ve-text-right",
      classSizePinned: "ve-col-3-2",
      colClassPinned: "ve-col-3-2 pl-1 pr-0 ve-text-right"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-1-7 ve-text-center pl-1 pr-0"
    }
  ]

  const spells: [] = getResource(Resources.spell)
  // const [elements, setElements] = useState(spells)
  // const [sorting, setSorting] = useState("")
  // const [selectedSpell, setSelected] = useState(
  //   // setSelectFromHash([...spells], useLocation().hash)
  // )
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
  } = Selector5e(spells, columns, "name", tableDisplayOption, loadFromLocalStorage(SAVED_SPELL_KEY));

  const {setFilters, toggleFilter} = FilterManager(setElements, updateSortElementsState, spells)

  const {
    isDialogOpen,
    filterResults,
    filterState,
    openDialog,
    closeDialog,
    saveFilterResults,
    resetFilter
  } = FilterDialogManager(FILTER_OPTIONS, loadFromLocalStorage(FILTER_SPELL_KEY))

  const togglePin = (item) => {
    if (pinnedElements.some((i) => i.id === item.id)) {
      setPinnedElements(pinnedElements.filter((i) => i.id !== item.id))
    } else {
      setPinnedElements([...pinnedElements, {...item, pinnedAt: Date.now()}]);
    }
  }

  // function extractNestedValue(obj, path) {
  //   return path.split('.').reduce((o, i) => o?.[i], obj)
  // }
  //
  // function doFilter(key, element, state) {
  //   const [nestedKey, expectedValue] = key.split("-");
  //
  //   // console.log(key, nestedKey, expectedValue, element)
  //
  //   const nestedValue = extractNestedValue(element, nestedKey);
  //   // console.log(nestedKey, expectedValue, nestedValue)
  //
  //   if (state === 'positive') {
  //     return Array.isArray(nestedValue)
  //       ? nestedValue.includes(expectedValue)
  //       : nestedValue === expectedValue;
  //   } else if (state === 'negative') {
  //     return Array.isArray(nestedValue)
  //       ? !nestedValue.includes(expectedValue)
  //       : nestedValue !== expectedValue;
  //   }
  //   return true;
  // }
  //
  // useEffect(() => {
  //   const activeFilters = Object.entries(filters).filter(
  //     ([, state]) => state !== 'disabled'
  //   );
  //   // console.log("activeFilters", activeFilters)
  //   let updatedElements = [...spells]
  //   if (activeFilters.length > 0) {
  //     updatedElements = [...spells].filter((element) => {
  //       return activeFilters.some(([key, state]) => doFilter(key, element, state));
  //     });
  //   }
  //   // console.log(sorting)
  //   updatedElements = updateSortElementsState(sorting, updatedElements, false); // Pass a flag to prevent state updates
  //   setElements(updatedElements)
  // }, [filters, setElements]);

  // console.log("filterResults", filterResults)
  // console.log("filterState", filterState)

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
      "Rôdeur"
    ],
    "caster.subclasses": [],
    "caster.races": []
  }

  const selectedSpell: Spell = {...selected}

  Object.entries(casterObj).forEach(([path, list], idx) => {
    list.map(element => casters[element] = path)
  })

  useEffect(() => {
    setFilters(filterState)
    saveToLocalStorage(FILTER_SPELL_KEY, filterState)
  }, [filterState]);

  useEffect(() => {
    const newPinned = [...pinnedElements]
    // console.log(pinnedElements)
    newPinned.sort((a, b) => a.pinnedAt - b.pinnedAt)
    // console.log(newPinned)
    saveToLocalStorage(SAVED_SPELL_KEY, newPinned)
  }, [pinnedElements]);


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

  // console.log(casters)e

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader filterOpen={openDialog}/>
        <div className="fltr__mini-view ve-btn-group">
          {FILTER_OPTIONS.map((option, idx) => {
            const id = getOptionId(option)
            return <div className="fltr__mini-pill"
                        data-state={filterState[id]}
                        onClick={() => resetFilter(id)}
            >
              {option.label ?? option.value}
            </div>
          })}
        </div>
        {DisplayList(elements)}
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selectedSpell || Object.keys(selectedSpell).length === 0 ?
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
          {pinnedElements.length > 0 ? DisplayListPinned(pinnedElements) : <>
            {/*<div className="pt-2 ve-flex-col no-print">*/}
            {/*  <div className="ve-flex-col my-2 w-100">*/}
            {/*    <div className="ve-flex-v-center">*/}
            {/*      <div className="ve-flex-v-center mr-1 w-100 min-w-0 relative">*/}
            {/*        <div className="mr-2 ve-muted">List:</div>*/}
            {/*        <input className="form-control input-xs form-control--minimal" autoComplete="new-password"*/}
            {/*               autoCapitalize="off" spellCheck="false" placeholder="(Unnamed List)"/>*/}
            {/*        <div className="absolute right-0 z-index-1 no-events ve-flex-vh-center ve-muted pr-2 ve-small"*/}
            {/*             title="Number of Pinned List Items"><span*/}
            {/*          className="glyphicon glyphicon-pushpin mr-1"></span> 1*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <div className="ve-flex-h-right ve-flex-v-center ve-btn-group no-shrink">*/}
            {/*        <button className="ve-btn ve-btn-5et ve-btn-xs ve-btn-default" title="New Pinned List">*/}
            {/*          <span className="glyphicon glyphicon-file"></span>*/}
            {/*        </button>*/}
            {/*        <button className="ve-btn ve-btn-5et ve-btn-xs ve-btn-default" title="Duplicate Pinned List">*/}
            {/*          <span className="glyphicon glyphicon-duplicate"></span>*/}
            {/*        </button>*/}
            {/*        <button className="ve-btn ve-btn-5et ve-btn-xs ve-btn-default" title="Save Pinned List">*/}
            {/*          <span className="glyphicon glyphicon-floppy-disk"></span>*/}
            {/*        </button>*/}
            {/*        <button className="ve-btn ve-btn-5et ve-btn-xs ve-btn-default" title="Load Pinned List">*/}
            {/*          <span className="glyphicon glyphicon-folder-open"></span>*/}
            {/*        </button>*/}
            {/*        <button className="ve-btn ve-btn-5et ve-btn-xs ve-btn-default" title="Download Pinned List">*/}
            {/*          <span className="glyphicon glyphicon-download"></span>*/}
            {/*        </button>*/}
            {/*        <button className="ve-btn ve-btn-5et ve-btn-xs ve-btn-default" title="Upload Pinned List">*/}
            {/*          <span className="glyphicon glyphicon-upload"></span>*/}
            {/*        </button>*/}
            {/*        <button className="ve-btn ve-btn-5et ve-btn-xs ve-btn-default" title="Reload Pinned List"*/}
            {/*                disabled="">*/}
            {/*          <span className="glyphicon glyphicon-refresh"></span>*/}
            {/*        </button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </>}
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      onClick={() => togglePin(selectedSpell)} title="Pin (Toggle) (Hotkey: p/P)"
                      style={{background: pinnedElements.filter(s => s.id === selectedSpell.id).length > 0 ? "lime" : ""}}
              >
                <span className="glyphicon glyphicon-pushpin"></span>
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
              <thead>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader/>
              <tr>
                <td colSpan="6"><i>{Parser.SP_SCHOOL_ABV_TO_FULL[selectedSpell.school]} de
                  Niveau {selectedSpell.level} </i></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td colSpan="6" className="pt-2">
                  <b>Temps d'incantation:</b> {selectedSpell.castingTime}
                  {selectedSpell.ritual ? " ou en rituel" : ""}
                  {selectedSpell.castingTimeAddition ? ", " + selectedSpell.castingTimeAddition : ""}
                </td>
              </tr>
              <tr>
                <td colSpan="6"><b>Portée:</b> {selectedSpell.range}</td>
              </tr>
              <tr>
                <td colSpan="6">
                  <b>Composant:</b> {selectedSpell.component} {selectedSpell.materialComponent?.material ? "(" + selectedSpell.materialComponent.material + ")" : ""}
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pb-2">
                  <b>Durée:</b> {selectedSpell.concentration ? "Concentration, jusqu'à " : ""}{selectedSpell.duration ?? ""}
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  <div className="rd__b  rd__b--2">
                    {RenderModule(renderProps).render(selectedSpell.entries && selectedSpell.entries.length !== 0 ? selectedSpell.entries : selectedSpell.shortDesc)}
                  </div>
                  {selectedSpell.upCast && selectedSpell.upCast !== "" ? <div className="rd__b  rd__b--3">
                    <p></p>
                    <div data-roll-name-ancestor="Using a Higher-Level Spell Slot" className="rd__b  rd__b--3">
                      <p>
                        <span className="rd__h rd__h--3" data-title-index="6">
                          <span className="entry-title-inner">À plus haut niveau. </span>
                        </span>
                        {selectedSpell.upCast}
                      </p>
                    </div>
                  </div> : ""}

                  {Object.entries(selectedSpell.casters).map(([type, casters]) => {
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
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                  <span>
                    <b>Source: </b>
                    <i
                      title={Parser.SOURCE_JSON_TO_FULL[selectedSpell.source]}>{selectedSpell.source}</i>, page {selectedSpell.page}.
                  </span>
                    <span>
                    <b>Nom Anglais: </b>
                    <i>{selectedSpell.id}</i>
                  </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
    {isDialogOpen ? <Filters filterOptions={FILTER_OPTIONS} defaultState={filterState} onClose={closeDialog}
                             onSave={saveFilterResults}/> : ""}
  </div>)

}