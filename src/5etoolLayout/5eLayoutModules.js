import React, {useCallback, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Parser} from "../layout/5e/js/parser";
import type {Entry} from "../layout/5e/Models";
import {PlayerOptionNFeature} from "../layout/5e/Models";
import {getResource, Resources} from "../resources/ResourcesFetch";
import {loadFromLocalStorage, saveToLocalStorage} from "./PersistData";

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

export class Utils {
  constructor(selector) {
    this.elements = Utils.getSelector(selector);
    this.element = this.get(0);
    return this;
  }

  // offset() {
  //   if (!this.element) {
  //     return {
  //       left: 0,
  //       top: 0,
  //     };
  //   }
  //   const box = this.element.getBoundingClientRect();
  //   return {
  //     top:
  //       box.top +
  //       window.pageYOffset -
  //       document.documentElement.clientTop,
  //     left:
  //       box.left +
  //       window.pageXOffset -
  //       document.documentElement.clientLeft,
  //   };
  // }
  //
  // css(css, value) {
  //   if (value !== undefined) {
  //     this.each((el) => {
  //       Utils.setCss(el, css, value);
  //     });
  //     return this;
  //   }
  //   if (typeof css === 'object') {
  //     for (const property in css) {
  //       if (Object.prototype.hasOwnProperty.call(css, property)) {
  //         this.each((el) => {
  //           Utils.setCss(el, property, css[property]);
  //         });
  //       }
  //     }
  //     return this;
  //   }
  //   const cssProp = Utils.camelCase(css);
  //   const property = Utils.styleSupport(cssProp);
  //   return getComputedStyle(this.element)[property];
  // }
  //
  // html(html) {
  //   if (html === undefined) {
  //     if (!this.element) {
  //       return '';
  //     }
  //     return this.element.innerHTML;
  //   }
  //   this.each((el) => {
  //     el.innerHTML = html;
  //   });
  //   return this;
  // }
  //
  // width() {
  //   if (!this.element) {
  //     return 0;
  //   }
  //   const style = window.getComputedStyle(this.element, null);
  //   return parseFloat(style.width.replace('px', ''));
  // }
  //
  // remove() {
  //   this.each((el) => {
  //     el.parentNode.removeChild(el);
  //   });
  //   return this;
  // }

  static getSelector(selector, context) {
    if (selector && typeof selector !== 'string') {
      if (selector.length !== undefined) {
        return selector;
      }
      return [selector];
    }
    context = context || document;

    // For performance reasons, use getElementById
    // eslint-disable-next-line no-control-regex
    const idRegex = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/;
    if (idRegex.test(selector)) {
      const el = document.getElementById(selector.substring(1));
      return el ? [el] : [];
    }
    return [].slice.call(context.querySelectorAll(selector) || []);
  }

  get(index) {
    if (index !== undefined) {
      return this.elements[index];
    }
    return this.elements;
  }

  // each(func) {
  //   if (!this.elements.length) {
  //     return this;
  //   }
  //   this.elements.forEach((el, index) => {
  //     func.call(el, el, index);
  //   });
  //   return this;
  // }

  static setCss(el, prop, value) {
    // prettier-ignore
    let cssProperty = Utils.camelCase(prop);
    cssProperty = Utils.styleSupport(cssProperty);
    el.style[cssProperty] = value;
  }

  static camelCase(text) {
    return text.replace(/-([a-z])/gi, (s, group1) => group1.toUpperCase());
  }

  static styleSupport(prop) {
    let vendorProp;
    let supportedProp;
    const capProp = prop.charAt(0).toUpperCase() + prop.slice(1);
    const prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    let div = document.createElement('div');

    if (prop in div.style) {
      supportedProp = prop;
    } else {
      for (let i = 0; i < prefixes.length; i++) {
        vendorProp = prefixes[i] + capProp;
        if (vendorProp in div.style) {
          supportedProp = vendorProp;
          break;
        }
      }
    }

    div = null;
    return supportedProp;
  }
}

Utils.eventListeners = {};

// function $utils(selector) {
//   return new Utils(selector);
// }

export function extractNestedValue(obj, path) {
  return path.split('.').reduce((o, i) => o?.[i], obj)
}

export const setValueAtPath = (obj, path, value) => {
  const keys = path.split(".");
  let current = obj;

  keys.forEach((key, index) => {
    // If it's the last key, set the value
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      // If the key doesn't exist, create an empty object
      if (!(key in current) || typeof current[key] !== "object") {
        current[key] = {};
      }
      current = current[key];
    }
  });

  return obj;
};


export const Selector5e = (defaultElements: [{}] = [], columns: [{}], defaultSort: string = "name", tableDisplayOption: function, defaultPinnedElements: [{}] = []) => {
  // console.log("defaultElements", defaultElements)
  const [selected: {} | undefined, setSelected] = useState();
  const [elements: [{}], setElements] = useState(sortList(defaultElements, defaultSort, true) ?? []);
  const [pinnedElements: [{}], setPinnedElements] = useState(sortList(defaultPinnedElements, "pinnedAt", true) ?? []);
  const [sorting: string, setSorting] = useState("");
  const [pinnedSorting: string, setPinnedSorting] = useState("");
  const location = useLocation()

  function handleClickSelection(element) {
    setSelected(element)
  }

  function updateSortElementsState(type: string, list: [] = elements, updateState = true) {
    let shouldReset = sorting === type + ".des"
    let shouldAscend = !sorting.startsWith(type)
    let shouldDescend = sorting === type + ".asc"
    // console.log("---------")
    // console.log("type", type)
    type = type !== "" ? type : defaultSort
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
    } else {
      if (sorting.includes(".asc") && !pinnedSorting.includes(".des")) {
        shouldAscend = true
      }
      if (sorting === "") {
        shouldReset = true
        type = defaultSort
      }
      type = sorting.replace(".asc", "").replace(".des", "")
    }
    // console.log("sorting", sorting)
    // console.log("type", type)
    // console.log("shouldAscend", shouldAscend)
    // console.log("shouldReset", shouldReset)
    // console.log("updateSortElementsState '", type, "'")
    // console.log("Simple", type, shouldAscend || shouldReset)
    return sortList(list, type, shouldAscend || shouldReset);
  }

  function updatePinnedSortElementsState(type: string, list: [] = elements, updateState = true) {
    let shouldReset = pinnedSorting === type + ".des"
    let shouldAscend = !pinnedSorting.startsWith(type)
    let shouldDescend = pinnedSorting === type + ".asc"
    // console.log("---------")
    // console.log("type", type)
    type = type !== "" ? type : defaultSort
    if (updateState) {
      if (shouldAscend) {
        // console.log("Should now ascend: " + type + ".asc")
        setPinnedSorting(type + ".asc")
      } else if (shouldDescend) {
        setPinnedSorting(type + ".des")
        // console.log("Should now descend: " + type + ".des")
      } else if (shouldReset) {
        setPinnedSorting("")
        // console.log("Should reset.")
        type = defaultSort
      }
    } else {
      if (pinnedSorting.includes(".asc") && !pinnedSorting.includes(".des")) {
        shouldAscend = true
      }
      if (pinnedSorting === "") {
        shouldReset = true
        type = defaultSort
      }
      type = pinnedSorting.replace(".asc", "").replace(".des", "")
    }
    // console.log("sorting", sorting)
    // console.log("type", type)
    // console.log("shouldAscend", shouldAscend)
    // console.log("shouldReset", shouldReset)
    // console.log("updateSortElementsState '", type, "'")
    // console.log("Pinned", type, shouldAscend || shouldReset)
    return sortList(list, type, shouldAscend || shouldReset);
  }

  function sortList(list, fieldName, ascend) {
    // console.log(list, fieldName)

    return [...list].sort((a, b) => {
      const valueA = extractNestedValue(a, fieldName)
      const valueB = extractNestedValue(b, fieldName)

      if (typeof valueA === "string" && typeof valueB === "string") {
        let textA = valueA?.toUpperCase() || "";
        let textB = valueB?.toUpperCase() || "";
        if (ascend) {
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        }
        return textA < textB ? 1 : textA > textB ? -1 : 0;
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB
      }
      console.error(`Unexpected value tag: "${fieldName}"`)
      return 0
    })
  }

  const TableHeader = ({filterOpen}) => {
    return (<>
      <div className="lst__form-top" id="filter-search-group">
        <button disabled={!filterOpen} onClick={filterOpen} className="ve-btn ve-btn-default">Filter</button>
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

  function DisplayList(elementsToShow = []) {
    // console.log(elementsToShow)
    // console.log(selected)
    // console.log("columns", columns)
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
        {elementsToShow?.map((elem) =>
          <div
            className={selected?.id === elem.id ? "lst__row ve-flex-col list-multi-selected" : "lst__row ve-flex-col"}
            onClick={() => handleClickSelection(elem)}
            key={elem.id}>
            <Link to={"#" + elem.id.toLowerCase()} id={"#" + elem.id.toLowerCase().replace(" ", "%20")}
                  className="lst__row-border lst__row-inner">
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
                    return <span className={column.colClass}>{string}</span>
                  }
                }
              })}
            </Link>
          </div>
        )}
      </div>
    </>;
  }
  const defaultMap = {
    0: "76px",
    75: "auto",
  }
  const defaultHeight = loadFromLocalStorage("pinListHeight") ?? 0
  const [pinnedHeight, setPinnedHeight] = useState({value: defaultHeight})
  const [pinnedValue, setPinnedValue] = useState({value: Object.keys(defaultMap).includes(defaultHeight)?defaultMap[defaultHeight]:defaultHeight+"%"})



  function DisplayListPinned(elementsToShow = []) {
    const handleChange = function (event) {
      if (Object.keys(defaultMap).includes(event.target.value)) {
        setPinnedValue({value: defaultMap[event.target.value]})
      }else {
        setPinnedValue({value: event.target.value + "%"})
      }
      setPinnedHeight({value: event.target.value})
      saveToLocalStorage("pinListHeight",event.target.value)
    }

    return <>
      <div id="sublistcontainer" className="sublist sublist--resizable no-print sublist--visible"
           style={{height: pinnedValue.value, minHeight: "76px", maxHeight: Object.keys(defaultMap)[1]+"%"}}>
        <div style={{display: "flex"}}>
          <input value={pinnedHeight.value} onChange={handleChange} type="range" min="0" max={Object.keys(defaultMap)[1]}/>
          <div style={{width: "5%"}}></div>
          <input value={pinnedHeight.value} onChange={handleChange} type="number" min="0" max={Object.keys(defaultMap)[1]}/>
        </div>
        <div id="sublistsort" className="ve-btn-group sublist__wrp-cols">
          {columns.map((column) => {
            if (column.sortId === "source") return "";
            // console.log("sorting", sorting)
            return (<button type="button"
                            className={(column.classSizePinned ?? column.classSize) + " sort ve-btn ve-btn-default ve-btn-xs"}
                            onClick={() => setPinnedElements(updatePinnedSortElementsState(column.sortId, elementsToShow))}
            >
              {column.id}
              <span className={"lst__caret"
                + (pinnedSorting.startsWith(column.sortId) ? " lst__caret--active" : "")
                + (pinnedSorting === column.sortId + ".des" ? " lst__caret--reverse" : "")
              }></span>
            </button>)
          })}
        </div>
        <div id="list" className="list">
          {/*{console.log(elements)}*/}
          {elementsToShow?.map((elem) =>
            <div
              className={selected?.id === elem.id ? "lst__row ve-flex-col list-multi-selected" : "lst__row ve-flex-col"}
              onClick={() => handleClickSelection(elem)}
              key={elem.id}>
              <Link to={"#" + elem.id.toLowerCase()} id={"#" + elem.id.toLowerCase().replace(" ", "%20")}
                    className="lst__row-border lst__row-inner">
                {columns.map(column => {
                  const string = Object.byString(elem, column.sortId)
                  switch (column.sortId) {
                    case "source":
                      return ""
                    default: {
                      if (typeof tableDisplayOption === "function") {
                        return tableDisplayOption(column, string, elem) ??
                          <span className={column.colClassPinned ?? column.colClass}>{string}</span>
                      }
                      return <span className={column.colClassPinned ?? column.colClass}>{string}</span>
                    }
                  }
                })}
              </Link>
            </div>
          )}
        </div>
        <div className="sublist__ele-resize mobile__hidden">...</div>
      </div>
    </>;
  }

  function TempFilters({filters, toggleFilter, filtersToggleList}) {
    return <div className="fltr__mini-view ve-btn-group">
      {Object.keys(filters).map((filter) => {
        const path = filters[filter]
        return <div className="fltr__mini-pill"
                    data-state={filtersToggleList[path + "-" + filter] ?? "disabled"}
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
                onClick={() => navigator.clipboard.writeText(selected.name)}
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
    function setSelectFromHash() {
      const hash = location.hash
      // console.log("hash", hash)
      // console.log("hash", hash.replaceAll("%20"," "))
      // elements.map((e) => console.log(e.id,("#" + e.id === hash.replace("%20"," "))))
      const filtered = defaultElements.find((e) => "#" + e.id.toLowerCase() === hash.toLowerCase().replace(/%20/g, " "))
      // console.log("selected", filtered)
      if (filtered) {
        return filtered
      } else {
        return {}
      }
    }

    setSelected(setSelectFromHash())
  }, [location]);

  // console.log("selected", selected)
  // console.log("elements", elements)
  // console.log("sorting", sorting)


  return {
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
  };
}

export const ToggleState = () => {
  const [toggleStates, setToggleStates] = useState({})
  const toggleStateChange = (id) => {
    setToggleStates((prevStates) => ({
      ...prevStates, [id]: prevStates[id] !== undefined ? !prevStates[id] : false,
    }));
    // console.log(toggleStates)
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

  // function doFilter(key, element, state) {
  //   const [nestedKey, expectedValue] = key.split("-");
  //
  //   // console.log(key, nestedKey, expectedValue, element)
  //
  //   const nestedValue = extractNestedValue(element, nestedKey);
  //   // console.log(nestedKey, expectedValue, nestedValue)
  //
  //   if (state === 'yes') {
  //     // console.log(state, Array.isArray(nestedValue) ? nestedValue.includes(expectedValue) : nestedValue === expectedValue)
  //     return Array.isArray(nestedValue)
  //       ? nestedValue.map(a => a.toLowerCase()).includes(expectedValue.toLowerCase())
  //       : nestedValue === expectedValue;
  //   } else if (state === 'negative') {
  //     // console.log(state, Array.isArray(nestedValue) ? !nestedValue.includes(expectedValue) : nestedValue !== expectedValue)
  //     return Array.isArray(nestedValue)
  //       ? !nestedValue.map(a => a.toLowerCase()).includes(expectedValue.toLowerCase())
  //       : nestedValue !== expectedValue;
  //   }
  //   return true;
  // }

  // useEffect(() => {
  //   // console.log("filters", filters)
  //   const activeFilters = Object.entries(filters).filter(
  //     ([, state]) => state !== 'neutral'
  //   );
  //   // console.log("activeFilters", activeFilters)
  //   let updatedElements = [...elements]
  //   // console.log(elements)
  //   if (activeFilters.length > 0) {
  //     updatedElements = [...elements].filter((element) => {
  //       return activeFilters.some(([key, state]) => doFilter(key, element, state));
  //     });
  //   }
  //   // console.log(sorting)
  //   updatedElements = updateSortElementsState("", updatedElements, false); // Pass a flag to prevent state updates
  //   setElements(updatedElements)
  // }, [filters, setElements]);

  useEffect(() => {
    let updatedElements = [...elements];

    // Group filters by category
    const categorizedFilters = {};

    for (const [key, state] of Object.entries(filters)) {
      if (state === "neutral") continue; // Ignore neutral filters

      const [id, value] = key.split("-");
      const [category,] = id.includes(".") ? id.split(".") : [id, undefined];
      // const categoryKey = subcategory ? `${category}-${subcategory}` : category;
      // console.log(category, subcategory, value)
      if (!categorizedFilters[category]) {
        categorizedFilters[category] = {yes: [], negative: [], id: id};
      }

      categorizedFilters[category][state].push(value.toLowerCase());
    }
    updatedElements = updatedElements.filter((element) => {
      return Object.entries(categorizedFilters).every(([_, {yes, negative, id}]) => {
        let nestedValues = extractNestedValue(element, id);
        if (!Array.isArray(nestedValues)) nestedValues = [nestedValues];

        // console.log("nestedValues", nestedValues)
        // console.log("negative", negative)
        // console.log("yes", yes)
        if (negative.length > 0 && nestedValues.some((val) => negative.includes(val.toLowerCase()))) {
          return false
        }

        if (yes.length > 0) {
          return nestedValues.some((val) => yes.includes(val.toLowerCase()));
        }

        return true; // If no yes filters exist, do not filter this category
      })
    })
    // console.log("updatedElements", updatedElements)
    updatedElements = updateSortElementsState("", updatedElements, false); // Pass a flag to prevent state updates
    setElements(updatedElements)

  }, [filters]);


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
    setFilters,
    toggleFilter,
  };
}

export const RenderModule = (props: {}) => {
  const _SPLIT_BY_TAG_LEADING_CHARS = new Set(["@", "="])
  // const TAG_LOOKUP = {
  //   spell: {
  //     tagName: "spell",
  //     defaultSource: Parser.SRC_PHB,
  //     page: "/TTRPG-wiki/spells",
  //   }
  // }

  function splitByTags(string) {
    let tagDepth = 0;
    let char, char2;
    const out = [];
    let curStr = "";
    // let isPrevCharOpenBrace = false;

    const pushOutput = () => {
      if (!curStr) return;
      out.push(curStr);
    };

    const len = string.length;
    for (let i = 0; i < len; ++i) {
      char = string[i];
      char2 = string[i + 1];

      switch (char) {
        case "{":
          if (!_SPLIT_BY_TAG_LEADING_CHARS.has(char2)) {
            // isPrevCharOpenBrace = false;
            curStr += "{";
            break;
          }

          // isPrevCharOpenBrace = true;

          if (tagDepth++ > 0) {
            curStr += "{";
          } else {
            pushOutput();
            curStr = `{${char2}`;
            ++i;
          }

          break;

        case "}":
          // isPrevCharOpenBrace = false;
          curStr += "}";
          if (tagDepth !== 0 && --tagDepth === 0) {
            pushOutput();
            curStr = "";
          }
          break;

        case "@":
        case "=": {
          curStr += char;
          break;
        }

        default:
          // isPrevCharOpenBrace = false;
          curStr += char;
          break;
      }
    }

    pushOutput();

    return out;
  }

  function splitFirstSpace(string) {
    const firstIndex = string.indexOf(" ");
    return firstIndex === -1 ? [string, ""] : [string.substring(0, firstIndex), string.substring(firstIndex + 1)];
  }

  // String formating like bold or italic
  function renderString_renderTag(tag, string) {
    switch (tag) {
      case "@b":
      case "@bold":
        return <b>{string}</b>
      case "@i":
      case "@italic":
        return <i>{string}</i>
      case "@s":
      case "@strike":
        return <s>{string}</s>
      case "@s2":
      case "@str":
        return <s className="ve-strike-double">{string}</s>
      case "@u":
      case "@underline":
        return <u>{string}</u>
      case "@u2":
      case "@underlineDouble":
        return <u className="ve-underline-double">{string}</u>
      default:
        const {
          name,
          _source,
          _displayText,
          _others,
          page,
          hash,
          _hashPreEncoded,
          _pageHover,
          _hashHover,
          _hashPreEncodedHover,
          _preloadId,
          _linkText,
          _subhashes,
          _subhashesHover,
          _isFauxPage
        } = getTagMeta(tag, string)

        return <Link to={page + (hash ? "#" + hash : "")}>{name}</Link>
    }
  }

  function getTagMeta(tag, string) {
    switch (tag) {
      default:
        return getTagMeta_generic(tag, string)
    }
  }

  //Link to other pages like spells
  function getTagMeta_generic(tag, string) {
    function getTagSource(tag, source) {
      if (source && source.trim()) return source;

      tag = tag.trim();
      // const tagMeta = TAG_LOOKUP[tag.substring(1, tag.length)];
      const tagMeta = {defaultSource: Parser.SRC_PHB};

      if (!tagMeta) throw new Error(`Unhandled tag "${tag}"`);
      return tagMeta.defaultSource;
    }

    function unpackUid(uid, tag, opts) {
      opts = opts || {isLower: false};
      if (opts.isLower) uid = uid.toLowerCase();
      let [name, source, displayText, ...others] = uid.split("|").map(Function.prototype.call.bind(String.prototype.trim));

      source = source || getTagSource(tag, source);
      if (opts.isLower) source = source.toLowerCase();

      return {
        name,
        source,
        displayText,
        others,
      };
    }

    function encodeForHash(toEncode) {
      if (toEncode instanceof Array) return toEncode.map(it => `${it}`.toUrlified()).join("_");
      else return `${toEncode}`.toUrlified();
    }

    const {name, source, displayText, others} = unpackUid(string, tag);
    const hash = encodeForHash([name, source ?? ""]);

    const out = {
      name,
      displayText,
      others,

      page: null,
      source,
      hash,

      preloadId: null,
      subhashes: null,
      linkText: null,

      hashPreEncoded: true,
    }

    switch (tag) {
      case "@spell": {
        const spell = getResource(Resources.spell).filter(s => s.name.toLowerCase() === string.toLowerCase())[0]
        if (!spell) {
          console.error("Unknown spell: " + string)
        }
        out.hash = encodeForHash(spell?.id)

        out.page = "/TTRPG-wiki/spells";
        break;
      }
      case "@spellen": {
        console.error("This spell is in english: " + string)
        out.hash = encodeForHash("english spell " + string)
        out.page = "/TTRPG-wiki/spells";
        break;
      }
      default:
        throw new Error(`Unhandled tag "${tag}"`);
    }
    return out
  }

  const render = (entry: string | Entry, depth: number = 1, toggle: string = "") => {
    if (!entry) return;
    // console.log(entry, depth, toggle)

    if (Array.isArray(entry)) return entry.map(item => render(item, depth, toggle));
    else if (entry.type) {
      // console.log(entry, entry.header, depth)
      // depth = entry.header ?? depth
      switch (entry.type) {
        case "refClassFeature":
          return props.refClassFeature(entry.classFeature, ++depth)
        case "refSubclassFeature":
          return props.refSubclassFeature(entry.subclassFeature, ++depth)
        case "refOptionalfeature": {
          // console.log(getResource(Resources.feature))
          // console.log(entry.optionalfeature)
          const feature: PlayerOptionNFeature = getResource(Resources.feature).filter(f => f.id && f.name).filter(f =>
            f.name.toLowerCase() === entry.optionalfeature.toLowerCase() ||
            f.id.toLowerCase() === entry.optionalfeature.toLowerCase()
          )[0]
          if (!feature) {
            return <><br/>Feature not find: "{entry.optionalfeature}".</>
          }
          // console.log(feature)
          return <div className={"rd__b rd__b--2"}>
            <h3 className={"rd__h rd__h--2"}>
              <span className={"entry-title-inner"}>{feature.name}</span>
              <span className={"ve-flex-vh-center"}>
                <span className="rd__title-link ">
                <span className="help-subtle" title={Parser.SOURCE_JSON_TO_FULL[feature.source]}>
                  {feature.source}
                </span>
                p{feature.page}
              </span>
                <span className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                      onClick={() => props.toggleStateChange(feature)}>
                  [{props.getToggleState(feature) ? "–" : "+"}]
                </span>
              </span>
            </h3>
            {props.getToggleState(feature) ?
              <p>
                {/*{console.log(feature.consumes)}*/}
                {feature.consumes ?
                  <i>Coût: {feature.consumes.amountMin && feature.consumes.amountMax ? feature.consumes.amountMin + "-" + feature.consumes.amountMax : feature.consumes.amount ?? 1} {feature.consumes.name}</i> : ""}
                {render(feature.entries, depth, toggle)}
              </p>
              : ""}
          </div>
        }
        case "entries": {
          // console.log(entry, depth)
          // if (depth > 1) {
          //   return <div></div>
          // }
          // console.log(entry, depth, toggle)
          return props.renderEntries(entry, toggle + "-sub-" + entry.name ?? "", ++depth)
        }
        case "list": {
          // console.log(entry)
          return <ul className={"rd__list " + entry.style ?? ""}>
            {entry.entries.map((item, idx) => {
              return <li key={idx} className="rd__li">{render(item, depth++, toggle)}</li>
            })}
          </ul>
        }
        case "table": {
          return <>
            <table className={"w-100 rd__table" + (entry.isStriped === false ? "" : " stripe-odd-table")}>
              {entry.caption ? <caption>{entry.caption}</caption> : ""}
              <thead>
              <tr>
                {entry.colLabels.map((label, idx) => <th className={entry.colStyles[idx]}>
                  {label}
                </th>)}
              </tr>
              </thead>
              <tbody>
              {entry.rows.map(row => <tr>
                {row.map((cell, idx) => <td className={"td__th " + entry.colStyles[idx]}>
                  {typeof cell === "number" ? render(String(cell)) : render(cell)}
                </td>)}
              </tr>)}
              </tbody>
            </table>
          </>
        }
        case "abilityDc":
          return <div className={"rd__wrp-centered-ability"}>
            <b>DD de sauvegarde des sorts</b> = 8 + votre
            modificateur {"aeiouy".includes((entry.attribute ?? entry.attributes[0]).toLowerCase().at(0)) ? "d'" : "de "}
            {entry.attribute ? Parser.attAbvToFull(entry.attribute?.toLowerCase()) : entry.attributes.map(att => Parser.attAbvToFull(att.toLowerCase()))} +
            bonus de maîtrise
          </div>
        case "abilityAttackMod":
          return <div className={"rd__wrp-centered-ability"}>
            <b>Modificateur aux attaques avec un sort</b> = votre
            modificateur {"aeiouy".includes(entry.attribute.toLowerCase().at(0)) ? "d'" : "de "}{Parser.attAbvToFull(entry.attribute.toLowerCase())} +
            bonus de maîtrise
          </div>
        default:
          return <><br/>Not yet implemented: "{entry.type}".</>
      }
    } else if (typeof entry === "string") {
      let str = []
      const tagSplit = splitByTags(entry)
      const len = tagSplit.length;
      for (let i = 0; i < len; ++i) {
        const s = tagSplit[i];
        if (!s) continue;

        if (!s.startsWith("{@")) {
          str.push(s);
          continue;
        }

        const [tag, text] = splitFirstSpace(s.slice(1, -1));
        // console.log(tag, text)
        str.push(renderString_renderTag(tag, text));

      }
      // console.log("HERE:", str)

      return props?.defaultString ? props.defaultString(str) : <p>{str}</p>
    } else return false;
  }

  return {render}


}