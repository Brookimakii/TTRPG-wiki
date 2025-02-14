import React, {useEffect, useState} from "react";
import Filters, {setFilterNeutral} from "./FilterDialog";
import {extractNestedValue, setValueAtPath} from "./5eLayoutModules";
// import FilterDialog from "./Tests";

export const getOptionId = (option) => {
  if (option.path) return option.path
  return `${option.category}${option.subcategory ? `.${option.subcategory}` : ""}-${option.value??option.label}`;
}

const ParentComponent = (filterOptions, savedFilterState = []) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterState, setFilterState] = useState(savedFilterState);
  const [filterResults, setFilterResults] = useState({positive:{}, negative: {}});

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const saveFilterState = (filters) => {
    // console.log(filters)
    setFilterState(filters);
  };

  const resetFilter = (id) => {
    setFilterState(prev => ({
      ...prev,
      [id]: "neutral",
    }));
  }

  useEffect(() => {
    function getFilterStatesTypes() {
      const positive = {};
      const negative = {};

      // Collect positive and negative values by category
      filterOptions.forEach(option => {
          const state = filterState[`${option.category}${option.subcategory ? `-${option.subcategory}` : ""}-${option.value}`];
          // console.log(option, state)
          if (state === "yes") {
            if (!positive[option.category]) {
              positive[option.category] = [];
            }
            positive[option.category].push(option.label);
          } else if (state === "no") {
            if (!negative[option.category]) {
              negative[option.category] = [];
            }
            negative[option.category].push(option.label);
          }
        });
      return {positive, negative};
    }
    setFilterResults(getFilterStatesTypes())
  }, [filterState]);

  return {
    isDialogOpen,
    filterResults,
    filterState,
    openDialog,
    closeDialog,
    saveFilterResults: saveFilterState,
    resetFilter
  }
  // (<>
  //   <span onClick={openDialog}>Open Filters</span>
  //   {isDialogOpen? <Filters onClose={closeDialog} onSave={saveFilterResults}/>: ""}
  //   <pre>{JSON.stringify(filterResults, null, 2)}</pre>
  // </>)

};

export default ParentComponent;
