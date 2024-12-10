import React, {useCallback, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Parser} from "../layout/5e/js/parser";
import {type} from "@testing-library/user-event/dist/type";
import type {Entry} from "../layout/5e/Models";

Object.byString = function (o, s) {
  s = s.replace(/\[(\w+)]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  const a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    let k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  // console.log("o", o)
  return o;
}


export const Selector5e = (defaultElements: [{}] = [], columns: [{}], defaultSort: string = "name", tableDisplayOption: function) => {
  // console.log("defaultElements", defaultElements)
  const [selected: {} | undefined, setSelected] = useState();
  const [elements: [{}], setElements] = useState(defaultElements ?? []);
  const [sorting: string, setSorting] = useState("");
  const location = useLocation()

  function handleClickSelection(element) {
    setSelected(element)
  }

  function updateSortElementsState(type: string, list: [] = elements, updateState = true) {
    let shouldReset = sorting === type + ".des"
    let shouldAscend = !sorting.startsWith(type)
    let shouldDescend = sorting === type + ".asc"

    if (updateState) {
      if (shouldAscend) {
        // console.log("Should now ascend: " + type + ".asc")
        setSorting(type + ".asc")
      } else if (shouldDescend) {
        setSorting(type + ".des")
        // console.log("Should now descend: " + type + ".des")
      } else if (shouldReset) {
        setSorting("")
        // console.log("Should reset.")
        type = defaultSort
      }
    }
    // console.log("sorting",sorting)
    // console.log("type",type)
    // console.log("sorting === type",sorting === type)
    if (sorting === type || type === "") {
      if (type.includes(".asc") && !type.includes(".des")) {
        shouldAscend = true
      }
      if (type === "") {
        shouldReset = true
        type = defaultSort
      }
      type = type.replace(".asc", "").replace(".des", "")
    }

    return list.toSorted((a, b) => {
      let textA = a[type]?.toUpperCase() || "";
      let textB = b[type]?.toUpperCase() || "";
      if (shouldAscend || shouldReset) {
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }
      return textA < textB ? 1 : textA > textB ? -1 : 0;
    });
  }

  function setSelectFromHash() {
    const hash = location.hash
    // console.log("hash", hash)
    // console.log("hash", hash.replaceAll("%20"," "))
    // elements.map((e) => console.log(e.id,("#" + e.id === hash.replace("%20"," "))))
    const filtered = elements.find((e) => "#" + e.id === hash.replace(/%20/g, " "))
    // console.log("selected", filtered)
    if (filtered) {
      return filtered
    } else {
      return {}
    }
  }

  const TableHeader = () => {
    return (<>
      <div className="lst__form-top" id="filter-search-group">
        <button disabled className="ve-btn ve-btn-default">Filter</button>
        {/*TODO: add class "active" when hiding the filters div*/}
        <button disabled className="ve-btn ve-btn-default" title="Toggle Filter Summary">
          <span className="glyphicon glyphicon-resize-small"></span>
        </button>
        <div className="w-100 relative">
          <input disabled type="search" id="lst__search" autoComplete="off" autoCapitalize="off" spellCheck="false"
                 className="search form-control lst__search lst__search--no-border-h"
                 title="Hotkey: f. &quot;stats:<text>&quot; (&quot;/text/&quot; for regex) to search within stat blocks. &quot;info:<text>&quot; (&quot;/text/&quot; for regex) to search within info. &quot;text:<text>&quot; (&quot;/text/&quot; for regex) to search within stat blocks plus info."/>
          <div id="lst__search-glass" className="lst__wrp-search-glass ve-flex-vh-center no-events">
            <span className="glyphicon glyphicon-search"></span>
          </div>
          {/*TODO: Shown entries / Total Entries*/}
          <div className="lst__wrp-search-visible no-events ve-flex-vh-center">101/264</div>
        </div>
        <button disabled className="ve-btn ve-btn-default" title="Feeling Lucky?">
          <span className="glyphicon glyphicon-random"></span>
        </button>
        <button disabled className="ve-btn ve-btn-default" title="Hide Search Bar and Entry List">Hide</button>
        <button disabled type="button" className="ve-btn ve-btn-default" id="reset"
                title="Reset filters. SHIFT to reset everything.">
          Reset
        </button>
      </div>

      {/*TODO: add class "ve-hidden" to hide*/}
    </>)
  }

  function DisplayList() {
    // console.log(selected)
    return <>
      <div id="filtertools" className="input-group input-group--bottom ve-flex no-shrink">
        {columns.map((column) => {
          // console.log("sorting", sorting)
          return (<button type="button"
                          className={column.classSize + " sort ve-btn ve-btn-default ve-btn-xs"}
                          onClick={() => setElements(updateSortElementsState(column.sortId))}
          >
            {column.id}
            <span className={"lst__caret"
              + (sorting.startsWith(column.sortId) ? " lst__caret--active" : "")
              + (sorting === column.sortId + ".des" ? " lst__caret--reverse" : "")
            }></span>
          </button>)
        })}
      </div>
      <div id="list" className="list list--stats">
        {/*{console.log(elements)}*/}
        {elements.map((elem) => {
          // console.log(elem)
          return <div
            className={selected?.id === elem.id ? "lst__row ve-flex-col list-multi-selected" : "lst__row ve-flex-col"}
            onClick={() => handleClickSelection(elem)}>
            <Link to={"#" + elem.id} className="lst__row-border lst__row-inner">
              {columns.map(column => {
                const string = Object.byString(elem, column.sortId)
                switch (column.sortId) {
                  case "source":
                    return (
                      <span
                        className={column.colClass + " source__" + string}
                        title={Parser.SOURCE_JSON_TO_FULL[string]}>
                        {string}
                      </span>
                    )
                  default: {
                    if (typeof tableDisplayOption === "function") {
                      return tableDisplayOption(column, string, elem) ??
                        <span className={column.colClass}>{string}</span>
                    }
                  }
                    return <span className={column.colClass}>{string}</span>
                }
              })}
            </Link>
          </div>
        })}
      </div>
    </>;
  }

  function TempFilters({filters, toggleFilter}) {
    return <div className="fltr__mini-view ve-btn-group">
      {Object.keys(filters).map((filter) => {
        const path = filters[filter]
        return <div className="fltr__mini-pill"
                    data-state={filters[path + "-" + filter] ?? "disabled"}
                    onClick={() => toggleFilter(path + "-" + filter)}
        >
          {filter}
        </div>
      })}
    </div>
  }

  function DetailsHeader() {
    return <tr>
      <th className="stats__th-name ve-text-left pb-0 " colSpan="6" data-name="Goblin"
          data-page="races.html" data-source="MPMM" data-hash="goblin_mpmm">
        <div className="split-v-end">
          <div className="ve-flex-v-center">
            <h1 className="stats__h-name copyable m-0"
              // onMouseDown="event.preventDefault()"
              // onClick="Renderer.utils._pHandleNameClick(this)"
            >{selected.name}</h1>
          </div>
          <div className="stats__wrp-h-source  ve-flex-v-baseline">
            <a href={"book.html#" + selected.source + ",page:" + selected.page}
               className={"help-subtle stats__h-source-abbreviation source__" + selected.source}
               title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</a>
            <a href={"book.html#" + selected.source + ",page:" + selected.page} className="rd__stats-name-page ml-1"
               title={"Page" + selected.page}>p{selected.page}</a>
          </div>
        </div>
      </th>
    </tr>
  }

  useEffect(() => {
    // console.log(location.hash)
    setSelected(setSelectFromHash())
  }, [location]);

  // console.log("selected", selected)
  // console.log("elements", elements)
  // console.log("sorting", sorting)
  return {
    selected,
    setSelected,
    elements,
    setElements,
    sorting,
    setSorting,
    handleClickSelection,
    updateSortElementsState,
    TableHeader,
    DisplayList,
    DetailsHeader,
    TempFilters
  };
}

export const ToggleState = () => {
  const [toggleStates, setToggleStates] = useState({})
  const toggleStateChange = (id) => {
    setToggleStates((prevStates) => ({
      ...prevStates, [id]: prevStates[id] !== undefined ? !prevStates[id] : false,
    }));
    console.log(toggleStates)
  }
  const getToggleState = (id) => {
    // console.log(id, toggleStates[id])
    return toggleStates[id] || toggleStates[id] === undefined
  }

  const addToggleableState = (id) => {
    if (toggleStates[id] === undefined) {
      setToggleStates((prevStates) => ({
        ...prevStates, [id]: true, // Default state for the new child
      }));
    }
  }

  return {toggleStateChange, getToggleState, addToggleableState}
}

export const FilterManager = (setElements: function, updateSortElementsState: function, elements: [] = []) => {
  const [filters, setFilters] = useState({});

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
    let updatedElements = [...elements]
    if (activeFilters.length > 0) {
      updatedElements = [...elements].filter((element) => {
        return activeFilters.some(([key, state]) => doFilter(key, element, state));
      });
    }
    // console.log(sorting)
    updatedElements = updateSortElementsState("", updatedElements, false); // Pass a flag to prevent state updates
    setElements(updatedElements)
  }, [filters, setElements]);

  // Function to toggle a filter
  const toggleFilter = useCallback((filterKey) => {
    setFilters((prevFilters) => {
      const currentState = prevFilters[filterKey] || 'disabled';
      const nextState = currentState === 'disabled' ? 'positive'
        : currentState === 'positive' ? 'negative'
          : 'disabled';
      return {...prevFilters, [filterKey]: nextState};
    });
  }, []);

  return {
    filters,
    toggleFilter,
  };
}




export const RenderModule = (props: {}) => {

  const render = (entry: string | Entry, depth: number = 1, toggle: string = "") => {
    if (!entry) return;

    if (Array.isArray(entry)) return entry.map(item => render(item, depth, toggle));
    else if (entry.type) {
      switch (entry.type) {
        case "subFeature": {
          return props.subFeature(entry.subFeature, depth+1)
        }
        case "entries": {
          if (depth > 1) {
            return <div></div>
          }
          return props.renderEntries(entry, toggle + "-sub-" + entry.name ?? "",depth)
        }
        case "list": {
          // console.log(entry)
          return <ul className={"rd__list " + entry.style ?? ""}>
            {entry.entries.map(item => {
              return <li className="rd__li">{render(item, depth++, toggle)}</li>
            })}
          </ul>
        }
        default:
          return <><br/>Not yet implemented: "{entry.type}".</>
      }
    } else if (typeof entry === "string") {
      return props.defaultString?props.defaultString(entry):<p>{entry}</p>
    } else return false;
  }

  return {render}


}