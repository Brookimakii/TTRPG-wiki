import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Parser} from "./5e/js/parser";

Object.byString = function(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  // console.log("o", o)
  return o;
}

export const Selector5e = (defaultElements: [{}] = [], columns: [{}]) => {
  const [selected: {} | undefined, setSelected] = useState();
  const [elements: [{}], setElements] = useState(defaultElements ?? []);
  const [sorting: string, setSorting] = useState("");

  const location = useLocation()

  function handleClickSelection(element) {
    setSelected(element)
  }

  function sortElements(type: string) {
    const shouldReset = sorting === type + ".des"
    const shouldAscend = !sorting.startsWith(type)
    const shouldDescend = sorting === type + ".asc"

    if (shouldAscend) {
      // console.log("Should now ascend: " + type + ".asc")
      setSorting(type + ".asc")
    } else if (shouldDescend) {
      setSorting(type + ".des")
      // console.log("Should now descend: " + type + ".des")
    } else if (shouldReset) {
      setSorting("")
      // console.log("Should reset.")
      type = "id"
    }

    return elements.toSorted(function (a, b) {
      let textA = a[type].toUpperCase();
      let textB = b[type].toUpperCase();
      if (shouldAscend || shouldReset) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      }
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
    })

  }

  function setSelectFromHash() {
    const hash = location.hash
    const filtered = elements.find((e) => "#" + e.id === hash)
    // console.log("selected", filtered)
    if (filtered) {
      return filtered
    } else {
      return {}
    }
  }

  function DisplayList() {
    return <>
      <div id="filtertools" className="input-group input-group--bottom ve-flex no-shrink">
        {columns.map((column) => {
          // console.log("sorting", sorting)
          return (<button type="button"
                          className={column.classSize + " sort ve-btn ve-btn-default ve-btn-xs"}
                          onClick={() => setElements(sortElements(column.sortId))}
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
        {elements.map((elem, idx) => {
          // console.log(elem)
          return <div
            className={selected?.id === elem.id ? "lst__row ve-flex-col list-multi-selected" : "lst__row ve-flex-col"}
            onClick={() => handleClickSelection(elem)}>
            <Link to={"#" + elem.id} className="lst__row-border lst__row-inner">
              {columns.map(column => {
                const string = Object.byString(elem, column.sortId)
                if (column.id === "Source") {
                  return (<span
                    className={column.colClass + " source__" + string}
                    title={Parser.SOURCE_JSON_TO_FULL[string]}>
                        {string}
                      </span>)
                }
                return <span className={column.colClass}>{string}</span>
              })}
            </Link>
          </div>
        })}
      </div>
    </>;
  }

  useEffect(() => {
    console.log(location.hash)
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
    sortElements,
    DisplayList
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