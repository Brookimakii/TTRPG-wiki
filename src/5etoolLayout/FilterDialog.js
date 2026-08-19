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

// A small "OR / AND / XOR" cycle button used for both positive and negative combine modes.
function ModeButton({mode, onClick, tone}) {
  return <button
    onClick={onClick}
    title={MODE_TITLE[mode]}
    className="fltr-forge__mode-btn"
    style={{
      color: tone === "pos" ? "#7fd6c4" : "#e6968a",
      borderColor: tone === "pos" ? "#3a7d6c" : "#8a4438",
    }}
  >{MODE_LABEL[mode]}</button>;
}

const Filters = ({
  filterOptions, filterOptionsLabelAlias, defaultState,
  defaultCategoryMeta, defaultOverallMode, onSave, onClose
}) => {
  filterOptions = filterOptions ?? FILTER_OPTIONS
  filterOptionsLabelAlias = filterOptionsLabelAlias ?? {}
  const {toggleStateChange, getToggleState} = ToggleState()

  const initialState = defaultState && Object.keys(defaultState).length !== 0 ? defaultState : filterOptions.reduce((acc, option) => {
    acc[getOptionId(option)] = STATES[1];
    return acc;
  }, {});

  const [filterState, setFilterState] = useState(initialState);
  const [categoryMeta, setCategoryMetaState] = useState(defaultCategoryMeta || {});
  const [overallMode, setOverallModeState] = useState(defaultOverallMode || "and");

  const getMeta = (id) => categoryMeta[id] || {posMode: "or", negMode: "or", combineAs: "and", hidden: false};
  const patchMeta = (id, patch) => {
    setCategoryMetaState(prev => ({...prev, [id]: {...getMeta(id), ...patch}}));
  };

  const cycleState = (key, direction) => {
    const currentIndex = STATES.indexOf(filterState[key]);
    const nextIndex = (currentIndex + direction + 3) % 3;
    setFilterState(prevState => ({...prevState, [key]: STATES[nextIndex]}));
  };
  const handleRightClick = (key) => cycleState(key, 1);
  const handleLeftClick = (key) => cycleState(key, -1);

  // Select All / Clear / None / Default act on every option belonging to a given id
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
  const setDefaultForId = (id) => {
    const opts = optionsForId(id);
    setFilterState(prev => {
      const next = {...prev};
      opts.forEach(o => { next[getOptionId(o)] = o.default || "neutral"; });
      return next;
    });
  };

  const handleSave = () => {
    onSave({filterState, categoryMeta, overallMode});
    onClose();
  };

  const renderCategoryControls = (id) => {
    const meta = getMeta(id);
    return <div className="fltr-forge__ctrl-row">
      <button className="fltr-forge__mini-btn" onClick={() => setAllForId(id, "yes")}>All</button>
      <button className="fltr-forge__mini-btn" onClick={() => setAllForId(id, "neutral")}>Clear</button>
      <button className="fltr-forge__mini-btn" onClick={() => setAllForId(id, "no")}>None</button>
      <button className="fltr-forge__mini-btn" onClick={() => setDefaultForId(id)}>Default</button>
      <span className="fltr-forge__ctrl-sep"/>
      <ModeButton mode={meta.posMode} tone="pos" onClick={() => patchMeta(id, {posMode: cycleMode(meta.posMode)})}/>
      <ModeButton mode={meta.negMode} tone="neg" onClick={() => patchMeta(id, {negMode: cycleMode(meta.negMode)})}/>
      {overallMode === "custom" ?
        <button
          className="fltr-forge__mini-btn fltr-forge__combine-btn"
          title="In Custom overall mode: AND-flagged categories must all match; OR-flagged categories need at least one match."
          onClick={() => patchMeta(id, {combineAs: meta.combineAs === "or" ? "and" : "or"})}
        >{meta.combineAs === "or" ? "OR group" : "AND group"}</button> : ""}
    </div>;
  };

  return <div className="ui-modal__overlay fltr-forge__overlay">
    <div className="ui-modal__inner ve-flex-col w-100 h-100 ui-modal__inner--uncap-height fltr-forge__inner">
      <div className="split mb-2 mt-2 ve-flex-v-center mobile__ve-flex-col">
        <div className="ve-flex-v-baseline mobile__ve-flex-col">
          <h4 className="m-0 mr-2 mobile__mb-2 fltr-forge__title">Filters</h4>
        </div>
        <div className="ve-flex-v-center mobile__ve-flex-col fltr-forge__overall-row">
          <span className="fltr-forge__overall-label">Combine as</span>
          <div className="ve-btn-group mr-3">
            {["and", "or", "custom"].map(m =>
              <button
                key={m}
                className={"ve-btn ve-btn-xs fltr-forge__overall-btn" + (overallMode === m ? " fltr-forge__overall-btn--active" : "")}
                title={m === "and" ? "Every active category must match." : m === "or" ? "Any active category matching is enough." : "Pick per-category: AND-group categories must all match; OR-group needs at least one match."}
                onClick={() => setOverallModeState(m)}
              >{m.toUpperCase()}</button>
            )}
          </div>
        </div>
      </div>
      <hr className="w-100 m-0 mb-2"/>
      <div className="ui-modal__scroller smooth-scroll px-1 fltr-forge__scroller">
        {getAttributeList(filterOptions, "category").map((category, idx) => {
          const hasSub = getAttributeListAfterFilter(filterOptions, "subcategory", "category", category).length > 0;
          return <div key={category}>
            {idx !== 0 ? <div className="fltr__dropdown-divider mb-1"></div> : ""}
            <div className="split fltr__h mb-1 fltr-forge__h">
              <div className="fltr__h-text ve-flex-h-center mobile__w-100 fltr-forge__h-text">
                <span>{capitalize(filterOptionsLabelAlias?.[category]) ?? capitalize(category)}</span>
                <button onClick={() => toggleStateChange(category)}
                        className="ve-btn ve-btn-xs ve-btn-default mobile__visible ml-auto px-3 mr-2 fltr-forge__show-hide">
                  {getToggleState(category) ? "Hide" : "Show"}
                </button>
              </div>
              {!hasSub ? renderCategoryControls(category) : ""}
            </div>
            {hasSub ?
              <div className={getToggleState(category) ? "" : "ve-hidden"}>
                {getAttributeListAfterFilter(filterOptions, "subcategory", "category", category).map((subcategory, idx2) => {
                  const subId = `${category}.${subcategory}`;
                  return <div key={subcategory}>
                    <div className="split fltr__h mb-1 fltr-forge__h">
                      <div className="fltr__h-text ve-flex-h-center mobile__w-100 fltr-forge__h-text">
                        <span className="mr-2">-</span>
                        <span>{capitalize(filterOptionsLabelAlias?.[subcategory]) ?? capitalize(subcategory)}</span>
                        <button onClick={() => toggleStateChange(subId)}
                                className="ve-btn ve-btn-xs ve-btn-default mobile__visible ml-auto px-3 mr-2 fltr-forge__show-hide">
                          {getToggleState(subId) ? "Hide" : "Show"}
                        </button>
                      </div>
                      {renderCategoryControls(subId)}
                    </div>
                    <div className="fltr__wrp-pills fltr__wrp-subs">
                      {idx2 !== 0 ? <div className="fltr__dropdown-divider fltr__dropdown-divider--indented mb-1"></div> : ""}
                      <div className={"fltr__wrp-pills--sub fltr__container-pills" + (getToggleState(subId) ? "" : " ve-hidden")}>
                        {filterOptions.filter(a => a.category === category && a.subcategory === subcategory).map((item) =>
                          <div className="fltr__pill fltr-forge__pill"
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
              <div className={"fltr__wrp-pills fltr__container-pills" + (getToggleState(category) ? "" : " ve-hidden")}>
                {filterOptions.filter(a => a.category === category).map((item) =>
                  <div className="fltr__pill fltr-forge__pill"
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