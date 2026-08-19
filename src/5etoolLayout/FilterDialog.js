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

const STATES = ["yes", "neutral", "no"];
const MODES = ["or", "and", "xor"];
const MODE_LABEL = {or: "OR", and: "AND", xor: "XOR"};
const MODE_TITLE = {
  or: "OR — matches if ANY selected value is present.",
  and: "AND — matches only if EVERY selected value is present.",
  xor: "XOR — matches only if EXACTLY ONE selected value is present.",
};

function capitalize(str) {
  if (!str) return undefined
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

function cycleMode(mode) {
  return MODES[(MODES.indexOf(mode) + 1) % MODES.length];
}

// The blue (include/positive) and red (exclude/negative) logic-cycle pills that sit
// in every 5etools filter category header — mirrors fltr__h-btn-logic.
function ModeButton({mode, onClick, tone}) {
  return <button
    onClick={onClick}
    title={MODE_TITLE[mode]}
    className={"ve-btn ve-btn-xs ve-btn-default fltr__h-btn-logic " + (tone === "pos" ? "fltr__h-btn-logic--blue" : "fltr__h-btn-logic--red")}
  >{MODE_LABEL[mode]}</button>;
}

const Filters = ({
  filterOptions, filterOptionsLabelAlias, defaultState,
  defaultCategoryMeta, defaultOverallMode, onSave, onClose
}) => {
  filterOptions = filterOptions ?? FILTER_OPTIONS
  filterOptionsLabelAlias = filterOptionsLabelAlias ?? {}
  const {toggleStateChange, getToggleState, setToggleState} = ToggleState()

  const initialState = defaultState && Object.keys(defaultState).length !== 0 ? defaultState : filterOptions.reduce((acc, option) => {
    acc[getOptionId(option)] = STATES[1];
    return acc;
  }, {});

  const [filterState, setFilterState] = useState(initialState);
  const [categoryMeta, setCategoryMetaState] = useState(defaultCategoryMeta || {});
  const [overallMode, setOverallModeState] = useState(defaultOverallMode || "and");
  const [searchTerm, setSearchTerm] = useState("");

  const getMeta = (id) => categoryMeta[id] || {posMode: "or", negMode: "or", combineAs: "and", hidden: false};
  const patchMeta = (id, patch) => {
    setCategoryMetaState(prev => ({...prev, [id]: {...getMeta(id), ...patch}}));
  };

  const categories = getAttributeList(filterOptions, "category");
  const allGroupIds = categories.flatMap((category) => {
    const subs = getAttributeListAfterFilter(filterOptions, "subcategory", "category", category);
    return subs.length > 0 ? subs.map((sub) => `${category}.${sub}`) : [category];
  });
  const showAll = () => allGroupIds.forEach((id) => setToggleState(id, true));
  const hideAll = () => allGroupIds.forEach((id) => setToggleState(id, false));

  const search = searchTerm.trim().toLowerCase();
  const matchesSearch = (item) => !search || (item.label ?? item.value ?? "").toLowerCase().includes(search);

  const cycleState = (key, direction) => {
    const currentIndex = STATES.indexOf(filterState[key]);
    const nextIndex = (currentIndex + direction + 3) % 3;
    setFilterState(prevState => ({...prevState, [key]: STATES[nextIndex]}));
  };
  const handleRightClick = (key) => cycleState(key, 1);
  const handleLeftClick = (key) => cycleState(key, -1);

  // Select All / Clear / None act on every option belonging to a given id
  // (a category, or a category.subcategory pair).
  const optionsForId = (id) => filterOptions.filter(o => getOptionId(o).startsWith(id + "-"));
  const setAllForId = (id, state) => {
    const ids = optionsForId(id).map(getOptionId);
    setFilterState(prev => {
      const next = {...prev};
      ids.forEach(k => { next[k] = state; });
      return next;
    });
  };

  const resetFilters = (e) => {
    setFilterState(filterOptions.reduce((acc, option) => {
      acc[getOptionId(option)] = STATES[1];
      return acc;
    }, {}));
    setCategoryMetaState({});
    setOverallModeState("and");
    if (e.shiftKey) showAll();
  };

  const handleSave = () => {
    onSave({filterState, categoryMeta, overallMode});
    onClose();
  };

  const renderCategoryControls = (id) => {
    const meta = getMeta(id);
    return <div className="ve-flex-v-center fltr__h-wrp-btns-outer">
      <div className="ve-flex-v-center fltr__h-wrp-state-btns-outer mr-2">
        <button className="fltr__h-btn--all" onClick={() => setAllForId(id, "yes")}>All</button>
        <span className="mx-1">/</span>
        <button className="fltr__h-btn--clear" onClick={() => setAllForId(id, "neutral")}>Clear</button>
        <span className="mx-1">/</span>
        <button className="fltr__h-btn--none" onClick={() => setAllForId(id, "no")}>None</button>
      </div>
      <div className="ve-btn-group mr-2 ve-flex-h-center">
        <ModeButton mode={meta.posMode} tone="pos" onClick={() => patchMeta(id, {posMode: cycleMode(meta.posMode)})}/>
        <ModeButton mode={meta.negMode} tone="neg" onClick={() => patchMeta(id, {negMode: cycleMode(meta.negMode)})}/>
      </div>
      {overallMode === "custom" ?
        <button
          className="ve-btn ve-btn-xs ve-btn-default"
          title="In Custom overall mode: AND-flagged categories must all match; OR-flagged categories need at least one match."
          onClick={() => patchMeta(id, {combineAs: meta.combineAs === "or" ? "and" : "or"})}
        >{meta.combineAs === "or" ? "OR group" : "AND group"}</button> : ""}
    </div>;
  };

  return <div className="ui-modal__overlay">
    <div className="ui-modal__inner ve-flex-col w-100 h-100 ui-modal__inner--uncap-height">
      <div className="split mb-2 mt-2 ve-flex-v-center mobile__ve-flex-col">
        <div className="ve-flex-v-baseline mobile__ve-flex-col">
          <h4 className="m-0 mr-2 mobile__mb-2">Filters</h4>
          <div className="relative w-100 mobile__mb-2">
            <input
              className="form-control input-xs ui-ideco__ipt ui-ideco__ipt--right" placeholder="Search..."
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="new-password" autoCapitalize="off" spellCheck="false"/>
            <div className="ui-ideco__wrp ui-ideco__wrp--right ve-flex-vh-center clickable" title="Clear"
                 onClick={() => setSearchTerm("")}>
              <span className="glyphicon glyphicon-remove"></span>
            </div>
          </div>
        </div>
        <div className="ve-flex-v-center mobile__ve-flex-col">
          <div className="ve-flex-v-center mobile__m-1">
            <span className="mr-2">Combine as</span>
            <div className="ve-btn-group mr-3">
              {["and", "or", "custom"].map(m =>
                <button
                  key={m}
                  className={"ve-btn ve-btn-xs ve-btn-default" + (overallMode === m ? " active" : "")}
                  title={m === "and" ? "Every active category must match." : m === "or" ? "Any active category matching is enough." : "Pick per-category: AND-group categories must all match; OR-group needs at least one match."}
                  onClick={() => setOverallModeState(m)}
                >{m.toUpperCase()}</button>
              )}
            </div>
          </div>
          <div className="ve-flex-v-center mobile__m-1">
            <div className="ve-btn-group mr-2 ve-flex-h-center">
              <button onClick={showAll} className="ve-btn ve-btn-xs ve-btn-default">Show All</button>
              <button onClick={hideAll} className="ve-btn ve-btn-xs ve-btn-default">Hide All</button>
            </div>
            <button onClick={resetFilters} className="ve-btn ve-btn-xs ve-btn-default mr-3"
                    title="Reset filters. SHIFT to reset everything.">Reset
            </button>
            <button onClick={handleSave} className="ve-btn ve-btn-xs ve-btn-primary" title="Save"><span
              className="glyphicon glyphicon-ok"></span></button>
          </div>
        </div>
      </div>
      <hr className="w-100 m-0 mb-2"/>
      <div className="ui-modal__scroller smooth-scroll px-1">
        {categories.filter((category) =>
          filterOptions.some((a) => a.category === category && matchesSearch(a))
        ).map((category, idx) => {
          const subcategories = getAttributeListAfterFilter(filterOptions, "subcategory", "category", category)
            .filter((subcategory) => filterOptions.some((a) => a.category === category && a.subcategory === subcategory && matchesSearch(a)));
          const hasSub = subcategories.length > 0;
          const catVisible = getToggleState(category) || !!search;
          return <div key={category}>
            {idx !== 0 ? <div className="fltr__dropdown-divider mb-1"></div> : ""}
            <div className="split fltr__h mb-1 fltr__h--multi">
              <div className="fltr__h-text ve-flex-h-center mobile__w-100">
                <span>{capitalize(filterOptionsLabelAlias?.[category]) ?? capitalize(category)}</span>
                <button onClick={() => toggleStateChange(category)}
                        className="ve-btn ve-btn-xs ve-btn-default mobile__visible ml-auto px-3 mr-2">
                  {getToggleState(category) ? "Hide" : "Show"}
                </button>
              </div>
              {!hasSub ? renderCategoryControls(category) : ""}
            </div>
            {hasSub ?
              <div className={catVisible ? "" : "ve-hidden"}>
                {subcategories.map((subcategory, idx2) => {
                  const subId = `${category}.${subcategory}`;
                  const subVisible = getToggleState(subId) || !!search;
                  return <div key={subcategory}>
                    <div className="split fltr__h mb-1 fltr__h--multi">
                      <div className="fltr__h-text ve-flex-h-center mobile__w-100">
                        <span className="mr-2">-</span>
                        <span>{capitalize(filterOptionsLabelAlias?.[subcategory]) ?? capitalize(subcategory)}</span>
                        <button onClick={() => toggleStateChange(subId)}
                                className="ve-btn ve-btn-xs ve-btn-default mobile__visible ml-auto px-3 mr-2">
                          {getToggleState(subId) ? "Hide" : "Show"}
                        </button>
                      </div>
                      {renderCategoryControls(subId)}
                    </div>
                    <div className="fltr__wrp-pills fltr__wrp-subs">
                      {idx2 !== 0 ? <div className="fltr__dropdown-divider fltr__dropdown-divider--indented mb-1"></div> : ""}
                      <div className={"fltr__wrp-pills--sub fltr__container-pills" + (subVisible ? "" : " ve-hidden")}>
                        {filterOptions.filter(a => a.category === category && a.subcategory === subcategory && matchesSearch(a)).map((item) =>
                          <div className="fltr__pill"
                               key={getOptionId(item)}
                               onClick={() => handleLeftClick(getOptionId(item))}
                               onContextMenu={(e) => { e.preventDefault(); handleRightClick(getOptionId(item)); }}
                               data-state={filterState[getOptionId(item)]}
                          >{item.label ?? item.value}</div>
                        )}
                      </div>
                    </div>
                  </div>;
                })}
              </div> :
              <div className={"fltr__wrp-pills fltr__container-pills" + (catVisible ? "" : " ve-hidden")}>
                {filterOptions.filter(a => a.category === category && matchesSearch(a)).map((item) =>
                  <div className="fltr__pill"
                       key={getOptionId(item)}
                       onClick={() => handleLeftClick(getOptionId(item))}
                       onContextMenu={(e) => { e.preventDefault(); handleRightClick(getOptionId(item)); }}
                       data-state={filterState[getOptionId(item)]}
                  >{item.label ?? item.value}</div>
                )}
              </div>
            }
          </div>;
        })}
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