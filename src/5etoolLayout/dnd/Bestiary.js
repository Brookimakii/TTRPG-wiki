import {getResource, Resources} from "../../resources/ResourcesFetch";
import {RenderModule, Selector5e} from "../5eLayoutModules";
import {Parser} from "../../layout/5e/js/parser";
import React from "react";
import type {Monster} from "../../layout/5e/Models";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

export const Dnd5eBestiary = () => {

  const columns = [{
    id: "Nom", sortId: "name", classSize: "ve-col-4-2", colClass: "bold ve-col-4-2 pl-0 pr-1"
  }, {
    id: "Type", sortId: "type", classSize: "ve-col-4-1", colClass: "ve-col-4-1 px-1"
  }, {
    id: "FP", sortId: "skills", classSize: "ve-col-1-7", colClass: "ve-col-1-7 px-1 ve-text-center"
  }, {
    id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-2 ve-text-center pl-1 pr-0"
  }]

  const bestiary = getResource(Resources.bestiary)
  const {
    selected,
    elements,
    setElements,
    pinnedElements,
    setPinnedElements,
    updateSortElementsState,
    TableHeader,
    DisplayListPinned,
    DisplayList,
    DetailsHeader,
    TempFilters
  } = Selector5e(bestiary, columns, "name");

  const selectedMonster: Monster = {...selected}

  const renderEntries = (entry, toggle, depth) => {
    return <div className="rd__b rd__b--3">
      <p>
        <span className="rd__h rd__h--3" data-title-index="1">
          <span className="entry-title-inner">{entry.name}. </span>
        </span>
        {RenderModule({...renderProps, defaultString: (string) => string,}).render(entry.entries)}
      </p>
    </div>
  }

  const renderProps = {
    renderEntries: renderEntries
  }

  const buttonTab = "ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0"

  function formatElement(value) {
    return undefined;
  }

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <div className="fltr__mini-view ve-btn-group">
        </div>
        {DisplayList(elements)}
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selectedMonster || Object.keys(selectedMonster).length === 0 ?
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
        <TabList className="w-100 ve-flex" id="stat-tabs" defaultValue={0}
                 style={{paddingLeft: "0px", marginBottom: "0px"}}>
          <Tab className={buttonTab + " ui-tab__btn-tab-head--active"}>
            Traits
          </Tab>
          <Tab className={buttonTab}>
            Info
          </Tab>
          {(selectedMonster.images && selectedMonster.images.length > 0) ? <Tab className={buttonTab}>
            Images
          </Tab> : ""}
          <li key={"buttons"} className="ml-auto ve-flex" id="tabs-right">
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
              {selectedMonster.token ? <div id="float-token" className="relative best-ecgen__hidden">
                <a href={selectedMonster.token.url} className="stats__wrp-token" target="_blank"
                   rel="noopener noreferrer">
                  <img src={selectedMonster.token.url} className="stats__token" alt={selectedMonster.token.name}
                       loading="lazy" style="max-width: 602px;"/>
                </a>
              </div> : ""}
              <table className="w-100 stats">
                <thead>
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                <DetailsHeader selectedMonster={selectedMonster}/>
                {selectedMonster.token ? <tr>
                  <td colSpan="6" className="pt-0">
                    <div className="ve-tbl-divider mt-0 stats__wrp-avoid-token"></div>
                  </td>
                </tr> : ""}
                </thead>
                <tbody>
                <tr>
                  <td colSpan="6">
                    <div className="stats__wrp-avoid-token">
                      <i>
                        {selectedMonster.identity.type}
                        {selectedMonster.identity.tag ? "(" + selectedMonster.identity.tag + ")" : ""} de Taille
                        {Parser.sizeAbvToFull(selectedMonster.identity.size)},
                        {Parser.alignAbvToFull(selectedMonster.identity.alignment)}
                      </i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <div className="split-v-center stats__wrp-avoid-token">
                      <div>
                        <strong title="Armor Class">AC</strong>
                        {selectedMonster.defense.ca}
                        {selectedMonster.defense.caPrecision ? "(" + selectedMonster.defense.caPrecision + ")" : ""}
                      </div>
                      {selectedMonster.defense.initiative ? <div>
                        <strong>Initiative</strong>
                        <span>{selectedMonster.defense.initiative}</span> ({10 + selectedMonster.defense.initiative})
                      </div> : ""}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <div className="stats__wrp-avoid-token"><strong title="Hit Points">HP</strong>
                      <span
                        title={"Maximum: " + (selectedMonster.defense.hpRoll.dice.sides * selectedMonster.defense.hpRoll.dice.amount + selectedMonster.defense.hpRoll.bonus)}
                        className="help-subtle">{Math.floor((selectedMonster.defense.hpRoll.dice.sides * selectedMonster.defense.hpRoll.dice.amount + selectedMonster.defense.hpRoll.bonus) / 2)}</span> (
                      <span>
                      {selectedMonster.defense.hpRoll.dice.amount}d
                        {selectedMonster.defense.hpRoll.dice.sides}
                        {selectedMonster.defense.hpRoll.bonus ? " + " + selectedMonster.defense.hpRoll.bonus : ""}
                    </span>)
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <div className="stats__wrp-avoid-token"><strong>Speed</strong> {selectedMonster.defense.speed} m.
                      {Object.entries(selectedMonster.defense.otherSpeed).map(([key, value], idx) => {
                        return "," + key + " " + value + " m." + (selectedMonster.defense.flyingBonus && (key === "Vol" || key === "Fly") ? " (" + selectedMonster.defense.flyingBonus + ")" : "")
                      })}</div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6" className="pt-0 pb-3">
                    <table className="w-100">
                      <tbody>
                      <tr>
                        <td className="stats-tbl-ability-scores__lbl-abv">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps">Mod.</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps">JdS</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-spacer">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-abv">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps">Mod.</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps">JdS</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-spacer">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-abv">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps"></div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps">Mod.</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score">
                          <div className="ve-muted ve-text-center small-caps">JdS</div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="stats-tbl-ability-scores__lbl-abv stats__disp-as-score--physical stats__disp-as-score--label">
                          <div className="bold small-caps ve-text-right">For</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-score--physical">
                          <div className="ve-text-center">{selectedMonster.attribut.for}</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                            <span>{Math.floor((selectedMonster.attribut.for - 10) / 2)}</span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                          <span>
                            <span>
                              {selectedMonster.proficiencies.saves.for ? selectedMonster.proficiencies.saves.for : Math.floor((selectedMonster.attribut.for - 10) / 2)}
                            </span>
                          </span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-spacer">
                          <div></div>
                        </td>
                        <td
                          className="stats-tbl-ability-scores__lbl-abv stats__disp-as-score--physical stats__disp-as-score--label">
                          <div className="bold small-caps ve-text-right">Dex</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-score--physical">
                          <div className="ve-text-center">{selectedMonster.attribut.dex}</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                            <span>{Math.floor((selectedMonster.attribut.dex - 10) / 2)}</span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                          <span>
                            <span>
                              {selectedMonster.proficiencies.saves.dex ? selectedMonster.proficiencies.saves.dex : Math.floor((selectedMonster.attribut.dex - 10) / 2)}
                            </span>
                          </span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-spacer">
                          <div></div>
                        </td>
                        <td
                          className="stats-tbl-ability-scores__lbl-abv stats__disp-as-score--physical stats__disp-as-score--label">
                          <div className="bold small-caps ve-text-right">Con</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-score--physical">
                          <div className="ve-text-center">{selectedMonster.attribut.con}</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                            <span>{Math.floor((selectedMonster.attribut.con - 10) / 2)}</span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                          <span>
                            <span>
                              {selectedMonster.proficiencies.saves.con ? selectedMonster.proficiencies.saves.con : Math.floor((selectedMonster.attribut.con - 10) / 2)}
                            </span>
                          </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="stats-tbl-ability-scores__lbl-abv stats__disp-as-score--mental stats__disp-as-score--label">
                          <div className="bold small-caps ve-text-right">Int</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-score--physical">
                          <div className="ve-text-center">{selectedMonster.attribut.int}</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                            <span>{Math.floor((selectedMonster.attribut.int - 10) / 2)}</span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                          <span>
                            <span>
                              {selectedMonster.proficiencies.saves.int ? selectedMonster.proficiencies.saves.int : Math.floor((selectedMonster.attribut.int - 10) / 2)}
                            </span>
                          </span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-spacer">
                          <div></div>
                        </td>
                        <td
                          className="stats-tbl-ability-scores__lbl-abv stats__disp-as-score--mental stats__disp-as-score--label">
                          <div className="bold small-caps ve-text-right">Wis</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-score--physical">
                          <div className="ve-text-center">{selectedMonster.attribut.sag}</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                            <span>{Math.floor((selectedMonster.attribut.sag - 10) / 2)}</span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                          <span>
                            <span>
                              {selectedMonster.proficiencies.saves.sag ? selectedMonster.proficiencies.saves.sag : Math.floor((selectedMonster.attribut.sag - 10) / 2)}
                            </span>
                          </span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-spacer">
                          <div></div>
                        </td>
                        <td
                          className="stats-tbl-ability-scores__lbl-abv stats__disp-as-score--mental stats__disp-as-score--label">
                          <div className="bold small-caps ve-text-right">Cha</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-score--physical">
                          <div className="ve-text-center">{selectedMonster.attribut.cha}</div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                            <span>{Math.floor((selectedMonster.attribut.cha - 10) / 2)}</span>
                          </div>
                        </td>
                        <td className="stats-tbl-ability-scores__lbl-score stats__disp-as-bonus--physical">
                          <div className="ve-text-center">
                          <span>
                            <span>
                              {selectedMonster.proficiencies.saves.cha ? selectedMonster.proficiencies.saves.cha : Math.floor((selectedMonster.attribut.cha - 10) / 2)}
                            </span>
                          </span>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {selectedMonster.proficiencies.skills ? <tr>
                  <td colSpan="6"><strong>Compétences</strong>
                    {Object.entries(selectedMonster.proficiencies.skills).map(([key, value], idx) => <>
                      <span data-mon-skill={key + "|" + value}>
                      <span>{key}</span>
                      <span>
                        {typeof value === "string"?<span>{value}</span>:formatElement(value)}
                      </span>
                    </span>{idx === Object.entries(selectedMonster.proficiencies.skills).length - 1 ? ", " : ""}
                    </>)}
                  </td>
                </tr> : ""}
                {selectedMonster.affinities.weakness ? <tr>
                  <td colSpan="6"><strong>Faiblesses</strong>
                    {Object.entries(selectedMonster.affinities.weakness).map(([key, value], idx) => <>
                      <span data-mon-skill={key + "|" + value}>
                      <span>{key}</span>
                      <span>
                        {typeof value === "string"?<span>{value}</span>:formatElement(value)}
                      </span>
                    </span>{idx === Object.entries(selectedMonster.affinities.weakness).length - 1 ? ", " : ""}
                    </>)}
                  </td>
                </tr> : ""}
                {selectedMonster.affinities.resistance ? <tr>
                  <td colSpan="6"><strong>Faiblesses</strong>
                    {Object.entries(selectedMonster.affinities.resistance).map(([key, value], idx) => <>
                      <span data-mon-skill={key + "|" + value}>
                      <span>{key}</span>
                      <span>
                        {typeof value === "string"?<span>{value}</span>:formatElement(value)}
                      </span>
                    </span>{idx === Object.entries(selectedMonster.affinities.resistance).length - 1 ? ", " : ""}
                    </>)}
                  </td>
                </tr> : ""}
                {selectedMonster.affinities.immunity ? <tr>
                  <td colSpan="6"><strong>Faiblesses</strong>
                    {Object.entries(selectedMonster.affinities.immunity).map(([key, value], idx) => <>
                      <span data-mon-skill={key + "|" + value}>
                      <span>{key}</span>
                      <span>
                        {typeof value === "string"?<span>{value}</span>:formatElement(value)}
                      </span>
                    </span>{idx === Object.entries(selectedMonster.affinities.immunity).length - 1 ? ", " : ""}
                    </>)}
                  </td>
                </tr> : ""}
                {selectedMonster.affinities.condition ? <tr>
                  <td colSpan="6"><strong>Faiblesses</strong>
                    {Object.entries(selectedMonster.affinities.condition).map(([key, value], idx) => <>
                      <span data-mon-skill={key + "|" + value}>
                      <span>{key}</span>
                      <span>
                        {typeof value === "string"?<span>{value}</span>:formatElement(value)}
                      </span>
                    </span>{idx === Object.entries(selectedMonster.affinities.condition).length - 1 ? ", " : ""}
                    </>)}
                  </td>
                </tr> : ""}
                <tr>
                  <td colSpan="6">
                    <strong>Senses</strong> {selectedMonster.senses.map((sens, idx) => {
                    return Parser.sensAbvToFull(sens) + ", "
                  })}
                    Perception
                    Passive {10 + (selectedMonster.proficiencies.skills?.perception ?? Math.floor((selectedMonster.attribut.for - 10) / 2))}
                  </td>
                </tr>
                <tr>
                  <td colSpan="6"><strong>Languages</strong> {selectedMonster.languages.join(", ")}</td>
                </tr>
                <tr className={"relative"}>
                  <td colSpan="6">
                    <div className="split-v-center stats__wrp-avoid-token">
                      <div>
                        <strong title="Facteur Puissance">FP</strong>
                        {selectedMonster.fp}
                      </div>
                      {selectedMonster.defense.initiative ? <div>
                        <strong>Bonus de Maîtrise</strong>
                        <span>+{selectedMonster.proficiencies.bonus}</span>
                      </div> : ""}
                    </div>
                  </td>
                </tr>
                <tr></tr>
                <tr></tr>
                {selectedMonster.traits ? <>
                  <tr>
                    <td colSpan="6"><h3 className="stats__sect-header-inner">Traits</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="stats__sect-row-inner">
                      {RenderModule(renderProps).render(selectedMonster.traits)}
                    </td>
                  </tr>
                </> : ""}
                {selectedMonster.actions ? <>
                  <tr>
                    <td colSpan="6"><h3 className="stats__sect-header-inner">Actions</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="stats__sect-row-inner">
                      {RenderModule(renderProps).render(selectedMonster.actions)}
                    </td>
                  </tr>
                </> : ""}
                {selectedMonster.bonusActions ? <>
                  <tr>
                    <td colSpan="6"><h3 className="stats__sect-header-inner">Actions Bonus</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="stats__sect-row-inner">
                      {RenderModule(renderProps).render(selectedMonster.bonusActions)}
                    </td>
                  </tr>
                </> : ""}
                {selectedMonster.reactions ? <>
                  <tr>
                    <td colSpan="6"><h3 className="stats__sect-header-inner">Réaction</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="stats__sect-row-inner">
                      {RenderModule(renderProps).render(selectedMonster.reactions)}
                    </td>
                  </tr>
                </> : ""}
                {selectedMonster.legendaryActions ? <>
                  <tr>
                    <td colSpan="6"><h3 className="stats__sect-header-inner">Actions Légendaires</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="stats__sect-row-inner">
                      {RenderModule(renderProps).render(selectedMonster.legendaryActions)}
                    </td>
                  </tr>
                </> : ""}
                {selectedMonster.lairAction ? <>
                  <tr>
                    <td colSpan="6"><h3 className="stats__sect-header-inner">Action d'Antre</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="stats__sect-row-inner">
                      {RenderModule(renderProps).render(selectedMonster.lairAction)}
                    </td>
                  </tr>
                </> : ""}
                {selectedMonster.regionEffects ? <>
                  <tr>
                    <td colSpan="6"><h3 className="stats__sect-header-inner">Effets Régionaux</h3></td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="stats__sect-row-inner">
                      {RenderModule(renderProps).render(selectedMonster.regionEffects)}
                    </td>
                  </tr>
                </> : ""}

                <tr>
                  <td colSpan="6">
                    <div><b>Habitat:</b>
                      {selectedMonster.habitat.join(", ")}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6" className="pt-3">
                    <b>Source:</b>
                    <i title={Parser.SOURCE_JSON_TO_FULL[selectedMonster.source]}>{selectedMonster.source}</i>,
                    page {selectedMonster.page}
                  </td>
                </tr>
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabPanel>
        <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
          <table className="w-100 stats">
            <thead>
            <tr>
              <th className="ve-tbl-border" colSpan="6"></th>
            </tr>
            <DetailsHeader selectedRace={selectedMonster}/>
            </thead>
            <tbody>
            <tr>
              <td colSpan={6} className="pt-3">
                <div className="rd__b rd__b--1">
                  <div className="rd__b rd__b--2">
                    {RenderModule(renderProps).render(selectedMonster.info)}
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="ve-tbl-border" colSpan="6"></th>
            </tr>
            </tbody>
          </table>
        </TabPanel>
        <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
          <table className="w-100 stats">
            <thead>
            <tr>
              <th className="ve-tbl-border" colSpan="6"></th>
            </tr>
            <DetailsHeader selectedRace={selectedMonster}/>
            </thead>
            <tbody>
            {selectedMonster.images.map(image => {
              console.log(image)
              return <tr>
                <th colSpan="6">
                  <img src={image.url} alt={image.name}/>
                  <h5>{image.caption}</h5>
                </th>
              </tr>
            })}
            <tr>
              <th className="ve-tbl-border" colSpan="6"></th>
            </tr>
            </tbody>
          </table>
        </TabPanel>
      </Tabs>
      }
    </div>
  </div>)
}