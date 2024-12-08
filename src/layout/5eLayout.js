import React, {useEffect, useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {formatContent} from "../pages/dnd/chara crea/Details";
import {Link, Outlet} from "react-router-dom";
import NavMenu, {MenuDivider, MenuLink, SubMenu} from "./5e/NavMenu";
import "./5e/css/fontawesome.css"
import "./5e/scss/bootstrap.scss"
import "./5e/scss/import.scss"
import "./5e/css/index.css"
import {FilterManager, RenderModule, Selector5e} from "./5eModules";
import {Parser} from "./5e/js/parser";
import {getResource, Resources} from "../ResourcesFetch";

// TODO: Create a Render and Parser classes and Complete All datasets.

function buildRace(elements) {
  const newElems = structuredClone(elements)
  const races = []
  // eslint-disable-next-line array-callback-return
  newElems.map((race) => {
    if (race.subraces) {
      let subraces = structuredClone(race.subraces)
      // eslint-disable-next-line array-callback-return
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
  const base = "TTRPG-wiki"
  // const base = "tests"

  const [showMenu, setShowMenu] = useState(false)

  return (<>
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
        <button onClick={() => setShowMenu(!showMenu)}
                className={"ve-btn ve-btn-default page__btn-toggle-nav" + (showMenu ? " active" : "")}>Menu
        </button>
        <ul className="nav nav-pills page__nav-inner" id="navbar">
          <NavMenu name="Home" href={"/" + base} showMenu={showMenu}/>
          <NavMenu name="Rules" href="#" addCaret={true} showMenu={showMenu}>
            <MenuLink name="Rules Glossary" link="rules" callback={setShowMenu}/>
            <MenuLink name="Tables" link="#Unknown" callback={setShowMenu}/>
            <MenuDivider/>
            <SubMenu name="Books" showMenu={showMenu}>
              <MenuLink name="Books" link="#Unknown" callback={setShowMenu}/>
            </SubMenu>
            <MenuDivider/>
            <MenuLink name="Quick Reference (2014)" link="#Unknown" href="" callback={setShowMenu}/>
          </NavMenu>
          <NavMenu name="Player" href="#" addCaret={true} showMenu={showMenu}>
            <MenuLink name="Classes" link="classes" callback={setShowMenu}/>
            <MenuLink name="Backgrounds" link="backgrounds" callback={setShowMenu}/>
            <MenuLink name="Feats" link="feats" callback={setShowMenu}/>
            <MenuLink name="Races" link="races" callback={setShowMenu}/>
            <MenuLink name="Other Character Creation Options" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Other Options &amp; Features" link="optionsFeatures" callback={setShowMenu}/>
            <MenuDivider/>
            <MenuLink name="Stat Generator" link="#Unknown" callback={setShowMenu}/>
            <MenuDivider/>
            <MenuLink name="This Is Your Life" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Names" link="#Unknown" callback={setShowMenu}/>
          </NavMenu>
          <NavMenu name="Dungeon Master" href="#" addCaret={true} showMenu={showMenu}>
            <MenuLink name="DM Screen" link="dmscreen" href="dmscreen" callback={setShowMenu}/>
            <MenuDivider/>
            <SubMenu name="Adventures" showMenu={showMenu}></SubMenu>
            <MenuLink name="Cults &amp; Supernatural Boons" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Objects" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Traps &amp; Hazards" link="#Unknown" callback={setShowMenu}/>
            <MenuDivider/>
            <MenuLink name="CR Calculator" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Encounter Generator" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Loot Generator" link="#Unknown" callback={setShowMenu}/>
            <MenuDivider/>
            <MenuLink name="Maps" link="#Unknown" callback={setShowMenu}/>
          </NavMenu>
          <NavMenu name="References" href="#" addCaret={true} showMenu={showMenu}>
            <MenuLink name="Actions" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Bestiary" link="bestiary" callback={setShowMenu}/>
            <MenuLink name="Conditions &amp; Diseases" link="conditions" callback={setShowMenu}/>
            <MenuLink name="Decks" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Deities" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Items" link="items" callback={setShowMenu}/>
            <MenuLink name="Languages" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Supernatural Gifts &amp; Rewards" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Psionics" link="#Unknown" callback={setShowMenu}/>
            <MenuLink name="Spells" link="spells" callback={setShowMenu}/>
            <MenuLink name="Vehicles" link="#Unknown" callback={setShowMenu}/>
            <MenuDivider/>
            <MenuLink name="Recipes" link="#Unknown" callback={setShowMenu}/>
          </NavMenu>
          <NavMenu name="Utilities" href="#" addCaret={true} showMenu={showMenu}>
            <MenuLink name="" link="dfts<" href="zersq" callback={setShowMenu}/>
          </NavMenu>
          <NavMenu name="Settings" href="#" addCaret={true} showMenu={showMenu}>
            <MenuLink name="" link="dfts<" href="zersq" callback={setShowMenu}/>
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
  </>)
}

export const Layout5eHome = () => {
  return (<div className="home__stripe">
    <div className="home__split relative">
      <div className="home__stripe-header ve-text-right home__h-player">
        <div className="w-100 ve-text-left mobile__text-center">Joueurs</div>
      </div>
      <div
        className="ve-flex ve-flex-wrap relative home__split-spaced home__split-spaced--gutter home__split-spaced--no-header home__wrp-buttons">
        <Link to="races" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-users home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Races</h4>
        </Link>
        <Link to="classes" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-hat-wizard home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Classes</h4>
        </Link>
        <Link to="feats" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-award home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Dons</h4>
        </Link>
        <Link to="optionsFeatures" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-drafting-compass home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Options <br/>& Capacités</h4>
        </Link>
        <Link to="backgrounds" className="home__btn-page ve-btn ve-btn-default home__narrow-visible home__btn-player">
          <div className="fal fa-portrait home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Historique</h4>
        </Link>
        <Link to="items" className="home__btn-page ve-btn ve-btn-default home__narrow-visible home__btn-player">
          <div className="fal fa-helmet-battle home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Items</h4>
        </Link>
        <Link to="spells" className="home__btn-page ve-btn ve-btn-default home__narrow-visible home__btn-player">
          <div className="fal fa-book-spells home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Sorts</h4>
        </Link>
        <Link to="" className="home__btn-page ve-btn ve-btn-default home__narrow-visible home__btn-player">
          <div className="fal fa-tally-5 home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Généraeur<br/>de Stats</h4>
        </Link>
      </div>
      <div className="ve-flex ve-flex-wrap home__wrp-buttons home__narrow-hidden">
        <Link to="backgrounds" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-portrait home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Historiques</h4>
        </Link>
        <Link to="items" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-helmet-battle home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Items</h4>
        </Link>
        <Link to="spells" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-book-spells home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Sorts</h4>
        </Link>
        <Link to="" className="disabled home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
          <div className="fal fa-tally-5 home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Généraeur<br/>de Stats</h4>
        </Link>
      </div>
    </div>
    <div className="my-4 home__mobile-hidden home__narrow-hidden"></div>
    <div className="my-4 home__mobile-hidden home__narrow-visible"></div>
    <div className="my-4 home__mobile-hidden"></div>
    <div className="home__split">
      <div className="ve-flex ve-flex-wrap relative home__split-spaced home__split-spaced--gutter home__wrp-buttons">
        <div className="home__stripe-header home__h-rule">
          <div className="w-100 ve-text-left mobile__text-center">Règles</div>
        </div>
        <Link to="#" className="disabled home__btn-page ve-btn ve-btn-default mr-3 home__btn-rule">
          <div className="fal fa-dungeon home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Aventures</h4>
        </Link>
        <Link to="#" className="disabled home__btn-page ve-btn ve-btn-default mr-3 home__btn-rule">
          <div className="fal fa-books home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Livres</h4>
        </Link>
        <Link to="rules" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-rule">
          <div className="fal fa-info-square home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Glossaire<br/>de Règles</h4>
        </Link>
        <Link to="conditions" className="home__btn-page ve-btn ve-btn-default home__btn-rule">
          <div className="fal fa-skull-crossbones home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Conditions</h4>
        </Link>
      </div>
      <div className="my-4 home__mobile-visible"></div>
      <div className="ve-flex ve-flex-wrap relative home__wrp-buttons">
        <div className="home__stripe-header home__h-dm">
          <div className="w-100 ve-text-left mobile__text-center">Maître du Donjon</div>
        </div>
        <Link to="bestiary" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-dm">
          <div className="fal fa-dragon home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Bestiaire</h4>
        </Link>
        <Link to="#" className="disabled home__btn-page ve-btn ve-btn-default mr-3 home__btn-dm">
          <div className="fal fa-map home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Écran de MJ</h4>
        </Link>
        <Link to="#" className="disabled home__btn-page ve-btn ve-btn-default mr-3 home__btn-dm">
          <div className="fal fa-treasure-chest home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Générateur<br/>de Butin</h4>
        </Link>
        <Link to="#" className="disabled home__btn-page ve-btn ve-btn-default home__btn-dm">
          <div className="fal fa-abacus home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Calculateur<br/>de FP</h4>
        </Link>
      </div>
    </div>
    <div className="my-4"></div>
    <hr className="no-shrink w-100 my-0"/>
  </div>)
}

export const Layout5e2 = () => {
  const playerRaces = buildRace(require('../resources/races.json'))
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
  return (<div>
    <div className="filterSection">
      <div className="categoryFilters">
        <div className="filterTitle">Sources</div>
        <div className="filtersList">
          {filterableElems.sources.map((source) => (<div className="filter" key={source}
                                                         style={positiveFilters.sources.includes(source) ? {color: "green"} : negativeFilters.sources.includes(source) ? {color: "red"} : {}}>
            <div className="name" onClick={() => filter(source)}>
              {source}
            </div>
            <div className="count">({filteredData.filter(race => race.source === source).length})</div>
          </div>))}
        </div>
      </div>
    </div>
    <button onClick={clearFilter}>Clear filter</button>
    <div className="products">
      {filteredData.map((race) => (<div className="product" key={race.id}>
        {race.name}
        <div className="productInfo">
          <div className="productTitle">
            <div className="productBrand">{race.source}</div>
          </div>
        </div>
      </div>))}
    </div>
  </div>)
}

export const TableHeader = () => {
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

const DetailsHeader = ({selected}) => {
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

export function Layout5eRaces() {
  const columns = [{
    id: "Name", sortId: "name", classSize: "ve-col-4", colClass: "bold ve-col-4 pl-0 pr-1"
  }, {
    id: "Ability", sortId: "bonus", classSize: "ve-col-4", colClass: "ve-col-4 px-1 italic"
  }, {
    id: "Size", sortId: "size", classSize: "ve-col-2", colClass: "ve-col-2 px-1 ve-text-center"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-2 ve-text-center pl-1 pr-0"
  }]

  const races = getResource(Resources.race)
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, sortElements, DisplayList, DetailsHeader
  } = Selector5e(buildRace(races), columns);

  // console.log(races)
  // const [elements, setElements] = useState(buildRace(races))
  // const [sorting, setSorting] = useState("")

  // const [selected, setSelected] = useState(setSelectFromHash([...buildRace(races)], useLocation().hash))
  // let selected ={};

  // useEffect(() => {
  //   setSelected(setSelectFromHash())
  // }, []);
  const buttonTab = "ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0"
  // console.log(elements)
  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ?
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
            <Tab className={buttonTab + " ui-tab__btn-tab-head--active"}>
              Traits
            </Tab>
            <Tab className={buttonTab}>
              Info
            </Tab>
            {(selected.images && selected.images.length > 0) ? <Tab className={buttonTab}>
              Images
            </Tab> : ""}
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
              <DetailsHeader selected={selected}/>
              <tr>
                <td colSpan={6} className="pt-0">
                  <ul className="rd__list rd__list-hang-notitle">
                    <li className="rd__li">
                      <p className="rd__p-list-item">
                        <span className="bold rd__list-item-name">Score de capacité:</span>
                        {" " + Parser.attAbvToFull(selected.bonus)}
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
                            <Link to={"#" + subrace.id}>{subrace.name}</Link>
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
                                    // console.log(list)
                                    // console.log(keyList)
                                    // console.log(valueList)
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
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>
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
              <DetailsHeader selected={selected}/>
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
                          return (<div className="rd__b rd__b--3">
                            {value.map((elem) => {
                              return (<p>
                                {elem === value[0] ? <>
                                            <span className="rd__h rd__b--3">
                                              <span className="entry-title-inner">{key}</span>
                                            </span>
                                  {" " + key}
                                </> : key}
                              </p>)
                            })}
                          </div>)
                        }
                        if (typeof value === typeof {}) {
                          return formatContent([value])
                        }
                        return (<div className="rd__b rd__b--3">
                          <p>
                                      <span className="rd__h rd__b--3">
                                        <span className="entry-title-inner">{key}</span>
                                      </span>
                            {" " + key}
                          </p>
                        </div>)
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
                <DetailsHeader selected={selected}/>
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
              </table>
            </TabPanel> : ""
          }
        </Tabs>
      }
    </div>
  </div>)
}

export const Layout5eFeats = () => {
  // TODO: Finish Data Set.

  const columns = [{
    id: "Nom", sortId: "name", classSize: "ve-col-3-2"
  }, {
    id: "Catégorie", sortId: "cat", classSize: "ve-col-1-3"
  }, {
    id: "Capacité", sortId: "ability", classSize: "ve-col-2-5"
  }, {
    id: "Prérequis", sortId: "prerequisite", classSize: "ve-col-3"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow"
  }]
  const feat = getResource(Resources.feat)
  // console.log(races)
  const [elements, setElements] = useState([...feat])
  const [sorting, setSorting] = useState("")

  const [selected, setSelected] = useState(setSelectFromHash())

  useEffect(() => {
    setSelected(setSelectFromHash())
  }, []);

  function setSelectFromHash() {
    const filtered = elements.find((e) => "#" + e.id === window.location.hash)
    // console.log(filtered)
    if (filtered) {
      return filtered
    } else {
      return {}
    }
  }

  const handleClick = elem => {
    setSelected(elem)
  };


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

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
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

              <Link to={"#" + elem.id} replace className="lst__row-border lst__row-inner">
                {columns.map(column => {
                  // console.log(column.sortId, elem[column.sortId])
                  if (column.sortId === "source") {
                    return <span
                      className={"source ve-col-1-7 ve-text-center source__" + elem.source + " pl-1 pr-0"}>{elem.source}</span>
                  }
                  return <span
                    className={column.classSize + " px-1"}>{elem[column.sortId] === "" ? "—" : elem[column.sortId] ?? "—"}</span>
                })}
              </Link>
            </div>
          })}
        </div>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
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
        <div className="view-col" id="contentwrapper">
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                className="glyphicon glyphicon-new-window"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                className="glyphicon glyphicon-magnet"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span></button>
            </div>
          </div>
          <div id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selected={selected}/>
              {selected.prerequisite ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>Prérequis: {selected.prerequisite}</i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selected.shortDesc)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </div>
  </div>)
}
export const Layout5eBackgrounds = () => {

  const columns = [{
    id: "Nom", sortId: "name", classSize: "ve-col-2-5", colClass: "bold ve-col-2-9 pl-0 pr-1"
  }, {
    id: "Ability", sortId: "bonus", classSize: "ve-col-3-5", colClass: "bold ve-col-2-9 pl-0 pr-1"
  }, {
    id: "Maîtrise de compétences", sortId: "skills", classSize: "ve-col-4", colClass: "bold ve-col-2-9 pl-0 pr-1"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow", colClass: "bold ve-col-2-9 pl-0 pr-1"
  }]

  const background = getResource(Resources.background)
  // const [elements, setElements] = useState(buildRace(background))
  // const [sorting, setSorting] = useState("")
  // const [selected, setSelected] = useState(
  //   // setSelectFromHash([...background], useLocation().hash)
  // )
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState, DisplayList, DetailsHeader
  } = Selector5e(background, columns, "name");

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ? <div className="view-col" id="contentwrapper">
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
      </div> : <div className="view-col" id="contentwrapper">
        <div className="w-100 ve-flex" id="stat-tabs">
          <div className="ml-auto ve-flex" id="tabs-right">
            <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                    title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
            </button>
            <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                    title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
              className="glyphicon glyphicon-new-window"></span></button>
            <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                    title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
              className="glyphicon glyphicon-magnet"></span></button>
            <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
              <span className="glyphicon glyphicon-option-vertical"></span></button>
          </div>
        </div>
        <div id="wrp-pagecontent" className="relative wrp-stats-table">
          <table className="w-100 stats">
            <tr>
              <th className="ve-tbl-border" colSpan="6"></th>
            </tr>
            <DetailsHeader selected={selected}/>
            {selected.prerequisite ? <tr>
              <td colSpan={6} className="pb-2 pt-0">
                <i>Prérequis: {selected.prerequisite}</i>
              </td>
            </tr> : ""}
            <tr>
              <td colSpan="6">
                <div className="rd__b rd__b--2" dangerouslySetInnerHTML={{__html: selected.content?.[0].html}}></div>
              </td>
            </tr>
            <tr>
              <td colSpan="6" className="pt-3">
                <b>Source:</b>
                <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page
              </td>
            </tr>
            <tr>
              <th className="ve-tbl-border" colSpan="6"></th>
            </tr>
          </table>
        </div>
      </div>}
    </div>
  </div>)
}
export const Layout5eOptionFeatures = () => {

  function tableDisplayOption(column, string, element) {
    switch (column.sortId) {
      case "school": {
        return (
          <span
            className={column.colClass + " sp__school-" + string}
            title={Parser.SP_SCHOOL_ABV_TO_FULL[string]}>
          {Parser.SP_SCHOOL_ABV_TO_SHORT[string]}
        </span>
        )
      }
      case "prerequisite":
      case "level": {
        return (
          <span className={column.colClass}>{string ?? "—"}</span>
        )
      }
      default:
        return <span className={column.colClass}>{string}</span>
    }
  }

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-3", colClass: "bold ve-col-3 px-1"
    },
    {
      id: "Type", sortId: "type", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
    },
    {
      id: "Prérequis", sortId: "prerequisite", classSize: "ve-col-4-7", colClass: "ve-col-4-7 px-1"
    },
    {
      id: "Niveau", sortId: "level", classSize: "ve-col-1", colClass: "ve-col-1 px-1 ve-text-center"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-1-5 ve-text-center pl-1 pr-0"
    }
  ]
  const features = getResource(Resources.feature)

  const {
    selected, _,
    elements, setElements,
    __, ___,
    ____, updateSortElementsState, DisplayList, DetailsHeader, TempFilters
  } = Selector5e(features, columns, "name", tableDisplayOption);

  const {filters, toggleFilter} = FilterManager(setElements, updateSortElementsState, elements)

  const casters = {}
  const casterObj = {
    "type": ["Infusion d'Artificier", "Invocation Occulte"]
  }

  Object.entries(casterObj).map(([path, list]) => {
    list.map(element => casters[element] = path)
  })

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <TempFilters filters={casters} toggleFilter={toggleFilter}/>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ?
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
        <div className="view-col" id="contentwrapper">
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                className="glyphicon glyphicon-new-window"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                className="glyphicon glyphicon-magnet"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span></button>
            </div>
          </div>
          <div id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selected={selected}/>
              {(selected.prerequisite || selected.level) ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>
                    Prérequis: {selected.level}{(selected.prerequisite && selected.level) ? ", " : ""}{selected.prerequisite}
                  </i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selected.shortDesc)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </div>
  </div>)
}
export const Layout5eItems = () => {

  function tableDisplayOption(column, string, element) {
    switch (column.sortId) {
      case "school": {
        return (
          <span
            className={column.colClass + " sp__school-" + string}
            title={Parser.SP_SCHOOL_ABV_TO_FULL[string]}>
          {Parser.SP_SCHOOL_ABV_TO_SHORT[string]}
        </span>
        )
      }
      case "prerequisite":
      case "level": {
        return (
          <span className={column.colClass}>{string ?? "—"}</span>
        )
      }
      default:
        return <span className={column.colClass}>{string}</span>
    }
  }

  const columns = [
    {
    id: "Nom", sortId: "name", classSize: "ve-col-3-5", colClass: "ve-col-3-5 pl-0 pr-1 bold"
  },
    {
    id: "Type", sortId: "bonus", classSize: "ve-col-4-5", colClass: "ve-col-4-5 px-1"
  },
    {
    id: "Coût", sortId: "skills", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
  },
    {
    id: "Poids", sortId: "skills", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
  },
    {
    id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-1 ve-text-center pl-1 pr-0"
  }
  ]

  const items = getResource(Resources.item)
  // const [elements, setElements] = useState(buildRace(spells))
  // const [sorting, setSorting] = useState("")
  // const [selected, setSelected] = useState(
  //   // setSelectFromHash([...spells], useLocation().hash)
  // )
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState, DisplayList, DetailsHeader, TempFilters
  } = Selector5e(items, columns, "name");

  const {filters, toggleFilter} = FilterManager(setElements, updateSortElementsState, items)

  const casters = {}
  const casterObj = {
    "type": []
  }

  Object.entries(casterObj).map(([path, list], idx) => {
    list.map(element => casters[element] = path)
  })

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <TempFilters filters={casters} toggleFilter={toggleFilter}/>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ?
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
        <div className="view-col" id="contentwrapper">
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                className="glyphicon glyphicon-new-window"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                className="glyphicon glyphicon-magnet"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span></button>
            </div>
          </div>
          <div id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selected={selected}/>
              {selected.prerequisite ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>Prérequis: {selected.prerequisite}</i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selected.shortDesc)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </div>
  </div>)
}
export const Layout5eRules = () => {

  const columns = [{
    id: "Nom", sortId: "name", classSize: "ve-col-2-5"
  }, {
    id: "Ability", sortId: "bonus", classSize: "ve-col-3-5"
  }, {
    id: "Maîtrise de compétences", sortId: "skills", classSize: "ve-col-4"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow"
  }]

  const rules = getResource(Resources.rule)
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState, DisplayList, DetailsHeader
  } = Selector5e(rules, columns, "name");

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <div className="fltr__mini-view ve-btn-group">
        </div>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ?
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
        <div className="view-col" id="contentwrapper">
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                className="glyphicon glyphicon-new-window"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                className="glyphicon glyphicon-magnet"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span></button>
            </div>
          </div>
          <div id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selected={selected}/>
              {selected.prerequisite ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>Prérequis: {selected.prerequisite}</i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selected.shortDesc)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </div>
  </div>)
}
export const Layout5eCondition = () => {

  const columns = [{
    id: "Nom", sortId: "name", classSize: "ve-col-2-5"
  }, {
    id: "Ability", sortId: "bonus", classSize: "ve-col-3-5"
  }, {
    id: "Maîtrise de compétences", sortId: "skills", classSize: "ve-col-4"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow"
  }]

  const conditions = getResource(Resources.condition)
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState, DisplayList, DetailsHeader
  } = Selector5e(conditions, columns, "name");


  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <div className="fltr__mini-view ve-btn-group">
        </div>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ?
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
        <div className="view-col" id="contentwrapper">
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                className="glyphicon glyphicon-new-window"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                className="glyphicon glyphicon-magnet"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span></button>
            </div>
          </div>
          <div id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selected={selected}/>
              {selected.prerequisite ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>Prérequis: {selected.prerequisite}</i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selected.shortDesc)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </div>
  </div>)
}
export const Layout5eBestiary = () => {

  const columns = [{
    id: "Nom", sortId: "name", classSize: "ve-col-2-5"
  }, {
    id: "Ability", sortId: "bonus", classSize: "ve-col-3-5"
  }, {
    id: "Maîtrise de compétences", sortId: "skills", classSize: "ve-col-4"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow"
  }]

  const bestiary = getResource(Resources.bestiary)
  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState, DisplayList, DetailsHeader
  } = Selector5e(bestiary, columns, "name");


  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <div className="fltr__mini-view ve-btn-group">
        </div>
        <DisplayList/>
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selected || Object.keys(selected).length === 0 ?
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
        <div className="view-col" id="contentwrapper">
          <div className="w-100 ve-flex" id="stat-tabs">
            <div className="ml-auto ve-flex" id="tabs-right">
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Pin (Toggle) (Hotkey: p/P)"><span className="glyphicon glyphicon-pushpin"></span>
              </button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
                      title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)"><span
                className="glyphicon glyphicon-new-window"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
                      title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)"><span
                className="glyphicon glyphicon-magnet"></span></button>
              <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0" title="Other Options">
                <span className="glyphicon glyphicon-option-vertical"></span></button>
            </div>
          </div>
          <div id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className="w-100 stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <DetailsHeader selected={selected}/>
              {selected.prerequisite ? <tr>
                <td colSpan={6} className="pb-2 pt-0">
                  <i>Prérequis: {selected.prerequisite}</i>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {RenderModule().render(selected.shortDesc)}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source:</b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selected.source]}>{selected.source}</i>, page
                </td>
              </tr>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </div>
  </div>)
}