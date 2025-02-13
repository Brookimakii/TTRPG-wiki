import React, {useState} from "react";
import {extractNestedValue, ToggleState} from "./5eLayoutModules";
import {getOptionId} from "./FilterDialogManager";

const FILTER_OPTIONS = [
  {category: "caster", subcategory: "class", value: "bard", label: "Bard"},
  {category: "caster", subcategory: "class", value: "sorcerer", label: "Sorcerer"},
  {category: "caster", subcategory: "class", value: "artificer", label: "Artificer"},
  {category: "caster", subcategory: "class", value: "wizard", label: "Wizard"},
  {category: "school", value: "evo", label: "Evocation"},
  {category: "school", value: "ench", label: "Enchantment"},
  {category: "school", value: "necro", label: "Necromancy"},
  {category: "casting", value: "action", label: "Action"},
  {category: "casting", value: "reaction", label: "Reaction"},
  {category: "casting", value: "1hour", label: "1 Hour"}
];

// const STATES = ["neutral", "positive", "negative"];
//
// const FilterDialog = ({ onSave }) => {
//   const [open, setOpen] = useState(false);
//   const [filters, setFilters] = useState(
//     FILTER_OPTIONS.reduce((acc, option) => ({ ...acc, [option.value]: "neutral" }), {})
//   );
//
//   const cycleState = (key, forward = true) => {
//     setFilters((prev) => {
//       const currentIndex = STATES.indexOf(prev[key]);
//       const nextIndex = (currentIndex + (forward ? 1 : 2)) % STATES.length;
//       return { ...prev, [key]: STATES[nextIndex] };
//     });
//   };
//
//   const handleSave = () => {
//     const positiveFilters = {};
//     const negativeFilters = {};
//
//     FILTER_OPTIONS.forEach(({ category, type, value }) => {
//       if (filters[value] === "positive") {
//         if (!positiveFilters[category]) positiveFilters[category] = {};
//         if (!positiveFilters[category][type || "default"]) positiveFilters[category][type || "default"] = [];
//         positiveFilters[category][type || "default"].push(value);
//       }
//       if (filters[value] === "negative") {
//         if (!negativeFilters[category]) negativeFilters[category] = {};
//         if (!negativeFilters[category][type || "default"]) negativeFilters[category][type || "default"] = [];
//         negativeFilters[category][type || "default"].push(value);
//       }
//     });
//
//     onSave({ positive: positiveFilters, negative: negativeFilters });
//     setOpen(false);
//   };
//
//   // Group options by category
//   const groupedOptions = FILTER_OPTIONS.reduce((acc, option) => {
//     const { category, type } = option;
//     if (!acc[category]) acc[category] = {};
//     if (!acc[category][type]) acc[category][type] = [];
//     acc[category][type].push(option);
//     return acc;
//   }, {});
//
//   return (
//     <>
//       <MuiButton variant="contained" onClick={() => setOpen(true)}>
//         Open Filter
//       </MuiButton>
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>Filter Options</DialogTitle>
//         <DialogContent>
//           {Object.keys(groupedOptions).map((category) => (
//             <div key={category}>
//               <Typography variant="h6">{category.charAt(0).toUpperCase() + category.slice(1)}</Typography>
//               {Object.keys(groupedOptions[category]).map((type) => (
//                 <div key={type}>
//                   <Typography variant="subtitle1">{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
//                   <div className="grid grid-cols-3 gap-2">
//                     {groupedOptions[category][type].map(({ value, label }) => (
//                       <MuiButton
//                         key={value}
//                         onClick={() => cycleState(value, true)}
//                         onContextMenu={(e) => {
//                           e.preventDefault();
//                           cycleState(value, false);
//                         }}
//                         style={{
//                           backgroundColor:
//                             filters[value] === "positive"
//                               ? "green"
//                               : filters[value] === "negative"
//                                 ? "red"
//                                 : "gray",
//                           color: "white"
//                         }}
//                         variant="outlined"
//                       >
//                         {label} ({filters[value]})
//                       </MuiButton>
//                     ))}
//                   </div>
//                   <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </DialogContent>
//         <DialogActions>
//           <MuiButton onClick={handleSave} color="primary">
//             OK
//           </MuiButton>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };
//
// export default FilterDialog;

const STATES = ["yes", "neutral", "no"];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const getAttributeList = (filterObjects, attribute): [string] => {
  return [...new Set(filterObjects.map(a => extractNestedValue(a, attribute)))];
}
const getAttributeListAfterFilter = (filterObjects, attribute, attributeToCheck, attributeValue): [string] => {
  return [...new Set(filterObjects
    .filter(a => extractNestedValue(a, attributeToCheck) === attributeValue)
    .map(a => extractNestedValue(a, attribute))
    .filter(a => a)
  )];
}

const Filters = ({filterOptions, defaultState, onSave, onClose}) => {
  filterOptions = filterOptions ?? FILTER_OPTIONS
  const {toggleStateChange, getToggleState, addToggleableState} = ToggleState()
  // console.log("defaultState", defaultState, defaultState.length!==0)

  const initialState = defaultState.length!==0 ? defaultState : filterOptions.reduce((acc, option) => {
    acc[getOptionId(option)] = STATES[1];
    return acc;
  }, {});

  // console.log("defaultState", defaultState)
  // console.log("initialState", initialState)
  const [filterState, setFilterState] = useState(initialState);

  const cycleState = (key, direction) => {
    const currentIndex = STATES.indexOf(filterState[key]);
    const nextIndex = (currentIndex + direction + 3) % 3;
    const nextState = STATES[nextIndex];

    setFilterState(prevState => ({
      ...prevState,
      [key]: nextState,
    }));
  };

  const handleRightClick = (key) => {
    cycleState(key, 1);
  };

  const handleLeftClick = (key) => {
    cycleState(key, -1);
  };

  const handleSave = () => {
    // const {positive, negative} = getFilterStatesTypes(filterOptions, filterState);
    onSave(filterState);
    onClose();
  };

  return <div className="ui-modal__overlay">
    <div className="ui-modal__inner ve-flex-col w-100 h-100 ui-modal__inner--uncap-height">
      <div className="split mb-2 mt-2 ve-flex-v-center mobile__ve-flex-col">
        <div className="ve-flex-v-baseline mobile__ve-flex-col">
          <h4 className="m-0 mr-2 mobile__mb-2">Filters</h4>
          {/*<div className="relative w-100 mobile__mb-2">*/}
          {/*  <input*/}
          {/*    className="form-control input-xs ui-ideco__ipt ui-ideco__ipt--right" placeholder="Search..."*/}
          {/*    autoComplete="new-password" autoCapitalize="off" spellCheck="false"/>*/}
          {/*  <div className="ui-ideco__wrp ui-ideco__wrp--right ve-flex-vh-center clickable" title="Clear">*/}
          {/*    <span*/}
          {/*      className="glyphicon glyphicon-remove"></span>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        {/*<div className="ve-flex-v-center mobile__ve-flex-col">*/}
        {/*  <div className="ve-flex-v-center mobile__m-1">*/}
        {/*    <div className="mr-2">Combine as</div>*/}
        {/*    <div className="ve-btn-group mr-3">*/}
        {/*      <button className="ve-btn ve-btn-xs ve-btn-default"*/}
        {/*              title="&quot;AND&quot; requires every filter to match. &quot;OR&quot; requires any filter to match. &quot;Custom&quot; allows you to specify a combination (every &quot;AND&quot; filter must match; only one &quot;OR&quot; filter must match) .">AND*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="ve-flex-v-center mobile__m-1">*/}
        {/*    <div className="ve-btn-group mr-2 ve-flex-h-center">*/}
        {/*      <button className="ve-btn ve-btn-xs ve-btn-default">Show All</button>*/}
        {/*      <button className="ve-btn ve-btn-xs ve-btn-default">Hide All</button>*/}
        {/*    </div>*/}
        {/*    <button className="ve-btn ve-btn-xs ve-btn-default mr-3"*/}
        {/*            title="Reset filters. SHIFT to reset everything.">Reset*/}
        {/*    </button>*/}
        {/*    <div className="ve-btn-group mr-3 ve-flex-h-center">*/}
        {/*      <button className="ve-btn ve-btn-default ve-btn-xs">Manage Defaults</button>*/}
        {/*      <button className="ve-btn ve-btn-xs ve-btn-default" title="Settings"><span*/}
        {/*        className="glyphicon glyphicon-cog"></span></button>*/}
        {/*    </div>*/}
        {/*    <button className="ve-btn ve-btn-xs ve-btn-primary" title="Save"><span*/}
        {/*      className="glyphicon glyphicon-ok"></span></button>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <hr className="w-100 m-0 mb-2"/>
      <div className="ui-modal__scroller smooth-scroll px-1">
        {getAttributeList(filterOptions, "category").map((category, idx) => <div>
          {idx !== 0 ? <div className="fltr__dropdown-divider  mb-1"></div> : ""}
          <div className="split fltr__h mb-1">
            <div className="fltr__h-text ve-flex-h-center mobile__w-100">
              <span>{capitalize(category)}</span>
              <button onClick={() => toggleStateChange(category)}
                      className="ve-btn ve-btn-xs ve-btn-default mobile__visible ml-auto px-3 mr-2">
                {getToggleState(category) ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          {getAttributeListAfterFilter(filterOptions, "subcategory", "category", category).length > 0 ?
            <div className={getToggleState(category) ? "" : "ve-hidden"}>
              {getAttributeListAfterFilter(filterOptions, "subcategory", "category", category).map((subcategory, idx2) =>
                <div>
                  <div className="split fltr__h mb-1">
                    <div className="fltr__h-text ve-flex-h-center mobile__w-100">
                      <span className="mr-2">-</span>
                      <span>{subcategory}</span>
                      <button onClick={() => toggleStateChange(`${category}-${subcategory}`)}
                              className="ve-btn ve-btn-xs ve-btn-default mobile__visible ml-auto px-3 mr-2">
                        {getToggleState(`${category}-${subcategory}`) ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                  <div className="fltr__wrp-pills fltr__wrp-subs">
                    {idx2 !== 0 ?
                      <div className="fltr__dropdown-divider fltr__dropdown-divider--indented mb-1"></div> : ""}
                    <div
                      className={"fltr__wrp-pills--sub fltr__container-pills" + (getToggleState(`${category}-${subcategory}`) ? "" : " ve-hidden")}>
                      {filterOptions.filter(a => a.category === category && a.subcategory === subcategory).map((item) =>
                        <div className="fltr__pill"
                             onClick={() => handleLeftClick(getOptionId(item))}
                             onContextMenu={(e) => {
                               e.preventDefault();
                               handleRightClick(getOptionId(item))
                             }}
                             data-state={filterState[getOptionId(item)]}
                        >{item.label??item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div> :
            <div className={"fltr__wrp-pills fltr__container-pills" + (getToggleState(category) ? "" : " ve-hidden")}>
              {filterOptions.filter(a => a.category === category).map((item) =>
                <div className="fltr__pill"
                     onClick={() => handleLeftClick(item.category + "-" + item.value)}
                     onContextMenu={(e) => {
                       e.preventDefault();
                       handleRightClick(getOptionId(item))
                     }}
                     data-state={filterState[getOptionId(item)]}
                >{item.label} - {filterState[getOptionId(item)]}</div>
              )}
            </div>
          }

        </div>)}
      </div>
      <hr className="my-1 w-100"/>
      <div className="w-100 ve-flex-vh-center my-1">
        <button onClick={handleSave} className="ve-btn ve-btn-primary fltr__btn-close mr-2">Save</button>
        <button onClick={onClose} className="ve-btn ve-btn-default fltr__btn-close">Cancel</button>
      </div>
    </div>
  </div>
}

export default Filters;

// const Filters = ({ onSave }) => {
//   const [open, setOpen] = useState(false);
//   const [filters, setFilters] = useState({});
//   const [visibleCategories, setVisibleCategories] = useState({});
//   const [visibleSubcategories, setVisibleSubcategories] = useState({});
//
//   const toggleCategoryVisibility = (category) => {
//     setVisibleCategories((prev) => ({ ...prev, [category]: !prev[category] }));
//   };
//
//   const toggleSubcategoryVisibility = (category, subcategory) => {
//     setVisibleSubcategories((prev) => {
//       const key = `${category}-${subcategory}`;
//       return { ...prev, [key]: !prev[key] };
//     });
//   };
//
//   const handleFilterClick = (value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [value]: prev[value] === "selected" ? "neutral" : "selected"
//     }));
//   };
//
//   const groupedFilters = FILTER_OPTIONS.reduce((acc, { category, subcategory, value, label }) => {
//     if (!acc[category]) acc[category] = {};
//     if (!acc[category][subcategory]) acc[category][subcategory] = [];
//     acc[category][subcategory].push({ value, label });
//     return acc;
//   }, {});
//
//   return (
//     <>
//       <button onClick={() => setOpen(true)}>Open Filter</button>
//       {open && (
//         <div className="filter-dialog">
//           <div className="dialog-header">
//             <h2>Filter Options</h2>
//             <button onClick={() => setOpen(false)}>Close</button>
//           </div>
//           <div className="dialog-content">
//             {Object.keys(groupedFilters).map((category) => (
//               <div key={category} className="filter-category">
//                 <div className="category-header" onClick={() => toggleCategoryVisibility(category)}>
//                   <strong>{category.charAt(0).toUpperCase() + category.slice(1)}</strong>
//                   <span>{visibleCategories[category] ? "▲" : "▼"}</span>
//                 </div>
//                 {visibleCategories[category] &&
//                   Object.keys(groupedFilters[category]).map((subcategory) => (
//                     <div key={subcategory} className="filter-subcategory">
//                       {subcategory !== "default" && (
//                         <div
//                           className="subcategory-header"
//                           onClick={() => toggleSubcategoryVisibility(category, subcategory)}
//                         >
//                           - {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
//                           <span>{visibleSubcategories[`${category}-${subcategory}`] ? "▲" : "▼"}</span>
//                         </div>
//                       )}
//                       <div
//                         className={`filter-options ${
//                           visibleSubcategories[`${category}-${subcategory}`] === false ? "hidden" : ""
//                         }`}
//                       >
//                         {groupedFilters[category][subcategory].map(({ value, label }) => (
//                           <button
//                             key={value}
//                             onClick={() => handleFilterClick(value)}
//                             className={filters[value] === "selected" ? "selected" : ""}
//                           >
//                             {label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>
//           <div className="dialog-actions">
//             <button onClick={() => setOpen(false)}>Cancel</button>
//             <button onClick={() => onSave(filters)}>Apply</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
//
// export default Filters;
