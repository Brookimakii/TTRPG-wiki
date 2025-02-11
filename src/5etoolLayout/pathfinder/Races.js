import {getResource, Resources} from "../../resources/ResourcesFetch";
import {RenderModule, Selector5e} from "../5eLayoutModules";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {Parser} from "../../layout/5e/js/parser";
import {Link} from "react-router-dom";
import React from "react";
import type {PlayerRace} from "../../layout/5e/ModelsPathfinder";
import {Entry} from "../../layout/5e/ModelsPathfinder";

export function PF2eRaces() {

  function buildRace(elements) {
    const newElems: [PlayerRace] = structuredClone(elements)
    const races = []
    newElems.forEach((ancestry) => {
      if (ancestry.id === "heritage") {
        // console.log("Polyvalent Heritage", ancestry.id)
        let heritages = structuredClone(ancestry.heritages)
        heritages.forEach((heritage) => {
          // console.log("Heritage", heritage.id)
          heritage["id"] = ancestry.id + "-(" + heritage.id + ")"
          heritage["name"] = ancestry.name + " (" + heritage.name + ")"
          races.push(heritage)
        })

        ancestry.traits.forEach((trait) => {
          trait.entries.push({
            type: "list",
            entries: ancestry.heritages.filter(heritages => heritages.rarity === trait.rarity).map((heritage) => {
              return `{@ancestry ${heritage.name}|${ancestry.id}-(${heritage.id})}`
            })
          })
        })
        ancestry["hideHeritages"] = true
        // console.log(ancestry)
        races.push(ancestry)
      } else {
        // console.log("Not Polyvalent Heritage", ancestry.id, ancestry)
        races.push(ancestry);
      }
    })

    // console.log(races)

    return races.sort(function (a, b) {
      let textA = a.id.toUpperCase();
      let textB = b.id.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    })
  }

  const columns = [{
    id: "Name", sortId: "name", classSize: "ve-col-8", colClass: "bold ve-col-4 pl-0 pr-1"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-2 ve-text-center pl-1 pr-0"
  }]

  const races = getResource(Resources.pathfinder.ancestries)
  const {
    selected,
    setSelected,
    elements,
    setElements,
    sorting,
    setSorting,
    handleClickSelection,
    updateSortElementsState,
    TableHeader,
    DisplayList,
    DetailsHeader,
    TempFilters
  } = Selector5e(buildRace(races), columns);

  // console.log(races)
  // const [elements, setElements] = useState(buildRace(races))
  // const [sorting, setSorting] = useState("")

  // const [selectedRace, setSelected] = useState(setSelectFromHash([...buildRace(races)], useLocation().hash))
  // let selectedRace ={};

  // useEffect(() => {
  //   setSelected(setSelectFromHash())
  // }, []);

  const selectedRace: PlayerRace = {...selected}

  const buttonTab = "ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0"
  // console.log(elements)

  const renderEntries = (entry: Entry, toggle, depth) => {
    return <div className="rd__b rd__b--3">
      <p>
        <span className="rd__h rd__h--3" data-title-index="1">
          <span className="entry-title-inner">{entry.name}. </span>
        </span>
        {RenderModule({...renderProps, defaultString: (string) => string,}).render(entry.entries)}
      </p>
    </div>
  }
  const renderTitleEntries = (entry: Entry, toggle, depth) => {
    console.log(entry)
    return <div className="rd__b rd__b--2">
      <p>
        <span className="rd__h rd__h--2" data-title-index="1">
          <span className="entry-title-inner">{entry.name}. </span>
        </span>
        {RenderModule({...renderProps, defaultString: (string) => string,}).render(entry.entries)}
      </p>
    </div>
  }

  const renderProps = {
    renderEntries: renderEntries, renderTitleEntries: renderTitleEntries
  }

  const AncestrySidebar = ({ selectedAncestry }) => {
    const ancestry: PlayerRace = selectedAncestry
    return (
      <div data-feature-type="ancestry" className="">
        <div className="pf2-sidebar">
          <p className="pf2-title">Rarity</p>
          <p className="pf2-sidebar__text">
            <a href={`traits.html#${ancestry.rarity?.toLowerCase()}`}>{ancestry.rarity}</a>
          </p>

          <p className="pf2-title">Hit Points</p>
          <p className="pf2-sidebar__text">{ancestry.hitPoints}</p>

          <p className="pf2-title">Size</p>
          <p className="pf2-sidebar__text">{ancestry.size}</p>

          <p className="pf2-title">Speed</p>
          <p className="pf2-sidebar__text">{ancestry.speed}</p>

          <p className="pf2-title">Ability Boosts</p>
          <p className="pf2-sidebar__text">{ancestry.abilityBoost?.join(" <br /> ")}</p>

          <p className="pf2-title">Ability Flaw</p>
          <p className="pf2-sidebar__text">{ancestry.abilityFlow?.join(" <br /> ")}</p>

          <p className="pf2-title">Languages</p>
          {ancestry.languages?.map((lang, index) => (
            <p key={index} className="pf2-sidebar__text">
              <a href={`languages.html#${lang.toLowerCase().replace(/\s+/g, "_")}`}>{lang}</a>
            </p>
          ))}
          <p className="pf2-sidebar__text">
            Additional languages equal to your Intelligence modifier (if positive). Choose from {ancestry.additionalLanguages?.join(", ")}.
          </p>

          <p className="pf2-title">Traits</p>
          <p className="pf2-sidebar__text">
            {ancestry.traitjs?.map((trait, index) => (
              <span key={index}>
              <a href={`traits.html#${trait?.toLowerCase()}`}>{trait}</a>
                {index < ancestry.traits.length - 1 ? ", " : ""}
            </span>
            ))}
          </p>

          {ancestry.abilities?.map((ability, index) => (
            <div key={index}>
              <p className="pf2-title">{ability.name}</p>
              <p className="pf2-sidebar__text">{ability.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (<div className="view-col-group--cancer h-100 mh-0">
      <div className="container view-col-wrapper view-col-wrapper--cancer">
        <div className="col-ml-3" id="listcontainer">
          <TableHeader/>
          {/*Include list Here (elements).*/}
          {DisplayList(elements, "ancestries cls__list")}
          <div id="heritagetabs" className="w-100 my-2 cls-tabs__wrp">
            <div className="flex-v-center m-1 flex-wrap">
              <div className="mr-2 no-shrink">
                <button className="btn btn-xs btn-default mb-1" title="Toggle Feat View">Show Feats</button>
              </div>
              <div className="mr-2 no-shrink">
                <li className="dropdown" style={{listStyle: "none"}}>
                  <li className="dropdown-menu dropdown-menu--top"
                      style={{marginTop: "-0.25rem !important", borderRadius: "0"}}></li>
                  <button className="btn btn-default btn-xs mr-2 mb-1 flex-3">Images</button>
                </li>
              </div>
              <div className="btn-group no-shrink mb-1 ml-auto">
                <button className="btn btn-xs btn-default active" title="Toggle Ancestry Features">Features</button>
              </div>
            </div>
            <div className="flex-v-center m-1 no-shrink"><select
              className="input-xs form-control cls-tabs__sel-preset mr-2 mb-1 flex-3">
              <option value="-1" disabled="">Filter...</option>
              <option value="0">Select All</option>
              <option value="1">Standard Heritages Only</option>
              <option value="2">Versatile Heritages Only</option>
            </select>
              <div className="btn-group flex-1 flex-h-center mb-1">
                <button className="btn btn-xs btn-default flex-1" title="Select All"><span
                  className="glyphicon glyphicon-check"></span></button>
                <button title="Feeling Lucky?" className="btn btn-xs btn-default flex-1"><span
                  className="glyphicon glyphicon-random"></span></button>
                <button className="btn btn-xs btn-default flex-1" title="Reset Selection"><span
                  className="glyphicon glyphicon-refresh"></span></button>
                <button className="btn btn-xs btn-default flex-1" title="Show Heritage Sources"><span
                  className="glyphicon glyphicon-book"></span></button>
              </div>
            </div>
            <div className="flex-v-center flex-wrap mr-2 w-100 anc-h-tabs__wrp" data-h-type="Anadi Heritages">
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: The Mwangi Expanse, page 103">Adaptive</div>
                <div className="ml-1 hidden" title="Lost Omens: The Mwangi Expanse">(LOME)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: The Mwangi Expanse, page 103">Polychromatic</div>
                <div className="ml-1 hidden" title="Lost Omens: The Mwangi Expanse">(LOME)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: The Mwangi Expanse, page 103">Snaring</div>
                <div className="ml-1 hidden" title="Lost Omens: The Mwangi Expanse">(LOME)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: The Mwangi Expanse, page 103">Spindly</div>
                <div className="ml-1 hidden" title="Lost Omens: The Mwangi Expanse">(LOME)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: The Mwangi Expanse, page 103">Venomous</div>
                <div className="ml-1 hidden" title="Lost Omens: The Mwangi Expanse">(LOME)</div>
              </button>
              <div className="text-muted m-1 cls-tabs__sc-not-shown flex-vh-center"></div>
            </div>
            <div className="flex-v-center flex-wrap mr-2 w-100 anc-h-tabs__wrp" data-h-type="Versatile Heritages">
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Rage of Elements, page 46">Ardande</div>
                <div className="ml-1 hidden" title="Rage of Elements">(RoE)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Advanced Player’s Guide, page 34">Aasimar</div>
                <div className="ml-1 hidden" title="Advanced Player’s Guide">(APG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Dark Archive, page 119">Reflection</div>
                <div className="ml-1 hidden" title="Dark Archive">(DA)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 74">Aphorite</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 78">Beastkin</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Advanced Player’s Guide, page 30">Changeling</div>
                <div className="ml-1 hidden" title="Advanced Player’s Guide">(APG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Advanced Player’s Guide, page 32">Dhampir</div>
                <div className="ml-1 hidden" title="Advanced Player’s Guide">(APG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Advanced Player’s Guide, page 37">Duskwalker</div>
                <div className="ml-1 hidden" title="Advanced Player’s Guide">(APG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 94">Ganzi</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 100">Ifrit</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 104">Oread</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 108">Suli</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 112">Sylph</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Advanced Player’s Guide, page 39">Tiefling</div>
                <div className="ml-1 hidden" title="Advanced Player’s Guide">(APG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Lost Omens: Ancestry Guide, page 116">Undine</div>
                <div className="ml-1 hidden" title="Lost Omens: Ancestry Guide">(LOAG)</div>
              </button>
              <button className="btn btn-default btn-xs flex-v-center m-1">
                <div title="Dragonkin Versatile Heritage">Dragonkin</div>
                <div className="ml-1 hidden" title="Dragonkin Versatile Heritage">(DVH)</div>
              </button>
              <div className="text-muted m-1 cls-tabs__sc-not-shown flex-vh-center"></div>
            </div>
          </div>
        </div>
        <div className="col-ml-9" id="ancestrystats-wrp">
          <div className="wrp-stats-table mb-4">
            <div className="stats pf2-book pf2-book--large" id="ancestrystats">
              <div id="ancestry-name">
                <div className="pf2-wrp-h1">
                  <p className="pf2-h1 rd__h" data-title-index="10">
                    <span className="entry-title-inner">{selectedRace.name}</span>
                  </p>
                  <div className="float-clear"></div>
                </div>
              </div>
              <div className="pf2-fluff hidden-fluff">
                <p className="pf2-h1-flavor rd__h">
                  Anadi people are reclusive, sapient spiders who hail from the jungles of southern Garund. Though they
                  act in many ways like natural-born shapeshifters, their twin forms actually stem from carefully
                  developed magic.
                </p>
                <div className="flex">
                  <div className="pf2-chapter__line mb-4"
                       style={{width: "calc(100% - 2em)", marginLeft: "1em", height: "2px"}}>
                    /div>
                  </div>
                </div>
                <div data-feature-type="ancestry">
                  <div className="pf2-sidebar ">
                    <p className="pf2-title ">Rarity</p>
                    <p className="pf2-sidebar__text">
                      <a
                        href="traits.html#rare"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'rare', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">Rare</a>
                    </p>
                    <p className="pf2-title ">Hit Points</p>
                    <p className="pf2-sidebar__text">8</p>
                    <p className="pf2-title ">Size</p>
                    <p className="pf2-sidebar__text">Medium</p>
                    <p className="pf2-title ">Speed</p>
                    <p className="pf2-sidebar__text">25 feet</p>
                    <p className="pf2-title ">Ability Boosts</p>
                    <p className="pf2-sidebar__text">Dexterity <br/> Wisdom <br/> Free</p>
                    <p className="pf2-title ">Ability
                      Flaw</p>
                    <p className="pf2-sidebar__text">Constitution</p>
                    <p className="pf2-title ">Languages</p>
                    <p className="pf2-sidebar__text">
                      <a href="languages.html#anadi_aoa1"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'AoA1', 'anadi_aoa1', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Anadi</a>
                    </p>
                    <p className="pf2-sidebar__text">
                      <a href="languages.html#mwangi_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'CRB', 'mwangi_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Mwangi</a>
                    </p>
                    <p className="pf2-sidebar__text">
                      Additional languages equal to your Intelligence modifier (if positive). Choose from
                      <a href="languages.html#draconic_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'CRB', 'draconic_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Draconic</a>,
                      <a href="languages.html#elven_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'CRB', 'elven_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Elven</a>,
                      <a href="languages.html#gnoll_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'CRB', 'gnoll_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Gnoll</a>,
                      <a href="languages.html#iruxi_b1"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'b1', 'iruxi_b1', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Iruxi</a>,
                      <a href="languages.html#orcish_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'CRB', 'orcish_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Orcish</a>,
                      <a href="languages.html#sylvan_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'languages.html', 'CRB', 'sylvan_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Sylvan</a>,
                      and any other languages to which you have access (such as the languages prevalent in your region).
                    </p>
                    <p className="pf2-title ">Traits</p>
                    <p className="pf2-sidebar__text">
                      <a href="traits.html#anadi"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'anadi', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Anadi</a>,
                      <a href="traits.html#humanoid"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'humanoid', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Humanoid</a>
                    </p>
                    <p className="pf2-title ">Fangs</p>
                    <p className="pf2-sidebar__text">
                      You were born with a natural means for hunting and self-defense. You gain a fangs unarmed attack
                      that deals
                      <span className="roller render-roller"
                            title="Click to roll. SHIFT to roll a critical hit, CTRL to half damage (rounding down)."
                            onMouseDown="event.preventDefault()"
                            onClick="Renderer.dice.pRollerClickUseData(event, this)"
                            data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d6&quot;,&quot;subType&quot;:&quot;damage&quot;}">1d6</span>
                      piercing damage. Your fangs are in the
                      <span className="help--hover"
                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'group', 'CRB', 'brawling_crb', null)"
                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">brawling</span> group and have
                      the
                      <a href="traits.html#finesse"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'finesse', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">finesse</a> and
                      <a href="traits.html#unarmed"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'unarmed', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">unarmed</a> traits.
                    </p>
                    <p className="pf2-title ">Change Shape</p>
                    <div className="pf2-stat pf2-stat__section">
                    <span className="pf2-stat__text">
                    <strong>Change Shape</strong>
                    <span className="pf2-action-icon" data-symbol="1"></span>
                    <span className="pf2-action-icon-copy-text">[&gt;]</span> (
                      <a href="traits.html#anadi"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'anadi', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">anadi</a>,
                      <a href="traits.html#arcane"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'arcane', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">arcane</a>,
                      <a href="traits.html#concentrate"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'concentrate', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">concentrate</a>,
                      <a href="traits.html#polymorph"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'polymorph', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">polymorph</a>,
                      <a href="traits.html#transmutation"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'transmutation', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">transmutation</a>
                      ) You change into your human or spider shape. Each shape has a specific, persistent appearance. In
                      your human shape, you can't use unarmed attacks granted by your ancestry. You aren't flat footed
                      when climbing in your spider shape. However, in your spider shape you can't use weapons, shields,
                      or other held items of any sort, and you are limited in what actions you can take that have the
                      manipulate trait. The only manipulate actions you can take are to
                      <a href="actions.html#cast%20a%20spell_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'actions.html', 'CRB', 'cast%20a%20spell_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Cast a Spell</a>
                      with somatic components, weave silk or webbing, or simple
                      <a href="actions.html#interact_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'actions.html', 'CRB', 'interact_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Interact</a>
                      actions such as opening an unlocked door. Your spider legs can't perform actions that require
                      fingers or significant manual dexterity, including any action that would require a check to
                      accomplish. The GM might determine other
                      <a href="traits.html#manipulate"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'manipulate', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">manipulate</a>
                      actions are appropriate for your spider legs.
                    </span>
                    </div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff">
                  <p className="pf2-p">
                    As a communal and peaceful people, anadi ancestors endeavored to establish trade with the neighbors
                    of
                    their homeland. However, these anadi soon learned that most others found their appearance to be
                    extremely objectionable. Wishing to avoid conflict, ancient anadi retreated into isolation until
                    they
                    could find a solution. The answer came when their greatest scholars innovated a fusion of
                    transmutation and illusion magic that allowed them to assume a humanoid form. The technique was
                    developed, perfected, and eventually taught to the overwhelming majority of anadi.
                  </p>
                  <p className="pf2-p">
                    Early efforts with their new approach to diplomacy have yielded much better results, though sporadic
                    contact means that some outsiders whisper false legends about anadi, such as claims that they are
                    humans who transform into monstrous spiders at moonrise. Even contemporary explorers have reported
                    anadi as humanspider hybrids. The anadi people of the current day strive to slowly but surely create
                    a
                    world where they no longer need to hide their true nature.
                  </p>
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="1">
                      <span className="entry-title-inner">You Might...</span>
                    </p>
                    <ul className="rd__list">
                      <li className="rd__li ">Only reveal your true form to people who have earned your trust.</li>
                      <li className="rd__li ">
                        Openly express sympathy for misrepresented and unfairly stigmatized cultures.
                      </li>
                      <li className="rd__li ">
                        Provide for those you hold dear and defend them from danger without hesitation.
                      </li>
                    </ul>
                  </div>
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="2">
                      <span className="entry-title-inner">Others Probably...</span>
                    </p>
                    <ul className="rd__list">
                      <li className="rd__li ">
                        Appreciate your willingness to seek nonviolent solutions to complicated problems.
                      </li>
                      <li className="rd__li ">Have a strong reaction to seeing your natural form.</li>
                      <li className="rd__li ">
                        Assume you have an affinity for druidic magic, given your ability to transform.
                      </li>
                    </ul>
                  </div>
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="3">
                      <span className="entry-title-inner">Physical Description</span>
                    </p>
                    <p className="pf2-p">
                      Anadi in their true form resemble human-sized spiders with a variety of colorations. Some tones
                      look
                      simple or muted while other remain striking and vibrant, with most patterns inherited from an
                      anadi's parentage. A typical anadi measures five feet in length from their front legs to their
                      rear
                      legs when standing comfortably.
                    </p>
                    <p className="pf2-p">
                      All anadi possesses the ability to transform into a human guise. This form can resemble any human
                      ethnicity, but it's usually one that blends in with the region of an anadi's hatching. Anadi reach
                      physical maturity after 13 years, going through multiple phases of molting along the way. A
                      typical
                      anadi lives to be about 80 years old.
                    </p>
                  </div>
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="4">
                      <span className="entry-title-inner">Society</span>
                    </p>
                    <p className="pf2-p">
                      Anadi live in a communal society, sharing peaceful lives farming mushrooms or weaving warm
                      blankets.
                      Their culture places great value on cooperation and mutual respect. Due to this cultural
                      upbringing,
                      anadi often have issues facing severe conflict and often come off to other ancestries as very shy.
                      Their history of dealing with arachnophobia in other peoples—which anadi understand is often
                      instinctual and very difficult to control—likewise means that anadi do their best to be
                      accommodating and comforting, even in situations that aren't necessarily fair to them.
                    </p>
                  </div>
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="5">
                      <span className="entry-title-inner">Alignment and Religion</span>
                    </p>
                    <p className="pf2-p">
                      The cooperative nature of anadi society and their dislike of violence means many anadi lean toward
                      good alignments. They're more often neutral than chaotic or lawful, though the latter aren't
                      unheard
                      of.
                    </p>
                    <p className="pf2-p">
                      Legends say Grandmother Spider rescued anadi people from servitude and brought them to Golarion,
                      becoming their patron deity in the process. Her values of mutual care and playful trickery
                      interweave into anadi culture, and even those who don't worship her tell tales of her adventures.
                    </p>
                  </div>
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="6">
                      <span className="entry-title-inner">Names</span></p>
                    <p className="pf2-p">
                      Anadi names are given by the members of the web marriage that raised them. Each parent contributes
                      a
                      single syllable, usually the first, from their own name. Older anadi who feel their identity has
                      settled often take on or are given a phrase-title to honor them as well. Anadi who live among
                      human
                      populations rarely take a cover name, but some might adopt one if their given name strongly
                      contrasts the norm in the local culture.
                    </p>
                  </div>
                  <div className="pf2-wrp-h4">
                    <p className="pf2-h4 rd__h " data-title-index="7">
                      <span className="entry-title-inner">Sample Names</span>
                    </p>
                    <p className="pf2-p">
                      Altava, Anavachti, Strings-On-The-River Inkeelah, Kerialnamu, Maracha, Leaves-Shelter-Her-Feet
                      Naiala, Orvasa, Reloana, Rivuken, Velachamon
                    </p>
                  </div>
                  <div className="pf2-sidebar ">
                    <p className="pf2-sidebar__title" data-title-index="8">
                      <span className="entry-title-inner">Anadi Adventurers</span>
                    </p>
                    <p className="pf2-sidebar__text">
                      Anadi who answer the call to adventure often do so to learn more about the world at large. Common
                      anadi backgrounds include
                      <a href="backgrounds.html#artisan_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'artisan_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">artisan</a>,
                      <a href="backgrounds.html#emissary_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'emissary_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">emissary</a>,
                      <a href="backgrounds.html#herbalist_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'herbalist_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">herbalist</a>,
                      <a href="backgrounds.html#hunter_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'hunter_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">hunter</a>, and
                      <a href="backgrounds.html#scholar_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'scholar_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">scholar</a>.
                      Anadi adventurers who want to support their communities often become
                      <a href="classes.html#cleric_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'cleric_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">clerics</a> or
                      <a href="classes.html#druid_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'druid_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">druids</a>. <a
                      href="classes.html#rogue_crb"
                      onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'rogue_crb', null)"
                      onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                      onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                      onTouchStart="Renderer.hover.handleTouchStart(event, this)">Rogue</a>
                      remains a popular choice among those who seek to hide their true form. Anadi who wish to continue
                      their magical traditions tend to become
                      <a href="classes.html#wizard_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'wizard_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">wizards</a> or
                      <a href="classes.html#sorcerer_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'sorcerer_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">sorcerers</a>.
                    </p>
                  </div>
                  <div className="pf2-sidebar " data-source="LOME">
                    <p className="pf2-sidebar__title" data-title-index="9">
                      <span className="entry-title-inner">Anadi Enclaves</span>
                    </p>
                    <p className="pf2-sidebar__text">
                      <i className="ve-muted">Read from page 105 of
                        <a href="https://paizo.com/products/btq026i4">Lost Omens: The Mwangi Expanse</a>
                      </i>.
                    </p>
                  </div>
                </div>
                <div className="heritage-title hidden">
                  <div className="pf2-wrp-h2">
                    <div className="pf2-h2--wrp ">
                      <p className="pf2-h2 rd__h" data-title-index="11">
                        <span className="entry-title-inner">Anadi Heritages</span>
                      </p>
                    </div>
                  </div>
                  <p className="pf2-p">
                    Anadi are well-suited to survive in the wild, having developed diverse heritages even before the
                    widespread use of transformation magic. Choose one of the following anadi heritages at 1st level.
                  </p>
                </div>
                <div data-heritage-id="h-adaptive-lome" className="hidden">
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="12">
                      <span className="entry-title-inner">Adaptive Anadi</span>
                    </p>
                    <p className="pf2-p">
                      You descend from a line of anadi who worked to perfect their transformation magic, allowing them
                      to
                      integrate into a wider variety of cultures. Choose a common, Medium humanoid ancestry. Your human
                      form is replaced with a form that matches this choice. You also gain the
                      <a href="feats.html#adopted%20ancestry_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'feats.html', 'CRB', 'adopted%20ancestry_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Adopted Ancestry</a>
                      feat for your chosen humanoid ancestry.
                    </p>
                  </div>
                </div>
                <div data-heritage-id="h-polychromatic-lome" className="hidden">
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="13">
                      <span className="entry-title-inner">Polychromatic Anadi</span>
                    </p>
                    <p className="pf2-p">
                      Your body is covered with exceptionally colorful hairs that create vibrant, eye-catching patterns,
                      some of which might even show in your human form. You become trained in
                      <span className="help--hover"
                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'skill', 'CRB', 'performance_crb', null)"
                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">Performance</span>
                      (or another skill if you were already trained in
                      <span className="help--hover"
                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'skill', 'CRB', 'performance_crb', null)"
                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">Performance</span>
                      ), and you gain the
                      <a href="feats.html#impressive%20performance_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'feats.html', 'CRB', 'impressive%20performance_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Impressive Performance</a>
                      feat.
                    </p>
                  </div>
                </div>
                <div data-heritage-id="h-snaring-lome" className="hidden">
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="14">
                      <span className="entry-title-inner">Snaring Anadi</span>
                    </p>
                    <p className="pf2-p">
                      You were hatched with hooked fangs that give you an edge when hunting in your true form. Your
                      fangs
                      attack gains the
                      <a href="traits.html#grapple"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'grapple', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">grapple</a> and
                      <a href="traits.html#trip"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'trip', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">trip</a> traits.
                    </p>
                  </div>
                </div>
                <div data-heritage-id="h-spindly-lome" className="hidden">
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="15">
                      <span className="entry-title-inner">Spindly Anadi</span>
                    </p>
                    <p className="pf2-p">
                      Your limbs are exceptionally long in both forms, allowing you to skitter about with surprising
                      agility. Your Speed increases from 25 to 30 feet.
                    </p>
                  </div>
                </div>
                <div data-heritage-id="h-venomous-lome" className="hidden">
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="16">
                      <span className="entry-title-inner">Venomous Anadi</span>
                    </p>
                    <p className="pf2-p">
                      Your natural form's fangs are capable of injecting foes with venom. You gain the Anadi Venom
                      ability.
                    </p>
                    <div className="pf2-stat pf2-book--stat">
                      <div className="flex ">
                        <p className="pf2-stat pf2-stat__name">
                        <span className="stats-name copyable"
                              onMouseDown="event.preventDefault()"
                              onClick="Renderer.utils._pHandleNameClick(this)">Anadi Venom</span>
                          <span className="pf2-action-icon" data-symbol="1"></span>
                          <span className="pf2-action-icon-copy-text">[&gt;]</span></p>
                        <p className="pf2-stat pf2-stat__name pf2-stat__name--level">
                          <span title=""> </span>
                        </p>
                      </div>
                      <div className="pf2-stat pf2-stat__line"></div>
                      <p className="pf2-stat pf2-stat__section">
                        <strong>Frequency&nbsp;</strong>
                        a number of times per day equal to your level
                      </p>
                      <div className="pf2-stat pf2-stat__line"></div>
                      <p className="pf2-stat__text">
                        You envenom your fangs. If the next fangs
                        <a href="actions.html#strike_crb"
                           onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'actions.html', 'CRB', 'strike_crb', null)"
                           onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                           onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                           onTouchStart="Renderer.hover.handleTouchStart(event, this)">Strike</a>
                        you make before the end of your turn hits and deals damage, the
                        <a href="actions.html#strike_crb"
                           onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'actions.html', 'CRB', 'strike_crb', null)"
                           onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                           onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                           onTouchStart="Renderer.hover.handleTouchStart(event, this)">Strike</a>
                        deals an additional
                        <span className="roller render-roller"
                              title="Click to roll. SHIFT to roll a critical hit, CTRL to half damage (rounding down)."
                              onMouseDown="event.preventDefault()"
                              onClick="Renderer.dice.pRollerClickUseData(event, this)"
                              data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d6&quot;,&quot;subType&quot;:&quot;damage&quot;}">1d6</span>
                        poison damage. On a critical failure, the poison is wasted as normal. At 12th level, this poison
                        damage increases to
                        <span className="roller render-roller"
                              title="Click to roll. SHIFT to roll a critical hit, CTRL to half damage (rounding down)."
                              onMouseDown="event.preventDefault()"
                              onClick="Renderer.dice.pRollerClickUseData(event, this)"
                              data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;2d6&quot;,&quot;subType&quot;:&quot;damage&quot;}">2d6</span>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="veheritage-title hidden">
                  <div className="pf2-wrp-h2">
                    <div className="pf2-h2--wrp ">
                      <p className="pf2-h2 rd__h" data-title-index="17">
                        <span className="entry-title-inner">Versatile Heritages</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div data-heritage-id="h-ardande-roe" className="hidden">
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="18">
                      <span className="entry-title-inner">Ardande</span>
                    </p>
                    <p className="pf2-p">
                      You descend from wood elementals or have some other heritage influenced by the elemental
                      <a href="places.html#plane%20of%20wood_roe"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a>.
                      You might have green, mossy skin, vines that grow from your head instead of hair, or thin
                      appendages
                      that resemble twigs. You gain the
                      <a href="traits.html#ardande"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'RoE', 'ardande', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">ardande</a>
                      trait, in addition to the traits from your ancestry. You also gain
                      <a href="abilities.html#low-light%20vision_b1"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>,
                      or you gain
                      <a href="abilities.html#darkvision_b1"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a>
                      if your ancestry already has low-light vision.
                    </p>
                    <p className="pf2-p">You can choose from
                      <a href="feats.html#blankhash,flstancestry%20%26%20heritage:ardande=1">ardande</a>
                      feats, geniekin feats, and feats from your ancestry whenever you gain an ancestry feat.
                    </p>
                  </div>
                </div>
                <div data-heritage-id="h-aasimar-apg" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="19">
                    <span className="entry-title-inner">Aasimar</span></p>
                    <p className="pf2-p">You descend from celestials
                      or were touched by the celestial realms, gaining an air of awe and grace, as well as features
                      distinctive to your celestial forebears. You gain the
                      <a href="traits.html#aasimar"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'aasimar', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">aasimar</a>
                      trait, in addition to the traits from your ancestry. You also gain
                      <a href="abilities.html#low-light%20vision_b1"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>,
                      or you gain
                      <a href="abilities.html#darkvision_b1"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a>
                      if your ancestry already has
                      <a href="abilities.html#low-light%20vision_b1"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>.
                      You can choose from
                      <a href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:aasimar=1">aasimar
                        feats</a>
                      and feats from your ancestry whenever you gain an ancestry feat.
                    </p>
                  </div>
                </div>
                <div data-heritage-id="h-reflection-da" className="hidden">
                  <div className="pf2-wrp-h3">
                    <p className="pf2-h3 rd__h " data-title-index="20">
                      <span className="entry-title-inner">Reflection</span>
                    </p>
                    <p className="pf2-p">
                      You were created as a duplicate of another creature, intentionally or accidentally, though you
                      might
                      not know of your origins. Other than a minor mark or two, you look just like your progenitor. You
                      gain the
                      <a href="traits.html#reflection"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'reflection', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">reflection</a>
                      trait, in addition to the traits from your ancestry. You don't need to attempt
                      <span className="help--hover"
                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'skill', 'CRB', 'deception_crb', null)"
                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">Deception</span>
                      checks to
                      <a href="actions.html#impersonate_crb"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'actions.html', 'CRB', 'impersonate_crb', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Impersonate</a>
                      your progenitor unless you're interacting with people who know them personally or you do something
                      known to be out of character for them. The GM might require you to roll a
                      <span className="help--hover"
                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'skill', 'CRB', 'deception_crb', null)"
                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">Deception</span>
                      check in other circumstances, such as if you're mirror-risen and interacting with someone who has
                      seen an accurate likeness of your progenitor and might notice a distinguishing feature on the
                      reverse side. You can choose from
                      <a href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:reflection=1">
                        reflection feats
                      </a>
                      and feats from your ancestry whenever you gain an ancestry feat.
                    </p>
                  </div>
                </div>
                <div data-heritage-id="h-aphorite-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="21">
                    <span className="entry-title-inner">Aphorite</span></p>
                    <p className="pf2-p">You were born with a
                      connection to Axis, the Plane of Law. You gain the <a href="traits.html#aphorite"
                                                                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'aphorite', null)"
                                                                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">aphorite</a>
                      trait,
                      in addition to the traits from your ancestry. You also gain <a
                        href="abilities.html#low-light%20vision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>, or you gain <a
                        href="abilities.html#darkvision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if your ancestry
                      already
                      has <a href="abilities.html#low-light%20vision_b1"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>. You can
                      choose
                      from <a href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:aphorite=1">aphorite
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-beastkin-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="22">
                    <span className="entry-title-inner">Beastkin</span></p>
                    <p className="pf2-p">The blood of a beast flows
                      through your veins, granting you the ferocity and might of animals. Only creatures with the <a
                        href="traits.html#humanoid"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'humanoid', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">humanoid</a> trait can take the
                      beastkin
                      versatile heritage. Choose a type of animal such as bat, eagle, shark, spider, tyrannosaurus,
                      wasp,
                      or
                      wolf. This is the type of animal tied to your heritage and is known as your inherent animal. You
                      gain
                      the <a href="traits.html#beast"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'beast', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">beast</a> and <a
                        href="traits.html#beastkin"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'beastkin', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">beastkin</a> traits, in addition to
                      the
                      traits from your ancestry. A beastkin's hybrid form is their natural shape. You gain the <a
                        href="actions.html#change%20shape_loag"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'actions.html', 'LOAG', 'change%20shape_loag', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">Change Shape</a> ability. You can
                      choose
                      from <a href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:beastkin=1">beastkin
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                    <div className="pf2-stat pf2-book--stat">
                      <div className="flex ">
                        <p className="pf2-stat pf2-stat__name"><span className="stats-name copyable"
                                                                     onMouseDown="event.preventDefault()"
                                                                     onClick="Renderer.utils._pHandleNameClick(this)">Change Shape</span>
                          <span className="pf2-action-icon" data-symbol="1"></span><span
                            className="pf2-action-icon-copy-text">[&gt;]</span></p>
                        <p className="pf2-stat pf2-stat__name pf2-stat__name--level">
                          <span title="Identification DC ? Nature"> </span>
                        </p>
                      </div>
                      <div className="pf2-stat pf2-stat__line"></div>
                      <a href="traits.html#concentrate" className="pf2-trait pf2-trait--left"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'TRT', 'concentrate', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">concentrate<span
                        style={{letterSpacing: "-.2em"}}>&nbsp;</span></a>
                      <a href="traits.html#polymorph"
                         className="pf2-trait"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'TRT', 'polymorph', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">polymorph<span
                        style={{letterSpacing: "-.2em"}}>&nbsp;</span></a>
                      <a href="traits.html#primal" className="pf2-trait"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'TRT', 'primal', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">primal<span
                        style={{letterSpacing: "-.2em"}}>&nbsp;</span></a>
                      <a href="traits.html#transmutation"
                         className="pf2-trait pf2-trait--right"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'TRT', 'transmutation', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">transmutation<span
                        style={{letterSpacing: "-.2em"}}>&nbsp;</span></a><p className="pf2-stat__text">You change into
                      your
                      humanoid or hybrid shape. Each shape has a specific, persistent appearance, and most beastkin
                      remain
                      in their hybrid shapes by default. In hybrid shape, you appear as a mix between your ancestry and
                      your
                      inherent animal. While in hybrid shape, you gain a jaws unarmed Strike resembling the features of
                      your
                      inherent animal (fangs for bats, beaks for eagles, mandibles for wasps, and so on). Your jaws
                      deal <span className="roller render-roller" title="Click to roll. SHIFT/CTRL to roll twice."
                                 onMouseDown="event.preventDefault()"
                                 onClick="Renderer.dice.pRollerClickUseData(event, this)"
                                 data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d4&quot;}">1d4</span> piercing
                      damage, have the <a href="traits.html#agile"
                                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'agile', null)"
                                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">agile</a>,
                      <a
                        href="traits.html#finesse"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'finesse', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">finesse</a>, and <a
                        href="traits.html#unarmed"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'unarmed', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">unarmed</a> traits, and are in the
                      brawling weapon group. In your humanoid shape, you retain the appearance of your original
                      ancestry.
                    </p>

                    </div>
                  </div>
                </div>
                <div data-heritage-id="h-changeling-apg" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="23">
                    <span className="entry-title-inner">Changeling</span></p>
                    <p className="pf2-p">Your mother was a hag.
                      Your heterochromatic eyes are the most obvious signifier of this parentage, but you likely also
                      have
                      a
                      slighter build, paler skin, and darker hair than most members of your other parent's ancestry. You
                      gain
                      the <a href="traits.html#changeling"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'changeling', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">changeling</a> trait. You also
                      gain <a href="abilities.html#low-light%20vision_b1"
                              onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                              onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                              onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                              onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>, or you
                      gain <a
                        href="abilities.html#darkvision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if your ancestry
                      already
                      has <a href="abilities.html#low-light%20vision_b1"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>. You can
                      choose
                      from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:changeling=1">changeling
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-dhampir-apg" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="24">
                    <span className="entry-title-inner">Dhampir</span></p>
                    <p className="pf2-p">You are the scion of a
                      vampire, half living and half undead, gifted with uncanny charm and grace, a bloodless pallor, and
                      elongated incisors. You gain the <a href="traits.html#dhampir"
                                                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'dhampir', null)"
                                                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">dhampir</a> trait,
                      in addition to the traits from your ancestry. You have the <a
                        href="abilities.html#negative%20healing_b2"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'b2', 'negative%20healing_b2', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">negative healing</a> ability, which
                      means
                      you are harmed by positive damage and healed by negative effects as if you were undead. You also
                      gain <a
                        href="abilities.html#low-light%20vision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>, or you gain <a
                        href="abilities.html#darkvision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if your ancestry
                      already
                      has <a href="abilities.html#low-light%20vision_b1"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>. You can
                      choose
                      from <a href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:dhampir=1">dhampir
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-duskwalker-apg" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="25">
                    <span className="entry-title-inner">Duskwalker</span></p>
                    <p className="pf2-p">Thanks to an ancient
                      bargain, your soul has been reborn as a duskwalker, a planar scion with a connection to
                      psychopomps
                      and
                      the Boneyard. You gain the <a href="traits.html#duskwalker"
                                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'duskwalker', null)"
                                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">duskwalker</a> trait
                      in addition to the traits from your ancestry. You also gain <a
                        href="abilities.html#low-light%20vision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>, or you gain <a
                        href="abilities.html#darkvision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if your ancestry
                      already
                      has <a href="abilities.html#low-light%20vision_b1"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>. Neither
                      your
                      body nor your spirit can ever become undead. You can choose from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:duskwalker=1">duskwalker
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-ganzi-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="26">
                    <span className="entry-title-inner">Ganzi</span></p>
                    <p className="pf2-p">Your blood is touched by
                      primal
                      chaos. You gain the <a href="traits.html#ganzi"
                                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'ganzi', null)"
                                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">ganzi</a> trait
                      in
                      addition to the traits from your ancestry. You gain resistance to a single damage type equal to
                      half
                      your level; at the beginning of each day, determine randomly whether this resistance applies to
                      acid,
                      electricity, or sonic damage. You also gain a +1 circumstance bonus to saving throws against
                      effects
                      that would cause you to gain the <a href="conditions.html#controlled_crb"
                                                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'conditions.html', 'CRB', 'controlled_crb', null)"
                                                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">controlled</a> condition.
                      You can choose from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:ganzi=1">ganzi
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-ifrit-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="27">
                    <span className="entry-title-inner">Ifrit</span></p>
                    <p className="pf2-p">You descend from fire
                      elementals or bear the mark of the Inner Spheres, and your features illustrate the influence that
                      elemental fire has over you. You gain the <a href="traits.html#ifrit"
                                                                   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'ifrit', null)"
                                                                   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                   onTouchStart="Renderer.hover.handleTouchStart(event, this)">ifrit</a> trait,
                      in addition to the traits from your ancestry. You gain resistance to fire equal to half your level
                      (minimum 1), and you treat environmental heat effects as if they were one step less severe
                      (incredible
                      heat becomes extreme, extreme heat becomes severe, and so on). You can choose from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:ifrit=1">ifrit
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-oread-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="28">
                    <span className="entry-title-inner">Oread</span></p>
                    <p className="pf2-p">An earth elemental ancestor
                      has
                      influenced your bloodline, and your features highlight this elemental planar connection. You might
                      have
                      a crystalline or metallic sheen to your skin or hair, rough and stony flesh, or glittering
                      gemstone
                      eyes. You gain the <a href="traits.html#oread"
                                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'oread', null)"
                                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">oread</a> trait,
                      in
                      addition to the traits from your ancestry. You also gain <a
                        href="abilities.html#low-light%20vision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light
                        vision</a>, or you gain <a href="abilities.html#darkvision_b1"
                                                   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                                                   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                   onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if
                      your ancestry already has <a href="abilities.html#low-light%20vision_b1"
                                                   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                                                   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                   onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light
                        vision</a>. You can choose from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:oread=1">oread
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-suli-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="29">
                    <span className="entry-title-inner">Suli</span></p>
                    <p className="pf2-p">You are descended from a janni
                      or otherwise embody a dichotomy of opposing elemental planar forces. You gain the <a
                        href="traits.html#suli"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'suli', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">suli</a> trait, in addition to the
                      traits
                      from your ancestry. You also gain <a href="abilities.html#low-light%20vision_b1"
                                                           onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                                                           onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                           onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                           onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light
                        vision</a>, or you gain <a href="abilities.html#darkvision_b1"
                                                   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                                                   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                   onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if
                      your ancestry already has <a href="abilities.html#low-light%20vision_b1"
                                                   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                                                   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                   onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light
                        vision</a>. You can choose from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:suli=1">suli
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-sylph-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="30">
                    <span className="entry-title-inner">Sylph</span></p>
                    <p className="pf2-p">You are descended from air
                      elementals or were born under the element's influence. You gain the <a href="traits.html#sylph"
                                                                                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'sylph', null)"
                                                                                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">sylph</a> trait,
                      in addition to the traits from your ancestry. You also gain <a
                        href="abilities.html#low-light%20vision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>, or you gain <a
                        href="abilities.html#darkvision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if your ancestry
                      already
                      has <a href="abilities.html#low-light%20vision_b1"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>. You can
                      choose
                      from <a href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:sylph=1">sylph
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-tiefling-apg" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="31">
                    <span className="entry-title-inner">Tiefling</span></p>
                    <p className="pf2-p">You descend from fiends or
                      bear the mark of the fiendish realms, manifesting as some unusual feature that belies your
                      heritage,
                      such as horns or a tail. You gain the <a href="traits.html#tiefling"
                                                               onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'tiefling', null)"
                                                               onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                               onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                               onTouchStart="Renderer.hover.handleTouchStart(event, this)">tiefling</a> trait,
                      in addition to the traits from your ancestry. You also gain <a
                        href="abilities.html#low-light%20vision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>, or you gain <a
                        href="abilities.html#darkvision_b1"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">darkvision</a> if your ancestry
                      already
                      has <a href="abilities.html#low-light%20vision_b1"
                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'low-light%20vision_b1', null)"
                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">low-light vision</a>. You can
                      choose
                      from <a href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:tiefling=1">tiefling
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-undine-loag" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="32">
                    <span className="entry-title-inner">Undine</span></p>
                    <p className="pf2-p">A water elemental ancestor
                      influences your bloodline. You gain the <a href="traits.html#undine"
                                                                 onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'undine', null)"
                                                                 onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                 onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                 onTouchStart="Renderer.hover.handleTouchStart(event, this)">undine</a> trait,
                      in addition to the traits from your ancestry. You gain a swim Speed of 10 feet and the <a
                        href="traits.html#amphibious"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'amphibious', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">amphibious</a> trait. Like all
                      creatures
                      with the <a href="traits.html#amphibious"
                                  onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'amphibious', null)"
                                  onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                  onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                  onTouchStart="Renderer.hover.handleTouchStart(event, this)">amphibious</a> trait, you
                      can
                      breathe both water and air. You can choose from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:undine=1">undine
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat.</p>
                  </div>
                </div>
                <div data-heritage-id="h-dragonkin-dvh" className="hidden">
                  <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="33">
                    <span className="entry-title-inner">Dragonkin</span></p>
                    <p className="pf2-p">The blood of mighty
                      dragons
                      flows through veins, granting you a small portion of their ferocity and power. Your draconic
                      lineage
                      stems from a specific type of dragon. Choose a type of dragon ranging from chromatic dragons,
                      metallic
                      dragons, drakes, or any other creature with the dragon type. This type of dragon is your draconic
                      progenitor. You gain the <a href="traits.html#dragon"
                                                  onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'dragon', null)"
                                                  onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                  onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                  onTouchStart="Renderer.hover.handleTouchStart(event, this)">dragon</a> and <a
                        href="traits.html#dragonkin_luis-dragonkinvh"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'Luis-DragonkinVH', 'dragonkin_luis-dragonkinvh', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">dragonkin</a> traits, in addition to
                      the
                      traits from your ancestry. You gain the <a href="actions.html#dragon's%20breath_luis-dragonkinvh"
                                                                 onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'actions.html', 'Luis-DragonkinVH', 'dragon\'s%20breath_luis-dragonkinvh', null)"
                                                                 onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                 onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                 onTouchStart="Renderer.hover.handleTouchStart(event, this)">Dragon's
                        Breath</a> ability. You can choose from <a
                        href="feats.html#blankhash,flsttype:ancestry=1,flstancestry%20%26%20heritage:dragonkin=1,flstsource:luis-dragonkinvh=1">dragonkin
                        feats</a> and feats from your ancestry whenever you gain an ancestry feat. Additionally, you
                      gain
                      access to the <a href="feats.html#dragon%20disciple%20dedication_apg"
                                       onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'feats.html', 'APG', 'dragon%20disciple%20dedication_apg', null)"
                                       onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                       onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                       onTouchStart="Renderer.hover.handleTouchStart(event, this)">Dragon Disciple
                        Dedication</a> feat. Your GM might determine that you gain access to other draconic archetypes,
                      feats,
                      spells, or options as well.</p>
                    <div className="pf2-stat pf2-book--stat">
                      <div className="flex ">
                        <p className="pf2-stat pf2-stat__name"><span className="stats-name copyable"
                                                                     onMouseDown="event.preventDefault()"
                                                                     onClick="Renderer.utils._pHandleNameClick(this)">Dragon's Breath</span>
                          <span className="pf2-action-icon" data-symbol="2"></span><span
                            className="pf2-action-icon-copy-text">[&gt;&gt;]</span></p>
                        <p className="pf2-stat pf2-stat__name pf2-stat__name--level">
                          <span title="Identification DC ? Arcana"> </span>
                        </p>
                      </div>
                      <div className="pf2-stat pf2-stat__line"></div>
                      <a href="traits.html#arcane" className="pf2-trait pf2-trait--left"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'TRT', 'arcane', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Arcane<span
                        style={{letterSpacing: "-.2em"}}>&nbsp;</span></a>
                      <a href="traits.html#dragonkin_luis-dragonkinvh"
                         className="pf2-trait"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'Luis-DragonkinVH', 'dragonkin_luis-dragonkinvh', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Dragonkin<span
                        style={{letterSpacing: "-.2em"}}>&nbsp;</span></a>
                      <a href="traits.html#evocation"
                         className="pf2-trait pf2-trait--right"
                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'TRT', 'evocation', null)"
                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Evocation<span
                        style={{letterSpacing: "-.2em"}}>&nbsp;</span></a><p className="pf2-stat__text">You can unleash
                      a
                      powerful blast of energy as a draconic breath weapon. Choose either a 30-foot line or a 15-foot
                      cone.
                      Your breath weapon manifests in the chosen shape and once chosen, you can't change the breath's
                      shape.
                      Your breath weapon deals <span className="roller render-roller"
                                                     title="Click to roll. SHIFT to roll a critical hit, CTRL to half damage (rounding down)."
                                                     onMouseDown="event.preventDefault()"
                                                     onClick="Renderer.dice.pRollerClickUseData(event, this)"
                                                     data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d4&quot;,&quot;subType&quot;:&quot;damage&quot;}">1d4</span> damage.
                      Each creature in the area must attempt a basic saving throw against the higher of your class DC or
                      spell DC. You can't use this ability again for <span className="roller render-roller"
                                                                           title="Click to roll. SHIFT/CTRL to roll twice."
                                                                           onMouseDown="event.preventDefault()"
                                                                           onClick="Renderer.dice.pRollerClickUseData(event, this)"
                                                                           data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;1d4&quot;}">1d4</span> rounds.
                    </p>
                      <p className="pf2-stat__text">At 3rd level and every 2 levels thereafter, the damage increases
                        by <span className="roller render-roller"
                                 title="Click to roll. SHIFT to roll a critical hit, CTRL to half damage (rounding down)."
                                 onMouseDown="event.preventDefault()"
                                 onClick="Renderer.dice.pRollerClickUseData(event, this)"
                                 data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;displayText&quot;:&quot;1d4&quot;,&quot;toRoll&quot;:&quot;1d4 + floor(((#$prompt_number:min=3,title=Character Level,default=3$#)-1)/2)d4&quot;,&quot;subType&quot;:&quot;damage&quot;}">1d4</span>.
                        The damage of your breath attack is determined by your draconic progenitor. If your draconic
                        progenitor has a breath weapon, your breath weapon deals the same type of damage as your
                        progenitor's.
                        If your draconic progenitor doesn't have a breath weapon, but does have a trait related to an
                        energy
                        type (<a href="traits.html#acid"
                                 onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'acid', null)"
                                 onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                 onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                 onTouchStart="Renderer.hover.handleTouchStart(event, this)">acid</a>,
                        <a
                          href="traits.html#cold"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'cold', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">cold</a>,
                        <a
                          href="traits.html#electricity"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'electricity', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">electricity</a>,
                        <a
                          href="traits.html#fire"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'fire', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">fire</a>, or <a
                          href="traits.html#sonic"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'sonic', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">sonic</a>),
                        your breath weapon's damage is that type. If your draconic progenitor doesn't have a breath
                        weapon
                        or
                        associated energy type, your breath is a blast of powerful air that buffets foes and deals
                        bludgeoning
                        damage. Your breath weapon requires a Reflex saving throw, unless it deals poison damage. In
                        that
                        case, it requires a Fortitude saving throw instead.</p>

                    </div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-adaptive-lome"></div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-polychromatic-lome"></div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-snaring-lome"></div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-spindly-lome"></div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-venomous-lome"></div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-ardande-roe">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="34">
                    <span className="entry-title-inner">Ardande</span></p>
                    <p className="pf2-p">Ardandes are geniekin, or
                      elemental planar scions, born with elemental wood for flesh and blood-like sap flowing through
                      their
                      veins; just as much elemental essence as they are mortal. They are the descendants of wood
                      elementals,
                      kizidhars, dryads, and forest dragons, or were born under the influence of powerful elemental
                      forces
                      tied to the First World or <a href="places.html#plane%20of%20wood_roe"
                                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of
                        Wood</a>.</p>
                    <p className="pf2-p">Ardandes often share a connection to specific aspects of wood,
                      such
                      as spring blossoms, ancient and rotten stumps seething with life that feeds on their decay, or sap
                      dripping down tree bark; this is called an ardande lineage. Typically, an ardande has the same
                      lineage
                      as their ardande parent, though some are born with a new or different lineage, or to parents who
                      didn't
                      have one. Sometimes a lineage reflects where an ardande was born, such as springsoul ardandes born
                      in
                      the vibrant, portal-riddled Grungir Forest in the Lands of the Linnorm Kings, or moldersoul
                      ardandes
                      influenced by the Darkblight infection of the Southern Fangwood. They can also occur as a
                      reflection
                      of
                      the ardande's planar ancestry, like ambersoul ardandes who descend from kizidhars.</p>
                    <p className="pf2-p">If you want to play a character who embodies the tenacity, flexibility, and
                      succor
                      of
                      elemental wood, you should play an ardande.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="35">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Associate your personal identity with elemental wood, and believe the
                          characteristics of wood, plants, and trees form core aspects of your personality.
                        </li>
                        <li className="rd__li ">Enjoy giving gifts or expressing love for your friends with food and
                          hospitality.
                        </li>
                        <li className="rd__li ">Take pride in your elemental lineage and your connection to the
                          previously
                          lost <a href="places.html#plane%20of%20wood_roe"
                                  onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                                  onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                  onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                  onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a>.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="36">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Look to you as an authority on <a href="traits.html#plant"
                                                                                  onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'undefined', 'plant', null)"
                                                                                  onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                                  onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                                  onTouchStart="Renderer.hover.handleTouchStart(event, this)">plant</a> creatures
                          and the <a href="places.html#plane%20of%20wood_roe"
                                     onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                                     onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                     onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                     onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a>.
                        </li>
                        <li className="rd__li ">Take you for granted as an endless well of energy, patience, and
                          support.
                        </li>
                        <li className="rd__li ">Mistake you for a ghoran or dryad, perhaps not even realizing there is
                          an
                          elemental <a href="places.html#plane%20of%20wood_roe"
                                       onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                                       onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                       onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                       onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a>.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h2">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="37">
                        <span className="entry-title-inner">Physical Description</span></p>
                      </div>
                      <p className="pf2-p">Ardandes vary in appearance just as much as their different ancestors do.
                        Green,
                        brown, and ash gray are the most common skin tones, though many also have bodies covered in
                        moss,
                        bark, or knotted wood. Ardandes are often born with coils of ivy or flowering vines for hair,
                        but
                        just as common are those who grow beards made of petals or leaves, or hair that rustles like a
                        leaf
                        caught in a perpetual wind. Most smell like dew on fresh grass, wildflowers, or a mossy forest
                        floor. Rarely, an ardande is born with amber or bark for nails, leaves or delicate petals
                        freckling
                        their skin, or even rotten, mossy bodies that shed spores and resin.</p>
                    </div>
                    <div className="pf2-wrp-h2">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="38">
                        <span className="entry-title-inner">Society</span></p>
                      </div>
                      <p className="pf2-p">Poorly understood by both themselves and others, ardandes born before the <a
                        href="places.html#plane%20of%20wood_roe"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a>'s return have
                        struggled to fully comprehend their own heritage. Due to the <a
                          href="places.html#plane%20of%20wood_roe"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a>'s longstanding
                        absence from the Universe, Golarion has had too few ardandes for the wood geniekin to form their
                        own
                        societies or cultural norms. In most regions where ardandes are found, only a single family
                        might
                        have a connection to elemental wood, and the norms of the elemental scions of wood in those
                        areas
                        are simply those of that single ardande family.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="39">
                      <span className="entry-title-inner">Beliefs</span></p>
                      <p className="pf2-p">Many ardandes value
                        community and family. Religious ardandes gravitate to the faiths of wood and nature deities,
                        such
                        as <a href="deities.html#gozreh_crb"
                              onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'gozreh_crb', null)"
                              onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                              onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                              onTouchStart="Renderer.hover.handleTouchStart(event, this)">Gozreh</a>, the <a
                          href="deities.html#the%20green%20mother_logm"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'LOGM', 'the%20green%20mother_logm', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Green Mother</a>,
                        <a
                          href="deities.html#shyka_logm"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'LOGM', 'shyka_logm', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Shyka</a>, or the elemental lords
                        of
                        wood, <a href="deities.html#shumunue_roe"
                                 onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'RoE', 'shumunue_roe', null)"
                                 onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                 onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                 onTouchStart="Renderer.hover.handleTouchStart(event, this)">Shumunue</a> and <a
                          href="deities.html#verilorn_roe"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'RoE', 'verilorn_roe', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Verilorn</a>.Some venerate the
                        kings
                        of
                        the leshies, known as the green men, or join druidic orders or other spiritual practices focused
                        on
                        nature, like the <a href="deities.html#green%20faith_crb"
                                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'green%20faith_crb', null)"
                                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">Green Faith</a>.
                        Evil
                        ardandes sometimes look to gods who represent destruction, disease, and rot for guidance,
                        like <a
                          href="deities.html#urgathoa_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'urgathoa_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Urgathoa</a>,
                        <a
                          href="deities.html#groetus_logm"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'LOGM', 'groetus_logm', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Groetus</a>, or the demon lord <a
                          href="deities.html#treerazer_b1"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'B1', 'treerazer_b1', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Treerazer</a>. The ardandes who
                        venerate
                        these vile gods often interpret corruption and disease as necessary components of nature's
                        eternal
                        cycle: death that carves the way for renewal, rather than death as a final ending.</p>
                      <p className="pf2-p"><b>Popular Edicts</b> flow with the cycles of nature, grow the world I want
                        to
                        live
                        in</p>
                      <p className="pf2-p"><b>Popular Anathema</b> betray my family</p>
                    </div>
                    <div className="pf2-wrp-h2">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="40">
                        <span className="entry-title-inner">Ardandes of Golarion</span></p>
                      </div>
                      <p className="pf2-p">Ardandes born on Golarion prior to the <a
                        href="places.html#plane%20of%20wood_roe"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a>'s return fall into
                        two
                        primary groups: those who trace their lineage to non-elementals who nonetheless carry the spark
                        of
                        elemental wood within them, such as forest dragons or woodland fey; and ardandes from the
                        bloodlines
                        of ancient kizidhars and other elementals who became stranded on Golarion before mortal life
                        even
                        began. While there are a few other ardandes whose roots do not match either of these origins
                        stories, their backgrounds tend to be highly unusual and often involve powerful sources of
                        extraplanar magic.</p>
                      <p className="pf2-p">Over the millennia while the <a
                        href="places.html#plane%20of%20wood_roe"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a> was locked away
                        from
                        the
                        Inner Sphere, most of Golarion's oldest ardande families eventually became disconnected from
                        their
                        elemental heritage. Regardless of the source of their elemental connection, these families found
                        the
                        innate spark of elemental wood becoming increasingly rare in their children, until it seemed to
                        die
                        out entirely and ardande children stopped being born altogether. Now that the <a
                          href="places.html#plane%20of%20wood_roe"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane of Wood</a> has returned,
                        many
                        of
                        these lost ardande families are experiencing a resurgence of their old elemental heritage,
                        though
                        they
                        have little more than legends and folk stories of an ancestor's elemental power to explain and
                        offer
                        guidance for their new generation of ardande children. Many ardandes born into this new
                        generation
                        are
                        rapidly becoming the foremost explorers into the <a href="places.html#plane%20of%20wood_roe"
                                                                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'places.html', 'RoE', 'plane%20of%20wood_roe', null)"
                                                                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">Plane
                          of Wood</a>, eager to use their innate gifts to trace their heritage through its extraplanar
                        roots.
                      </p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-aasimar-apg">
                  <div className="pf2-wrp-h2">
                    <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="41">
                      <span className="entry-title-inner">Aasimar</span></p>
                    </div>
                    <p className="pf2-p">Born with the power of benevolent celestial entities, aasimars are thought to
                      be
                      supremely blessed with strength of will, extraordinary beauty, and innate magical gifts. But many
                      aasimars find that these perceived talents—whether they actually have them or not—set them apart
                      from
                      their friends and family, fostering loneliness in themselves and jealousy in others.</p>
                    <p className="pf2-p">Aasimars with a positive outlook face these challenges by serving their
                      communities,
                      populating the environment with kindness or artwork, or simply supporting those who are less
                      fortunate.
                      Some aasimars hold a more hostile worldview, however, and risk falling into resentment, despair,
                      or
                      even
                      the temptations of evil. Even then, the stereotypes surrounding an aasimar cling close, causing
                      others
                      to view them as tragic figures in need of redemption.</p>
                    <p className="pf2-p">The powers and physical
                      appearances passed down from celestial beings vary according to an aasimar's lineage. Those who
                      descend
                      from archons are sometimes known as lawbringers, while those who possess angelic blood are called
                      angelkin, and those related to azatas are referred to as musetouched.</p>
                    <p className="pf2-p">If you
                      want a character brimming with celestial power, unique physical characteristics and the potential
                      for
                      strong faith, you should play an aasimar.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="42">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Possess a strong sense of fashion, favor exquisitely crafted tools, or
                          carry
                          yourself with instinctual grace.
                        </li>
                        <li className="rd__li ">Feel a strong kinship with outcasts, orphans, or others who have been
                          misunderstood or marginalized.
                        </li>
                        <li className="rd__li ">Have a beloved pet or a close relationship with a sibling or childhood
                          friend.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="43">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Assume you are a supernatural messenger from beyond or whole-heartedly
                          enjoy
                          your supernatural legacy.
                        </li>
                        <li className="rd__li ">Treat you with worship or reverence, but distance you by putting you on
                          a
                          pedestal.
                        </li>
                        <li className="rd__li ">Think you can provide simple and free supernatural solutions for all
                          their
                          problems.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="44">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">An aasimar's
                        physical appearance depends as much upon the features of their parents as it does upon the
                        nature
                        of
                        their celestial heritage. While an aasimar is recognizably a member of their humanoid ancestry,
                        they
                        always bear a few physical traits that set them apart, such as glowing eyes, a faint halo of
                        light
                        above their head, feathers for hair, antennae on the brow, a metallic sheen to the skin, lack of
                        a
                        belly button, a strangely musical voice, or a naturally pleasing floral scent. It's a common
                        stereotype that all aasimars are handsome or beautiful—another assumption aasimars face
                        throughout
                        their lives.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="45">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Aasimars are too widely
                        dispersed in most regions to create societies of their own, and they instead tend to assimilate
                        into
                        the society and culture of their mortal parents. They thrive in societies that hold freedom,
                        civility,
                        and justice as virtues. Whether due to inborn charm and confidence or others' tendency to
                        ascribe
                        greater weight to their words, aasimars often find themselves in positions of leadership, even
                        when
                        they don't seek out such roles, and they must take care that their actions and words don't
                        unduly
                        influence others. When aasimars gather in numbers large enough to develop their own societies,
                        they
                        tend to be tightly knit but open and friendly to visitors, yet swift in their justice against
                        proven
                        enemies.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="46">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">An
                        aasimar's
                        celestial nature doesn't force goodness or faith into their life—each aasimar is free to form
                        their
                        own personality and beliefs. In many cases, these beliefs are shaped by the nature of their
                        upbringing, their parents, and the society in which they were raised. Most aasimars are good,
                        whether
                        because society tends to accept, foster, and support aasimars, or because the influence of the
                        celestial planes is enough to subtly encourage them down such paths. Good faiths are more likely
                        to
                        draw an aasimar's attention, particularly those with portfolios associated with celestial
                        concerns,
                        such as Desna, Erastil, or Sarenrae. Those who choose lives of evil tend to be particularly
                        cruel
                        or
                        sadistic, almost as if they feel the need to work that much harder to justify and pursue their
                        life
                        choices.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <p className="pf2-other-source">Exemplars of poise, grace, and magnificence, aasimars are beloved
                        throughout the Inner Sea and beyond. These mortal beings are shaped by incredible celestial
                        power
                        and are often greeted as omens of good fortune for the communities they're born into. As adults,
                        many aasimars gravitate towards noble and heroic principles, often finding success as renowned
                        artists, devout clergy, and resplendent heroes. A celestial tether holds an aasimar's soul
                        close,
                        gently pulling them towards celestial ideals. Aasimars feel subtle urges to root out evil, aid
                        the
                        downtrodden, and amend society's broken promises. This pull is not a guarantee for a life of
                        good,
                        however, and many aasimars crack under the pressure put upon them. These aasimars might prefer
                        to
                        escape the expectations of their lives and choose to live in solitude. In other cases, an
                        aasimar
                        might turn to a life of evil, either as a backlash for failing to live up to these societal
                        pressures or as a rejection of their own celestial nature.</p>
                      <p className="pf2-other-source">Physically, an aasimar's appearance greatly resembles others of
                        their
                        ancestry, though their celestial influence can visibly manifest in nearly imperceptible to
                        substantial
                        cosmetic differences. Common manifestations include pearlescent teeth, golden hair, lyrical
                        voices,
                        floral scents, and shining features. More radical manifestations can include additional eyes,
                        bodies
                        covered in soft down feathers, a voice that sounds akin to several people speaking in unison, or
                        heads
                        with more than a single face. These differences are far less common and, for some, unnerving;
                        many
                        would consider these aasimars monstrous if not for their natural aura of holiness.</p>
                      <p className="pf2-stat pf2-stat__source">
                        —
                        <a href="https://paizo.com/products/btq026k5"><strong>Lost Omens: Ancestry Guide</strong></a>,
                        page
                        8.

                      </p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="47"><span
                      className="entry-title-inner">Aasimar Adventurers</span></p>
                      <p className="pf2-sidebar__text">Aasimars
                        are often revered from birth, and communities often ensure that these blessed children are given
                        every
                        advantage to pursue their divine destiny. Pampered aasimars may have the <a
                          href="backgrounds.html#artist_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'artist_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">artist</a>,
                        <a
                          href="backgrounds.html#emissary_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'emissary_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">emissary</a>,
                        <a
                          href="backgrounds.html#entertainer_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'entertainer_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">entertainer</a>, or <a
                          href="backgrounds.html#noble_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'noble_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">noble</a> background. Aasimars
                        pursuing
                        virtuous ends may have the <a href="backgrounds.html#acolyte_crb"
                                                      onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'acolyte_crb', null)"
                                                      onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                      onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                      onTouchStart="Renderer.hover.handleTouchStart(event, this)">acolyte</a>,
                        <a
                          href="backgrounds.html#detective_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'detective_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">detective</a>, or <a
                          href="backgrounds.html#field%20medic_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'field%20medic_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">field medic</a> backgrounds.
                        Aasimars
                        often devote themselves to faith, becoming <a href="classes.html#champion_crb"
                                                                      onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'champion_crb', null)"
                                                                      onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                      onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                      onTouchStart="Renderer.hover.handleTouchStart(event, this)">champions</a> or <a
                          href="classes.html#cleric_crb,state:sub-undefined-clerics=b1,flst.classes.classesmiscellaneous:clear"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'cleric_crb,state:sub-undefined-clerics=b1', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)"></a>
                        <a href="classes.html#cleri_crb"
                           onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'cleri_crb', null)"
                           onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                           onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                           onTouchStart="Renderer.hover.handleTouchStart(event, this)">cleri</a>.
                      </p>
                      <p className="pf2-sidebar__text"><span className="text-indent-first inline-block">Artistic aasimars excel as <a
                        href="classes.html#bard_crb,state:sub-undefined-bards=b1,flst.classes.classesmiscellaneous:clear"
                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'bard_crb,state:sub-undefined-bards=b1', null)"
                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                        onTouchStart="Renderer.hover.handleTouchStart(event, this)"></a>
<a href="classes.html#bar_crb"
   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'bar_crb', null)"
   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
   onTouchStart="Renderer.hover.handleTouchStart(event, this)">bar</a>.</span>
                      </p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="48"><span
                      className="entry-title-inner">Tianjing</span></p>
                      <p className="pf2-sidebar__text"><i
                        className="ve-muted">Read from page 10 of <a href="https://paizo.com/products/btq026k5">Lost
                        Omens:
                        Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="49"><span
                      className="entry-title-inner">Divine Pressure</span></p>
                      <p className="pf2-sidebar__text"><i
                        className="ve-muted">Read from page 11 of <a href="https://paizo.com/products/btq026k5">Lost
                        Omens:
                        Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-wrp-h2" data-source="LOAG">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="50">
                        <span className="entry-title-inner" title="Lost Omens: Ancestry Guide, p. 9">Aasimar of the Inner Sea</span>
                      </p>
                      </div>
                      <p className="pf2-p"><i className="ve-muted">Read from page 9 of <a
                        href="https://paizo.com/products/btq026k5">Lost Omens: Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-wrp-h2" data-source="LOME">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="51">
                    <span className="entry-title-inner"
                          title="Lost Omens: The Mwangi Expanse, p. 126">Other Peoples</span></p>
                      </div>
                      <p className="pf2-p">Many people call the Mwangi Expanse home beyond those most often associated
                        with
                        it. Such inhabitants include the demonically-influenced charau-kas who lord over Lake Ocota, the
                        divination-gifted mbaikis, enterprising and competitive lizardfolk, and adventure-seeking
                        kobolds—among others. The motives of the myriad peoples of the Expanse are as varied as they
                        are,
                        with some hoping to find peace and solitude while others seek fresh meaning to their lives.</p>
                      <div className="pf2-wrp-h3" data-source="LOME"><p className="pf2-h3 rd__h " data-title-index="52">
                    <span className="entry-title-inner"
                          title="Lost Omens: The Mwangi Expanse, p. 129">Planar Scion</span></p>
                        <p className="pf2-p">Within the Mwangi Expanse, it is believed that all planar scions, no matter
                          their
                          origins, have a great predetermined fate that can alter history.</p>
                        <p className="pf2-p">Aasimars,
                          are usually seen as good omens and blessings from the gods by most, save those who worship
                          demons.
                          These not-quite-mortal people often rise to positions of idolization and power, their
                          perceived
                          goodness lending them influence. Some aasimar become seduced by the power often freely given
                          to
                          them
                          and abuse it.</p>
                        <p className="pf2-p"><i className="ve-muted">Read the rest from page 129 of <a
                          href="https://paizo.com/products/btq026i4">Lost Omens: The Mwangi Expanse</a></i>.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-reflection-da">
                  <div className="pf2-wrp-h2">
                    <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="53">
                      <span className="entry-title-inner">Reflection</span></p>
                    </div>
                    <p className="pf2-p">Methods of their creation vary, but all reflections are duplicates of someone
                      else
                      existing in the world. Some are drawn out from literal mirrors, developing a life of their own
                      once
                      set free from the Echoing Pale. Mirror-focused rituals or spells can create independent
                      reflections,
                      whether deliberately or accidentally, as can the magical hazard known as a darkside mirror, which
                      replaces those looking into it with malicious duplicates. Some reflections are created as magical
                      clones by spellcasters, only to turn on their creators or be left adrift, while others arise from
                      polymorph magic gone wrong.</p>
                    <p className="pf2-p">If you want a character who seeks to forge their
                      own identity in the face of their duplicate nature, with a strong tie to another character
                      somewhere
                      out
                      there in the world, you should play a reflection.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="54">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Feel as though you're just an out-of-place imitation.</li>
                        <li className="rd__li ">Want to keep your nature a secret from everyone except trusted
                          companions.
                        </li>
                        <li className="rd__li ">Be extremely dedicated to your friends or anyone who gives you a sense
                          of
                          community.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="55">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Don't realize your true nature as a copy.</li>
                        <li className="rd__li ">Expect you to be plotting a nefarious fate for your progenitor.</li>
                        <li className="rd__li ">Are wary of or intrigued by your unusual abilities.</li>
                      </ul>
                    </div>
                    <div className="pf2-sidebar " data-source="DA"><p className="pf2-sidebar__title"
                                                                      data-title-index="56">
                      <span className="entry-title-inner">Final Usurpation</span></p>
                      <p className="pf2-sidebar__text">If
                        your progenitor is deceased, you might be able to take over their life. It might require a
                        special
                        ritual and other activities taking 1 week, as you take over your progenitor's lodgings,
                        activities,
                        relationships, and so on. Once you finish, provided no creature has successfully identified you
                        as
                        an
                        impostor, the memories of everyone who knew or interacted with your progenitor are altered, so
                        they
                        forget your progenitor's usual personality and behavior in favor of yours, and you no longer
                        risk
                        discovery for acting out of character for them. You belong now.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="57">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">A
                        reflection's
                        physical appearance almost exactly matches their progenitor's. In mirror-risen reflections,
                        their
                        appearance is reversed, so details such as scars are on the opposite side. Other reflections
                        often
                        have a swirled mark somewhere on their bodies, appearing as a tattoo or birthmark. Reflections
                        are
                        typically indistinguishable from a regular member of that ancestry.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="58">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">As duplicates of others,
                        and ones that appear only in rare circumstances, reflections have no inherent society of their
                        own.
                        Many reflections have a degree of existential angst, struggling to find somewhere they feel they
                        belong and won't be identified as a "fake." A reflection's greatest (though not necessarily
                        best)
                        bond
                        is usually to their progenitor. Progenitors and their reflections are sometimes aware of each
                        other,
                        with some progenitors taking their reflection under their wing, which often grants the
                        reflection
                        a
                        greater sense of community.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="59">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Despite
                        the
                        tales, not all reflections are malevolent. Reflections formed from darkside mirrors are always
                        evil,
                        but others usually have either the alignment of their progenitor or the exact opposite one—many
                        good-aligned reflections arise from the nefarious experiments of an evil alchemist or
                        spellcaster.
                        Most reflections are wary of religion, but those who adhere to a faith are typically extremely
                        devout.</p>
                    </div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-aphorite-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="60">
                    <span className="entry-title-inner">Aphorite</span></p>
                    <p className="pf2-p">Aphorites were first
                      forged
                      by axiomites, the primary inhabitants of the Eternal City of Axis, the plane of pure law. The
                      original
                      aphorites served as liaisons between their lawful progenitors and frustratingly unpredictable
                      mortal
                      allies. Marrying the logical thought processes of conformity to law and the gift of
                      self-determination,
                      early aphorites spread across the Material Plane to serve as Axis's proxies and enact its will.
                      Over
                      time, their appearances and personalities grew to resemble their mortal comrades as they were
                      increasingly born among mortals. Aphorites still exhibit Axis's touch in their metallic skin
                      coated
                      in
                      crystalline dust, aptitude for logic, strength in artisanship, and propensity for order and
                      cooperation.
                      But despite these links to their purpose-built origins, contemporary aphorites are undoubtedly
                      their
                      own
                      masters.</p>
                    <p className="pf2-p">If you want to play a character intrinsically tied to the underlying
                      order of the universe, walking the thin line between calculated predestination and free will, you
                      should
                      play an aphorite.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="61">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Seek to make something work just a bit better, whether a physical object
                          or
                          process.
                        </li>
                        <li className="rd__li ">Enjoy learning the intricacies of a language, machine, or profession.
                        </li>
                        <li className="rd__li ">Gain satisfaction in working alongside others.</li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="62">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Believe you're rigid in your beliefs or habits.</li>
                        <li className="rd__li ">Think you never act before considering every possible outcome.</li>
                        <li className="rd__li ">Assume you easily grasp complex systems and situations.</li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="63">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">The first
                        aphorites appeared as perfectly identical humanoids with metallic complexions; modern aphorites
                        are
                        far removed from such rigid biological structures. Their size, shape, and features now vary, but
                        they
                        still visibly bear the influence of Axis. Eyes, hair, and complexions with a metallic sheen are
                        almost
                        universal. These tones usually vary between copper, gold, and silver, though cobalt, viridian,
                        and
                        carmine aren't unheard of. Other manifestations include skin infused with shimmering crystalline
                        motes
                        or glowing symbols appearing across the body in a consistent rhythm.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="64">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">While still relatively
                        rare, aphorites are increasingly born into families with no direct aphorite ancestors, and have
                        thus
                        spread across the Material Plane. They acculturate like any other mortal, picking up local
                        customs
                        and
                        mannerisms over time. Most aphorites intuit an underlying sense of order or pattern that
                        supersedes
                        mortal law or custom. Some pursue this through cultural norms, while others balk at what they
                        see
                        as
                        poorly constructed systems.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="65">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">The gift
                        of
                        free will means aphorite alignment is frequently shaped through experience rather than Axis
                        directives. Good and evil hold no particular sway over aphorites' souls, but most do bend toward
                        a
                        lawful worldview.</p>
                      <p className="pf2-p">Many aphorites revere <a href="deities.html#abadar_crb"
                                                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'abadar_crb', null)"
                                                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">Abadar</a>,
                        <a
                          href="deities.html#asmodeus_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'asmodeus_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Asmodeus</a>,
                        <a
                          href="deities.html#erastil_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'erastil_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Erastil</a>, or <a
                          href="deities.html#torag_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'torag_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Torag</a>, whose faiths recognize
                        the
                        benefits of a stable society. <a href="deities.html#desna_crb"
                                                         onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'desna_crb', null)"
                                                         onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                         onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                         onTouchStart="Renderer.hover.handleTouchStart(event, this)">Desna</a> appeals
                        to some aphorites' desire to break from tradition. For aphorite artisans, <a
                          href="deities.html#shelyn_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'shelyn_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Shelyn</a>'s aesthetic and <a
                          href="deities.html#brigh_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'brigh_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Brigh</a>'s precision prove
                        attractive;
                        the Bronze Lady's views on awakened constructs also appeal to axiomite-forged aphorites.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-beastkin-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="66">
                    <span className="entry-title-inner">Beastkin</span></p>
                    <p className="pf2-p">Beastkin is a blanket term
                      for any person who has gained the ability to partially or fully transform into an animal through
                      any
                      number of means, while maintaining a balance with their humanoid side. Most beastkin are born of
                      werecreatures or have a werecreature ancestor in their lineage. The curse might not always fully
                      manifest in the child of the werecreature pairing, giving the child the transformative nature of
                      their
                      lineage without a weakness to silver or a loss of control during the full moon. Born or made,
                      werecreatures usually hold such beastkin in high regard, as they embody many of their strengths
                      without
                      any of their weaknesses.</p>
                    <p className="pf2-p">Aside from werecreatures, there are various other
                      paths
                      to becoming a beastkin. In some cases, a deity or a nature spirit may grant a chosen individual
                      the
                      power to transform. Others have gained the powers of beastkin through a trick of the fey or an
                      unusual
                      reaction to polymorph magic. There are even rumors that some rare beastkin might be shapeshifting
                      animals that somehow gained the form of a sapient ancestry, rather than the other way around.</p>
                    <p className="pf2-p">If you want a character that treads the boundaries between rationality and
                      instinct,
                      at home in both society and the wilds yet set apart from both, you should play a beastkin.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="67">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Prefer the companionship of a close group of friends.</li>
                        <li className="rd__li ">Feel an attachment to your inherent animal and seek that animal out to
                          understand them better.
                        </li>
                        <li className="rd__li ">Wrestle with your animalistic side and choose to isolate yourself from
                          those
                          who may not understand your unique nature.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="68">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Believe you practice primal magic or have a direct connection to the
                          natural
                          world.
                        </li>
                        <li className="rd__li ">Assume that you love animals, especially those of the same kind as your
                          inherent animal.
                        </li>
                        <li className="rd__li ">Worry that you will lose yourself to your feral instincts and attack
                          others.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="69">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">Beastkin
                        come
                        in all shapes and sizes due to the countless combinations of ancestry and inherent animal. Most
                        beastkin resemble a typical member of their base ancestry so closely that they are
                        indistinguishable
                        as a beastkin when in their humanoid form. On rare occasions, a beastkin is born with features
                        that
                        belie their animalistic nature at all times.</p>
                      <p className="pf2-p">A beastkin's nature is more
                        obvious when they are transformed into their hybrid shape, their features shifting to resemble
                        the
                        animal to which they are connected. The manifestation of these features varies from beastkin to
                        beastkin, but typically, their teeth become more prominent, their skin toughens like hide, their
                        hair
                        lengthens, and their eyes reshape. Beastkin that can transform into actual animals keep some
                        traits
                        that tie them to their humanoid form, such as retaining their eye color.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="70">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Beastkin typically weave
                        themselves into their ancestral societies, hiding their true nature as much as necessary. Some
                        societies, particularly nomadic or frontier societies, are more accepting of beastkin, allowing
                        them
                        to live in their preferred form without judgment. Beastkin tend to live in independent
                        communities
                        with other beastkin and werecreatures with the same inherent animal, finding that their
                        association
                        with the same animal instills a sense of fellowship. These communities usually reside in or near
                        environments that match the habitats of their inherent animals. Other beastkin instead live on
                        the
                        fringes of society or away from it altogether, preferring to live on their own.</p>
                      <p className="pf2-p">Most people don't understand that beastkin don't have to contend with the
                        curse
                        of
                        moon frenzy and loss of self, nor do they have any way of telling beastkin apart from
                        werecreatures
                        by
                        appearance alone. Because of this, many people treat beastkin just as they would a werecreature
                        who
                        wasn't free of the curse and might eat them on a full moon. People who know of beastkin and can
                        identify them as such are usually much less apprehensive about associating with them. Beastkin
                        are
                        sometimes given the misnomer of "skinwalkers" by those who are only mildly aware of their
                        existence.
                        This name is derived from ignorant rumors about the evil origins of beastkin, but beastkin
                        reject
                        this
                        name both to distance themselves from the evil associations and to clarify the diversity among
                        the
                        countless beastkin types throughout Golarion.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="71">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Most lean
                        toward neutral alignments, but beastkin can be as varied in alignment as there are animals in
                        the
                        world. Due to their association with nature and the animal world, many beastkin worship nature
                        deities
                        like <a href="deities.html#gozreh_crb"
                                onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'gozreh_crb', null)"
                                onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                onTouchStart="Renderer.hover.handleTouchStart(event, this)">Gozreh</a>. Some adhere to
                        the <a
                          href="deities.html#green%20faith_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'green%20faith_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Green Faith</a>, while others
                        worship
                        deities of hunting, transformation, or travel like <a href="deities.html#erastil_crb"
                                                                              onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'erastil_crb', null)"
                                                                              onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                              onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                              onTouchStart="Renderer.hover.handleTouchStart(event, this)">Erastil</a>,
                        <a
                          href="deities.html#alseta_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'alseta_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Alseta</a>, and <a
                          href="deities.html#desna_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'desna_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Desna</a>.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-changeling-apg">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="72">
                    <span className="entry-title-inner">Changeling</span></p>
                    <p className="pf2-p">Though a changeling
                      generally resembles a member of their father's ancestry, their distinctive eyes—each a different
                      color—set them apart. One of their eyes matches that of their father's lineage, while the other
                      matches
                      the color of their hag mother's, often in an unnatural shade such as violet or a vivid green. Not
                      everyone with differently colored eyes is a changeling, but this manifestation of changeling
                      heritage
                      makes it difficult for them to hide their nature and can lead to banishment from their community.
                      As
                      they come of age, they manifest other characteristics from their mother, including supernatural
                      abilities. <a href="abilities.html#darkvision_b1"
                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'abilities.html', 'B1', 'darkvision_b1', null)"
                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">Darkvision</a>, clawlike
                      fingernails, and innate magic are the most common, but stranger abilities specific to the hag
                      mother
                      can
                      also arise.</p>
                    <p className="pf2-p">Changelings can be any gender, but women in particular are
                      vulnerable to the Call, a psychic influence that urges them to abandon their mortal life, join the
                      hag's
                      coven, and eventually become a hag. Changelings who understand their heritage often fear the Call
                      and
                      work to resist its pull. Those who remain ignorant of their origin may find themselves subject to
                      a
                      terrible compulsion without knowing why.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="73">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Cherish and protect those friends and family who accept you as you are.
                        </li>
                        <li className="rd__li ">Seek to better understand your hag mother and the gifts she gave you,
                          for
                          good or ill, or distance yourself from your heritage.
                        </li>
                        <li className="rd__li ">Fear the day you hear the Call and worry you might not be able to
                          resist—or
                          perhaps you already fight to resist it every day.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="74">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Assume you practice occult or primal magic, or that you participate in a
                          coven.
                        </li>
                        <li className="rd__li ">Worry that you might secretly be a monster, or become one, and turn on
                          them.
                        </li>
                        <li className="rd__li ">Notice and speculate about your distinctive eyes.</li>
                      </ul>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-dhampir-apg">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="75">
                    <span className="entry-title-inner">Dhampir</span></p>
                    <p className="pf2-p">The circumstances
                      surrounding
                      a dhampir's birth are rare, complex, and often shrouded in horrific rumors stoked by societal
                      revulsion
                      at the idea of an undead monstrosity producing mortal offspring. Some dhampirs are the child of
                      one
                      mortal and one vampiric parent, while others are born to those who were turned into vampires while
                      pregnant. Still others rise from dark rituals or other supernatural influences that impose a
                      vampiric
                      curse onto a mortal infant. The life of a dhampir is often difficult: few vampiric parents have
                      the
                      time
                      or inclination to raise a mortal child, while mortal communities find a dhampir's sallow flesh,
                      piercing
                      eyes, and unnerving presence off-putting at best.</p>
                    <p className="pf2-p">Despite being living
                      creatures, dhampirs respond to positive and negative energy as if they were undead, making them
                      unwelcome in many holy communities and often driving them toward necromantic arts. Dhampirs aren't
                      immortal, but age far more slowly than most mortals, with a lifespan similar to that of an elf.
                      Dhampirs
                      have difficulty producing children of their own, and those few born to a dhampir are never
                      dhampirs
                      themselves.</p>
                    <p className="pf2-p">A dhampir generally resembles a member of their non-vampire
                      parent's
                      ancestry, but with a ghostly pallor and eyes so light it seems they have only pinpoint pupils and
                      no
                      iris. All dhampirs have elongated incisors, some nearly as long as those of a true vampire. Many
                      command
                      grace, beauty, and charm, despite their unsettling appearance.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="76">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Distance yourself from your heritage by trying to blend into society or
                          even
                          hunting undead.
                        </li>
                        <li className="rd__li ">Take special precautions to avoid being exposed to "helpful" healing
                          magic.
                        </li>
                        <li className="rd__li ">Find yourself fascinated by the sight, smell, or taste of blood.</li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="77">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Feel unsettled by your ghostly pallor and sharp teeth.</li>
                        <li className="rd__li ">Wonder about or even romanticize your origins and motivations.</li>
                        <li className="rd__li ">Find themselves strangely drawn to your grace, charm, and appearance.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="78"><span
                      className="entry-title-inner">Dhampir Settlements</span></p>
                      <p className="pf2-sidebar__text"><i
                        className="ve-muted">Read from page 26 of <a href="https://paizo.com/products/btq026k5">Lost
                        Omens:
                        Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="79"><span
                      className="entry-title-inner">Strigoi</span></p>
                      <p className="pf2-sidebar__text">The first vampires
                        arrived on Golarion from the Shadow Plane, but most have died out, gone into hiding, returned to
                        the
                        Shadow Plane, or evolved into modern vampires. Those ancient few who retain their original form
                        are
                        called strigoi. These vampires aren't destroyed when exposed to sunlight—instead, they enter a
                        dormant
                        state from which they rise again at nightfall.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <p className="pf2-other-source">Mortal, yet descended from immortals; living, but irrevocably
                        shaped
                        by undeath: dhampirs exist in a liminal space between two opposing forces. Many superstitious
                        folk
                        would say these half-dead, vampire-descended creatures shouldn't exist at all—but exist they do,
                        despite their often-violent origins, carving out lives for themselves among all ancestries and
                        across all cultures.</p>
                      <p className="pf2-other-source">In most ways, dhampirs resemble their
                        mortal
                        parents. They retain their ancestry's size, general shape and build, and distinguishing features
                        such
                        as pointed ears, pronounced jawlines, thick facial hair, and the like. They hail from all
                        ethnicities
                        and all parts of the world, but a dhampir's skin and hair are always an ashen, bloodless
                        reflection
                        of
                        their mortal parent's, lacking the warm tones that indicate life and vitality. Born with a
                        hunger
                        distinct from most mortal appetites, dhampirs trend toward slighter builds than their mortal
                        counterparts. Their eyes are often colorless, with only pinpoint pupils, though some instead
                        have
                        gray, silver, or red eyes. Despite these eerie characteristics, most dhampirs embody an
                        entrancing
                        combination of physical grace and subtle charm.</p>
                      <p className="pf2-other-source"><i
                        className="ve-muted">Read the rest from page 24 of <a
                        href="https://paizo.com/products/btq026k5">Lost
                        Omens: Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-wrp-h2" data-source="LOAG">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="80">
                        <span className="entry-title-inner" title="Lost Omens: Ancestry Guide, p. 24">Dhampirs of the Inner Sea</span>
                      </p>
                      </div>
                      <p className="pf2-p"><i className="ve-muted">Read from page 24 of <a
                        href="https://paizo.com/products/btq026k5">Lost Omens: Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-duskwalker-apg">
                  <div className="pf2-wrp-h2">
                    <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="81">
                      <span className="entry-title-inner">Duskwalker</span></p>
                    </div>
                    <p className="pf2-p">The first duskwalkers manifested as the result of a bargain between two
                      powerful
                      psychopomps, the immortal guardians and guides of souls after death. One believed that certain
                      souls
                      who helped preserve the cycle of life and death but had their own lives cut short deserved
                      reincarnation, while the other felt this would too greatly violate that same cycle. In the end,
                      the
                      duskwalkers rose from a concession between the two that allowed such rebirths to occur but limited
                      their frequency—only a finite number of duskwalkers ever exist at any one point in time.</p>
                    <p className="pf2-p">When they were first created by psychopomps, duskwalkers were expected to
                      perform
                      roles that would serve the goddess of death, <a href="deities.html#pharasma_crb"
                                                                      onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'pharasma_crb', null)"
                                                                      onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                      onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                      onTouchStart="Renderer.hover.handleTouchStart(event, this)">Pharasma</a>,
                      and by extension her realm, the Boneyard. But now duskwalkers have found themselves with more
                      freedom
                      of
                      choice and after a century, have only now come to terms with the fact that their destinies are
                      their
                      own
                      to choose. As they are created, not born, most duskwalkers either struggle to integrate with
                      society
                      or
                      seek out communities and organizations to serve as a surrogate family.</p>
                    <p className="pf2-p">Duskwalkers have an inherent understanding of the cycle of life and death. In
                      most
                      cases this manifests as a deep respect for that cycle and pushes the duskwalker toward occupations
                      that
                      help them to protect it, such as hunters of the undead, midwives, morticians, and priests.</p>
                    <p className="pf2-p">If you want a character who has a mysterious background, seeks a society or
                      organization to join, or looks to fight against undead, you should play a duskwalker.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="82">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Seek out opportunities to form strong friendships with a diverse array
                          of
                          companions.
                        </li>
                        <li className="rd__li ">Become focused on preventing the spread of undeath.</li>
                        <li className="rd__li ">Be intrigued at finding your identity in a previous life.</li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="83">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Assume you're a necromancer or have some other strange interest in death
                          or
                          the dead.
                        </li>
                        <li className="rd__li ">Want to know if you remember your past life or ask you about the secrets
                          of
                          death or the afterlife.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="84">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">As a
                        reincarnated soul, a duskwalker retains many of the physical traits they possessed in their
                        previous
                        life and is a member of that ancestry, though as a duskwalker they have distinctive ash-gray or
                        dark
                        blue skin. However, sometimes a duskwalker forms from an unusual creature, like a dragon. These
                        duskwalkers appear to be of a humanoid ancestry, but have features like draconic scales or
                        horns.</p>
                      <p className="pf2-p">When a duskwalker perishes and faces final judgment, a new one incarnates
                        within
                        a year from a deserving soul, typically somewhere far from the previous duskwalker's birthplace.
                        Duskwalkers manifest in locations with a sanctified connection to death, such as graveyards or
                        temples, and begin their lives at adolescence. No duskwalker is capable of bearing or siring
                        biological children, but this doesn't prevent them from establishing families, typically through
                        adoption.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="85">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">It's not uncommon for a
                        duskwalker to go their entire life without encountering another of their kind. Despite their
                        overall
                        rarity, duskwalkers are likely to become adventurers, both due to the strange conditions of
                        their
                        creation and common feelings of social isolation.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="86">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Most
                        duskwalkers are neutral or have a neutral component to their alignment. While the typical
                        duskwalker
                        worships or at least respects Pharasma and her powerful psychopomp ushers, any deity associated
                        with
                        death, society, or the occult might attract a duskwalker's attention.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <p className="pf2-other-source">Once, having been convinced by a powerful olethros advocate, a
                        yamaraj
                        psychopomp judge decreed that, after death, certain souls could reincarnate and walk Golarion
                        once
                        more. The children of this ancient pact became known as duskwalkers. In their previous
                        incarnation,
                        every duskwalker somehow served the cycle of life and death—but their time was cut short until
                        the
                        machinery of psychopomp bureaucracy gave them another life. Born anew, each duskwalker appears
                        near
                        the site of their past existence, a strange child with an old soul and an uncertain destiny.</p>
                      <p className="pf2-stat pf2-stat__source">
                        —
                        <a href="https://paizo.com/products/btq026k5"><strong>Lost Omens: Ancestry Guide</strong></a>,
                        page
                        28.

                      </p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="87"><span
                      className="entry-title-inner">Taking Tea with Death</span></p>
                      <p className="pf2-sidebar__text">Psychopomps can recognize a duskwalker on sight, and most types
                        of
                        psychopomp are much more likely to start up a conversation with a duskwalker they encounter
                        during
                        their appointed tasks than any other mortal. Nosois might trade shiny objects or sweets for
                        tidbits
                        of
                        knowledge, morrignas might give a warning of a nearby undead threat, and so on. Rarely, a
                        psychopomp
                        might take a shine to a duskwalker and visit from time to time—though given the way psychopomps
                        measure time, these gaps could be months, years, or even decades.</p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="88"><span
                      className="entry-title-inner">Duskwalker Adventurers</span></p>
                      <p className="pf2-sidebar__text">Duskwalkers become adventurers most often out of some sense of
                        misplaced
                        destiny. While duskwalkers have free will, they also feel the pressure to make good use of their
                        reincarnation. Many duskwalkers choose to study the otherworldly arts and become <a
                          href="classes.html#wizard_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'wizard_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">wizards</a> or <a
                          href="classes.html#bard_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'bard_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">bards</a>. Duskwalkers are also
                        more
                        concerned than most with matters of the soul, commonly becoming <a
                          href="classes.html#cleric_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'cleric_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">clerics</a>,
                        <a
                          href="classes.html#champion_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'champion_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">champions</a>, and <a
                          href="classes.html#monk_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'monk_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">monks</a>. Duskwalkers most often
                        come
                        from the <a href="backgrounds.html#acolyte_crb"
                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'acolyte_crb', null)"
                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">acolyte</a>,
                        <a
                          href="backgrounds.html#fortune%20teller_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'fortune%20teller_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">fortune teller</a>,
                        <a
                          href="backgrounds.html#hermit_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'hermit_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">hermit</a>,
                        <a
                          href="backgrounds.html#martial%20disciple_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'martial%20disciple_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">martial disciple</a>, and <a
                          href="backgrounds.html#scholar_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'scholar_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">scholar</a> backgrounds.</p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="89"><span
                      className="entry-title-inner">Duskwalker Origins</span></p>
                      <p className="pf2-sidebar__text">Duskwalkers' past lives were often adventurers, but other origins
                        might
                        include a doctor who fought an undead plague or a gravedigger who encouraged a healthy attitude
                        towards death.</p>
                    </div>
                    <div className="pf2-wrp-h2" data-source="LOAG">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="90">
                        <span className="entry-title-inner" title="Lost Omens: Ancestry Guide, p. 28">Duskwalkers of the Inner Sea</span>
                      </p>
                      </div>
                      <p className="pf2-p"><i className="ve-muted">Read from page 28 of <a
                        href="https://paizo.com/products/btq026k5">Lost Omens: Ancestry Guide</a></i>.</p>
                    </div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-ganzi-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="91">
                    <span className="entry-title-inner">Ganzi</span></p>
                    <p className="pf2-p">While some ganzis are born of
                      mortals who mingled with the inchoate beings of the Maelstrom, and some are descended from those
                      who
                      sailed that cerulean void, many others are born in places where the Material Plane frays toward
                      chaos.
                      Whatever their roots, all ganzis share the same potent essence.</p>
                    <p className="pf2-p">More than any
                      other planar scions, ganzis are prone to appearing in otherwise stolid and unremarkable
                      bloodlines.
                      While this is sometimes cause for scandal in less open-minded communities, most ganzi children
                      grow
                      up
                      as happy and loved as any other child. Ganzi children often exhibit irrepressible energy and
                      good-natured mischief. A few even grow out of these tendencies eventually.</p>
                    <p className="pf2-p">If
                      you want a character that channels the spontaneous and the unpredictable, that defies
                      categorization
                      while still finding commonality with other nonconformists, you should play a ganzi.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="92">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Express your individuality through fashion and other personal choices.
                        </li>
                        <li className="rd__li ">Behave in dramatic or exuberant ways and refuse to get discouraged
                          easily.
                        </li>
                        <li className="rd__li ">Look for creative or unique solutions to problems.</li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="93">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Expect you to behave unpredictably or impulsively.</li>
                        <li className="rd__li ">Fear that you possess magic beyond your control.</li>
                        <li className="rd__li ">Assume you're related to proteans.</li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="94">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">While ganzis
                        resemble other members of their ancestry, it's rare for chaos to manifest with any degree of
                        subtlety.
                        No two ganzis are wholly alike and there are no universal traits, yet there is more commonality
                        among
                        ganzis than a layperson might expect. While some ganzis have links to other creatures of chaos,
                        like
                        valkyries or einherji, and some to no known beings, a narrow majority manifest as "proteankin"
                        ganzis.
                        Whether actually related to proteans or not, these ganzis possess serpentine tails with colorful
                        scales and feathers, as well as patches of feather and scale in other places. Bilateral symmetry
                        of
                        such features is ubiquitous, despite their chaotic origins.</p>
                      <p className="pf2-p">Given their
                        dramatic physical features, most ganzis are accustomed to drawing attention. Some lean into
                        this,
                        dressing in daring outfits and developing exuberant personalities, while the more introverted
                        use
                        concealing clothing to hide their heritage. Regardless of social preferences, many ganzis share
                        a
                        passion for works of craft or artistry; ganzis often seek out craftworks as fashion statements,
                        from
                        bracelets to necklaces to brooches.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="95">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">As a highly
                        individualistic
                        and geographically scattered heritage, ganzis have few widespread traditions. The most common,
                        though,
                        is the heart-name. While ganzis are no more likely than others to take issue with their
                        gift-name
                        (as
                        ganzis call given names), the vast majority of ganzis choose names for themselves, selecting or
                        inventing names that better describe their true selves. Some use their gift- and heart-names
                        interchangeably; some share a name only with close friends or lovers; and some discard their
                        gift-name
                        entirely. Heart-names aren't static, and a ganzi might change their heart-name a day or a decade
                        later.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="96">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Unsurprisingly, ganzis lean heavily towards chaos, favoring organizations
                        like
                        the
                        Firebrands. This is hardly universal, however—even a few suits of Hellknight armor accommodate a
                        feathered serpent tail. Likewise, many ganzis find themselves suited to the service of <a
                          href="deities.html#desna_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'desna_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Desna</a>,
                        <a
                          href="deities.html#cayden%20cailean_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'cayden%20cailean_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Cayden Cailean</a>, and other
                        powers
                        that value freedom and individuality.</p>
                    </div>
                    <div className="pf2-wrp-h2" data-source="LOME">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="97">
                    <span className="entry-title-inner"
                          title="Lost Omens: The Mwangi Expanse, p. 126">Other Peoples</span></p>
                      </div>
                      <p className="pf2-p">Many people call the Mwangi Expanse home beyond those most often associated
                        with
                        it. Such inhabitants include the demonically-influenced charau-kas who lord over Lake Ocota, the
                        divination-gifted mbaikis, enterprising and competitive lizardfolk, and adventure-seeking
                        kobolds—among others. The motives of the myriad peoples of the Expanse are as varied as they
                        are,
                        with some hoping to find peace and solitude while others seek fresh meaning to their lives.</p>
                      <div className="pf2-wrp-h3" data-source="LOME"><p className="pf2-h3 rd__h " data-title-index="98">
                    <span className="entry-title-inner"
                          title="Lost Omens: The Mwangi Expanse, p. 129">Planar Scion</span></p>
                        <p className="pf2-p">Within the Mwangi Expanse, it is believed that all planar scions, no matter
                          their
                          origins, have a great predetermined fate that can alter history.</p>
                        <p className="pf2-p">Ganzis
                          are
                          hotly debated across most cultures. Some consider their mutations from the chaotic and
                          primordial
                          magic of the world to be boons—manifestations of a new way of understanding the universe.
                          Others
                          see
                          them as dangerous destabilizing elements that need to be controlled. Still others simply leave
                          them
                          be. If a ganzi happens to make their way into the Expanse from bordering Holomog, their
                          treatment
                          by
                          locals can vary as wildly as their own whims.</p>
                        <p className="pf2-p"><i className="ve-muted">Read
                          the rest from page 129 of <a href="https://paizo.com/products/btq026i4">Lost Omens: The Mwangi
                            Expanse</a></i>.</p>
                      </div>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-ifrit-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="99">
                    <span className="entry-title-inner">Ifrit</span></p>
                    <p className="pf2-p">Ifrits often build up
                      personal
                      relationships between themselves and the idea of fire, feeling as though they embody it mentally
                      or
                      spiritually, in addition to physically. Some ifrits relate to fire's mutable energy, illuminating
                      properties, or destructive nature.</p>
                    <p className="pf2-p">Some ifrits share a connection from birth
                      to
                      specific aspects of elemental fire, such as radiance, ash, or lava; this is called an ifrit
                      lineage.
                      Ifrits often have the same lineage as their parents, though sometimes ifrits are born with
                      lineages
                      different from their families, or to parents without one. Lineages can appear in ifrit children as
                      a
                      reflection of where they were born—for example, cindersoul ifrits sometimes originate from being
                      born
                      in
                      areas prone to forest fires. They can also occur as a reflection of the ifrit's planar ancestry,
                      such
                      as
                      a brightsoul ifrit having a fire-themed celestial ancestor like a peri. Magma ifrits with the
                      lavasoul
                      lineage are most often born the descendants of magma dragons or other lava-themed fire
                      elementals.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="100">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Relate your personal identity to elemental fire and believe fire
                          represents
                          core aspects of your personality.
                        </li>
                        <li className="rd__li ">Always keep yourself moving and busy, traveling to new places or trying
                          new
                          things, for fear that slowing down may dim your inner fire.
                        </li>
                        <li className="rd__li ">Take great pride in your elemental lineage, especially if you believe
                          you
                          are related to the mighty efreeti nobles, the maliks.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="101">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Look to you as an authority on fire magic or the elemental planes.</li>
                        <li className="rd__li ">Think of you as a never-ending well of passion and inspiration, with an
                          inner spark that never dies.
                        </li>
                        <li className="rd__li ">Assume you must be hot-headed and reckless, acting before you think.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="102">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">Just as
                        their
                        elemental origins can vary, so too can ifrits' otherworldly appearances. Red, orange, and brass
                        are
                        all common skin colors, while others have charcoal-gray, ash-brown, or radiant white, yellow, or
                        blue
                        hues. Ifrit hair often falls in untamable coils of flame that grow over the ifrit's lifespan.
                        Salamander-descended ifrits can have lizard-like scales, while those descended from efreeti may
                        have
                        huge, red horns curling up from their skulls.</p>
                      <p className="pf2-p">Many ifrits keep their skin
                        uncovered and open to the air, favoring loose or breathable clothes made in light fabrics like
                        silk
                        and chiffon. Their styles often feature bright colors and bold patterns paired with metallic
                        jewelry.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="103">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Ifrits are typically born
                        into societies built by others, where they comprise minority populations. Most ifrits place a
                        high
                        value on their freedom, and though they might live within societies and cultures dominated by
                        humans,
                        elves, or dwarves, many carve out peaceful, productive, and fulfilling places for themselves.
                        Because
                        most ifrits aren't bothered by high temperatures, many gravitate toward workplaces that get
                        uncomfortably hot for other mortals, like forges.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="104">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Ifrits are
                        fiercely independent, sometimes valuing their personal freedoms above those of others around
                        them.
                        Though frequently accused of lacking morals by their detractors, ifrits who tend toward mischief
                        are
                        rarely motivated by malice. The most common alignments among ifrits are lawful neutral and
                        chaotic
                        neutral, with the rest typically falling into true neutrality, neutral good, or neutral
                        evil.</p>
                      <p className="pf2-p">Ifrits are rarely inclined to venerate Golarion's deities, typically
                        resenting
                        the
                        strictures and rules of an organized faith, but those who do most often worship deities of fire
                        or
                        the
                        sun, such as <a href="deities.html#sarenrae_crb"
                                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'sarenrae_crb', null)"
                                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">Sarenrae</a> and <a
                          href="deities.html#shizuru_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'shizuru_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Shizuru</a>, or one of the
                        Elemental
                        Lords of Fire, like <a href="deities.html#ymeri_crb"
                                               onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'ymeri_crb', null)"
                                               onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                               onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                               onTouchStart="Renderer.hover.handleTouchStart(event, this)">Ymeri</a> or <a
                          href="deities.html#atreia_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'atreia_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Atreia</a>.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="105"><span
                        className="entry-title-inner">Geniekin Trendsetters</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="106"><span
                        className="entry-title-inner">Geniekin Cuisine</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <p className="pf2-other-source">Most geniekin count genies among their predecessors, though
                        descendants of other elementals also fall under this umbrella. For the most part, geniekin fit
                        the
                        humanoid nationality of their native land while also expressing their elemental nature in some
                        visible way.</p>
                      <p className="pf2-other-source"><i className="ve-muted">Read the rest from page 30
                        of <a href="https://paizo.com/products/btq02dxx">Lost Omens: Impossible Lands</a></i>.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-oread-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="107">
                    <span className="entry-title-inner">Oread</span></p>
                    <p className="pf2-p">Oreads can be slow to reveal
                      their true selves, or perhaps more accurately, have enough depth and mystery inherent to their
                      beings
                      that they can reveal new and unexpected facets of themselves every day. They usually feel that
                      they
                      personify certain aspects of earth, stone, or other sediments or minerals, such as a cliff's
                      tenacious
                      resilience against erosion, the generosity and nourishment of fertile soil, or the versatile
                      utility
                      of
                      metal and stone.</p>
                    <p className="pf2-p">Oreads born with a special connection to a specific subset of
                      elemental earth, such as crystal, dust, or mud, might have an oread lineage. A lineage can be
                      inherited
                      along a family bloodline, or it can manifest spontaneously in oread children. They can be caused
                      by
                      where an oread's ancestors lived, frequently seen in dustsoul oreads, many of whom are born in a
                      desert
                      or to a family that has farmed for generations. Lineages can also be the result of specific planar
                      heritages. Gemsoul oreads often have a crystal dragon in their lineage, and miresoul oreads
                      descend
                      from
                      the more sodden creatures of elemental earth.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="108">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Relate your personal identity with elemental earth and believe stones or
                          mountains represent core aspects of your personality.
                        </li>
                        <li className="rd__li ">Value moments of peace and quiet seclusion where you can be alone with
                          nature.
                        </li>
                        <li className="rd__li ">Take great pride in your elemental lineage, especially if you believe
                          you
                          are related to the austere shaitan pashas.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="109">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Look to you as an authority on earth magic or elemental planes.</li>
                        <li className="rd__li ">Think you are wise and cautious, moving into action only after you have
                          considered a problem from all angles.
                        </li>
                        <li className="rd__li ">Assume you are stoic and quietly strong, keeping your thoughts and
                          feelings
                          to yourself.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="110">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">Oreads have
                        the same diversity in height, body type, and physical characteristics as any other member of
                        their
                        mortal ancestries, alongside a handful of other traits that distinguish them as geniekin. Their
                        skin
                        is often gray or brown, but can also resemble metals and precious stones, with copper and iron
                        veining
                        or crystals that grow out of their skin. Instead of hair, oreads often have crystals or rocks
                        that
                        grow from their heads; regardless, most oreads sculpt, decorate, or otherwise maintain the
                        appearance
                        of their hair, whatever form it takes. Almost all oreads have shimmering gemstone eyes,
                        beautiful
                        and
                        multifaceted.</p>
                      <p className="pf2-p">Oreads usually dress in sturdy clothes that can withstand
                        physical labor and exposure to the elements, like wool and leather. Many choose clothing that
                        will
                        expose their unique characteristics, tailored to show off any crystals embedded in their rocky
                        skin.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="111">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Born and raised within
                        the
                        societies of their mortal families, oread children are often (though not universally) described
                        as
                        shy
                        and quiet, growing up to be patient, observant, and clever. They gravitate toward careers that
                        allow
                        them to work in peaceful contemplation with their thoughts, present opportunities to work with
                        their
                        hands, or ideally, both. Many oreads become miners or crafters who work with the earth, such as
                        stonemasons, metalworkers, or gem cutters.</p>
                      <p className="pf2-p">Oreads also tend to enjoy
                        opportunities to uphold structures or systems, and many find their vigilance and patience
                        well-suited
                        for careers as guards, wardens, or clerks. Oreads born in rural communities find fulfillment
                        working
                        and living on the land in a peaceful, self-sufficient harmony with nature.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="112">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Oreads are
                        known for being steadfast and reliable, often placing high value on personal honor and keeping
                        their
                        word. Many are fiercely protective of their friends but less concerned for the safety of those
                        outside
                        their circle. The most common alignments among oreads are true neutral and lawful neutral, with
                        the
                        rest typically falling into other neutral alignments like neutral good or neutral evil.</p>
                      <p className="pf2-p">Religious oreads find that lives of silence, contemplation, or seclusion suit
                        them
                        well, and most dedicate themselves to the worship of earth and nature deities like <a
                          href="deities.html#torag_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'torag_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Torag</a>,
                        <a
                          href="deities.html#ashukharma_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'ashukharma_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Ashukharma</a>—the Vudran deity of
                        canyons and cliffs—or one of the Elemental Lords of Earth, <a href="deities.html#sairazul_crb"
                                                                                      onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'sairazul_crb', null)"
                                                                                      onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                                      onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                                      onTouchStart="Renderer.hover.handleTouchStart(event, this)">Sairazul</a> and <a
                          href="deities.html#ayrzul_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'ayrzul_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Ayrzul</a>. The nature-focused
                        philosophy of the Green Faith also appeals to many oreads, especially those who become druids of
                        the
                        stone order. An oread's contemplative nature also aligns well with the teachings of <a
                          href="deities.html#irori_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'irori_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Irori</a> and <a
                          href="deities.html#gruhastha_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'gruhastha_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Gruhastha</a>.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="113"><span
                        className="entry-title-inner">Geniekin Trendsetters</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="114"><span
                        className="entry-title-inner">Geniekin Cuisine</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <p className="pf2-other-source">Most geniekin count genies among their predecessors, though
                        descendants of other elementals also fall under this umbrella. For the most part, geniekin fit
                        the
                        humanoid nationality of their native land while also expressing their elemental nature in some
                        visible way.</p>
                      <p className="pf2-other-source"><i className="ve-muted">Read the rest from page 30
                        of <a href="https://paizo.com/products/btq02dxx">Lost Omens: Impossible Lands</a></i>.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-suli-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="115">
                    <span className="entry-title-inner">Suli</span></p>
                    <p className="pf2-p">At birth, a suli resembles
                      their
                      mortal ancestry, not manifesting their otherworldly heritage until adolescence, when they awaken
                      into
                      their elemental power. Strong in body and will, sulis are dynamic and ever-changing, and most feel
                      they
                      embody either all the elements together at once or the traits of different elements at different
                      times.
                      Some see themselves as having multiple aspects or faces to their personalities—one for each
                      element—that
                      they cycle through over the course of days or weeks.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="116">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Relate your personal identity with the mixture of elements within you,
                          believing you have sides that befit each element.
                        </li>
                        <li className="rd__li ">Work to harmonize or broker peace and understanding in the world around
                          you.
                        </li>
                        <li className="rd__li ">Be prone to bragging, both about your own accomplishments and those of
                          your
                          family or allies.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="117">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Rely on you for your elemental abilities and expertise.</li>
                        <li className="rd__li ">Think you must be descended from a janni, if they recognize that you are
                          a
                          geniekin at all.
                        </li>
                        <li className="rd__li ">Assume your position at the nexus of opposing elements means you are a
                          neutral diplomat.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="118">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">Of all
                        geniekin, sulis most closely resemble their mortal ancestries, and many could be easily mistaken
                        for
                        a
                        non-suli As children, they appear wholly mortal; a suli's otherworldly characteristics only
                        begin
                        to
                        develop when they awaken into their power in adulthood, which some refer to as a second puberty.
                        Most
                        adult sulis have eyes that glow with a supernatural light or shift color depending on the
                        element
                        they
                        are attuned to at that moment. Adult sulis are also prone to asymmetry or physical traits
                        manifesting
                        only on one side of their bodies, such as developing heterochromia, beauty marks, freckles on
                        one
                        side
                        of the face but not the other, or vitiligo on half of the body. Their skin often takes on a
                        metallic
                        (especially bronzy) sheen after their awakening, as well.</p>
                      <p className="pf2-p">Most sulis choose
                        utilitarian clothes, expressing themselves through jewelry that highlights their glowing eyes or
                        metallic skin, or with tattoos that symbolize their journey through life.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="119">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Most sulis can conform to
                        the societies they're born into. They tend to be highly social and gravitate toward jobs or
                        societal
                        roles where they will be seen by or interact with the public, whether working in restaurants or
                        performing on a stage. Sulis often prize fame and recognition, wanting themselves or the people
                        close
                        to them to be known and remembered, and many take up artistic hobbies like songwriting, poetry,
                        or
                        painting to memorialize people and places they hold dear.</p>
                      <p className="pf2-p">Some suli-jann try
                        to seek out their immortal ancestors, but the nomadic jann rarely invite sulis to live among
                        them.
                        Instead, jann encourage sulis to enter mortal societies, hopefully working to influence the
                        Empire
                        of
                        Kelesh from the inside and end the enslavement of genies. Many sulis become drawn into this
                        conflict;
                        some do so to impress their immortal ancestors, but most simply abhor slavery.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="120">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Most sulis
                        are intense but adaptable people, valuing inner strength and truth over conformity or peace,
                        often
                        respecting others for living their personal truths more than for sharing common values. Sulis
                        usually
                        have a neutral component to their alignment; true neutral is the most common alignment among
                        them,
                        with lawful neutral, chaotic neutral, neutral good, and neutral evil suiting most other
                        sulis.</p>
                      <p className="pf2-p">Sulis are typically only religious if raised in a religious society, but
                        those
                        that
                        heavily invest in their faiths or become <a href="classes.html#cleric_crb"
                                                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'cleric_crb', null)"
                                                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">clerics</a> tend
                        to follow gods of duality like <a href="deities.html#nethys_crb"
                                                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'nethys_crb', null)"
                                                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Nethys</a> and <a
                          href="deities.html#gozreh_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'gozreh_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Gozreh</a>, gods of creation and
                        alchemy
                        like <a href="deities.html#qi%20zhong_crb"
                                onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'qi%20zhong_crb', null)"
                                onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                onTouchStart="Renderer.hover.handleTouchStart(event, this)">Qi Zhong</a> and <a
                          href="deities.html#brigh_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'brigh_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Brigh</a>, or gods of travel
                        like <a
                          href="deities.html#desna_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'desna_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Desna</a> and <a
                          href="deities.html#alseta_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'alseta_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Alseta</a>. <a
                          href="deities.html#shelyn_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'shelyn_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Shelyn</a> is also popular among
                        sulis
                        who identify themselves with the process of artistic creation, seeing themselves as a beautiful
                        whole
                        made of disparate parts.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="121"><span
                        className="entry-title-inner">Geniekin Trendsetters</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="122"><span
                        className="entry-title-inner">Geniekin Cuisine</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <p className="pf2-other-source">Most geniekin count genies among their predecessors, though
                        descendants of other elementals also fall under this umbrella. For the most part, geniekin fit
                        the
                        humanoid nationality of their native land while also expressing their elemental nature in some
                        visible way.</p>
                      <p className="pf2-other-source"><i className="ve-muted">Read the rest from page 30
                        of <a href="https://paizo.com/products/btq02dxx">Lost Omens: Impossible Lands</a></i>.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-sylph-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="123">
                    <span className="entry-title-inner">Sylph</span></p>
                    <p className="pf2-p">Sylphs enjoying following
                      their
                      own tempos, shifting between wild energy that draws all eyes to embodying the spirit of unseen
                      breezes
                      that slip away without note. They often build their identities around their perceived personal
                      connection to the element of air, relating to a gentle breeze, a sudden flash of lightning, or an
                      uncontrollable storm.</p>
                    <p className="pf2-p">Some sylphs are born with a connection to an extremely
                      focused aspect of elemental air, such as smoke, storms, or toxic gas. While it does happen, a
                      child
                      is
                      rarely born with a lineage that differs from their parents', as geniekin typically pass these
                      unusual
                      gifts on to their offspring. Lineages can manifest in sylph children as a result of where they're
                      born,
                      such as when stormsoul sylphs are birthed in regions prone to tornadoes or windstorms. A lineage
                      can
                      also reflect a sylph's elemental heritage like in smokesoul sylphs, who often descend from
                      belkers.
                      Fumesoul sylphs, on the other hand, are associated with poisonous and otherwise unbreathable
                      gases.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="124">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Relate your identity with the element of air and believe the wind and
                          storms
                          represent core aspects of your personality.
                        </li>
                        <li className="rd__li ">Enjoy traveling and exploring high, secluded places where you can
                          observe
                          the world beneath you.
                        </li>
                        <li className="rd__li ">Take pride in your elemental lineage, especially if you believe you are
                          related to the gregarious djinn viziers.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="125">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Look to you as an authority on air magic or the elemental Plane of Air.
                        </li>
                        <li className="rd__li ">Believe you easily flow through all aspects of society, while listening
                          to
                          those around you.
                        </li>
                        <li className="rd__li ">Assume you must be airheaded or capricious, prone to irresponsible
                          behavior
                          without regard for consequence.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 r__h " data-title-index="126">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">Like all
                        geniekin, sylphs are recognizable as members of their ancestries with unique characteristics
                        that
                        identify their planar heritage. Their skin and hair can be any color of the sky, ranging from
                        cloudy
                        whites to the twilight tones of dawn and dusk. Complex, swirling marks dance across the skin of
                        many
                        sylphs, resembling shifting summer clouds. Some have skin cool to the touch, while others are
                        surrounded by a constant static. Their hair can move with a life of its own, and they're often
                        accompanied by light breezes that follow them everywhere they go.</p>
                      <p className="pf2-p">Sylphs
                        typically prefer clothing in light, airy fabrics such as silk and linen, cut in loose and
                        voluminous
                        styles that flow in the breeze. Many of them deliberately wear chimes and jewels that jingle in
                        the
                        wind, though more stealthy geniekin endeavor to keep everything pinned down.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="127">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Sylphs exist within the
                        societies of other ancestries, usually that of their mortal families, and it's incredibly common
                        for
                        them to have a sense of never quite belonging. Most sylphs engage in a practice known as
                        "listening
                        to
                        the wind," keeping their eyes and ears open to all that happens, often making their companions
                        uncomfortable in the process. For sylphs, this habit of vigilance and information-seeking helps
                        them
                        feel connected to the world around them. A curious and restless bunch, many sylphs seek out
                        occupations and lifestyles that allow them to travel and explore.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="128">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Most
                        sylphs
                        place little value on laws and tradition, preferring to forge their own paths and go where the
                        wind
                        blows, especially as many have a great love for subterfuge and trickery, placing them at odds
                        with
                        nearly all laws and social norms. Overall, they tend toward neutrality, pursuing the most
                        expedient
                        avenues toward accomplishing their goals, regardless of legality.</p>
                      <p className="pf2-p">Sylphs
                        often
                        find themselves drawn toward the mysteries of secretive cults, worshipping outsider demigods
                        like
                        the
                        elemental lords of air <a href="deities.html#hshurha_crb"
                                                  onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'hshurha_crb', null)"
                                                  onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                  onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                  onTouchStart="Renderer.hover.handleTouchStart(event, this)">Hshurha</a> and <a
                          href="deities.html#ranginori_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'ranginori_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Ranginori</a>, or the empyreal
                        lords
                        of
                        detectives and vigilance <a href="deities.html#zohls_crb"
                                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'zohls_crb', null)"
                                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">Zohls</a> or <a
                          href="deities.html#tanagaar_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'tanagaar_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Tanagaar</a>. Those who worship
                        conventional deities tend to favor gods of travel like <a href="deities.html#desna_crb"
                                                                                  onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'desna_crb', null)"
                                                                                  onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                                  onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                                  onTouchStart="Renderer.hover.handleTouchStart(event, this)">Desna</a>,
                        gods of secrets such as <a href="deities.html#norgorber_crb"
                                                   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'norgorber_crb', null)"
                                                   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                   onTouchStart="Renderer.hover.handleTouchStart(event, this)">Norgorber</a>,
                        or the obvious gods of air, Gozreh and <a href="deities.html#hei%20feng_crb"
                                                                  onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'hei%20feng_crb', null)"
                                                                  onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                  onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                  onTouchStart="Renderer.hover.handleTouchStart(event, this)">Hei
                          Feng</a>.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="129"><span
                        className="entry-title-inner">Geniekin Trendsetters</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="130"><span
                        className="entry-title-inner">Geniekin Cuisine</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <p className="pf2-other-source">Most geniekin count genies among their predecessors, though
                        descendants of other elementals also fall under this umbrella. For the most part, geniekin fit
                        the
                        humanoid nationality of their native land while also expressing their elemental nature in some
                        visible way.</p>
                      <p className="pf2-other-source"><i className="ve-muted">Read the rest from page 30
                        of <a href="https://paizo.com/products/btq02dxx">Lost Omens: Impossible Lands</a></i>.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-tiefling-apg">
                  <div className="pf2-wrp-h2">
                    <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="131">
                      <span className="entry-title-inner">Tiefling</span></p>
                    </div>
                    <p className="pf2-p">When the influence of a demon, devil, or other fiend infiltrates the bloodline
                      of
                      a
                      mortal family, tieflings are the inevitable result. Tieflings carry the sinister mark of the
                      fiendish
                      planes upon their flesh, and their specific abilities and physical qualities vary according to
                      their
                      heritage. Hellspawn are those who descend from devils, grimspawn hail from daemonic influences,
                      and
                      pitborn bear the influence of demons, though these are only the three most common among a wide
                      variety
                      of tiefling lineages.</p>
                    <p className="pf2-p">Generations might pass between a fiend's direct
                      influence and the time a tiefling child is born. For those born to ignorant or fearful parents,
                      childhood is particularly hard, but even those whose families accept and nurture them face fear
                      and
                      prejudice from society as a whole. In some cases, this rejection encourages a tiefling to embrace
                      the
                      evil within their heritage, though others carve out a place and live a fulfilling life despite the
                      challenges facing them.</p>
                    <p className="pf2-p">If you want a character who is supernaturally infused
                      with sinister forces, might have a unique appearance, and can fill the role of a complicated or
                      unexpected hero, you should play a tiefling.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="132">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Have a strong sense of self-confidence born from a life of having to
                          rely
                          on
                          yourself.
                        </li>
                        <li className="rd__li ">Feel a kinship with society's underprivileged or criminal elements, or
                          even
                          seek positions of power on the wrong side of the law.
                        </li>
                        <li className="rd__li ">Place incredible value on hard-won friendships and hold these companions
                          closer than your blood family.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="133">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Assume you've faced numerous challenges due to your heritage.</li>
                        <li className="rd__li ">Mistake you for an evil agent of a sinister cult, a fiend worshipper, or
                          even a fiend yourself.
                        </li>
                        <li className="rd__li ">Think you have associations with powerful fiends, potentially trying to
                          bargain with you for power of their own.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="134">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">Two
                        tieflings,
                        even siblings or twins, might not look similar at all, for the influence of fiendish lineage
                        manifests
                        in unique and unusual ways. These variations never make a tiefling's appearance so strange as to
                        obscure their humanoid ancestry, but horns, a forked tongue, vestigial wings, a tail, or a
                        cloven
                        hoof
                        in place of a foot are all common and obvious signs of their heritage.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="135">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Tieflings tend to adopt
                        the
                        society and culture they were born into. Since most societies consider them to be untrustworthy
                        or
                        even monstrous, tieflings typically gravitate toward those segments of society willing to
                        overlook
                        them entirely, or where their reputation can assist rather than hinder them. With determination
                        and
                        persistence, however, tieflings can earn respect and prestige despite their heritage, finding
                        people
                        who accept them as they are. In regions where worship of fiends is widespread, tieflings can
                        live
                        more
                        openly and achieve great power and respect, although exceptions exist—in the Asmodean nation of
                        Cheliax, for example, tieflings are seen as shameful proof of a failure to maintain control in
                        the
                        face of fiendish influence, and as such are cast out.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="136">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">A
                        tiefling's
                        fiendish heritage doesn't force evil or cruelty into their being, and each tiefling ultimately
                        chooses
                        their own faith, goals, and personality. But every tiefling feels their forbear's influence in
                        the
                        back of their mind, always ready to tempt and goad when the world appears cruel and unjust. That
                        so
                        many societies hate and fear tieflings only pushes them further toward evil, and many tieflings
                        gravitate toward religions that value and admire fiends, such as the churches of <a
                          href="deities.html#asmodeus_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'asmodeus_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Asmodeus</a> or <a
                          href="deities.html#lamashtu_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'lamashtu_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Lamashtu</a>. Tieflings who choose
                        a
                        path of good face their own challenges, finding they must be more diplomatic, understanding, and
                        patient than members of other ancestries since they are so often faced with ignorance and
                        suspicion.
                        Such tieflings embrace faiths and philosophies that uphold empathy and eschew judgment, finding
                        that
                        even followers of good faiths sometimes struggle to see past fiendish features.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <p className="pf2-other-source">When a trace of fiendish corruption worms its way into an unborn
                        child, the babe is born a tiefling, bearing certain uncanny traits. In popular imagination, and
                        often in actuality, this manifestation stems from some past liaison between one of the child's
                        ancestors and some manner of fiend. For example, many pitborn claim, accurately or not, to have
                        a
                        succubus in their family tree. Casting fiendish magic, worshipping the lords of below, or
                        signing
                        a
                        diabolic pact all have the possibility of thus afflicting one's descendants—though even less
                        common
                        tiefling origins are also possible. Many beastbrood tieflings result from a failed or partial
                        rakshasa reincarnation, while the riftmarked simply have the misfortune of being born too near a
                        qlippoth runestone.</p>
                      <p className="pf2-stat pf2-stat__source">
                        —
                        <a href="https://paizo.com/products/btq026k5"><strong>Lost Omens: Ancestry Guide</strong></a>,
                        page
                        60.

                      </p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="137"><span
                      className="entry-title-inner">Tiefling Adventurers</span></p>
                      <p className="pf2-sidebar__text">For
                        many
                        tieflings, becoming an adventurer is a natural progression. The typical tiefling already relies
                        on
                        no
                        one but themself or a few chosen comrades, lives a semi-nomadic existence to avoid trouble, and
                        tends
                        to have very developed opinions on good and evil and the necessity of intervening on one side or
                        the
                        other. Tieflings often grow up as outcasts, and the <a href="backgrounds.html#charlatan_crb"
                                                                               onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'charlatan_crb', null)"
                                                                               onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                               onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                               onTouchStart="Renderer.hover.handleTouchStart(event, this)">charlatan</a>,
                        <a
                          href="backgrounds.html#criminal_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'criminal_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">criminal</a>,
                        <a
                          href="backgrounds.html#hermit_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'hermit_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">hermit</a>,
                        <a
                          href="backgrounds.html#nomad_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'nomad_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">nomad</a>, and <a
                          href="backgrounds.html#street%20urchin_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'street%20urchin_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">street urchin</a> backgrounds
                        might
                        fit,
                        with unluckier tieflings coming from the <a href="backgrounds.html#prisoner_crb"
                                                                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'backgrounds.html', 'CRB', 'prisoner_crb', null)"
                                                                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">prisoner</a> background.
                        Many tieflings become <a href="classes.html#rogue_crb"
                                                 onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'rogue_crb', null)"
                                                 onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                 onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                 onTouchStart="Renderer.hover.handleTouchStart(event, this)">rogues</a> or <a
                          href="classes.html#bard_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'bard_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">bards</a> as a means of survival,
                        while
                        others access the powers of their blood to become <a href="classes.html#sorcerer_crb"
                                                                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'sorcerer_crb', null)"
                                                                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">sorcerers</a>.
                        Some become <a href="classes.html#wizard_crb"
                                       onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'wizard_crb', null)"
                                       onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                       onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                       onTouchStart="Renderer.hover.handleTouchStart(event, this)">wizards</a>,
                        <a
                          href="classes.html#monk_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'monk_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">monks</a>, or <a
                          href="classes.html#cleric_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'classes.html', 'CRB', 'cleric_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">clerics</a> in an effort to gain
                        mastery
                        over their fiendish corruption.</p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="138"><span
                      className="entry-title-inner">Tiefling Settlements</span></p>
                      <p className="pf2-sidebar__text"><i
                        className="ve-muted">Read from page 62 of <a href="https://paizo.com/products/btq026k5">Lost
                        Omens:
                        Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-sidebar " data-source="LOAG"><p className="pf2-sidebar__title"
                                                                        data-title-index="139"><span
                      className="entry-title-inner">Abandoned by Faith</span></p>
                      <p className="pf2-sidebar__text"><i
                        className="ve-muted">Read from page 63 of <a href="https://paizo.com/products/btq026k5">Lost
                        Omens:
                        Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-wrp-h2" data-source="LOAG">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="140">
                        <span className="entry-title-inner" title="Lost Omens: Ancestry Guide, p. 60">Tieflings of the Inner Sea</span>
                      </p>
                      </div>
                      <p className="pf2-p"><i className="ve-muted">Read from page 60 of <a
                        href="https://paizo.com/products/btq026k5">Lost Omens: Ancestry Guide</a></i>.</p>
                    </div>
                    <div className="pf2-wrp-h2" data-source="LOME">
                      <div className="pf2-h2--wrp "><p className="pf2-h2 rd__h" data-title-index="141">
                    <span className="entry-title-inner"
                          title="Lost Omens: The Mwangi Expanse, p. 126">Other Peoples</span></p>
                      </div>
                      <p className="pf2-p">Many people call the Mwangi Expanse home beyond those most often associated
                        with
                        it. Such inhabitants include the demonically-influenced charau-kas who lord over Lake Ocota, the
                        divination-gifted mbaikis, enterprising and competitive lizardfolk, and adventure-seeking
                        kobolds—among others. The motives of the myriad peoples of the Expanse are as varied as they
                        are,
                        with some hoping to find peace and solitude while others seek fresh meaning to their lives.</p>
                      <div className="pf2-wrp-h3" data-source="LOME"><p className="pf2-h3 rd__h "
                                                                        data-title-index="142">
                    <span className="entry-title-inner"
                          title="Lost Omens: The Mwangi Expanse, p. 129">Planar Scion</span></p>
                        <p className="pf2-p">Within the Mwangi Expanse, it is believed that all planar scions, no matter
                          their
                          origins, have a great predetermined fate that can alter history.</p>
                        <p className="pf2-p">For
                          tieflings, most believe this fate to be grim and that tiefling children are cursed to bring
                          nothing
                          but darkness. As a result, these adolescents are either abandoned at birth or their parents
                          flee
                          from their homes with them in the night. Many tieflings of the Expanse live lives of extremes,
                          either exemplifying their supposed corrupt nature or proving themselves paragons of good.</p>
                        <p className="pf2-p"><i className="ve-muted">Read the rest from page 129 of <a
                          href="https://paizo.com/products/btq026i4">Lost Omens: The Mwangi Expanse</a></i>.</p>
                      </div>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="143"><span
                        className="entry-title-inner">Family Matters</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 33 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="144"><span
                        className="entry-title-inner">The Shaded Library</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 33 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <p className="pf2-other-source">Though Jalmeray permits tieflings to migrate and live there, the
                        arrangement can be fraught; working the most degrading jobs, acting as menagerie oddities, or
                        making
                        a name in the underworld are the only choices available to most tieflings.</p>
                      <p className="pf2-other-source"><i className="ve-muted">Read the rest from page 32 of <a
                        href="https://paizo.com/products/btq02dxx">Lost Omens: Impossible Lands</a></i>.</p>
                    </div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-undine-loag">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="145">
                    <span className="entry-title-inner">Undine</span></p>
                    <p className="pf2-p">Undines often go through
                      life
                      in a series of shifting phases, their interests waxing, waning, or sometimes morphing altogether
                      as
                      old
                      loves are discarded for new interests. Structure provides a much-needed focus to undines' lives,
                      and
                      without strong goals or support from those around them, undines can find themselves stagnating in
                      feelings of despondence. Most undines feel they personify specific aspects of water, some seeing
                      themselves with the strength and power of the waves, the speed and tenacity of a river current, or
                      the
                      calm of a peaceful lake or pond. Others identify with all these aspects and more, their demeanors
                      shifting like the tides from one situation to the next.</p>
                    <p className="pf2-p">Undines born with a
                      connection only to a specific subtype of elemental water, such as ice, brine, or mist, might have
                      a
                      specific undine lineage. These are typically passed down from parent to child, as with other
                      geniekin,
                      but on occasion, a child is born with a lineage never seen in their family. Sometimes lineages are
                      the
                      result of where an undine's ancestors lived, such as rimesoul undines being born in the cold
                      northern
                      countries or at the tops of mountain peaks. At other times it can be related to the undine's
                      elemental
                      heritage, as is often the case with brinesoul undines, who usually descend from brine dragons.
                      Mistsoul
                      undines might have a distant but powerful connection to elemental water, or might even have a bit
                      of
                      elemental air mixed into their ancestry.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="146">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Relate your identity to elemental water and believe the streams and
                          tides
                          represent core aspects of your personality.
                        </li>
                        <li className="rd__li ">Be equally comfortable above the waves as you are beneath them.</li>
                        <li className="rd__li ">Take great pride in your elemental lineage, especially if you believe
                          you
                          are related to the formidable marid shahzadas.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="147">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Look to you as an authority on water magic or the elemental planes.</li>
                        <li className="rd__li ">Think you can speak with aquatic creatures.</li>
                        <li className="rd__li ">Assume you are easily swayed by others, with few real opinions of your
                          own.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="148">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">With all the
                        same diversity in height, body type, and physical characteristics as any other member of their
                        ancestries, undine coloration runs a vast breadth of variation. Most commonly, an undine's skin
                        and
                        hair mimic the colors of the lakes, seas, or oceans near where they were born, ranging from the
                        palest
                        of blues to sea greens and navies. A rare few undines may even take on the bioluminescence of
                        deep-sea
                        fish, the bright colors of corals and anemones, or the pale bone hues of seashells. More unusual
                        traits can include fin-like ears, thin layers of shimmering fish scales covering their bodies,
                        coral
                        growths at their joints or temples, tails with caudal fins, and even webbed hands and feet.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="149">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Unlike other geniekin,
                        undines create and congregate within their own tightly knit communities near water or floating
                        on
                        top
                        of it. Undine neighborhoods that develop within larger cities, typically near the docks or
                        directly
                        on
                        the water, are informally known as flotillas. Because undines deliberately create and seek out
                        these
                        communities, their children usually have healthy childhoods focused on the values of fellowship
                        and
                        harmony. This stands in contrast to many other planar scions, who all-too-often grow up feeling
                        like
                        outsiders.</p>
                      <p className="pf2-p">Undines typically gravitate toward occupations that allow them to
                        live and work near water, and many of them excel at fishing and sailing thanks to their love and
                        understanding of the sea.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="150">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">Undines
                        are
                        flexible and community-minded, often valuing the overall health of their communities above that
                        of
                        any
                        one individual. Usually of a neutral alignment, their moral concerns are often centered around
                        their
                        societies rather than their actions.</p>
                      <p className="pf2-p">Religion isn't a major part of most
                        undine's lives, but they often have strong spiritual connections to their supernatural ancestors
                        or
                        to
                        water itself. Some undines worship deities of water, such as <a href="deities.html#gozreh_crb"
                                                                                        onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'gozreh_crb', null)"
                                                                                        onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                                        onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                                        onTouchStart="Renderer.hover.handleTouchStart(event, this)">Gozreh</a> or <a
                          href="deities.html#hei%20feng_crb"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'hei%20feng_crb', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">Hei Feng</a>, while others might
                        offer
                        their prayers to <a href="deities.html#lysianassa_crb"
                                            onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'deities.html', 'CRB', 'lysianassa_crb', null)"
                                            onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                            onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                            onTouchStart="Renderer.hover.handleTouchStart(event, this)">Lysianassa</a>,
                        the
                        lost elemental lord of water.</p>
                    </div>
                    <div className="pf2-wrp-other-source mb-3">
                      <hr className="hr-other-source"/>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="151"><span
                        className="entry-title-inner">Geniekin Trendsetters</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <div className="pf2-sidebar " data-source="LOIL"><p className="pf2-sidebar__title"
                                                                          data-title-index="152"><span
                        className="entry-title-inner">Geniekin Cuisine</span></p>
                        <p className="pf2-sidebar__text"><i
                          className="ve-muted">Read from page 31 of <a href="https://paizo.com/products/btq02dxx">Lost
                          Omens:
                          Impossible Lands</a></i>.</p>
                      </div>
                      <p className="pf2-other-source">Most geniekin count genies among their predecessors, though
                        descendants of other elementals also fall under this umbrella. For the most part, geniekin fit
                        the
                        humanoid nationality of their native land while also expressing their elemental nature in some
                        visible way.</p>
                      <p className="pf2-other-source"><i className="ve-muted">Read the rest from page 30
                        of <a href="https://paizo.com/products/btq02dxx">Lost Omens: Impossible Lands</a></i>.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-fluff hidden-fluff hidden" data-heritage-id="h-dragonkin-dvh">
                  <div className="pf2-wrp-h1"><p className="pf2-h1 rd__h" data-title-index="153">
                    <span className="entry-title-inner">Dragonkin</span></p>
                    <p className="pf2-h1-flavor rd__h"><i>Dragonkin
                      trace their lineage back to mighty dragons. This draconic connection allows a dragonkin to tap
                      into
                      the
                      great power and potential of dragons, for good or for ill.</i></p>
                    <div className="flex">
                      <div className="pf2-chapter__line mb-4"
                           style={{width: "calc(100% - 2em)", marginLeft: "1em", height: "2px"}}></div>
                    </div>
                    <p className="pf2-p">The might of a dragon can manifest in many ways in the world. Sometimes it's
                      the
                      destructive power of a dragon's breath or magic. Other times it can take the form of knowledge and
                      experience of a long-lived dragon. In rare cases, a dragon's influence can affect a bloodline,
                      bringing about a dragonkin.</p>
                    <p className="pf2-p">Dragonkin, more so than individuals that draw
                      upon
                      a draconic influence such as barbarians and sorcerers, are the scions of dragons. They are direct
                      descendants of dragons, some only a few generations removed, and this connection allows a
                      dragonkin
                      to
                      draw on some of the might of their dragon forebearers.</p>
                    <p className="pf2-p">A dragonkin can come
                      about it in a number of ways. The most common way is for a dragon to have a child with a living
                      creature. Many dragons are capable of transformation and changing their shape and it's during
                      these
                      transformations that meetings with other ancestries can lead to the birth of a dragonkin. While
                      such
                      pairings shouldn't produce offspring of any kind, many scholars believe that the innately magical
                      nature of dragons allows for a partial compatibility and thus, dragonkin.</p>
                    <p className="pf2-p">If
                      a
                      dragonkin has a child with another member of their same ancestry, it can result in another
                      dragonkin.
                      Though dragonkin offspring are never entirely a surprise in such pairings, a dragonkin child seems
                      to
                      result less often than a typical child of the ancestry. In cases where two dragonkin join to have
                      a
                      child, a dragonkin is all but guaranteed, with the only uncertain factor being which dragon will
                      be
                      the one to influence the child.</p>
                    <p className="pf2-p">Finally, in extremely exceptional cases, a
                      deity could grant a specific individual the form of a dragonkin. This is usually the case for
                      champions and clerics of draconic deities, but any servant of a deity might receive this gift.
                      Legends
                      speak of ancient heroes who received the touch of the dragon as a gift to aid in fights against
                      evil.</p>
                    <p className="pf2-p">If you want a character that has direct ties to dragons and can
                      manifest
                      the powerful abilities of a dragon, you should play a dragonkin.</p>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="154">
                      <span className="entry-title-inner">You Might...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Find it hard to relate to others, requiring you to keep a close-knit
                          group
                          of friends.
                        </li>
                        <li className="rd__li ">Feel a strong connection to magic, even if you're not capable of
                          mastering
                          magic yourself.
                        </li>
                        <li className="rd__li ">Struggle with the compulsions that come from your draconic influence.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="155">
                      <span className="entry-title-inner">Others Probably...</span></p>
                      <ul className="rd__list">
                        <li className="rd__li ">Believe you hoard wealth and curios.</li>
                        <li className="rd__li ">Fear your appearance or your abilities.</li>
                        <li className="rd__li ">Assume you have direct contact with a dragon and can call upon them at
                          any
                          time.
                        </li>
                      </ul>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="156">
                      <span className="entry-title-inner">Physical Description</span></p>
                      <p className="pf2-p">Dragonkin
                        resemble their base ancestry, growing to the typical heights common among the ancestry. Most
                        dragonkin
                        are naturally muscular, leading to many brawny builds among dragonkin. Regardless of a
                        dragonkin's
                        base ancestry, they always sport some kind of draconic features such as claws, fangs, patches of
                        scales, horns, a tail, or peculiar eye shapes and colors. A dragonkin can take efforts to hide
                        such
                        features, but some dragonkin have such a large number of draconic features that hiding them is
                        difficult. In some cases, a dragonkin has a full, draconic appearance, appearing like bipedal
                        reptiles
                        with an array of other draconic features. Such dragonkin resemble <a
                          href="ancestries.html#lizardfolk_locg"
                          onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'ancestries.html', 'LOCG', 'lizardfolk_locg', null)"
                          onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                          onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                          onTouchStart="Renderer.hover.handleTouchStart(event, this)">lizardfolk</a> to outsiders,
                        leading
                        to
                        some confusion upon first impressions.</p>
                      <p className="pf2-p">A dragonkin's features draw upon
                        their
                        dragon progenitor. Not all dragons have horns and the like and dragonkin tied to such dragons
                        likewise
                        lack such features. Dragonkin scales match the coloration, shape, and pattern of a dragon
                        progenitor,
                        and other dragonkin features continue the trend of matching the progenitor's features. People
                        versed
                        in the physical features of dragons can use this knowledge to determine a dragonkin's draconic
                        progenitor.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="157">
                      <span className="entry-title-inner">Society</span></p>
                      <p className="pf2-p">Reactions to dragonkin
                        run
                        the gamut of emotions. Many look upon dragonkin with awe, amazed by the potential that runs
                        through
                        the person's veins. Others instead fear dragonkin, worried that the draconic influence could
                        lead
                        to
                        violent outbursts or magical manifestations. Scholars and spell casters sometimes look at
                        dragonkin
                        as
                        things to be studied, draconic power made manifest, but also safer. In many cases, dragonkin can
                        expect the same treatment that locals would give to an actual dragon.</p>
                      <p className="pf2-p">Dragonkin communities are rare. The few that exist tend to have dragonkin of
                        the
                        same draconic progenitor, such as nomadic, desert communities of dragonkin descended from blue
                        dragons. Much like dragons can vary in alignments and mindsets, these communities run a wide
                        range
                        of
                        attitudes. Most dragonkin live in existing communities or on the fringes of such societies.
                        Dragonkin
                        rarely live on their own as an innate compulsion pulls dragonkin to remain somewhat close to
                        settlements, even if not directly. While dragonkin don't have a proper explanation for this
                        feeling,
                        many describe it as a need to remain close to settlements to keep tabs on the populace.</p>
                    </div>
                    <div className="pf2-wrp-h3"><p className="pf2-h3 rd__h " data-title-index="158">
                      <span className="entry-title-inner">Alignment and Religion</span></p>
                      <p className="pf2-p">While
                        dragonkin typically match the alignment trends of their base ancestry, a fair amount of
                        dragonkin
                        feel
                        a draconic compulsion that results from their progenitors. This compulsion seems to draw
                        dragonkin
                        toward the alignment of their progenitors. Dragonkin descended from brass dragons have desires
                        to
                        do
                        good while remaining independent, for example. Dragonkin that feel such compulsions report that
                        the
                        feeling is usually simple to ignore or work around, but some dragonkin lean into these desires.
                        Dragonkin who wish to emulate their forebearers are particularly likely to give in to these
                        compulsions.</p>
                      <p className="pf2-p">Much like with alignments, dragonkin tend to follow the faiths
                        of
                        their base ancestry. Some dragonkin look to other gods to supplement their core beliefs,
                        however,
                        and
                        it's not uncommon for a dragonkin to utter prayers to draconic or elementally-focused deities in
                        addition to those of their primary faith. The power of a dragon brings about feelings of
                        independence
                        or self-assuredness in many dragonkin, leading to a large number of atheist or areligious
                        dragonkin.</p>
                    </div>
                    <div className="float-clear"></div>
                  </div>
                </div>
                <div className="pf2-h1-flavor text-center hidden">Toggle a button to view ancestry and heritage
                  information.
                </div>
                <div className="pf2-h1-flavor text-center" style={{clear: "none", width: "100%"}}>Select Heritages to
                  display
                  them
                  here.
                </div>
              </div>
              <AncestrySidebar selectedAncestry={selectedRace}/>
              <div className="pf2-h1-flavor text-center" style={{clear: "none", width: "100%"}}>
                  Select Heritages to display them here.
              </div>
            </div>
          </div>
        </div>
        <div className="col-ml-9 feat-view hidden">
          <div className="col-6" id="featlistcontainer">
            <div className="night__shadow-big">
              <div className="lst__form-top" id="feat-filter-search-group">
                <button className="btn btn-default ">Filter</button>
                <button className="btn btn-default" title="Toggle Filter Summary"><span
                  className="glyphicon glyphicon-resize-small"></span></button>
                <div className="w-100 relative">
                  <input type="search" id="feat-lst__search" autoComplete="off" autoCapitalize="off" spellCheck="false"
                         className="search form-control lst__search lst__search--no-border-h"/>
                  <div id="feat-lst__search-glass" className="lst__wrp-search-glass no-events flex-vh-center"><span
                    className="glyphicon glyphicon-search" type="submit"></span></div>
                  <div className="lst__wrp-search-visible no-events flex-vh-center"></div>
                </div>
                <button className="btn btn-xs btn-default px-2" id="feat-feelinglucky" title="Feeling Lucky?"><span
                  className="glyphicon glyphicon-random"></span></button>
                <button className="btn btn-default px-2" id="feat-reset"
                        title="Reset filters. SHIFT to reset everything."><span
                  className="glyphicon glyphicon-refresh"></span></button>
              </div>
              <div className="fltr__mini-view btn-group">
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Abomination Vaults #1: Ruins of Gauntlight (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AV1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Abomination Vaults #2: Hands of the Devil (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AV2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Abomination Vaults #3: Eyes of Empty Death (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AV3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Advanced Player’s Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> APG
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Age of Ashes #3: Tomorrow Must Burn (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AoA3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Age of Ashes #4: Fires of the Haunted City (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AoA4
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Age of Ashes #5: Against the Scarlet Triad (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AoA5
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Age of Ashes #6: Broken Promises (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AoA6
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Agents of Edgewatch #1: Devil at the Dreaming Palace (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AoE1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Agents of Edgewatch #2: Sixty Feet Under (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AoE2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Agents of Edgewatch #3: All or Nothing (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AoE3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Azarketi Ancestry Web Supplement (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> AAWS
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Book of the Dead (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> BotD
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel" title="Core Rulebook (Filter: Source)"
                     state="yes"><span className="glyphicon glyphicon-book"></span> CRB
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel" title="Dark Archive (Filter: Source)"
                     state="yes"><span className="glyphicon glyphicon-book"></span> DA
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Extinction Curse #1: The Show Must Go On (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> EC1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Extinction Curse #2: Legacy of the Lost God (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> EC2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Extinction Curse #3: Life’s Long Shadows (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> EC3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Extinction Curse #6: The Apocalypse Prophet (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> EC6
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Fists of the Ruby Phoenix #1: Despair on Danger Island (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> FRP1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Fists of the Ruby Phoenix #2: Ready? Fight! (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> FRP2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Fists of the Ruby Phoenix #3: King of the Mountain (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> FRP3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Gamemastery Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> GMG
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Gatewalkers #1: The Seventh Arch (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> Gw1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Gatewalkers #2: They Watched the Stars (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> Gw2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Gatewalkers #3: Dreamers of the Nameless Spires (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> Gw3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Gatewalkers Player’s Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> Gw0
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Guns &amp; Gears (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> G&amp;G
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Little Trouble in Big Absalom (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LTiBA
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Absalom, City of Lost Omens (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> ACLO
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Ancestry Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOAG
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Character Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOCG
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Gods &amp; Magic (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOGM
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Highhelm (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOHh
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Impossible Lands (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOIL
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Knights of Lastwall (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOKL
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Legends (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOL
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Monsters of Myth (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOMM
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: Pathfinder Society Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOPSG
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: The Grand Bazaar (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOTGB
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: The Mwangi Expanse (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOME
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Lost Omens: World Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> LOWG
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Night of the Gray Death (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> NGD
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Outlaws of Alkenstar #1: Punks in a Powder Keg (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> OoA1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Outlaws of Alkenstar #3: The Smoking Gun (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> OoA3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel" title="Player Core (Filter: Source)"
                     state="yes"><span className="glyphicon glyphicon-book"></span> PC1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Rage of Elements (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> RoE
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Season of Ghosts #2: Let the Leaves Fall (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SoG2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Season of Ghosts #4: To Bloom Below the Web (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SoG4
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Secrets of Magic (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SoM
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Stolen Fate Player’s Guide (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SF0
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Strength of Thousands #2: Spoken on the Song Wind (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SoT2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Strength of Thousands #3: Hurricane’s Howl (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SoT3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Strength of Thousands #4: Secrets of the Temple-City (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SoT4
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Strength of Thousands #6: Shadows of the Ancients (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> SoT6
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="The Fall of Plaguestone (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> FoP
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel" title="The Slithering (Filter: Source)"
                     state="yes"><span className="glyphicon glyphicon-book"></span> Sli
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel" title="Treasure Vault (Filter: Source)"
                     state="yes"><span className="glyphicon glyphicon-book"></span> TV
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Wake the Dead #2 (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> WtD2
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Wake the Dead #3 (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> WtD3
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Wake the Dead #4 (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> WtD4
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Wardens of Wildwood #1: Pactbreaker (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> WoW1
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel"
                     title="Wardens of Wildwood #2: Severed at the Root (Filter: Source)" state="yes"><span
                  className="glyphicon glyphicon-book"></span> WoW2
                </div>
                <div className="fltr__mini-pill   " title="Dragonkin Versatile Heritage (Filter: Source)" state="yes">
                  <span title="(Homebrew)" className="glyphicon glyphicon-glass"></span> DVH
                </div>
                <div className="fltr__mini-pill   " title="Finding your Path in the Krosmoz (Filter: Source)"
                     state="yes"><span title="(Homebrew)" className="glyphicon glyphicon-glass"></span> FPK
                </div>
                <div className="fltr__mini-pill   " title="Rabbitfolk (Filter: Source)" state="yes"><span
                  title="(Homebrew)" className="glyphicon glyphicon-glass"></span> 🐇
                </div>
                <div className="fltr__mini-pill   fltr__mini-pill--default-sel" title="Filter: Type"
                     state="yes">Ancestry
                </div>
                <div className="fltr__mini-pill   " title="Filter: Type" state="ignore">Archetype</div>
                <div className="fltr__mini-pill   " title="Filter: Type" state="ignore">Class</div>
                <div className="fltr__mini-pill   " title="Filter: Type" state="ignore">General</div>
                <div className="fltr__mini-pill   " title="Filter: Type" state="ignore">Skill</div>
                <div className="fltr__mini-pill" state="ignore"></div>
                <div className="fltr__mini-pill" state="ignore"></div>
                <div className="fltr__mini-pill" state="ignore"></div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Aasimar</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="yes">Anadi</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Android</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Aphorite
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Ardande</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Automaton
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Azarketi
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Beastkin
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Catfolk</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Changeling
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Conrasu</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Cra</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Dhampir</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Dragonkin
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Duskwalker
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Dwarf</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Elf</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Eniripsa
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Enutrof</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Fetchling
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Fleshwarp
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Ganzi</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Ghoran</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Gnoll</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Gnome</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Goblin</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Goloma</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Grippli</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Half-Elf
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Half-Orc
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Halfling
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Hobgoblin
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Human</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Ifrit</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Iop</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Kashrishi
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Kitsune</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Kobold</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Leshy</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Lizardfolk
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Nagaji</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Orc</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Oread</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Poppet</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Rabbitfolk
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Ratfolk</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Reflection
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage"
                     state="ignore">Reincarnated
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Sacrier</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Shisk</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Shoony</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Skeleton
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Sprite</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Sram</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Strix</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Suli</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Sylph</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Talos</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Tengu</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Tiefling
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Undine</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Vanara</div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Vishkanya
                </div>
                <div className="fltr__mini-pill   " title="Filter: Ancestry &amp; Heritage" state="ignore">Xelor</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Acrobat</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Alchemist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Aldori Duelist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Alkenstar Agent</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Alter Ego</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Animal Trainer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Archaeologist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Archer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Archetype</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Artillerist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Assassin</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Barbarian</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Bard</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Bastion</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Beast Gunner</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Beastmaster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Bellflower Tiller</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Blessed One</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Bounty Hunter</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Bright Lion</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Bullet Dancer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Butterfly Blade</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Captivator</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Cathartic Mage</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Cavalier</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Celebrity</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Champion</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Chronoskimmer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Cleric</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Clockwork Reanimator</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Crystal Keeper</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Curse Maelstrom</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Dandy</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Demolitionist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Dragon Disciple</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Drow Shootist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Druid</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Dual-Weapon Warrior</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Duelist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Edgewatch Detective</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Eldritch Archer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Eldritch Researcher</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Elementalist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Exorcist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Familiar Master</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Fighter</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Firebrand Braggart</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Firework Technician</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Flexible Spellcaster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Folklorist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Gelid Shard</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Geomancer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Ghost</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Ghost Eater</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Ghost Hunter</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Ghoul</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Gladiator</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Golden League Xun</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Golem Grafter</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Gray Gardener</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Gunslinger</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Halcyon Speaker</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Hallowed Necromancer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Harrower</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Hellknight</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Hellknight Armiger</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Hellknight Signifer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Herbalist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Horizon Walker</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Inventor</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Investigator</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Jalmeri Heavenseeker</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Juggler</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Kineticist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Knight Reclaimant</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Knight Vigilant</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Lastwall Sentry</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Lich</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Linguist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Lion Blade</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Living Monolith</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Living Vessel</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Loremaster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Magaambyan Attendant</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Magic Warrior</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Magus</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Marshal</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Martial Artist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Mauler</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Medic</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Mind Smith</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Monk</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Mummy</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Nantambu Chime-Ringer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Oozemorph</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Oracle</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Overwatch</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Pactbinder</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Pactbound Initiate</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Pathfinder Agent</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Pirate</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Pistol Phenom</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Poisoner</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Provocator</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Psychic</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Psychic Duelist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Ranger</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Reanimator</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Red Mantis Assassin</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Ritualist</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Rogue</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Runelord</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Runescarred</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Scion of Domora</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Scout</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Scroll Trickster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Scrollmaster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Scrounger</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Sentinel</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Shadowcaster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Shadowdancer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Shieldmarshal</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Sixth Pillar</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Sleepwalker</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Snarecrafter</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Sniping Duo</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Sorcerer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Soul Warden</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Soulforger</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Spell Trickster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Spellmaster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Spellshot</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Staff Acrobat</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Stalwart Defender</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Sterling Dynamo</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Student of Perfection</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Summoner</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Swashbuckler</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Swordmaster</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Talisman Dabbler</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Thaumaturge</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Time Mage</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Trapsmith</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Trick Driver</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Turpin Rowe Lumberjack
                </div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Undead Master</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Undead Slayer</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Unexpected Sharpshooter
                </div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Ursine Avenger Hood</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Vampire</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Vehicle Mechanic</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Verduran Shadow</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Vigilante</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Viking</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Weapon Improviser</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Wellspring Mage</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Witch</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Wizard</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Wrestler</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Zephyr Guard</div>
                <div className="fltr__mini-pill   " title="Filter: Archetype" state="ignore">Zombie</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Aftermath</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Alchemist</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Barbarian</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Bard</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Champion</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Class</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Cleric</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Deviant</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Druid</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Fighter</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Gunslinger</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Inventor</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Investigator</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Kineticist</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Magus</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Monk</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Oracle</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Psychic</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Ranger</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Rogue</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Sorcerer</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Summoner</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Swashbuckler</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Thaumaturge</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Witch</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">Wizard</div>
                <div className="fltr__mini-pill   " title="Filter: Class" state="ignore">[Class]</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Acrobatics</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Arcana</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Athletics</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Crafting</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Deception</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Diplomacy</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Intimidation</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Lore</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Medicine</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Nature</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Occultism</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Perception</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Performance</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Religion</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Society</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Stealth</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Survival</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">Thievery</div>
                <div className="fltr__mini-pill   " title="Filter: Skill" state="ignore">lore</div>
                <div className="fltr__mini-pill   " title="Filter: Activity" state="ignore">Action</div>
                <div className="fltr__mini-pill   " title="Filter: Activity" state="ignore">Free Action</div>
                <div className="fltr__mini-pill   " title="Filter: Activity" state="ignore">Reaction</div>
                <div className="fltr__mini-pill   " title="Filter: Activity" state="ignore">Two-Action</div>
                <div className="fltr__mini-pill   " title="Filter: Activity" state="ignore">Three-Action</div>
                <div className="fltr__mini-pill   " title="Filter: Activity" state="ignore">Varies</div>
                <div className="fltr__mini-pill   " title="Filter: Rarity" state="ignore">Common</div>
                <div className="fltr__mini-pill   " title="Filter: Rarity" state="ignore">Uncommon</div>
                <div className="fltr__mini-pill   " title="Filter: Rarity" state="ignore">Rare</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Composite</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Concentrate
                </div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Deviant</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Downtime</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Esoterica</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Exploration
                </div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Impulse</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Infusion</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Instinct</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Mindshift</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Overflow</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Psyche</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Reckless</div>
                <div className="fltr__mini-pill   " title="Filter: Action &amp; Ability" state="ignore">Tandem</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Attack</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Aura</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Concentrate</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Finisher</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Flourish</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Mindshift</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Move</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Open</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Press</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Psyche</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Rage</div>
                <div className="fltr__mini-pill   " title="Filter: Combat" state="ignore">Stance</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Auditory</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Curse</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Darkness</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Death</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Detection</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Disease</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Emotion</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Extradimensional</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Fear</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Fortune</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Healing</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Incapacitation</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Light</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Linguistic</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Mental</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Misfortune</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Morph</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Olfactory</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Poison</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Polymorph</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Prediction</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Revelation</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Scrying</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Teleportation</div>
                <div className="fltr__mini-pill   " title="Filter: Effect" state="ignore">Visual</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Air</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Cold</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Earth</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Electricity
                </div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Fire</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Force</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Metal</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Negative</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Positive</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Sonic</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Vitality</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Water</div>
                <div className="fltr__mini-pill   " title="Filter: Energy &amp; Element" state="ignore">Wood</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Additive</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Aftermath</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Amp</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Archetype</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Dedication</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Deviant</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Esoterica</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Evolution</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">General</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Modification</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Multiclass</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Oath</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Skill</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Social</div>
                <div className="fltr__mini-pill   " title="Filter: Feat" state="ignore">Vigilante</div>
                <div className="fltr__mini-pill   " title="Filter: Item" state="ignore">Artifact</div>
                <div className="fltr__mini-pill   " title="Filter: Item" state="ignore">Extradimensional</div>
                <div className="fltr__mini-pill   " title="Filter: Item" state="ignore">Magical</div>
                <div className="fltr__mini-pill   " title="Filter: Item" state="ignore">Poison</div>
                <div className="fltr__mini-pill   " title="Filter: Planar" state="ignore">Air</div>
                <div className="fltr__mini-pill   " title="Filter: Planar" state="ignore">Earth</div>
                <div className="fltr__mini-pill   " title="Filter: Planar" state="ignore">Fire</div>
                <div className="fltr__mini-pill   " title="Filter: Planar" state="ignore">Metal</div>
                <div className="fltr__mini-pill   " title="Filter: Planar" state="ignore">Water</div>
                <div className="fltr__mini-pill   " title="Filter: Planar" state="ignore">Wood</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Abjuration</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Conjuration</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Divination</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Enchantment</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Evocation</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Illusion</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Necromancy</div>
                <div className="fltr__mini-pill   " title="Filter: School" state="ignore">Transmutation</div>
                <div className="fltr__mini-pill   " title="Filter: Spell" state="ignore">Amp</div>
                <div className="fltr__mini-pill   " title="Filter: Tradition" state="ignore">Arcane</div>
                <div className="fltr__mini-pill   " title="Filter: Tradition" state="ignore">Divine</div>
                <div className="fltr__mini-pill   " title="Filter: Tradition" state="ignore">Occult</div>
                <div className="fltr__mini-pill   " title="Filter: Tradition" state="ignore">Primal</div>
                <div className="fltr__mini-pill   " title="Filter: Weapon" state="ignore">Nonlethal</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Concentration</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Electric</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Focus</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Hellknight</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Lineage</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Manipulate</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Metamagic</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Pervasive Magic</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Secret</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Shadow</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Spellshape</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">True Name</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Unstable</div>
                <div className="fltr__mini-pill   " title="Filter: General" state="ignore">Verbal</div>
                <div className="fltr__mini-pill   " title="Filter: Miscellaneous" state="ignore">Has Cost</div>
                <div className="fltr__mini-pill   " title="Filter: Miscellaneous" state="ignore">Has Frequency</div>
                <div className="fltr__mini-pill   " title="Filter: Miscellaneous" state="ignore">Has Prerequisites</div>
                <div className="fltr__mini-pill   " title="Filter: Miscellaneous" state="ignore">Has Requirements</div>
                <div className="fltr__mini-pill   " title="Filter: Miscellaneous" state="ignore">Has Special</div>
                <div className="fltr__mini-pill   " title="Filter: Miscellaneous" state="ignore">Has Trigger</div>
                <div className="fltr__mini-pill   " title="Filter: Miscellaneous" state="ignore">Leads to...</div>
                <div className="fltr__mini-pill  fltr__mini-pill--default-desel " title="Filter: Miscellaneous"
                     state="no">Variant
                </div>
              </div>
              <div id="feat-filtertools" className="input-group input-group--bottom flex no-shrink">
                <button className="col-5 sort btn btn-default btn-xs" data-sort="name">Name <span
                  className="caret_wrp caret caret--reverse"></span></button>
                <button className="col-1-5 sort btn btn-default btn-xs" data-sort="level">Lvl. <span
                  className="caret_wrp"></span></button>
                <button className="col-4 sort btn btn-default btn-xs" data-sort="prerequisites">Prerequisites <span
                  className="caret_wrp"></span></button>
                <button className="col-1-5 sort btn btn-default btn-xs" data-sort="source">S. <span
                  className="caret_wrp"></span></button>
              </div>
              {/*FIXME: Get this list to behave*/}
              <ul className="list list--stats feats" style={{maxHeight: "78vh"}}>
                <li className="row "><a href="##anadi%20lore_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Anadi Lore</span>
                  <span className="col-1-5 text-center">1st</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##disorienting%20venom_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Disorienting Venom</span>
                  <span className="col-1-5 text-center">9th</span>
                  <span className="col-4 text-center">Venomous Anadi</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##friendform_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Friendform</span>
                  <span className="col-1-5 text-center">5th</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##hunter's%20fangs_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Hunter's Fangs</span>
                  <span className="col-1-5 text-center">5th</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##hybrid%20shape_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Hybrid Shape</span>
                  <span className="col-1-5 text-center">5th</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##reassuring%20presence_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Reassuring Presence</span>
                  <span className="col-1-5 text-center">1st</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##skittertalk_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Skittertalk</span>
                  <span className="col-1-5 text-center">1st</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##strand%20strider_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Strand Strider</span>
                  <span className="col-1-5 text-center">9th</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##studious%20adept_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Studious Adept</span>
                  <span className="col-1-5 text-center">9th</span>
                  <span className="col-4 text-center">Studious Magic</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##studious%20magic_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Studious Magic</span>
                  <span className="col-1-5 text-center">1st</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##web%20hunter_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Web Hunter</span>
                  <span className="col-1-5 text-center">9th</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##web%20walker_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Web Walker</span>
                  <span className="col-1-5 text-center">1st</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##web%20weaver_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Web Weaver</span>
                  <span className="col-1-5 text-center">1st</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
                <li className="row "><a href="##webslinger_lome" className="lst--border">
                  <span className="bold col-5 pl-0">Webslinger</span>
                  <span className="col-1-5 text-center">13th</span>
                  <span className="col-4 text-center">—</span>
                  <span className="col-1-5 text-center sourceLOME" title="Lost Omens: The Mwangi Expanse">LOME</span>
                </a></li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="wrp-stat-tab" id="stat-tabs">
              <div id="tabs-right"><a className="ui-tab__btn-tab-head btn btn-default" id="btn-feat-link"
                                      title="View this feat on the Feats page"
                                      href="feats.html#anadi%20lore_lome,flstsource:luis-dragonkinvh=1~luis-rabbitfolk=1~fpkrosmoz=1,flopsource:extend,flstancestry%20%26%20heritage:anadi=1,flopancestry%20%26%20heritage:extend"><span
                className="glyphicon glyphicon-list"></span></a>
                <button className="ui-tab__btn-tab-head btn btn-default" id="btn-popout"
                        title="Popout Window (SHIFT for Source Data)"><span
                  className="glyphicon glyphicon-new-window"></span></button>
              </div>
            </div>
            <div className="wrp-stats-table">
              <div className="stats pf2-stat" id="featstats">
                <div className="flex " data-page="feats.html" data-source="LOME" data-hash="anadi%20lore_lome">
                  <p className="pf2-stat pf2-stat__name"><span className="stats-name copyable"
                                                               onMouseDown="event.preventDefault()"
                                                               onClick="Renderer.utils._pHandleNameClick(this)">Anadi Lore</span>
                  </p>
                  <p className="pf2-stat pf2-stat__name pf2-stat__name--level">
                    <span title="Identification DC 15 ">FEAT  1</span>
                  </p>
                </div>
                <div className="pf2-stat pf2-stat__line"></div>
                <a href="traits.html#anadi" className="pf2-trait pf2-trait--left pf2-trait--right"
                   onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'traits.html', 'TRT', 'anadi', null)"
                   onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                   onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                   onTouchStart="Renderer.hover.handleTouchStart(event, this)">anadi<span
                  style={{letterSpacing: "-.2em"}}>&nbsp;</span></a>

                <p className="pf2-stat__text">You've learned how to provide for your community, be it through
                  hard-earned sustenance or useful crafts. You gain the trained proficiency rank in <span
                    className="help--hover"
                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'skill', 'CRB', 'crafting_crb', null)"
                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">Crafting</span> and <span
                    className="help--hover"
                    onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'skill', 'CRB', 'survival_crb', null)"
                    onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                    onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                    onTouchStart="Renderer.hover.handleTouchStart(event, this)">Survival</span>. If you would
                  automatically become trained in one of those skills (from your background or class, for example), you
                  become trained in a skill of your choice. You also become trained in <span className="help--hover"
                                                                                             onMouseOver="Renderer.hover.pHandleLinkMouseOver(event, this, 'skill', 'CRB', 'lore_crb', null)"
                                                                                             onMouseLeave="Renderer.hover.handleLinkMouseLeave(event, this)"
                                                                                             onMouseMove="Renderer.hover.handleLinkMouseMove(event, this)"
                                                                                             onTouchStart="Renderer.hover.handleTouchStart(event, this)">Anadi Lore</span>.
                </p>


                <p className="pf2-stat pf2-stat__source">

                  <a href="https://paizo.com/products/btq026i4"><strong>Lost Omens: The Mwangi Expanse</strong></a>,
                  page 106.

                </p></div>
            </div>
          </div>
        </div>

        {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
        {/*{!selectedRace || Object.keys(selectedRace).length === 0 ?*/}
        {/*  <div className="view-col" id="contentwrapper">*/}
        {/*    <div id="wrp-pagecontent" className="relative wrp-stats-table placeholder">*/}
        {/*      <table id="pagecontent" className="w-100 stats">*/}
        {/*        <tbody>*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <td colSpan="6" className="initial-message initial-message--med">Select an entry from the list to*/}
        {/*            view it here*/}
        {/*          </td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </div>*/}
        {/*  </div> :*/}
        {/*  <Tabs className="view-col" id="contentwrapper">*/}
        {/*    <TabList className="w-100 ve-flex" id="stat-tabs" defaultValue={0}*/}
        {/*             style={{paddingLeft: "0px", marginBottom: "0px"}}>*/}
        {/*      <Tab className={buttonTab + " ui-tab__btn-tab-head--active"}>*/}
        {/*        Traits*/}
        {/*      </Tab>*/}
        {/*      <Tab className={buttonTab}>*/}
        {/*        Info*/}
        {/*      </Tab>*/}
        {/*      {(selectedRace.images && selectedRace.images.length > 0) ? <Tab className={buttonTab}>*/}
        {/*        Images*/}
        {/*      </Tab> : ""}*/}
        {/*      <li key={"buttons"} className="ml-auto ve-flex" id="tabs-right">*/}
        {/*        <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"*/}
        {/*                title="Pin (Toggle) (Hotkey: p/P)">*/}
        {/*          <span className="glyphicon glyphicon-pushpin"></span>*/}
        {/*        </button>*/}
        {/*        <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"*/}
        {/*                title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)">*/}
        {/*          <span className="glyphicon glyphicon-new-window"></span>*/}
        {/*        </button>*/}
        {/*        <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"*/}
        {/*                title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)">*/}
        {/*          <span className="glyphicon glyphicon-magnet"></span>*/}
        {/*        </button>*/}
        {/*        <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"*/}
        {/*                title="Other Options">*/}
        {/*          <span className="glyphicon glyphicon-option-vertical"></span>*/}
        {/*        </button>*/}
        {/*      </li>*/}
        {/*    </TabList>*/}
        {/*    <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">*/}
        {/*      <table className="w-100 stats">*/}
        {/*        <thead>*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        <DetailsHeader selectedRace={selectedRace}/>*/}
        {/*        </thead>*/}
        {/*        <tbody>*/}
        {/*        <tr>*/}
        {/*          <td colSpan={6} className="pt-0">*/}
        {/*            <ul className="rd__list rd__list-hang-notitle">*/}
        {/*              {selectedRace.tags?.length ? <li key={"type"} className="rd__li">*/}
        {/*                <p className="rd__p-list-item">*/}
        {/*                  <span className="bold rd__list-item-name">Tags :</span>*/}
        {/*                  {" " + selectedRace.tags.join(", ")}*/}
        {/*                </p>*/}
        {/*              </li> : ""}*/}
        {/*              {selectedRace.boost?.length ? <li key={"ability"} className="rd__li">*/}
        {/*                <p className="rd__p-list-item">*/}
        {/*                  <span className="bold rd__list-item-name">Primes d'attributs:</span>*/}
        {/*                  {" " + selectedRace.boost.join(", ")}*/}
        {/*                </p>*/}
        {/*              </li> : ""}*/}
        {/*              {selectedRace.flaw?.length ? <li key={"ability"} className="rd__li">*/}
        {/*                <p className="rd__p-list-item">*/}
        {/*                  <span className="bold rd__list-item-name">Pénalité d'attribut:</span>*/}
        {/*                  {" " + selectedRace.flaw.join(", ")}*/}
        {/*                </p>*/}
        {/*              </li> : ""}*/}
        {/*              {selectedRace.size ? <li key={"size"} className="rd__li">*/}
        {/*                <p className="rd__p-list-item">*/}
        {/*                  <span className="bold rd__list-item-name">Taille:</span>*/}
        {/*                  {" " + selectedRace.size}*/}
        {/*                </p>*/}
        {/*              </li> : ""}*/}
        {/*              {selectedRace.speed ? <li key={"speed"} className="rd__li">*/}
        {/*                <p className="rd__p-list-item">*/}
        {/*                  <span className="bold rd__list-item-name">Vitesse:</span>*/}
        {/*                  {" " + selectedRace.speed}*/}
        {/*                </p>*/}
        {/*              </li> : ""}*/}
        {/*              {selectedRace.languages?.length ? <li key={"languages"} className="rd__li">*/}
        {/*                <p className="rd__p-list-item">*/}
        {/*                  <span className="bold rd__list-item-name">Langues.</span>*/}
        {/*                  {" " + selectedRace.languages.join(", ")}*/}
        {/*                </p>*/}
        {/*              </li> : ""}*/}
        {/*            </ul>*/}
        {/*            <div className="w-100 py-1"></div>*/}
        {/*            <div className="rd__b rd__b--2">*/}
        {/*              <span className="rd__h rd__h--2" data-title-index="1">*/}
        {/*                <span className="entry-title-inner">Traits</span>*/}
        {/*              </span>*/}
        {/*              {RenderModule({...renderProps}).render(selectedRace.traits)}*/}
        {/*            </div>*/}
        {/*            <div className="rd__b rd__b--2">*/}
        {/*                {selectedRace.hideHeritages ? "" : <>*/}
        {/*                  <span className="rd__h rd__h--2" data-title-index="1">*/}
        {/*                    <span className="entry-title-inner">Héritages</span>*/}
        {/*                  </span>*/}
        {/*                  {RenderModule({...renderProps}).render(selectedRace.heritages)}*/}
        {/*                  <div className="rd__b rd__b--3">*/}
        {/*                    <span className="rd__h rd__h--3" data-title-index="1">*/}
        {/*                      <span className="entry-title-inner">Héritage Polyvalent. </span>*/}
        {/*                    </span>*/}
        {/*                    Les peuples de Golarion sont nombreux et ont une longue histoire de mélange ou de contact avec*/}
        {/*                    des forces capables de modifier la structure même d'un corps ou d'une âme mortels. Les enfants*/}
        {/*                    nés de tels parents peuvent avoir des traits de chacun de leurs parents ou des manifestations*/}
        {/*                    physiologiques des forces qui ont influencé leurs ancêtres, se manifestant sous la forme d'un*/}
        {/*                    héritage spécifique.*/}
        {/*                    <br/>*/}
        {/*                    Retrouvez la liste des héritages polyvalent <Link to={"#heritage"}>ici</Link>*/}
        {/*                  </div>*/}
        {/*                </>}*/}
        {/*            </div>*/}
        {/*          </td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <td colSpan={6} className="pt-3">*/}
        {/*            <b>Source:</b>*/}
        {/*            <i title={Parser.SOURCE_JSON_TO_FULL[selectedRace.source]}>{selectedRace.source}</i>*/}
        {/*            , page {selectedRace.page}. {selectedRace.reprinted}*/}
        {/*          </td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </TabPanel>*/}
        {/*    <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">*/}
        {/*      <table className="w-100 stats">*/}
        {/*        <thead>*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        <DetailsHeader selectedRace={selectedRace}/>*/}
        {/*        </thead>*/}
        {/*        <tbody>*/}
        {/*        <tr>*/}
        {/*          <td colSpan={6} className="pt-3">*/}
        {/*            <div className="rd__b rd__b--1">*/}
        {/*              <div className="rd__b rd__b--2">*/}
        {/*                {RenderModule(renderProps).render(selectedRace.info)}*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </TabPanel>*/}
        {/*    <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">*/}
        {/*      <table className="w-100 stats">*/}
        {/*        <thead>*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        <DetailsHeader selectedRace={selectedRace}/>*/}
        {/*        </thead>*/}
        {/*        <tbody>*/}
        {/*        {selectedRace.images.map(image => {*/}
        {/*          console.log(image)*/}
        {/*          return <tr>*/}
        {/*            <th colSpan="6">*/}
        {/*              <img src={image.url} alt={image.name} style={{width:"100%"}}/>*/}
        {/*              <h5>{image.caption}</h5>*/}
        {/*            </th>*/}
        {/*          </tr>*/}
        {/*        })}*/}
        {/*        <tr>*/}
        {/*          <th className="ve-tbl-border" colSpan="6"></th>*/}
        {/*        </tr>*/}
        {/*        </tbody>*/}
        {/*      </table>*/}
        {/*    </TabPanel>*/}
        {/*  </Tabs>*/}
        {/*}*/}
      </div>
    </div>
  )
}