import {Parser} from "../../layout/5e/js/parser";
import {getResource, Resources} from "../../resources/ResourcesFetch";
import {FilterManager, RenderModule, Selector5e} from "../5eLayoutModules";
import React from "react";
import type {Item} from "../../layout/5e/Models";
import {Armor, Weapon, WeaponProperty} from "../../layout/5e/Models";
import FilterDialogManager from "../FilterDialogManager";
import {loadFromLocalStorage} from "../PersistData";


const FILTER_OPTIONS = [
  // {category: "casters", subcategory: "classes", label: "Artificier"},
];

const FILTER_ITEM_KEY = "itemFilters"
const SAVED_ITEM_KEY = "itemPinned"

export const Dnd5eItems = () => {

  function getValue(string) {
    const po = Math.floor(string)
    const pa = Math.floor(Number(string) % 1 * 10)
    const pc = Math.floor(Number(string) % 1 * 10 % 1 * 10)

    return (po !== 0 ? `${po} po` : ``) + (po !== 0 && (pa !== 0 || pc !== 0) ? (pa !== 0 && pc !== 0 ? ", " : " et ") : "") + (pa !== 0 ? `${pa} pa` : ``) + (pa !== 0 && pc !== 0 ? "et " : "") + (pc !== 0 ? `${pc} pc` : ``);
  }

  function tableDisplayOption(column, string, element) {
    // console.log(column, string, element)
    switch (column.sortId) {
      case "finalItemType": {
        return <span className={column.colClass}>{string.join(", ")}</span>
      }
      case "value": {
        const value = string ? getValue(string) : "—";
        return <span className={column.colClass}>{value}</span>
      }
      case "weight":
        return <span className={column.colClass}>{string ? `${string} kg.` : "—"}</span>
      default:
        return <span className={column.colClass}>{string}</span>
    }
  }

  const columns = [
    {
      id: "Nom", sortId: "name", classSize: "ve-col-3-5", colClass: "ve-col-3-5 pl-0 pr-1 bold"
    },
    {
      id: "Type", sortId: "finalItemType", classSize: "ve-col-4-5", colClass: "ve-col-4-5 px-1"
    },
    {
      id: "Coût", sortId: "value", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
    },
    {
      id: "Poids", sortId: "weight", classSize: "ve-col-1-5", colClass: "ve-col-1-5 px-1 ve-text-center"
    },
    {
      id: "Source", sortId: "source", classSize: "ve-grow", colClass: "ve-col-1 ve-text-center pl-1 pr-0"
    }
  ]

  const items: [Item] = getResource(Resources.item).filter(i => i.id != null && i.id !== "")

  items.forEach(item => {
    item.wondrous = item.wondrous ?? false
    switch (item.itemType) {
      case "weapon": {
        const w: Weapon = {...item}
        const list = []
        list.push(`Arme ${w.weaponCategory === "melee" ? "de corps à corps" : "à distance"}`)
        list.push(`Arme ${w.weaponType === "simple" ? "courante" : "de guerre"}`)
        item.finalItemType = list
        break;
      }
      case "armor": {
        const a: Armor = {...item}
        const list = []
        if (a.armorType === "shield") {
          list.push("Bouclier")
        } else {
          list.push(`Armure ${a.armorType === "light" ? "Légère" : a.armorType === "medium" ? "Intermédiaire" : "Lourde"}`)
        }
        item.finalItemType = list
        break;
      }
      case "adventuringGear": {
        const list = []
        list.push("Équipement d'aventurier")
        item.finalItemType = list
        break;
      }
      case "spellcastingFocus": {
        const list = []
        list.push("Focalisateur d'incantation")
        item.finalItemType = list
        break;
      }
      case "ammunition": {
        const list = []
        list.push("Munition")
        item.finalItemType = list
        break;
      }
      case "artisanTools": {
        const list = []
        list.push("Outils d'Artisan")
        item.finalItemType = list
        break;
      }
      case "instrument": {
        const list = []
        list.push("Instrument")
        item.finalItemType = list
        break;
      }
      case "gameSet": {
        const list = []
        list.push("Boite de Jeu")
        item.finalItemType = list
        break;
      }
      case "tools": {
        const list = []
        list.push("Outils")
        item.finalItemType = list
        break;
      }
      default: {
        console.log("itemType", item.name, item.itemType)
      }
    }
    if (item.itemType !== "spellcastingFocus" && item.scfType) {
      item.finalItemType.push("Focalisateur d'incantation")
    }
  })

  // const [elements, setElements] = useState(buildRace(spells))
  // const [sorting, setSorting] = useState("")
  // const [selectedItem, setSelected] = useState(
  //   // setSelectFromHash([...spells], useLocation().hash)
  // )

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
  } = Selector5e(items.sort((a, b) => {
    const textA = a.name.toLowerCase()
    const textB = b.name.toLowerCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  }), columns, "name", tableDisplayOption);

  const {filters, toggleFilter} = FilterManager(setElements, updateSortElementsState, items)

  const {
    isDialogOpen,
    filterResults,
    filterState,
    openDialog,
    closeDialog,
    saveFilterResults,
    resetFilter
  } = FilterDialogManager(FILTER_OPTIONS, loadFromLocalStorage(FILTER_ITEM_KEY))


  const casters = {}
  const casterObj = {
    "finalItemType": [
      "Arme de corps à corps",
      "Arme à distance",
      "Arme courante",
      "Arme de guerre",
      "Bouclier",
      "Armure Légère",
      "Armure Intermédiaire",
      "Armure Lourde",
      "Outils", "Boite de Jeu", "Instrument", "Outils d'Artisan", "Focalisateur d'incantation",
      "Munition", "Équipement d'aventurier"
    ].sort()
  }

  Object.entries(casterObj).forEach(([path, list], idx) => {
    list.map(element => casters[element] = path)
  })
  // console.log(casters)

  const mundaneItem = elements.filter(i => i.wondrous === false)
  const wondrousItem = elements.filter(i => i.wondrous === true)

  const selectedItem: Item = {...selected}

  function renderItemSpecificities(item) {
    const value = item.value ? getValue(item.value) : ""
    switch (item.itemType) {
      case "weapon": {
        const weapon: Weapon = item
        let finalItemType = [...item.finalItemType]
        const focus = finalItemType.indexOf("Focalisateur d'incantation") > 0 ? "Focalisateur d'incantation" : undefined
        finalItemType.splice(finalItemType.indexOf("Focalisateur d'incantation"), 1)
        return <>
          <tr>
            <td className={"rd-item__type-rarity-attunement"} colSpan="6">
              <div className="ve-flex-col">
                <div className="split mb-1">
                  <div className="italic">Arme{focus ? ", " + focus : ""}</div>
                  <div className="no-wrap "></div>
                </div>
                <div className="italic">{finalItemType.join(", ")}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2">{value}{value && item.weight ? ", " : ""}{item.weight ? `${String(item.weight).replace(".", ",")} kg.` : ""}</td>
            <td className="ve-text-right" colSpan="4">
              <div className="ve-text-wrap-balance ve-text-right">
                {weapon.dmg1} {dmgAbvToFull(weapon.dmgType)}
              </div>
              <div className="ve-text-wrap-balance ve-text-right">
                <div className="ve-text-wrap-balance ve-text-right">
                  {weapon.weaponProperty.map((property, idx) => {
                    let format = WeaponProperty[property].formating
                    const result = [...format.matchAll(/\{\{(.*?)}}/g)]
                    if (result.length > 0) {
                      for (const r in result) {
                        const element = result[r]

                        if (element[1].includes("item")) {
                          const fields = element[1].split(".")
                          if (fields.length !== 2) {
                            throw new Error("Unexpected Length: " + fields)
                          }
                          console.log(fields[1], weapon)
                          format = format.replaceAll(element[0], weapon[fields[1]])
                        } else if (element[1].includes("prop")) {
                          format = format.replaceAll(element[0], WeaponProperty[property].name)
                        }
                        console.log(weapon.name, property, element)
                      }
                    }
                    return format
                  }).join(", ")}
                </div>
              </div>
            </td>
          </tr>
          {weapon.weaponProperty ? <>
            <tr>
              <td colSpan="6" className="py-0">
                <div className="ve-tbl-divider"></div>
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <div className="rd__b  rd__b--2">
                  {weapon.weaponCategory === "range" ?
                    <div data-roll-name-ancestor="Versatile" className="rd__b  rd__b--3">
                      <p>
                    <span className="rd__h rd__h--3" data-title-index="5">
                      <span className="entry-title-inner">Portée. </span>
                    </span>
                        Une arme qui peut être utilisée pour faire des attaques à distance a une portée indiquée entre
                        parenthèses après la propriété munitions ou lancer. La portée consiste en deux nombres. Le
                        premier indique la portée normale de l'arme en mètres, le second la portée longue. Quand vous
                        attaquez une cible qui se trouve au-delà de la portée normale de votre arme,vous êtes
                        désavantagé lors du jet d'attaque. Vous ne pouvez pas attaquer une cible qui se trouve au-delà
                        de la longue portée de votre arme
                      </p>
                    </div>
                    : ""}
                  {weapon.weaponProperty.map(property => {
                    return <div data-roll-name-ancestor="Versatile" className="rd__b  rd__b--3">
                      <p>
                    <span className="rd__h rd__h--3" data-title-index="5">
                      <span className="entry-title-inner">{WeaponProperty[property].name}. </span>
                    </span>
                        {WeaponProperty[property].desc[0]}
                      </p>
                      {WeaponProperty[property].desc.length > 1 ? WeaponProperty[property].desc.map((p, idx) => {
                        if (idx === 0) return ""
                        return <p>{p}</p>
                      }) : ""}
                    </div>
                  })}
                </div>
              </td>
            </tr>
          </> : ""}
        </>
      }
      case "armor": {
        const armor: Armor = item
        return <>
          <tr>
            <td className={"rd-item__type-rarity-attunement"} colSpan="6">
              <div className="ve-flex-col">
                <div className="italic">{item.finalItemType.join(", ")}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2">{value}{value && item.weight ? ", " : ""}{item.weight ? `${String(item.weight).replace(".", ",")} kg.` : ""}
            </td>
            <td className="ve-text-right" colSpan="4">
              <div className="ve-text-wrap-balance ve-text-right">
                <div className="ve-text-wrap-balance ve-text-right">
                  AC {armor.armorType === "shield" ? "+" + armor.ac : armor.ac + (armor.armorType === "light" ? " + dex" : armor.armorType === "medium" ? " + dex (max. 2)" : "")}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="6" className="py-0">
              <div className="ve-tbl-divider"></div>
            </td>
          </tr>
        </>
      }
      default: {
        return <>
          <tr>
            <td className={"rd-item__type-rarity-attunement"} colSpan="6">
              <div className="ve-flex-col">
                <div className="italic">{item.finalItemType.join(", ")}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2">{value}{value && item.weight ? ", " : ""}{item.weight ? `${String(item.weight).replace(".", ",")} kg.` : ""}
            </td>
          </tr>
        </>
      }
    }

    function dmgAbvToFull(dmgType) {
      let damage = null;
      switch (dmgType) {
        case "B":
          damage = "Contondant";
          break;
        case "P":
          damage = "Perforant";
          break;
        case "T":
          damage = "Tranchant";
          break;
        case "":
          damage = "";
          break;
        default:
          throw new Error("Unexpected Value: " + dmgType)
      }
      return damage;
    }
  }

  function renderEntry(feature, toggle, depth) {
    return <div className="rd__b rd__b--2">
      <p>
        <span className="rd__h rd__h--3">
          <span className="entry-title-inner">{feature.name}. </span>
        </span>
        {feature.entries[0]}
      </p>
      {feature.entries > 1 ? RenderModule().render([feature.entries].splice(0,1), depth++, toggle):""}
    </div>
  }

  const props = {
    renderEntries: renderEntry
  };

  return (<div className="view-col-group--cancer h-100 mh-0">
    <div className="container view-col-wrapper view-col-wrapper--cancer">
      <div className="view-col" id="listcontainer">
        <TableHeader/>
        <div className="fltr__mini-view ve-btn-group">
          {Object.keys(casters).map((caster, idx) => {
            const path = casters[caster]
            return <div className="fltr__mini-pill"
                        data-state={filters[path + "-" + caster] ?? "disabled"}
                        onClick={() => toggleFilter(path + "-" + caster)}
            >
              {caster}
            </div>
          })}
        </div>
        {DisplayList(mundaneItem)}
        <hr/>
        <TableHeader/>
        <div className="fltr__mini-view ve-btn-group">
          {Object.keys(casters).map((caster, idx) => {
            const path = casters[caster]
            return <div className="fltr__mini-pill"
                        data-state={filters[path + "-" + caster] ?? "disabled"}
                        onClick={() => toggleFilter(path + "-" + caster)}
            >
              {caster}
            </div>
          })}
        </div>
        {DisplayList(wondrousItem)}
      </div>
      <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
      {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
      {!selectedItem || Object.keys(selectedItem).length === 0 ?
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
              <DetailsHeader selectedItem={selectedItem}/>
              {renderItemSpecificities(selectedItem)}
              {selectedItem.entries || selectedItem.scfType ? <tr>
                <td colSpan="6">
                  <div className="rd__b rd__b--2">
                    {selectedItem.entries ? RenderModule(props).render(selectedItem.entries) : ""}
                    {selectedItem.scfType ?
                      selectedItem.scfType === "arcane" ? <p>
                          Un Focalisateur Arcanique prend une forme spécifique et est serti de joyaux ou sculpté pour
                          canaliser la magie arcanique. Un Ensorceleur, un Occultiste ou un Magicien peut utiliser un tel
                          objet comme Focalisateur de Lancement de Sorts.
                        </p> :
                        selectedItem.scfType === "druid" ? <p>
                            Un Focalisateur Druidique prend une forme spécifique et est sculpté, attaché avec un ruban ou
                            peint pour canaliser la magie primitive. Un Druide ou un Rôdeur peut utiliser un tel objet
                            comme Focalisateur de Lancement de Sorts.
                          </p> :
                          selectedItem.scfType === "holy" ? <p>
                            Un Symbole Sacré prend une forme spécifique et est serti de joyaux ou peint pour canaliser
                            la magie divine. Un Clerc ou un Paladin peut utiliser un Symbole Sacré comme Focalisateur de
                            Lancement de Sorts.
                          </p> : ""
                      : ""}
                  </div>
                </td>
              </tr> : ""}
              <tr>
                <td colSpan="6" className="pt-3">
                  <b>Source: </b>
                  <i title={Parser.SOURCE_JSON_TO_FULL[selectedItem.source]}>{selectedItem.source}</i>,
                  page {selectedItem.page}
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