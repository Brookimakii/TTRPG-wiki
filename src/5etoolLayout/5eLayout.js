import React, {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useOutletContext} from "react-router-dom";
import NavMenu, {MenuDivider, MenuLink, SubMenu} from "../layout/5e/NavMenu";
import "./css/fontawesome.css"
import "./scss/bootstrap.scss"
import "./scss/import.scss"
import "./css/index.css"

// TODO: Create a Render and Parser classes and Complete All datasets.

import "./scss/SystemSelection.scss"

export const Layout5e = ({title="Test", base}) => {
  base = "TTRPG-wiki" + base

    const [setTitle] = useOutletContext();
  setTitle(title)

  const [showMenu, setShowMenu] = useState(false)

  return (<>
      <nav className="container page__nav" id="navigation">
        {/*TODO: Add in small mod a way to display following navs*/}
        <button onClick={() => setShowMenu(!showMenu)}
                className={"ve-btn ve-btn-default page__btn-toggle-nav" + (showMenu ? " active" : "")}>Menu
        </button>
        <ul className="nav nav-pills page__nav-inner" id="navbar">
          <NavMenu system={base} name="Home" href={"/" + base} showMenu={showMenu}/>
          <NavMenu system={base} name="Rules" href="" addCaret={true} showMenu={showMenu}>
            <MenuLink system={base} name="Rules Glossary" link="rules"/>
            <MenuLink system={base} name="Tables" link="#Unknown"/>
            <MenuDivider/>
            <SubMenu system={base} name="Books" showMenu={showMenu}>
              <MenuLink system={base} name="Books" link="#Unknown"/>
            </SubMenu>
            <MenuDivider/>
            <MenuLink system={base} name="Quick Reference (2014)" link="#Unknown" href=""/>
          </NavMenu>
          <NavMenu system={base} name="Player" href="" addCaret={true} showMenu={showMenu}>
            <MenuLink system={base} name="Classes" link="classes"/>
            <MenuLink system={base} name="Historique" link="backgrounds"/>
            <MenuLink system={base} name="Dons" link="feats"/>
            <MenuLink system={base} name="Races" link="races"/>
            {/*<MenuLink system={base} name="Other Character Creation Options" link="#Unknown"/>*/}
            <MenuLink system={base} name="Autres Option &amp; Capacité" link="optionsFeatures"/>
            <MenuDivider/>
            <MenuLink system={base} name="Stat Generator" link="#Unknown"/>
            <MenuDivider/>
            <MenuLink system={base} name="This Is Your Life" link="#Unknown"/>
            <MenuLink system={base} name="Names" link="#Unknown"/>
          </NavMenu>
          <NavMenu system={base} name="Dungeon Master" href="" addCaret={true} showMenu={showMenu}>
            <MenuLink system={base} name="DM Screen" link="dmscreen" href="dmscreen"/>
            <MenuDivider/>
            <SubMenu system={base} name="Adventures" showMenu={showMenu}></SubMenu>
            <MenuLink system={base} name="Cults &amp; Supernatural Boons" link="#Unknown"/>
            <MenuLink system={base} name="Objects" link="#Unknown"/>
            <MenuLink system={base} name="Traps &amp; Hazards" link="#Unknown"/>
            <MenuDivider/>
            <MenuLink system={base} name="CR Calculator" link="#Unknown"/>
            <MenuLink system={base} name="Encounter Generator" link="#Unknown"/>
            <MenuLink system={base} name="Loot Generator" link="#Unknown"/>
            <MenuDivider/>
            <MenuLink system={base} name="Maps" link="#Unknown"/>
          </NavMenu>
          <NavMenu system={base} name="References" href="" addCaret={true} showMenu={showMenu}>
            <MenuLink system={base} name="Actions" link="#Unknown"/>
            <MenuLink system={base} name="Bestiary" link="bestiary"/>
            <MenuLink system={base} name="Conditions &amp; Diseases" link="conditions"/>
            <MenuLink system={base} name="Decks" link="#Unknown"/>
            <MenuLink system={base} name="Deities" link="#Unknown"/>
            <MenuLink system={base} name="Items" link="items"/>
            <MenuLink system={base} name="Languages" link="#Unknown"/>
            <MenuLink system={base} name="Supernatural Gifts &amp; Rewards" link="#Unknown"/>
            <MenuLink system={base} name="Psionics" link="#Unknown"/>
            <MenuLink system={base} name="Spells" link="spells"/>
            <MenuLink system={base} name="Vehicles" link="#Unknown"/>
            <MenuDivider/>
            <MenuLink system={base} name="Recipes" link="#Unknown"/>
          </NavMenu>
          <NavMenu system={base} name="Utilities" href="" addCaret={true} showMenu={showMenu}>
            <MenuLink system={base} name="Cheatsheets" link="cheatsheet"/>
            <MenuLink system={base} name="Change System" link="../"/>
          </NavMenu>
          <NavMenu system={base} name="Settings" href="" addCaret={true} showMenu={showMenu}>
            <MenuLink system={base} name="" link="dfts<" href="zersq"/>
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
        <Link to="" className="disabled home__btn-page ve-btn ve-btn-default home__narrow-visible home__btn-player">
          <div className="fal fa-tally-5 home__icn-page"></div>
          <h4 className="ve-text-center home__lbl-page">Générateur<br/>de Stats</h4>
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
          <h4 className="ve-text-center home__lbl-page">Générateur<br/>de Stats</h4>
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
    <main className="container">
      <div className="w-100">
        <h3>Un problème ?</h3>
        <p>N'hésitez pas à me contacter pour tout problème rencontré. Un système de ticket est en cours de création.</p>
        <h3>Changelog</h3>
        <p>Vous pouvez consulter tous les changement <Link to="../changelog">ici</Link></p>
      </div>
    </main>
  </div>)
}


export const LayoutHeader = () => {

  const [title, setTitle] = useState("Test")
  const [homeLink, _setHomeLink] = useState("TTRPG-wiki")

  const _handleTitleUpdate = (str) => setTitle(str)

  return (<>
    <script type="text/javascript" src="../layout/5e/js/navigation.js"></script>
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
          <Link to={homeLink} style={{color:'#e0e0e0'}}>
            <h1 className="page__title no-wrap my-0" id="page__title">{title}</h1>
          </Link>
          <p className="page__subtitle no-wrap my-0" id="page__subtitle">
            This is a test to see the site appearance.
          </p>
        </div>
      </header>
      <Outlet context={[setTitle]}/>
    </div>
  </>)
}

export const LayoutSystemSelection = ({title="Test"}) => {
  const base = "TTRPG-wiki"
  const [setTitle] = useOutletContext();
  setTitle(title)
  const [showMenu, setShowMenu] = useState(false)
  return (<>
    <nav className="container page__nav" id="navigation">
      {/*TODO: Add in small mod a way to display following navs*/}
      <button onClick={() => setShowMenu(!showMenu)}
              className={"ve-btn ve-btn-default page__btn-toggle-nav" + (showMenu ? " active" : "")}>Menu
      </button>
      <ul className="nav nav-pills page__nav-inner" id="navbar">
        <NavMenu name="Home" href={"/" + base} showMenu={showMenu}/>
      </ul>
    </nav>
    <div className="home__stripe">
      <div className="home__split relative">
        <div className="home__stripe-header ve-text-right home__h-player">
          <div className="w-100 ve-text-left mobile__text-center">System</div>
        </div>
        <div
          className="ve-flex ve-flex-wrap relative home__split-spaced home__split-spaced--gutter home__split-spaced--no-header home__wrp-buttons">
          <Link to="dnd5e" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
            <div className="fal system-dnd home__icn-page"></div>
            <h4 className="ve-text-center home__lbl-page">Dungeon &<br/>Dragon 5e</h4>
          </Link>
          <Link to="pathdinder2e" className="home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
            <div className="fal system-pathfinder home__icn-page"></div>
            <h4 className="ve-text-center home__lbl-page">Pathfinder 2e</h4>
          </Link>
          <Link to="callOfCthulhu" className="disabled home__btn-page ve-btn ve-btn-default mr-3 home__btn-player">
            <div className="fal fa-squid home__icn-page"></div>
            <h4 className="ve-text-center home__lbl-page">Call of<br/>Cthulhu</h4>
          </Link>
        </div>
        <div className="ve-flex ve-flex-wrap home__wrp-buttons home__narrow-hidden">
        </div>
      </div>
    </div>
  </>)
}



export const Layout5e2 = () => {
  const playerRaces = []
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


