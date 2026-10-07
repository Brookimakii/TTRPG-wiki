import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

import '../css/quickref.css'
import '../css/icons.css'
import React, {useState} from "react";
import {RenderModule, ToggleState} from "../5eLayoutModules";
import {getResource, Resources} from "../../resources/ResourcesFetch";

// Segment data (title/badge/color + one or more "groups", each an optional
// intro paragraph plus a list of entries) lives entirely in
// resources/dnd5e/cheatsheet.json now, instead of being hardcoded here.
// Adding, removing, or reordering a segment/group/entry is just an edit to
// that JSON (e.g. via the Cheatsheet Lab tool) — no code change needed.

export const DnDCheatsheet = () => {

  // Holds {entry, segment, groupKey} for whichever entry's detail is
  // currently open, or null. Rendered inline, right after ALL of that
  // entry's group's tiles (never in between them) — so it always drops
  // below the whole group and pushes down whatever comes after it on the
  // page, but never displaces a sibling tile sitting in the same row.
  const [openEntry, setOpenEntry] = useState(null)
  const [query, setQuery] = useState("")

  const segments = getResource(Resources.cheatsheet)?.segments || []

  const buttonTab = "ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0"

  const handleClick = (entry, segment, groupKey) => {
    setOpenEntry((cur) => (cur && cur.entry === entry) ? null : {entry, segment, groupKey})
  }
  const closeDetail = () => setOpenEntry(null)

  const {toggleStateChange, getToggleState} = ToggleState()

  const q = query.trim().toLowerCase()
  const matchesQuery = (entry) => {
    if (!q) return true
    return [entry.title, entry.subtitle, entry.description].some(
      (s) => s && s.toLowerCase().includes(q)
    )
  }

  function renderDetail(entry, segment) {
    return <div className="section-container modal-container" id="modal-container"
                style={{backgroundColor: segment.color, borderColor: segment.color}}>
      <div className="section-title" id="modal-title">{entry.title}
        <span className="float-right clickable no-select" onClick={closeDetail} style={{cursor: "pointer"}}>
          {segment.title} &nbsp;✕
        </span>
      </div>
      <div className="section-content">
        {entry.description ? <p style={{marginTop: 0}}>{entry.description}</p> : ""}
        {entry.bullets && entry.bullets.length ? <div id={"modal-bullets"}>
          {entry.bullets.map((bullet, idx) => <React.Fragment key={idx}>
            <div className={"fonstsize"} style={{marginTop: 0}}>{RenderModule({}).render(bullet)}</div>
            {idx !== entry.bullets.length - 1 ? <hr/> : ""}
          </React.Fragment>)}
        </div> : ""}
        {entry.reference ? <p className="text-muted" style={{marginTop: 6, marginBottom: 0, fontStyle: "italic"}}>
          {entry.reference}
        </p> : ""}
      </div>
    </div>
  }

  // Renders one "group" within a segment: an optional intro paragraph, its
  // list of clickable tiles, and — only if the open entry belongs to THIS
  // group — the detail box after all of them.
  function populateGroup(group, groupIdx, segment) {
    const entries = (group.entries || []).filter(matchesQuery)
    if (q && entries.length === 0) return null
    const groupKey = segment.key + "|" + groupIdx
    const openHere = openEntry && openEntry.groupKey === groupKey ? openEntry : null
    return <React.Fragment key={groupIdx}>
      {group.intro ? <div className="section-row section-subtitle text fontsize">
        {group.intro}
      </div> : ""}
      <div className="section-row">
        {entries.map((entry, entryIdx) => (
          <div className="item itemsize" key={entryIdx} onClick={() => handleClick(entry, segment, groupKey)}>
            <div className={"item-icon iconsize icon-" + entry.icon}></div>
            <div className="item-text-container text">
              <div className="item-title">{entry.title}</div>
              <div className="item-desc">{entry.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      {openHere ? renderDetail(openHere.entry, openHere.segment) : ""}
    </React.Fragment>
  }

  return (<div className="view-col-group--cancer h-100 mh-0">
      <div className="container view-col-wrapper view-col-wrapper--cancer">
        <Tabs className="view-col" id="contentwrapper">
          <TabList className="w-100 ve-flex" id="stat-tabs">
            <Tab className={buttonTab + " ui-tab__btn-tab-head--active"}>Actions de Joueurs & Références Rapides</Tab>
          </TabList>
          <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
            <table className={"w-100 stats"}>
              <thead>
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              <tr>
                <th className="stats__th-name ve-text-left pb-0 " colSpan="6" data-page="races.html">
                  <div className="split-v-end">
                    <div className="ve-flex-v-center">
                      <h1 className="stats__h-name copyable m-0">Actions de Joueurs & Références Rapides</h1>
                    </div>
                    <input
                      type="text"
                      placeholder="Rechercher…"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      style={{
                        background: "var(--ve-bg-panel, #1d1a14)",
                        border: "1px solid var(--ve-border, #3a3324)",
                        borderRadius: "3px",
                        color: "inherit",
                        padding: "5px 9px",
                        fontSize: "13px",
                        minWidth: "220px",
                      }}
                    />
                  </div>
                </th>
              </tr>
              </thead>
              <tbody className="page fontsize" data-size="fullscreen">
              {segments.map((segment) => {
                const groups = segment.groups || []
                const rendered = groups
                  .map((group, gi) => populateGroup(group, gi, segment))
                  .filter(Boolean)
                if (q && rendered.length === 0) return null
                return <tr key={segment.key}>
                  <td className="pt-0" colSpan="6">
                    <div id={"section-" + segment.key} className="section-container">
                      <div className="section-title">
                        {segment.title}
                        {segment.badge ? <span className="float-right">{segment.badge}
                          <span
                            className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                            onClick={() => toggleStateChange(segment.key)}
                          >
                            [{getToggleState(segment.key) ? "–" : "+"}]
                          </span>
                        </span> : <span className="float-right">
                          <span
                            className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                            onClick={() => toggleStateChange(segment.key)}
                          >
                            [{getToggleState(segment.key) ? "–" : "+"}]
                          </span>
                        </span>}
                      </div>
                      {(getToggleState(segment.key) || q) ? <div className="section-content">
                        {rendered}
                      </div> : ""}
                    </div>
                  </td>
                </tr>
              })}
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}