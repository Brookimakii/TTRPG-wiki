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
        {elementsToShow?.filter((elem) => elem?.id).map((elem) =>
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
           style={{height: pinnedValue.value, minHeight: "76px", maxHeight: Object.keys(defaultMap)[1] + "%"}}>
        <div style={{display: "flex"}}>
          <span>Taille:</span>
          <input value={pinnedHeight.value} onChange={handleChange} type="range" min="0"
                 max={Object.keys(defaultMap)[1]}/>
          <div style={{width: "5%"}}></div>
          <input value={pinnedHeight.value} onChange={handleChange} type="number" min="0"
                 max={Object.keys(defaultMap)[1]}/>
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
          {elementsToShow?.filter((elem) => elem?.id).map((elem) =>
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

  const setToggleState = (id, value) => {
    setToggleStates((prevStates) => ({
      ...prevStates, [id]: value,
    }));
  }

  return {toggleStateChange, getToggleState, addToggleableState, setToggleState}
}

// Combine helper for a single category: how do multiple selected "yes"/"no"
// pills within one category combine? "or" = any selected value matches,
// "and" = every selected value must be present, "xor" = exactly one matches.
function combineFilterMode(mode, matchCount, totalCount) {
  if (totalCount === 0) return null; // no constraint from this side
  switch (mode) {
    case "and": return matchCount === totalCount;
    case "xor": return matchCount === 1;
    case "or":
    default: return matchCount > 0;
  }
}

// fieldValue: raw value(s) on the element. positives/negatives: selected pill values (lowercased).
function categoryMatches(fieldValue, positives, negatives, posMode, negMode) {
  let values = Array.isArray(fieldValue) ? fieldValue : [fieldValue];
  values = values.filter(v => v != null).map(v => String(v).toLowerCase());

  const posMatchCount = positives.filter(p => values.includes(p)).length;
  const negMatchCount = negatives.filter(n => values.includes(n)).length;

  const posResult = combineFilterMode(posMode, posMatchCount, positives.length);
  const negResult = combineFilterMode(negMode, negMatchCount, negatives.length);

  if (posResult === false) return false;
  if (negResult === true) return false;
  return true;
}

// categories: [{active, matches, combineAs}]
function overallMatches(categories, overallMode) {
  const active = categories.filter(c => c.active);
  if (active.length === 0) return true;
  if (overallMode === "and") return active.every(c => c.matches);
  if (overallMode === "or") return active.some(c => c.matches);
  // custom: AND-flagged categories must ALL match; OR-flagged categories need >=1 match (if any exist)
  const andGroup = active.filter(c => c.combineAs !== "or");
  const orGroup = active.filter(c => c.combineAs === "or");
  const andOk = andGroup.every(c => c.matches);
  const orOk = orGroup.length === 0 || orGroup.some(c => c.matches);
  return andOk && orOk;
}

export const DEFAULT_CATEGORY_META = {posMode: "or", negMode: "or", combineAs: "and", hidden: false};

export const FilterManager = (setElements: function, updateSortElementsState: function, elements: [] = []) => {
  const [filters, setFilters] = useState({});
  const [categoryMeta, setCategoryMeta] = useState({});
  const [overallMode, setOverallMode] = useState("and");

  useEffect(() => {
    let updatedElements = [...elements];

    // Group filter selections by their FULL id (e.g. "casters.classes", "casters.subclasses",
    // "school") — not just the leading segment — so sibling subcategories under the same
    // top-level category don't collapse into one bucket and match the wrong field.
    const categorized = {};
    for (const [key, state] of Object.entries(filters)) {
      if (state === "neutral" || state === "disabled") continue;
      const dashIdx = key.lastIndexOf("-");
      const id = dashIdx === -1 ? key : key.slice(0, dashIdx);
      const value = dashIdx === -1 ? "" : key.slice(dashIdx + 1);
      if (!categorized[id]) categorized[id] = {yes: [], no: []};
      categorized[id][state].push(String(value).toLowerCase());
    }

    updatedElements = updatedElements.filter((element) => {
      const categoryResults = Object.entries(categorized).map(([id, {yes, no}]) => {
        const meta = categoryMeta[id] || DEFAULT_CATEGORY_META;
        const nestedValues = extractNestedValue(element, id);
        const matches = categoryMatches(nestedValues, yes, no, meta.posMode, meta.negMode);
        return {active: true, matches, combineAs: meta.combineAs};
      });
      return overallMatches(categoryResults, overallMode);
    });

    updatedElements = updateSortElementsState("", updatedElements, false); // Pass a flag to prevent state updates
    setElements(updatedElements)

  }, [filters, categoryMeta, overallMode]);


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
    setCategoryMeta,
    setOverallMode,
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
      case "@h":
        // 5etools shorthand: {@h} auto-inserts a bolded "Touché : " lead-in before attack damage text.
        return <i><b>Touché : </b></i>
      case "@dice":
      case "@damage":
      case "@scaledice":
      case "@scaledamage":
      case "@d20":
      case "@hitYourSpellAttack": {
        const [expr] = string.split("|");
        return <span className="render-roller ve-flex-vh-center" title="Formule de dés">{expr}</span>
      }
      case "@hit": {
        const [n] = string.split("|");
        const num = Number(n);
        return <span className="render-roller">{(Number.isFinite(num) && num >= 0 ? "+" : "") + n}</span>
      }
      case "@dc": {
        const [n] = string.split("|");
        return <span className="render-roller">DD {n}</span>
      }
      case "@ac": {
        const [n] = string.split("|");
        return <span>CA {n}</span>
      }
      case "@recharge": {
        const [n] = string.split("|");
        return <span>{n ? `(Rechargement ${n}-6)` : "(Rechargement 6)"}</span>
      }
      case "@chance": {
        const [n] = string.split("|");
        return <span>{n}% de chances</span>
      }
      case "@note":
        return <i className="ve-muted">{string}</i>
      default: {
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

        // Tags we don't have a dedicated resource lookup for (or that failed to resolve one)
        // still render their display text instead of crashing the page.
        if (!page) return <span title={tag}>{name}</span>

        return <Link to={page + (hash ? "#" + hash : "")}>{name}</Link>
      }
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
      case "@item": {
        const found = getResource(Resources.item).filter(i => i.name && i.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/items";
        break;
      }
      case "@creature": {
        const found = getResource(Resources.bestiary).filter(m => m.name && m.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/bestiary";
        break;
      }
      case "@class": {
        const found = getResource(Resources.clazz).filter(c => c.info?.name && c.info.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/classes";
        break;
      }
      case "@background": {
        const found = getResource(Resources.background).filter(b => b.name && b.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/backgrounds";
        break;
      }
      case "@feat": {
        const found = getResource(Resources.feat).filter(f => f.name && f.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/feats";
        break;
      }
      case "@race": {
        const found = getResource(Resources.race).filter(r => r.name && r.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/races";
        break;
      }
      case "@condition": {
        const found = getResource(Resources.condition).filter(c => c.name && c.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/conditions";
        break;
      }
      case "@variantrule":
      case "@quickref": {
        const found = getResource(Resources.rule).filter(r => r.name && r.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/rules";
        break;
      }
      case "@optfeature": {
        const found = getResource(Resources.feature).filter(f => f.name && f.name.toLowerCase() === out.name.toLowerCase())[0]
        out.hash = encodeForHash(found?.id ?? out.name)
        out.page = "/TTRPG-wiki/optionsFeatures";
        break;
      }
      default:
        // Unrecognized/unhandled tag — don't crash the page. Render it as plain,
        // non-linkable display text instead (handled by the caller when page is null).
        out.page = null;
        break;
    }
    return out
  }

  function renderInline(entry) {
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
      str.push(renderString_renderTag(tag, text));
    }
    return str
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
          return <ul
            className={"rd__list" + (entry.style ? " rd__" + entry.style : "")}
            style={entry.columns ? {columnCount: entry.columns} : undefined}
          >
            {entry.entries.map((item, idx) => {
              if (item && typeof item === "object" && item.type === "item") {
                return <li key={idx} className="rd__li">
                  {item.name ? <span className="bold">{item.name}</span> : ""}
                  {item.name && (item.entry !== undefined || item.entries !== undefined) ? " " : ""}
                  {item.entry !== undefined ? renderInline(item.entry)
                    : item.entries !== undefined ? item.entries.map((e, i) => <React.Fragment
                      key={i}>{typeof e === "string" ? renderInline(e) : render(e, depth + 1, toggle)}</React.Fragment>) : ""}
                </li>
              }
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
        case "abilityGeneric":
          return <div className={"rd__wrp-centered-ability"}>
            {entry.name ? <b>{entry.name}</b> : ""} {entry.name ? "= " : ""}{typeof entry.text === "string" ? renderInline(entry.text) : render(entry.text, depth, toggle)}
            {entry.attributes?.length ?
              <> ({entry.attributes.map((att, i) => <span key={i}>{Parser.attAbvToFull(att.toLowerCase())}</span>)})</> : ""}
          </div>
        case "hr":
          return <hr className={"rd__hr"}/>
        case "quote": {
          const lines = Array.isArray(entry.entries) ? entry.entries : [entry.entries]
          return <p className={"rd__quote"}>
            {lines.map((line, idx) => <span key={idx}
                                             className={"rd__quote-line" + (idx === lines.length - 1 ? " rd__quote-line--last" : "")}>
              {typeof line === "string" ? renderInline(line) : render(line, depth, toggle)}{idx === lines.length - 1 ? "" : <br/>}
            </span>)}
            {entry.by || entry.from ?
              <span className={"rd__quote-by"}>— {entry.by}{entry.by && entry.from ? ", " : ""}{entry.from}</span> : ""}
          </p>
        }
        case "inset":
        case "insetReadaloud":
          return <div className={"rd__b-inset" + (entry.type === "insetReadaloud" ? " rd__b-inset--readaloud" : "")}>
            {entry.name ? <span className={"rd__h rd__h--2"}><span
              className={"entry-title-inner"}>{entry.name}</span></span> : ""}
            <div className={"rd__b-inset-inner"}>{render(entry.entries, depth + 1, toggle)}</div>
          </div>
        case "variant":
        case "variantSub":
          return <div className={"rd__b-inset"}>
            {entry.name ?
              <span className={"rd__h rd__h--2"}><span className={"entry-title-inner"}>Variante : {entry.name}</span></span> : ""}
            <div className={"rd__b-inset-inner"}>{render(entry.entries, depth + 1, toggle)}</div>
          </div>
        case "optfeature":
          return <div className={"rd__b rd__b--2"}>
            {entry.name ? <h3 className={"rd__h rd__h--2"}>
              <span className={"entry-title-inner"}>{entry.name}</span>
            </h3> : ""}
            {render(entry.entries, depth + 1, toggle)}
          </div>
        case "section":
          return <>
            <hr className={"rd__hr rd__hr--section"}/>
            <div className={"rd__b rd__b--1"}>
              {entry.name ? <h2 className={"rd__h rd__h--1"}>
                <span className={"entry-title-inner"}>{entry.name}</span>
              </h2> : ""}
              {render(entry.entries, depth, toggle)}
            </div>
          </>
        case "tableGroup":
          return <>
            {entry.caption ? <p><b>{entry.caption}</b></p> : ""}
            {entry.tables?.map((t, idx) => <React.Fragment key={idx}>{render(t, depth, toggle)}</React.Fragment>)}
          </>
        case "image": {
          const url = entry.href?.type === "external" ? entry.href.url
            : entry.href?.path ? entry.href.path
              : entry.href?.url
          return <div className={"rd__wrp-image"}>
            {url ? <img className={"rd__image"} src={url} alt={entry.title ?? ""}/> :
              <i>Image manquante{entry.title ? `: ${entry.title}` : ""}</i>}
            {entry.title ? <div className={"rd__image-title"}>
              <span className={"rd__image-title-inner"}>{entry.title}</span>
            </div> : ""}
            {entry.credit ? <div className={"rd__image-credit"}>{entry.credit}</div> : ""}
          </div>
        }
        case "gallery":
          return <div className={"rd__wrp-gallery"}>
            {entry.images?.map((img, idx) => <React.Fragment key={idx}>{render({...img, type: "image"}, depth, toggle)}</React.Fragment>)}
          </div>
        default:
          return <><br/>Not yet implemented: "{entry.type}".</>
      }
    } else if (typeof entry === "string") {
      const str = renderInline(entry)
      // console.log("HERE:", str)

      return props?.defaultString ? props.defaultString(str) : <p>{str}</p>
    } else return false;
  }

  return {render}


}