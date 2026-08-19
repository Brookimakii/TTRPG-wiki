import React, {useEffect, useState} from "react";
import Filters from "./FilterDialog";
import {extractNestedValue, setValueAtPath} from "./5eLayoutModules";

export const getOptionId = (option) => {
  if (option.path) return option.path
  return `${option.category}${option.subcategory ? `.${option.subcategory}` : ""}-${option.value??option.label}`;
}

const ParentComponent = (filterOptions, savedFilterState = [], savedCategoryMeta = {}, savedOverallMode = "and") => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterState, setFilterState] = useState(savedFilterState);
  const [categoryMeta, setCategoryMeta] = useState(savedCategoryMeta);
  const [overallMode, setOverallMode] = useState(savedOverallMode);
  const [filterResults, setFilterResults] = useState({positive:{}, negative: {}});

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const saveFilterState = ({filterState: fs, categoryMeta: cm, overallMode: om}) => {
    setFilterState(fs);
    setCategoryMeta(cm);
    setOverallMode(om);
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
    categoryMeta,
    overallMode,
    openDialog,
    closeDialog,
    saveFilterResults: saveFilterState,
    resetFilter
  }
};

export default ParentComponent;