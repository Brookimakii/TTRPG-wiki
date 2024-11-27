import React, {useEffect, useRef, useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {formatContent} from "../pages/dnd/chara crea/Details";
import {Outlet} from "react-router-dom";
import NavMenu, {MenuDivider, MenuLink, SubMenu} from "./5e/NavMenu";
import races from "./5e/resources/races.json";

function buildRace(elements) {
  const newElems = structuredClone(elements)
  const races = []
  newElems.map((race) => {
    if (race.subraces) {
      let subraces = structuredClone(race.subraces)
      subraces.map((subrace) => {

        subrace["id"] = race.id + "-(" + subrace.id + ")"
        subrace["name"] = race.name + " (" + subrace.name + ")"
        if (subrace.bonus.startsWith(";")) {
          subrace["bonus"] = race.bonus + "; " + subrace.bonus.replace(";", "")
        }
        subrace["size"] = race.size
        subrace["creatureType"] = race.creatureType
        if (!subrace.speed) {
          subrace["speed"] = race.speed
        }
        subrace["common"] = race.common
        subrace["traits"] = [...race.traits, ...subrace.traits]
        subrace["info"] = race.info.toSpliced(0, 0, subrace.info)

        races.push(subrace)
      })
      let newRace = structuredClone(race)
      newRace.subraces = subraces.map((subrace) => {
        return ({name: subrace.name, id: subrace.id})
      })
      // console.log(newRace)
      races.push(newRace)
      // delete races[newRace].subraces
    } else {
      races.push(race)
    }
  })
  return races.sort(function (a, b) {
    let textA = a.id.toUpperCase();
    let textB = b.id.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  })
}


export const Layout5e = () => {
  return (
    <>
      <script type="text/javascript" src="./5e/js/navigation.js"></script>
      <div className="viewport-wrapper">
        <div className="cancer__wrp-leaderboard cancer__anchor">
          <div className="cancer__disp-cancer"></div>
          <div className="cancer__wrp-leaderboard-inner" style={{height: "0px"}}>
            <div id="div-gpt-ad-5etools35927"></div>
            <div id="div-gpt-ad-5etools35930"></div>
          </div>
        </div>
        <header className="hidden-xs hidden-sm page__header">
          <div className="container ve-flex-v-baseline">
            <h1 className="page__title no-wrap my-0" id="page__title">Test</h1>
            <p className="page__subtitle no-wrap my-0" id="page__subtitle">
              This is a test to see the site appearance.
            </p>
          </div>
        </header>
        <nav className="container page__nav" id="navigation">
          {/*TODO: Add in small mod a way to display following navs*/}
          <button className="ve-btn ve-btn-default page__btn-toggle-nav">Menu</button>
          <ul className="nav nav-pills page__nav-inner" id="navbar">
            <NavMenu name="Home" href="#"/>
            <NavMenu name="Rules" href="#" addCaret={true}>
              <MenuLink name="Rules Glossary" link="variantrules" href=""/>
              <MenuLink name="Tables" link="tables" href=""/>
              <MenuDivider/>
              <SubMenu name="Books">
                <MenuLink name="Tables" link="tables" href="this"/>
              </SubMenu>
              <MenuDivider/>
              <MenuLink name="Quick Reference (2014)" link="quickreference" href=""/>
            </NavMenu>
            <NavMenu name="Player" href="#" addCaret={true}>
              <MenuLink name="Classes" link="classes" href="classes"/>
              <MenuLink name="Backgrounds" link="backgrounds" href="backgrounds"/>
              <MenuLink name="Feats" link="feats" href="feats"/>
              <MenuLink name="Races" link="races" href="races"/>
              <MenuLink name="Other Character Creation Options" link="charcreationoptions" href="charcreationoptions"/>
              <MenuLink name="Other Options &amp; Features" link="optionalfeatures" href="optionalfeatures"/>
              <MenuDivider/>
              <MenuLink name="Stat Generator" link="statgen" href="statgen"/>
              <MenuDivider/>
              <MenuLink name="This Is Your Life" link="lifegen" href="lifegen"/>
              <MenuLink name="Names" link="names" href="#"/>
            </NavMenu>
            <NavMenu name="Dungeon Master" href="#" addCaret={true}>
              <MenuLink name="DM Screen" link="dmscreen" href="dmscreen"/>
              <MenuDivider/>
              <SubMenu name="Adventures"></SubMenu>
              <MenuLink name="Cults &amp; Supernatural Boons" link="cultsboons" href="cultsboons"/>
              <MenuLink name="Objects" link="objects" href="objects"/>
              <MenuLink name="Traps &amp; Hazards" link="trapshazards" href="trapshazards"/>
              <MenuDivider/>
              <MenuLink name="CR Calculator" link="crcalculator" href="crcalculator"/>
              <MenuLink name="Encounter Generator" link="encountergen" href="encountergen"/>
              <MenuLink name="Loot Generator" link="lootgen" href="lootgen"/>
              <MenuDivider/>
              <MenuLink name="Maps" link="maps" href="maps"/>
            </NavMenu>
            <NavMenu name="References" href="#" addCaret={true}>
              <MenuLink name="Actions" link="actions" href="actions"/>
              <MenuLink name="Bestiary" link="bestiary" href="bestiary"/>
              <MenuLink name="Conditions &amp; Diseases" link="conditionsdiseases" href="conditionsdiseases"/>
              <MenuLink name="Decks" link="decks" href="decks"/>
              <MenuLink name="Deities" link="deities" href="deities"/>
              <MenuLink name="Items" link="items" href="items"/>
              <MenuLink name="Languages" link="languages" href="languages"/>
              <MenuLink name="Supernatural Gifts &amp; Rewards" link="rewards" href="rewards"/>
              <MenuLink name="Psionics" link="psionics" href="psionics"/>
              <MenuLink name="Spells" link="spells" href="spells"/>
              <MenuLink name="Vehicles" link="vehicles" href="vehicles"/>
              <MenuDivider/>
              <MenuLink name="Recipes" link="recipes" href="recipes"/>
            </NavMenu>
            <NavMenu name="Utilities" href="#" addCaret={true}>
              <MenuLink name="" link="dfts<" href="zersq"/>
            </NavMenu>
            <NavMenu name="Settings" href="#" addCaret={true}>
              <MenuLink name="" link="dfts<" href="zersq"/>
            </NavMenu>
            <div className="input-group omni__wrp-input">
              <input disabled className="form-control search omni__input"
                     title="Hotkey: F. Disclaimer: unlikely to search everywhere. Use with caution."
                     type="search" placeholder="Search everywhere..."
                     autoComplete="new-password" autoCapitalize="off"
                     spellCheck="false"/>
              <span className="absolute glyphicon glyphicon-remove omni__btn-clear"></span>
              <div className="input-group-btn">
                <button disabled className="ve-btn ve-btn-default omni__submit" tabIndex="-1">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </div>
            </div>
          </ul>
          <div className="omni__wrp-output ve-flex ve-hidden">
            <div className="omni__output"></div>
          </div>
        </nav>
        <Outlet/>
      </div>
    </>
  )
}

const playerRaces = buildRace(require('./5e/resources/races.json'))

export const Layout5e2 = () => {
  const emptyFilters = {
    sources: []
  }
  const [filteredData, setFilteredData] = useState(playerRaces || [])
  const [filterableElems, setFilterableElems] = useState(structuredClone(emptyFilters))
  const [positiveFilters, setPositiveFilters] = useState(structuredClone(emptyFilters))
  const [negativeFilters, setNegativeFilters] = useState(structuredClone(emptyFilters))

  useEffect(() => {
    let filteredSources = [];
    playerRaces.forEach((race) => {
      if (!filteredSources.includes(race.source)) {
        filteredSources.push(race.source)
      }
    });
    let filterableElements = {}
    filterableElements['sources'] = filteredSources
    setFilterableElems(filterableElements)
  }, []);

  const filter = (byFilter) => {
    const newPositiveFilters = positiveFilters
    const newNegativeFilters = negativeFilters
    for (let key in filterableElems) {
      let filterableElem = filterableElems[key]
      if (filterableElem.includes(byFilter)) {
        let positiveElement = [...newPositiveFilters[key]]
        let negativeElement = [...newNegativeFilters[key]]
        if (!positiveElement.includes(byFilter) && !negativeElement.includes(byFilter)) {
          positiveElement.push(byFilter)
          newPositiveFilters[key] = positiveElement
        } else if (positiveElement.includes(byFilter) && !negativeElement.includes(byFilter)) {
          positiveElement.splice(positiveElement.indexOf(byFilter), 1)
          newPositiveFilters[key] = positiveElement

          negativeElement.push(byFilter)
          newNegativeFilters[key] = negativeElement
        } else if (!positiveElement.includes(byFilter) && negativeElement.includes(byFilter)) {
          negativeElement.splice(negativeElement.indexOf(byFilter), 1)
          newNegativeFilters[key] = negativeElement
        }

        setPositiveFilters(newPositiveFilters)
        setNegativeFilters(newNegativeFilters)

        // console.log("Positive result:", positiveElement)
        // console.log("Negative result:", negativeElement)
      }
    }

    let racesData = [...playerRaces]
    if (positiveFilters.sources.length !== 0) {
      racesData = racesData.filter((race) => positiveFilters.sources.includes(race.source))
    }
    if (newNegativeFilters.sources.length !== 0) {
      racesData = racesData.filter((race) => !newNegativeFilters.sources.includes(race.source))
    }
    setFilteredData(racesData)

    // if (byFilter) {
    //   let racesData = [...playerRaces];
    //   racesData = racesData.filter((race) => raceFilters(race, byFilter))
    //   setFilteredData(racesData);
    // }else{
    //   setFilteredData(playerRaces);
    // }
  };

  const clearFilter = () => {
    setFilteredData(playerRaces);
    setPositiveFilters([])
  };
  return (
    <div>
      <div className="filterSection">
        <div className="categoryFilters">
          <div className="filterTitle">Sources</div>
          <div className="filtersList">
            {filterableElems.sources.map((source) => (
              <div className="filter" key={source}
                   style={positiveFilters.sources.includes(source) ? {color: "green"} : negativeFilters.sources.includes(source) ? {color: "red"} : {}}>
                <div className="name" onClick={() => filter(source)}>
                  {source}
                </div>
                <div className="count">({filteredData.filter(race => race.source === source).length})</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={clearFilter}>Clear filter</button>
      <div className="products">
        {filteredData.map((race) => (
          <div className="product" key={race.id}>
            {race.name}
            <div className="productInfo">
              <div className="productTitle">
                <div className="productBrand">{race.source}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Layout5eRaces = () => {

  const columns = [
    {
      id: "Name",
      sortId: "name",
      classSize: "ve-col-4"
    },
    {
      id: "Ability",
      sortId: "bonus",
      classSize: "ve-col-4"
    },
    {
      id: "Size",
      sortId: "size",
      classSize: "ve-col-2"
    },
    {
      id: "Source",
      sortId: "source",
      classSize: "ve-grow"
    }
  ]

  function getSourceName(source) {
    switch (source) {
      case "PHB'14":
        return "Player's Handbook (2014)"
      case "VGM":
        return "Volo’s Guide to Monsters"
      case "EEPC":
        return "Elemental Evil Player’s Companion"
      case "ERLW":
        return "Eberron: Rising from the Last War"
      default:
        return ""
    }
  }

  const races = require('./5e/resources/races.json')
  // console.log(races)
  const [elements, setElements] = useState(buildRace(races))
  const [sorting, setSorting] = useState("")

  const [selected, setSelected] = useState(setSelectFromHash())
  // let selected ={};

  const DetailsHeader = () => {
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
               title={getSourceName(selected.source)}>{selected.source}</a>
            <a href={"book.html#" + selected.source + ",page:" + selected.page} className="rd__stats-name-page ml-1"
               title={"Page" + selected.page}>p{selected.page}</a>
          </div>
        </div>
      </th>
    </tr>
  }

  const handleSort = (type) => {
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

    elements.sort(function (a, b) {
      let textA = a[type].toUpperCase();
      let textB = b[type].toUpperCase();
      if (shouldAscend || shouldReset) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      }
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0
    })
  }

  function setSelectFromHash() {
    const filtered = elements.filter((e) => "#" + e.id === window.location.hash)
    if (filtered.length > 0) {
      return filtered[0]
    } else {
      return {}
    }
  }

  const handleClick = elem => {
    setSelected(elem)
  };


  function convertBonus(bonus: string) {
    return bonus
      .replace("For", "Force")
      .replace("Dex", "Dextérité")
      .replace("Con", "Constitution")
      .replace("Int", "Intelligence")
      .replace("Sag", "Sagesse")
      .replace("Cha", "Charisme")
  }

  // console.log(elements)
  return (
    <div className="view-col-group--cancer h-100 mh-0">
      <div className="container view-col-wrapper view-col-wrapper--cancer">
        <div className="view-col" id="listcontainer">
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
          <div className="fltr__mini-view ve-btn-group">
            {/*TODO: List of all possible filters and change the data-state from "ignore" to "yes" or "no" to enable them*/}
            <div className="fltr__mini-pill fltr__mini-pill--default-sel"
                 title="Acquisitions Incorporated (Filter: Source)" data-state="ignore">
              <span className="glyphicon glyphicon-book"></span> AI
            </div>
          </div>
          {/*TODO: add class "ve-hidden" to hide*/}
          <div id="filtertools" className="input-group input-group--bottom ve-flex no-shrink">
            {columns.map((col) => {
              return (<button type="button" className={col.classSize + " sort ve-btn ve-btn-default ve-btn-xs"}
                              onClick={() => handleSort(col.sortId)}>
                {col.id}<span
                className={"lst__caret" + (sorting.startsWith(col.sortId) ? " lst__caret--active" : "") + (sorting === col.sortId + ".des" ? " lst__caret--reverse" : "")}></span>
              </button>)
            })}
          </div>
          {/*TODO: When selecting a div update the class with 'list-multi-selected'*/}
          <div id="list" className="list list--stats">
            {/*{console.log(elements)}*/}
            {elements.map((elem) => {
              // console.log(elem)
              return <div
                className={selected.id === elem.id ? "lst__row ve-flex-col list-multi-selected" : "lst__row ve-flex-col"}
                onClick={() => handleClick(elem)}>

                <a href={"#" + elem.id} className="lst__row-border lst__row-inner">
                  <span className="bold ve-col-4 pl-0 pr-1">{elem.name}</span>
                  <span className="ve-col-4 px-1 italic">{elem.bonus}</span>
                  <span className="ve-col-2 px-1 ve-text-center">{elem.size}</span>
                  <span className={"ve-col-2 ve-text-center source__" + elem.source + " pl-1 pr-0"}
                        title={getSourceName(elem.source)}>{elem.source}</span>
                </a>
              </div>
            })}
          </div>
        </div>
        <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
        {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
        {Object.keys(selected).length === 0 ?
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
          <Tabs className="view-col" id="contentwrapper">
            <TabList className="w-100 ve-flex" id="stat-tabs" defaultIndex={0}
                     style={{paddingLeft: "0px", marginBottom: "0px"}}>
              <Tab
                className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0 ui-tab__btn-tab-head--active">Traits</Tab>
              <Tab className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0">Info</Tab>
              {selected.images.length === 0 ?
                <Tab
                  className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0">Images</Tab>
                : <></>
              }
              <li className="ml-auto ve-flex" id="tabs-right">
                <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                        title="Pin (Toggle) (Hotkey: p/P)">
                  <span className="glyphicon glyphicon-pushpin"></span>
                </button>
                <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                        title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)">
                  <span className="glyphicon glyphicon-new-window"></span>
                </button>
                <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                        title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)">
                  <span className="glyphicon glyphicon-magnet"></span>
                </button>
                <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                        title="Other Options">
                  <span className="glyphicon glyphicon-option-vertical"></span>
                </button>
              </li>
            </TabList>
            <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
              <table className="w-100 stats">
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                <DetailsHeader/>
                <tr>
                  <td colSpan={6} className="pt-0">
                    <ul className="rd__list rd__list-hang-notitle">
                      <li className="rd__li">
                        <p className="rd__p-list-item">
                          <span className="bold rd__list-item-name">Score de capacité:</span>
                          {" " + convertBonus(selected.bonus)}
                        </p>
                      </li>
                      <li className="rd__li">
                        <p className="rd__p-list-item">
                          <span className="bold rd__list-item-name">Type de Créature:</span>
                          {" " + selected.creatureType}
                        </p>
                      </li>
                      <li className="rd__li">
                        <p className="rd__p-list-item">
                          <span className="bold rd__list-item-name">Taille:</span>
                          {" " + selected.size}
                        </p>
                      </li>
                      <li className="rd__li">
                        <p className="rd__p-list-item">
                          <span className="bold rd__list-item-name">Vitesse:</span>
                          {" " + selected.speed}
                        </p>
                      </li>
                    </ul>
                    <div className="w-100 py-1"></div>
                    <div className="rd__b rd__b--2">
                      {selected.subraces ? <>
                        <div className="rd__b  rd__b--0">
                          <p>Cette race à plusieurs héritages comme listé ci-dessous</p>
                          <ul className="rd__list">
                            {selected.subraces.map((subrace) => <li className="rd__li">
                              <a href={"#" + subrace.id}>{subrace.name}</a>
                            </li>)}
                          </ul>
                        </div>
                        <hr className="rd__hr rd__hr--section"/>
                      </> : <></>}
                      <div className="rd__b  rd__b--3">
                        <p>
                              <span className="rd__h rd__h--3">
                                <span className="entry-title-inner">Âge.</span>
                              </span>
                          {" " + selected.common.age}
                        </p>
                      </div>
                      <div className="rd__b  rd__b--3">
                        <p>
                              <span className="rd__h rd__h--3">
                                <span className="entry-title-inner">Alignement.</span>
                              </span>
                          {" " + selected.common.alignment}
                        </p>
                      </div>
                      <div className="rd__b  rd__b--3">
                        <p>
                              <span className="rd__h rd__h--3">
                                <span className="entry-title-inner">Taille.</span>
                              </span>
                          {" " + selected.common.size}
                        </p>
                      </div>
                      {selected.traits.map((trait) => {
                        const key = Object.keys(trait)[0];
                        const value = trait[key]

                        if (typeof value === typeof []) {
                          // console.log(value)
                          return (<div className="rd__b rd__b--3">
                            {value.map((elem) => {
                              if (typeof elem !== typeof "") {
                                const keySub = Object.keys(elem)[0];
                                const valueSub = elem[keySub]
                                switch (keySub) {
                                  case "table":
                                    return (<table className="w-100 rd__table stripe-odd-table">
                                      <caption>{valueSub.caption}</caption>
                                      <thead>
                                      <tr>
                                        {valueSub.head.map((head) => {
                                          const idx = valueSub.head.indexOf(head)
                                          return (<th className={"rd__th " + valueSub.style[idx]}>
                                            {head}
                                          </th>)
                                        })}
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {valueSub.body.map((body) => {
                                        return (<tr>
                                          {body.map((cell) => {
                                            const idx = body.indexOf(cell)
                                            return (<td className={"rd__th " + valueSub.style[idx]}>
                                              {cell}
                                            </td>)
                                          })}
                                        </tr>)
                                      })}
                                      </tbody>
                                    </table>)
                                  case "ulist":
                                    return (valueSub.map((list) => {
                                      const keyList = Object.keys(list)[0];
                                      const valueList = list[keyList]
                                      console.log(list)
                                      console.log(keyList)
                                      console.log(valueList)
                                      return (<div className="rd__b  rd__b--3">
                                        <p>
                                              <span className="rd__h rd__h--3">
                                                <span className="entry-title-inner">{keyList}.</span>
                                              </span>
                                          {" " + valueList}
                                        </p>
                                      </div>)
                                    }))
                                  default:
                                    return (<p>Not Implemented: {keySub}</p>)
                                }
                              }
                              return (<p>
                                {elem === value[0] ? <>
                                      <span className="rd__h rd__h--3">
                                        <span className="entry-title-inner">{key}.</span>
                                      </span>
                                  {" " + elem}
                                </> : elem}
                              </p>)
                            })}
                          </div>)
                        }
                        return (<div className="rd__b rd__b--3">
                          <p>
                                <span className="rd__h rd__h--3">
                                  <span className="entry-title-inner">{key}.</span>
                                </span>
                            {" " + value}
                          </p>
                        </div>)
                      })}
                      <div className="rd__b  rd__b--3">
                        <p>
                            <span className="rd__h rd__h--3">
                            <span className="entry-title-inner">Langues.</span>
                            </span>
                          {" " + selected.common.languages}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} className="pt-3">
                    <b>Source:</b>
                    <i title={getSourceName(selected.source)}>{selected.source}</i>
                    , page {selected.page}. {selected.reprinted}
                  </td>
                </tr>
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
              </table>
            </TabPanel>
            <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
              <table className="w-100 stats">
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                <DetailsHeader/>
                <tr>
                  <td colSpan={6} className="pt-3">
                    <div className="rd__b rd__b--1">
                      <div className="rd__b rd__b--2">
                        {selected.info.map((info) => {
                          const key = Object.keys(info)[0];
                          const value = info[key]
                          if (key === "") {
                            return (<p>{value}</p>)
                          }
                          if (typeof value === typeof []) {
                            return (
                              <div className="rd__b rd__b--3">
                                {value.map((elem) => {
                                  return (
                                    <p>
                                      {elem === value[0] ? <>
                                            <span className="rd__h rd__b--3">
                                              <span className="entry-title-inner">{key}</span>
                                            </span>
                                        {" " + key}
                                      </> : key
                                      }
                                    </p>
                                  )
                                })}
                              </div>
                            )
                          }
                          if (typeof value === typeof {}) {
                            return formatContent([value])
                          }
                          return (
                            <div className="rd__b rd__b--3">
                              <p>
                                      <span className="rd__h rd__b--3">
                                        <span className="entry-title-inner">{key}</span>
                                      </span>
                                {" " + key}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
              </table>
            </TabPanel>
            {selected.images.length === 0 ?
              <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
                <table className="w-100 stats">
                  <tr>
                    <th className="ve-tbl-border" colSpan="6"></th>
                  </tr>
                  <DetailsHeader/>
                  <tr>
                    <th className="ve-tbl-border" colSpan="6"></th>
                  </tr>
                </table>
              </TabPanel>
              : <></>
            }
          </Tabs>
        }
      </div>
    </div>
  )
}

export const Layout5eClasses = () => {
}
export const Layout5eFeats = () => {
}
export const Layout5eBackgrounds = () => {
}
export const Layout5eOptionFeaures = () => {
}
export const Layout5eItems = () => {
}
export const Layout5eSpells = () => {
}
export const Layout5eRules = () => {
}
export const Layout5eCondition = () => {
}
export const Layout5eBestiary = () => {
}