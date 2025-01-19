import React, {createRef, useEffect, useRef, useState} from "react";
import {Parser} from "../../layout/5e/js/parser"
import $utils, {RenderModule, Selector5e, ToggleState} from "../5eLayoutModules";
import type {PlayerClass} from "../../layout/5e/Models";
import {Feature} from "../../layout/5e/Models";
import "../css/classes.css"
import {RefObject} from "react";
import {Link, useLocation} from "react-router-dom";
import classes from "../../resources/classes.json";
import {getResource, Resources} from "../../ResourcesFetch";


export const Dnd5eClasses = () => {

  const columns = [{
    id: "Name", sortId: "info.name", classSize: "ve-col-8", colClass: "bold ve-col-8 pl-0 pr-1"
  }, {
    id: "Source", sortId: "info.source", classSize: "ve-grow", colClass: "bold ve-grow ve-text-center pl-0 pr-1"
  }]
  //
  // const [classes, setClasses] = useState(getResource(Resources.clazz))
  const classes: [PlayerClass] = getResource(Resources.clazz)

  // useEffect(() => {
  //   let repeat;
  //   async function fetch(){
  //     console.log("HERRE")
  //     setClasses(getResource(Resources.clazz))
  //     repeat = setTimeout(fetch, 10000);
  //   }
  //   fetch()
  //   return () => {
  //     if (repeat) {
  //       clearTimeout(repeat);
  //     }
  //   }
  // }, []);
  // console.log(require('./5e/resources/.classes.json'))
  // const [elements, setElements] = useState(classes)
  // const [sorting, setSorting] = useState("")
  // const [selected: PlayerClass, setSelected] = useState(setSelectFromHash())
  // const [subclassSelected, setSubclassSelected] = useState({})
  //
  // const scrollRefs = useRef([])
  //
  // scrollRefs.current = [...Array(90).keys()].map((_, i) => scrollRefs.current[i] ?? createRef())
  // const scrollSmoothHandler = (index) => () => {
  //   scrollRefs.current[index].current.scrollIntoView({behavior: "smooth"});
  // }
  //
  // const location = useLocation()
  // useEffect(() => {
  //   const UpdateLocation = () => {
  //     const hash = location.hash.substring(1);
  //     if (!hash) return;
  //     const [mainSection, ...subAnchors] = hash.split(",")
  //     if (mainSection) {
  //       const mainElement: [Clazz] = elements.filter((e) => e.id === mainSection)
  //       if (mainElement) {
  //         setSelected(mainElement[0])
  //         const scrolls = []
  //         let idx = 0
  //         let previousLevel = 0
  //         mainElement[0].classFeature.map((feature) => {
  //           idx = previousLevel === feature.level ? idx + 1 : 0
  //           scrolls.push(`${feature.level - 1}-${idx}`)
  //           previousLevel = feature.level
  //         })
  //         scrollRefs.current = [...Array(scrolls.length).keys()].map((_, i) => scrollRefs.current[scrolls[i]] ?? createRef())
  //         // let subClassToggle = {}
  //         // console.log(mainElement[0].s)
  //         // mainElement[0].subclasses.map((subClass) => {
  //         //   subClassToggle[subClass.name] = subClass.selectedByDefault ?? false
  //         // })
  //         // setSubclassSelected(subClassToggle)
  //       }
  //     }
  //     subAnchors.forEach((subAnchor) => {
  //       const [typeAndName, value] = subAnchor.split("=")
  //       const [type, name] = typeAndName.split(":")
  //       if (type === "state" && name === "feature") {
  //         const targetElement = document.querySelectorAll(`[data-scroll-id="${value}"]`)
  //         if (targetElement) {
  //           scrollSmoothHandler(value)
  //         }
  //       }
  //
  //     })
  //   }
  //   UpdateLocation()
  // }, [location])
  //
  // function setSelectFromHash() {
  //   const filtered = elements.find((e) => "#" + e.id === window.location.hash)
  //   if (filtered) {
  //     return filtered
  //   } else {
  //     return {}
  //   }
  // }

  const [refs: [RefObject], setRefs] = useState([])


  const {
    selected, setSelected,
    elements, setElements,
    sorting, setSorting,
    handleClickSelection, updateSortElementsState,
    TableHeader, DisplayList, DetailsHeader, TempFilters
  } = Selector5e(classes, columns, "info.name");
  // console.log("classes", elements)

  const {toggleStateChange, getToggleState, addToggleableState} = ToggleState()

  //
  //
  // const DetailsHeader = () => {
  //   return <tr>
  //     <th className="stats__th-name ve-text-left pb-0 " colSpan="6" data-name="Goblin"
  //         data-page="races.html" data-source="MPMM" data-hash="goblin_mpmm">
  //       <div className="split-v-end">
  //         <div className="ve-flex-v-center">
  //           <h1 className="stats__h-name copyable m-0"
  //             // onMouseDown="event.preventDefault()"
  //             // onClick="Renderer.utils._pHandleNameClick(this)"
  //           >{selected.name}</h1>
  //         </div>
  //         <div className="stats__wrp-h-source  ve-flex-v-baseline">
  //           <a href={"book.html#" + selected.source + ",page:" + selected.page}
  //              className={"help-subtle stats__h-source-abbreviation source__" + selected.source}
  //              title={getSourceName(selected.source)}>{selected.source}</a>
  //           <a href={"book.html#" + selected.source + ",page:" + selected.page} className="rd__stats-name-page ml-1"
  //              title={"Page" + selected.page}>p{selected.page}</a>
  //         </div>
  //       </div>
  //     </th>
  //   </tr>
  // }
  //
  // function setSelectFromHash() {
  //   const filtered = elements.filter((e) => "#" + e.id === window.location.hash.split(",")[0])
  //   if (filtered.length > 0) {
  //     // console.log("filtered", filtered[0])
  //     return filtered[0]
  //   } else {
  //     return elements[0]
  //   }
  // }
  //
  // function getSourceName(source) {
  //   switch (source) {
  //     case "PHB'14":
  //       return "Player's Handbook (2014)"
  //     case "VGM":
  //       return "Volo’s Guide to Monsters"
  //     case "EEPC":
  //       return "Elemental Evil Player’s Companion"
  //     case "ERLW":
  //       return "Eberron: Rising from the Last War"
  //     case "TCE":
  //       return "Tasha’s Cauldron of Everything"
  //     default:
  //       return ""
  //   }
  // }
  //
  // const buildSpells = (maxSpellLevel) => {
  //   const obj = [];
  //   for (let i = 1; i <= maxSpellLevel; i++) {
  //     obj.push(<th className="cls-tbl__col-generic-center">
  //       <Link to={"spell#blankhash,lvl:" + i + "=1,class:" + selected.id + "=1"}>{i}</Link>
  //     </th>)
  //   }
  //   return obj
  // }
  //
  // const tableContent = (table, columns) => {
  //   while (table.length < 20) {
  //     table.push([])
  //   }
  //   return table.map((line, lineIdx) => {
  //     while (line.length < columns) {
  //       line.push("")
  //     }
  //     return <tr className="cls-tbl__stripe-odd">
  //       <td className="cls-tbl__col-level">{lineIdx === 0 ? (lineIdx + 1) + "er" : (lineIdx + 1) + "e"}</td>
  //       <td className="cls-tbl__col-level">{"+" + Math.ceil(1 + (lineIdx + 1) / 4)}</td>
  //
  //       {line.map((cell, nb) => {
  //         if (!cell) {
  //           return <td className={nb !== 0 ? "cls-tbl__col-generic-center" : ""}>—</td>
  //         } else if (typeof (cell) === typeof ("") || typeof (cell) === typeof (0)) {
  //           return <td className={nb !== 0 ? "cls-tbl__col-generic-center" : ""}>{cell}</td>
  //         } else if (typeof (cell) === typeof ([])) {
  //           return <td className={nb !== 0 ? "cls-tbl__col-generic-center" : ""}>{cell.map((link, idx) => {
  //             return <>
  //               <div className="inline-block">
  //                 <Link to={"#" + selected.id + ",state:s" + lineIdx + "-" + idx}>{link}</Link>
  //               </div>
  //               {idx === cell.length - 1 ? "" : ", "}
  //             </>
  //           })}</td>
  //         } else {
  //           return <td className={nb !== 0 ? "cls-tbl__col-generic-center" : ""}>
  //             <Link to={"#" + selected.id + ",state:s" + lineIdx + "-0"}>{cell}</Link>
  //           </td>
  //         }
  //       })}
  //     </tr>
  //   })
  // }
  //
  //
  // function getClassFeatures(withSubClass: boolean = false) {
  //   const entries: [Feature] = []
  //   const features = []
  //   selected.class[0].classFeatures.map((feature) => {
  //     if (feature.gainSubclassFeature) {
  //       const [featureName, className, classSource, level] = feature.classFeature.split("|")
  //       entries.push(findFeatureInClass(feature.classFeature))
  //       if (withSubClass) {
  //         selected.subclass.map((subclass) => {
  //           const subFeature = subclass.subclassFeatures.find((subFeature) => subFeature.endsWith(feature.classFeature.replace(/\D+/g, "")))
  //           entries.push(findFeatureInClass(subFeature))
  //         })
  //       }
  //     } else {
  //       entries.push(findFeatureInClass(feature))
  //     }
  //   })
  //   return entries
  // }
  //

  //
  // function renderFeatureTable(){
  //   const features = []
  //   return features
  // }
  //
  // function renderFeaturesTOC() {
  //   const features = getClassFeatures(true)
  //   const elements = []
  //   features.map((feature) => {
  //     let style = `cls-nav__item cls-nav__item--depth-${feature.header ?? 1}${feature.subclassShortName ? " cls-nav__item--feature-subclass" : ""}`
  //     elements.push(<div className={style}>{feature.name}</div>)
  //     feature.entries.map((entry) => {
  //       if (!entry.type) return
  //       // console.log(entry)
  //       switch (entry.type) {
  //         case "entries": {
  //           if (feature.subclassShortName) return
  //           style = `cls-nav__item cls-nav__item--depth-2${feature.subclassShortName ? " cls-nav__item--feature-subclass" : ""}`
  //           elements.push(<div className={style}>{entry.name}</div>)
  //           break
  //         }
  //         case "refClassFeature": {
  //           const subFeature = findFeatureInClass(entry.classFeature)
  //           style = `cls-nav__item cls-nav__item--depth-2`
  //           elements.push(<div className={style}>{subFeature.name}</div>)
  //           break
  //         }
  //         case "refSubclassFeature": {
  //           const subFeature = findFeatureInClass(entry.subclassFeature)
  //           style = `cls-nav__item cls-nav__item--depth-2 cls-nav__item--feature-subclass`
  //           elements.push(<div className={style}>{subFeature.name}</div>)
  //           break
  //         }
  //       }
  //     })
  //   })
  //   return elements
  // }
  // function featureDetails() {
  //   const features = getClassFeatures(true)
  //   let firstSubClassLevel = 20
  //   features.map((feature) => {
  //     if (feature.subclassShortName && feature.level < firstSubClassLevel) firstSubClassLevel = feature.level
  //   })
  //   const elements = []
  //   features.map((feature) => {
  //     if (feature.subclassShortName) {
  //       elements.push(<tr className="cls-main__linked-titles">
  //         <td colSpan={6}>
  //           <div className="rd__b rd__b--1 cls__feature-subclass">
  //             <Toggle>
  //               <h2 className="rd__h rd__h--1">
  //                   <span
  //                     className="entry-title-inner">{firstSubClassLevel !== feature.level ? <>{feature.subclassShortName}:
  //                     Niveau {feature.level}: </> : ""}{feature.name}</span>
  //                 <span className="ve-flex-vh-center">
  //                   <span className="rd__title-link ">
  //                     <span className="help-subtle" title={getSourceName(feature.source)}>
  //                       {feature.source}
  //                     </span>
  //                     {feature.page}
  //                   </span>
  //                 <span className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
  //                       data-rd-h-toggle-button="true">[–]</span>
  //               </span>
  //               </h2>
  //               {formatEntries(feature.entries)}
  //             </Toggle>
  //           </div>
  //         </td>
  //       </tr>)
  //     } else {
  //       elements.push(<tr className="cls-main__sc-feature">
  //         <td colSpan={6}>
  //           <div className="rd__b rd__b--1">
  //             <Toggle>
  //               <h2 className="rd__h rd__h--1">
  //                 <span className="entry-title-inner">Niveau {feature.level}: {feature.name}</span>
  //                 <span className="ve-flex-vh-center"> <span className="rd__title-link ">
  //                 <span className="help-subtle"
  //                       title={getSourceName(feature.source)}>{feature.source}</span> {feature.page}</span>
  //                 <span className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
  //                       data-rd-h-toggle-button="true">[–]</span>
  //               </span>
  //               </h2>
  //               {formatEntries(feature.entries)}
  //             </Toggle>
  //           </div>
  //         </td>
  //       </tr>)
  //     }
  //     // feature.entries.map((entry) => {
  //     //   if (!entry.type) return
  //     //   // console.log(entry)
  //     //   switch (entry.type) {
  //     //     case "entries": {
  //     //       if (feature.subclassShortName) return
  //     //       style = `cls-nav__item cls-nav__item--depth-2${feature.subclassShortName ? " cls-nav__item--feature-subclass" : ""}`
  //     //       elements.push(<div className={style}>{entry.name}</div>)
  //     //       break
  //     //     }
  //     //     case "refClassFeature": {
  //     //       const subFeature = findFeatureInClass(entry.classFeature)
  //     //       style = `cls-nav__item cls-nav__item--depth-2`
  //     //       elements.push(<div className={style}>{subFeature.name}</div>)
  //     //       break
  //     //     }
  //     //     case "refSubclassFeature": {
  //     //       const subFeature = findFeatureInClass(entry.subclassFeature)
  //     //       style = `cls-nav__item cls-nav__item--depth-2 cls-nav__item--feature-subclass`
  //     //       elements.push(<div className={style}>{subFeature.name}</div>)
  //     //       break
  //     //     }
  //     //   }
  //     // })
  //   })
  //   return elements
  // }

  // function renderFeature(){
  //   const features = getClassFeatures(true)
  //   const element = []
  //   let oldLevel = -1
  //   let idSameLevel = 0
  //   features.map((feature, idx)=>{
  //     if (oldLevel===feature.level){
  //       idSameLevel++
  //     }else{
  //       oldLevel=feature.level
  //       idSameLevel = 0
  //     }
  //     element.push(<tr data-scroll-id={feature.level-1+"-"+idSameLevel} className="cls-main__linked-titles">
  //       <td colSpan={6}>
  //         <div className="rd__b rd__b--1">
  //           <h2 className="rd__h rd__h--1">{feature.name}</h2>
  //         </div>
  //       </td>
  //     </tr>)
  //   })
  //   return element
  // }
  // console.log(elements)

  //TODO:
  // [x] Liste de selection de classe,
  // [x] Table des capacités de classe,
  // [x] Ajouter les Capacités de classe dans la table
  // [x] Bande des traits & maîtrises de classe,
  // [x] TOC des capacites de classe,
  // [x] Description des capacités de classe
  // [ ] Retravailler les Toggles pour avoir en clef l'id de la capacité et non un composite bizarre.
  //      Pour les titres: "*idFeature*-*NomEntrée*"

  const selectedClass: PlayerClass = {...selected}
  const features: [] = selectedClass?.info?.classFeatures.map(feature => {
    if (typeof feature === "string") return feature.split("|");
    return feature.classFeature.split("|")
  })

  function findFeatureInClass(values: string): Feature | undefined {
    values = values.split("|")
    if (values.length === 4) {
      const [featureName, className, classSource, level] = values
      return selectedClass.classFeatures.find((feature) => {
        return (feature.name === featureName && feature.className === className && feature.classSource === classSource && feature.level === Number(level))
      })
    } else if (values.length === 6) {
      const [featureName, className, classSource, subClassName, subClassSource, level] = values
      // console.log(featureName, className, classSource, subClassName, subClassSource, level)
      // console.log("-------------------------------------------------------------")
      // console.log(featureName, className, classSource, subClassName, subClassSource, level)
      // console.log(selectedClass.subclassFeatures)
      return selectedClass.subclassFeatures.find((feature) => {
        return (
          feature.name === featureName &&
          feature.className === className &&
          feature.classSource === classSource &&
          feature.subclassShortName === subClassName &&
          feature.subclassSource === subClassSource &&
          feature.level === Number(level)
        )
      })
    }
  }

  const props = {
    getToggleState: getToggleState,
    toggleStateChange: toggleStateChange,
    refClassFeature: renderRefClassFeature,
    refSubclassFeature: renderRefSubclassFeature,
    renderEntries: renderEntry
  };

  function renderFeature(featureStringId: string, header: number = 1) {
    const featureObject = findFeatureInClass(featureStringId)
    let featureName, _, featureSource, featureLevel, subclassName
    let toggleName
    if (featureObject?.subclassShortName) {
      [featureName, _, _, subclassName, featureSource, featureLevel] = featureStringId.split("|")
      toggleName = selectedClass.id + "-subclass-" + (featureObject?.subclassShortName ?? "Unknown") + "-feature-" + featureName
    } else {
      [featureName, _, featureSource, featureLevel] = featureStringId.split("|")
      toggleName = selectedClass.id + "-feature-" + featureName
    }

    const isSubClass = !!featureObject?.subclassShortName;
    const isTitle = header === 1;

    addToggleableState(featureStringId)
    // console.log(featureObject)
    // console.log(featureStringId, featureObject)

    return <tr className="cls-main__linked-titles">
      <td colSpan={6}>
        <div
          ref={refs[featureStringId]}
          className={"rd__b rd__b--" + (featureObject?.header ?? header) + (featureObject?.subclassShortName ? " cls__feature-subclass" : "")}>
          <h2 className={"rd__h rd__h--" + (featureObject?.header ?? header)}
              onClick={(event) => {
                navigator.clipboard.writeText(featureName)
                // .then($utils(event.target))
              }}
          >
            <span className="entry-title-inner">
              {/*{featureLevel + "-" + nbFeatureThisLevel + (nbTitle ? "-" + nbTitle : "")}*/}
              {featureObject?.subclassShortName ?
                (
                  featureObject.header ?
                    subclassName + ": Niveau " + featureLevel + ": " + featureName :
                    featureName
                ) : "Niveau " + featureLevel + ": " + featureName
              }
            </span>
            <span className="ve-flex-vh-center">
              <span className="rd__title-link ">
                <span className="help-subtle"
                      title={Parser.SOURCE_JSON_TO_FULL[featureSource]}>
                {featureSource}
              </span> p{0}
              </span>
              <span
                className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                onClick={() => toggleStateChange(featureStringId)}
              >
                [{getToggleState(featureStringId) ? "–" : "+"}]
              </span>
            </span>
          </h2>
          {featureObject ? "" : <p>Unable to find {featureStringId}</p>}
          {getToggleState(featureStringId) && RenderModule(props).render(featureObject?.entries, header, toggleName)}
        </div>
      </td>
    </tr>

  }

  function renderFeatures() {
    let nbFeatureThisLevel = 0
    let currentLevel = 0
    return selectedClass.info.classFeatures.map(feature => {
      const featureLevel = (feature.classFeature ?? feature).split("|").pop()
      // if (currentLevel === featureLevel) {
      //   nbFeatureThisLevel++
      // } else {
      //   currentLevel = featureLevel
      //   nbFeatureThisLevel = 0
      // }
      // addToggleableState(selectedClass.id + "-feature-" + featureName)
      let detailsList = [];
      // const featureObject = findFeatureInClass(feature.classFeature ?? feature)
      // detailsList.push(<tr className="cls-main__linked-titles">
      // <td colSpan={6}>
      //     <div className="rd__b rd__b--1">
      //       <h2 className="rd__h rd__h--1">
      //         <span className="entry-title-inner">Niveau {featureLevel}: {featureName}</span>
      //         <span className="ve-flex-vh-center">
      //                     <span className="rd__title-link ">
      //                     <span className="help-subtle" title={Parser.SOURCE_JSON_TO_FULL[sourceName]}>
      //                       {sourceName}
      //                     </span> p{0}
      //                   </span>
      //                     <span
      //                       className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
      //                       onClick={() => toggleStateChange(selectedClass.id + "-feature-" + featureName)}
      //                     >
      //                       [{getToggleState(selectedClass.id + "-feature-" + featureName) ? "–" : "+"}]
      //                     </span>
      //                   </span>
      //       </h2>
      //       {featureObject ? "" : <p>Unable to find {feature.classFeature ?? feature}</p>}
      //       {getToggleState(selectedClass.id + "-feature-" + featureName) && renderContent(featureObject?.entries)}
      //     </div>
      //   </td>*/
      // </tr>)
      detailsList.push(renderFeature(feature.classFeature ?? feature))

      if (feature.gainSubClassFeature) {
        selectedClass.subclasses.map((subclass, idx) => {
          if (!getToggleState(selectedClass.id + "-subclass-" + subclass.shortName)) return
          subclass.subclassFeatures.map((subclassFeature) => {
            const subclassfeatureLevel = subclassFeature.split("|").pop()
            if (featureLevel === subclassfeatureLevel) {
              detailsList.push(renderFeature(subclassFeature))
              // let subclassFeatureToggle = selectedClass.id + "-subclass-" + subclass.shortName + "-feature-" + featureName;
              // addToggleableState(subclassFeatureToggle)
              // const featureObject = findFeatureInClass(subclassFeature)
              // detailsList.push(
              //   <tr className="cls-main__linked-titles">
              //     <td colSpan={6}>
              //       <div className={"rd__b rd__b--" + (featureObject.header ?? 1) + " cls__feature-subclass"}>
              //         <h2 className={"rd__h rd__h--" + (featureObject.header ?? 1)}>
              //                     <span className="entry-title-inner">
              //                       {featureObject.header ?
              //                         subclass.name + ": Niveau " + subclassfeatureLevel + ": " + subclassFeatureName :
              //                         subclassFeatureName
              //                       }
              //                     </span>
              //           <span className="ve-flex-vh-center">
              //                       <span className="rd__title-link ">
              //                         <span className="help-subtle" title={Parser.SOURCE_JSON_TO_FULL[subclassSource]}>
              //                         {subclassSource}
              //                       </span> p{0}
              //                       </span>
              //                       <span
              //                         className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
              //                         onClick={() => toggleStateChange(subclassFeatureToggle)}
              //                       >
              //                         [{getToggleState(subclassFeatureToggle) ? "–" : "+"}]
              //                       </span>
              //                     </span>
              //         </h2>
              //         {featureObject ? "" : <p>Unable to find {subclassFeature}</p>}
              //         {getToggleState(subclassFeatureToggle) && renderContent(featureObject?.entries)}
              //       </div>
              //     </td>
              //   </tr>
              // )
            }
          })
        })
      }

      return detailsList
    })
  }

  function renderRefClassFeature(feature, depth) {
    // console.log(feature)
    const [featureName, featureClass, featureSource, featureLevel] = feature.split("|")

    const featureObject = findFeatureInClass(feature)
    // console.log(featureObject)
    // console.log(depth)

    return <div
      ref={refs[feature]}
      className={"rd__b rd__b--2" + (featureObject?.subclassShortName ? " cls__feature-subclass" : "")}>
      <h3 className="rd__h rd__h--2">
        <span className="entry-title-inner">{featureObject.name}</span>
        <span className="ve-flex-vh-center" style={{cursor: "pointer"}} onClick={() => toggleStateChange(feature)}>
              <span className="">[{getToggleState(feature) ? "–" : "+"}]</span>
        </span>
      </h3>
      {featureObject ? "" : <p>Unable to find {feature}</p>}
      {/*{console.log(featureObject?.entries)}*/}
      {getToggleState(feature) && RenderModule(props).render(featureObject?.entries, ++depth, feature)}
    </div>

  }

  function renderRefSubclassFeature(feature, depth) {
    console.log(feature)
    const [featureName, _, __, subclassName, featureSource, featureLevel] = feature.split("|")

    const featureObject = findFeatureInClass(feature)
    console.log(featureObject)


    return <div
      ref={refs[feature]}
      className={"rd__b rd__b--2" + (featureObject?.subclassShortName ? " cls__feature-subclass" : "")}>
      <h3 className="rd__h rd__h--2">
            <span className="entry-title-inner">
              {/*{featureLevel + "-" + nbFeatureThisLevel + (nbTitle ? "-" + nbTitle : "")}*/}
              {featureObject?.subclassShortName ?
                "Niveau " + featureLevel + ": " + featureName : ""
              }
            </span>
        <span className="ve-flex-vh-center">
              <span className="rd__title-link ">
                <span className="help-subtle"
                      title={Parser.SOURCE_JSON_TO_FULL[featureSource]}>
                {featureSource}
              </span> p{0}
              </span>
              <span
                className="rd__h-toggle ml-2 clickable no-select no-print lst-is-exporting-image__hidden"
                onClick={() => toggleStateChange(feature)}
              >
                [{getToggleState(feature) ? "–" : "+"}]
              </span>
            </span>
      </h3>
      {featureObject ? "" : <p>Unable to find {feature}</p>}
      {getToggleState(feature) && RenderModule(props).render(featureObject?.entries, depth, feature)}
    </div>

  }

  function renderEntry(feature, toggle, depth) {
    // console.log(feature, toggle, depth)
    if (depth === 3) {
      return <div className={"rd__b rd__b--3"}>
        <p>
          <span className={"rd__h rd__h--3"}>{feature.name}. </span>
          {feature.entries[0]}
        </p>
        {getToggleState(toggle) && feature.entries.length > 1 ? RenderModule().render([...feature.entries].slice(1, feature.entries.length), ++depth, toggle) : ""}
      </div>
    }
    return <div className="rd__b rd__b--2" ref={refs[toggle]}>
      <h3 className="rd__h rd__h--2">
        <span className="entry-title-inner">{feature.name}</span>
        <span className="ve-flex-vh-center" style={{cursor: "pointer"}} onClick={() => toggleStateChange(toggle)}>
                <span className="">[{getToggleState(toggle) ? "–" : "+"}]</span>
              </span>
      </h3>
      {getToggleState(toggle) ? RenderModule().render(feature.entries, ++depth, toggle) : ""}
    </div>
  }

  useEffect(() => {
    // console.log(selected)
    const newRefs = {}
    if (selectedClass?.classFeatures) {
      let nbFeatureThisLevel = 0
      let currentLevel = 0
      // const classFeatures = selectedClass?.classFeatures.toSorted((a, b) => {
      //   return a.level < b.level ? -1 : a.level > b.level ? 1 : 0
      // })
      // const subclassFeatures = selectedClass?.subclassFeatures.toSorted((a, b) => {
      //   return a.level < b.level ? -1 : a.level > b.level ? 1 : 0
      // })
      selectedClass?.info.classFeatures?.map(feature => {
        newRefs[feature.classFeature ?? feature] = newRefs[feature.classFeature ?? feature] ?? createRef()
        getTitles(findFeatureInClass(feature.classFeature ?? feature)).map(subFeature => {
          newRefs[subFeature] = newRefs[subFeature] ?? createRef()
        })
        if (feature.gainSubClassFeature) {
          selectedClass.subclasses.map((subclass) => {
            subclass.subclassFeatures.map((subFeature) => {
              newRefs[subFeature] = newRefs[subFeature] ?? createRef()
              getTitles(findFeatureInClass(subFeature)).map(subSubFeature => {
                newRefs[subSubFeature] = newRefs[subSubFeature] ?? createRef()
              })
            })
          })
        }
      })
    }
    setRefs(newRefs)
  }, [selected]);

  const entriesTypeTitle = ["subFeature", "entries"]

  function getTitles(feature: Feature) {
    const titles = []
    // console.log(feature)
    feature?.entries.map(entry => {
      if (entry.type && entriesTypeTitle.includes(entry.type)) {
        titles.push(entry.name ?? entry.subFeature ?? ("UnableToFind:" + entry.type))
      }
    })
    return titles
  }

  const executeScroll = (id) => {
    console.log(id, refs[id], refs)
    refs[id]?.current?.scrollIntoView()
  }
  const location = useLocation()

  // console.log('class',selectedClass)
  return (<main className="container classes">
      <div className="row">
        <div className="col-md-3" id="listcontainer">
          <div className="night__shadow-big">
            <TableHeader/>
            {DisplayList(elements)}
          </div>
        </div>
        <div className="col-md-9" id="classtable">
          {!selectedClass || Object.entries(selectedClass).length === 0 ?
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
            <table className="cls-tbl shadow-big w-100 mb-2">
              <tbody>
              <tr>
                <th className="ve-tbl-border" colSpan="15"></th>
              </tr>
              <tr>
                <th className="ve-text-left cls-tbl__disp-name" colSpan="15">{selectedClass.info.name}</th>
              </tr>
              <tr>
                <th className="cls-tbl__col-level" rowSpan="2">Niveau</th>
                <th className="cls-tbl__col-prof-bonus" rowSpan="2">Bonus de Maîtrise</th>
                <th className="ve-text-left" rowSpan="2">Capacité</th>
                {selectedClass.info.tableGroup?.map((groups) => {
                  if (!groups.title) {
                    return groups.colLabels.map((title) => {
                      return <th className="cls-tbl__col-generic-center" rowSpan={2}>
                        <div className="cls__squash_header">{title}</div>
                      </th>
                    })
                  } else {
                    return <th className="cls-tbl__col-group" colSpan={groups.colLabels.length}>{groups.title}</th>
                  }
                })}
              </tr>
              <tr>
                {selectedClass.info.tableGroup?.map((groups) => {
                  if (groups.title) {
                    return groups.colLabels.map((label) => {
                      return <th className="cls-tbl__col-generic-center">{label}</th>
                    })
                  }
                })}
              </tr>
              {/*TODO: SPAGHETTI FOR EVERYONE. To clean up.*/}
              {[...Array(20).keys()].map((level) => {
                const featurePerLevel = features.filter(f => Number(f[3]) === level + 1)
                return <tr className="cls-tbl__stripe-odd">
                  <td className="cls-tbl__col-level">{level + 1}e{level + 1 === 1 ? "r" : ""}</td>
                  <td className="cls-tbl__col-prof-bonus">+{Math.floor(2 + (level) / 4)}</td>
                  <td>
                    {featurePerLevel.length === 0 ? "—" : selectedClass.info.classFeatures.map((feature, idx) => {
                      const [featureName, className, sourceName, featureLevel] = (feature.classFeature ?? feature).split("|")
                      const currentFeature = featurePerLevel.indexOf(featurePerLevel.find(f => featureName === f[0]))
                      // console.log("feature", featureName, "|", Number(featureLevel), Number(featureLevel) === level + 1, featureLevel)
                      if (Number(featureLevel) === level + 1) {
                        return <div className="inline-block"
                                    onClick={() => executeScroll(feature.classFeature ?? feature)}>
                          <Link to={location.href}>{featureName}</Link>
                          <span className="mr-1">
                            {featurePerLevel.length > 1 ? (currentFeature + 1 !== featurePerLevel.length ? ", " : "") : ""}
                          </span>
                        </div>
                      }
                    })}
                  </td>
                  {selectedClass.info.tableGroup?.map((group) => {
                    return group.rows[level].map(cell => {
                      return <td className="cls-tbl__col-generic-center">{cell === 0 ? "—" : cell}</td>
                    })
                  })}
                </tr>
              })}
              </tbody>
            </table>}
        </div>
      </div>
      <hr className="mt-0"/>
      {!selectedClass || Object.entries(selectedClass).length === 0 ? "" :
        <div className="row ve-flex mobile-md__ve-flex-col">
          <div className="col-md-3">
            <div className="ve-flex-vh-center ve-text-center wrp-btn-readmode mb-3">
              <button disabled className="ve-btn ve-btn-default ve-btn-xs no-print mr-1" id="btn-comparemode"
                      title="A pop-up table which can be used to compare subclass features.">
                Subclass Comparison
              </button>
              <button disabled className="ve-btn ve-btn-default ve-btn-xs no-print mr-1" id="btn-readmode"
                      title="A pop-up reading mode with a layout and content order matching that of the books.">
                Book View
              </button>
              <div className=" ve-flex-v-center ve-btn-group">
                <button disabled className="ve-btn ve-btn-default ve-btn-xs ve-btn-copy-effect" id="btn-link-export"
                        title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)">
                  <span className="glyphicon glyphicon-magnet"></span>
                </button>
                <button disabled className="ve-btn ve-btn-default ve-btn-xs" id="btn-sidebar-settings" title="Settings">
                  <span className="glyphicon glyphicon-cog"></span>
                </button>
              </div>
            </div>
            <div id="statsprof">
              <table className="w-100 stats shadow-big cls__stats">
                <tbody>
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                <tr>
                  <th colSpan="6" className="ve-text-left">
                    <div className="split-v-center pr-1" data-page="classes.html" data-source="TCE"
                         data-hash="artificer_tce">
                      <div className="cls-side__name">{selectedClass.info.name}</div>
                      <div className="ve-flex-v-center">
                        <div className="cls-side__btn-toggle no-select" onClick={() => toggleStateChange("prof")}>
                          [{getToggleState("prof") ? "-" : "+"}]
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
                {getToggleState("prof") && <>
                  <tr>
                    <td colSpan={6} className="cls-side__section">
                      <h5 className="cls-side__section-head">Traits Principaux</h5>
                      <div>
                        <strong>Dé de Vie: </strong>
                        {selectedClass.info.hitDice.amount}D{selectedClass.info.hitDice.faces} par niveau
                        d{"aeiouy".includes(selectedClass.info.name.at(0).toLowerCase()) ? "'" : "e "}
                        {selectedClass.info.name}
                      </div>
                      <div>
                        <strong>PV au niveau 1: </strong>
                        {selectedClass.info.hitDice.faces} + votre modificateur de Constitution
                      </div>
                      <div>
                        <strong>PV aux niveaux suivants: </strong>
                        <span className="roller render-roller">
                      {selectedClass.info.hitDice.amount}D{selectedClass.info.hitDice.faces}
                    </span> + votre modificateur de Constitution,
                        ou, {Math.ceil(selectedClass.info.hitDice.faces / 2) + 1} +
                        votre modificateur de Constitution
                      </div>
                      <div className="py-2 w-100"></div>
                      <div>
                        <b>Armures: </b>
                        <span>
                      {selectedClass.info.proficiencies.armor?.length > 1 ?
                        (selectedClass.info.proficiencies.armor.includes("heavy") ? "Toutes les armures" : "armures légères" + (selectedClass.info.proficiencies.armor.includes("meduim") ? " et intermédiaires" : "")) +
                        (selectedClass.info.proficiencies.armor.includes("shield") ? ", boucliers" : "")
                        : "Aucune"}
                    </span>
                      </div>
                      {(selectedClass.info.proficiencies.weapon) ? <>
                        {/*<div className="py-2 w-100"></div>*/}
                        <div>
                          <b>Armes: </b>
                          <span>
                        {Array.isArray(selectedClass.info.proficiencies.weapon) ? selectedClass.info.proficiencies.weapon.map((weapon, idx) => {
                          return <>
                            {weapon.replace("simple", "armes courantes").replace("martial", "armes de guerre")}
                            {idx !== selectedClass.info.proficiencies.weapon.length - 1 ? ", " : ""}
                          </>
                        }) : "armes courantes" + (selectedClass.info.proficiencies.weapon === "martial" ? ", armes de guerre" : "")}
                      </span>
                        </div>
                      </> : ""}
                      {/*<div className="py-2 w-100"></div>*/}
                      <div>
                        <b>Outils: </b>
                        <span>
                        {selectedClass.info.proficiencies.tools?.length > 1 ?
                          selectedClass.info.proficiencies.tools.map((tool, idx) => {
                            return <>{tool}{idx !== selectedClass.info.proficiencies.tools.length - 1 ? ", " : "."}</>
                          }) : "Aucun"}
                    </span>
                      </div>
                      {(selectedClass.info.proficiencies.saves) ? <>
                        <div className="py-2 w-100"></div>
                        <div>
                          <b>Jets de sauvegardes: </b>
                          {selectedClass.info.proficiencies.saves.map((save, idx) => {
                            return <>{Parser.attAbvToFull(save)}{idx !== selectedClass.info.proficiencies.saves.length - 1 ? ", " : "."}</>
                          })}
                        </div>
                      </> : ""}
                      {(selectedClass.info.proficiencies.skills) ? <>
                        {/*<div className="py-2 w-100"></div>*/}
                        <div><b>Compétences :</b>
                          <span>
                        {selectedClass.info.proficiencies.skills.any ?
                          <i>Choisissez {selectedClass.info.proficiencies.skills.any} compétences.</i> :
                          <>
                            <i>Choisissez {selectedClass.info.proficiencies.skills.count} compétences parmi: </i>
                            {selectedClass.info.proficiencies.skills.pool.map((skill, idx) => {
                              return <>
                                <span>{skill}</span>
                                {idx === selectedClass.info.proficiencies.skills.pool.length - 1 ? "." : idx === selectedClass.info.proficiencies.skills.pool.length - 2 ? " ou " : ", "}
                              </>
                            })}
                          </>
                        }
                      </span>
                        </div>
                      </> : ""}
                      <div className="py-2 w-100"></div>
                      <p>Vous commencez avec l'équipement suivant, en plus de l'équipement accordé par votre
                        historique:</p>
                      <ul className="pl-4">
                        {selectedClass.info.startingEquipment.equipement.map((items, idx) => {
                          return <li>{items}</li>
                        })}
                      </ul>
                      <p>
                        Si vous renoncez à cet équipement de départ ainsi qu'à celui accordé par votre historique, vous
                        commencez avec
                        <span className="roller render-roller">
                        {" " + selectedClass.info.startingEquipment.goldAlternative + " "}
                      </span>
                        po pour acheter votre équipement.
                      </p>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="cls-side__section" colSpan="6">
                      <h5 className="cls-side__section-head">Multiclassage</h5>
                      <div>
                        <div className="rd__b  rd__b--0">
                          <p>
                            <b>Score de capacité Minium:</b>
                            {selectedClass.info.multiclass.requirements.or ?
                              Object.entries(selectedClass.info.multiclass.requirements.or).map(([ability, amount], idx) => {
                                return <>
                                  {" "}{Parser.attAbvToFull(ability)} {amount}
                                  {Object.entries(selectedClass.info.multiclass.requirements.or).length - 1 === idx ? "" : " or"}
                                </>
                              })
                              :
                              Object.entries(selectedClass.info.multiclass.requirements).map(([ability, amount], idx) => {
                                return <>
                                  {" "}{Parser.attAbvToFull(ability)} {amount}
                                  {Object.entries(selectedClass.info.multiclass.requirements).length - 1 === idx ? "" : ","}
                                </>
                              })
                            }
                          </p>
                        </div>
                      </div>
                      <div>
                        When you gain a level in a class other than your first, you gain only some of that class's
                        starting proficiencies?.
                      </div>
                      {selectedClass.info.multiclass.proficiencies?.armor ? <div>
                        <b>Maîtrise d'Armures: </b>
                        {selectedClass.info.multiclass.proficiencies.armor.includes("heavy") ? "Toutes les armures" : "armures légères" + (selectedClass.info.multiclass.proficiencies.armor.includes("meduim") ? " et intermédiaires" : "")}
                        {selectedClass.info.multiclass.proficiencies.armor.includes("shield") ? ", boucliers" : ""}
                      </div> : ""}
                      {selectedClass.info.multiclass.proficiencies?.weapon ? <div>
                        <b>Maîtrise d'Armes: </b>
                        {Array.isArray(selectedClass.info.multiclass.proficiencies.weapon) ? selectedClass.info.multiclass.proficiencies.weapon.map((weapon, idx) => {
                          return <>{weapon.replace("simple", "armes courantes")}{idx !== selectedClass.info.multiclass.proficiencies.weapon.length - 1 ? ", " : ""}</>
                        }) : "armes courantes" + (selectedClass.info.multiclass.proficiencies.weapon === "martial" ? ", armes de guerre" : "")}
                      </div> : ""}
                      {selectedClass.info.multiclass.proficiencies?.tools ? <div>
                        <b>Maîtrise d'Outils: </b>
                        {selectedClass.info.multiclass.proficiencies.tools.map((tool, idx) => {
                          return <>
                            {tool}
                            {idx === selectedClass.info.multiclass.proficiencies.tools.length - 1 ? "." : idx === selectedClass.info.multiclass.proficiencies.tools.length - 2 ? " et " : ", "}
                          </>
                        })}
                      </div> : ""}
                      {selectedClass.info.multiclass.proficiencies?.skills ? <div>
                        <b>Maîtrise de Compétences: </b>
                        {selectedClass.info.multiclass.proficiencies.skills.any ?
                          <i>Choisissez {selectedClass.info.multiclass.proficiencies.skills.any} compétences.</i> :
                          <>
                            <i>Choisissez {selectedClass.info.multiclass.proficiencies.skills.count} compétences
                              parmi: </i>
                            {selectedClass.info.multiclass.proficiencies.skills.pool.map((skill, idx) => {
                              return <>
                                <span>{skill}</span>
                                {idx === selectedClass.info.multiclass.proficiencies.skills.pool.length - 1 ? "." : idx === selectedClass.info.multiclass.proficiencies.skills.pool.length - 2 ? " ou " : ", "}
                              </>
                            })}
                          </>
                        }
                      </div> : ""}
                    </td>
                  </tr>
                </>}
                <tr>
                  <th className="ve-tbl-border" colSpan="6"></th>
                </tr>
                </tbody>
              </table>
            </div>
            <div id="sticky-nav" className="cls-nav">
              {/*TODO: Change the div after "Outline" to be disable.*/}
              <div className="cls-nav__head cls-nav__head--active">
                <div className="cls-nav__head-inner split">
                  <div>Outline</div>
                  <div
                    className={"cls-nav__disp-toggle" + (getToggleState("TOC") ? " cls-nav__disp-toggle--active" : "")}
                    onClick={() => toggleStateChange("TOC")}></div>
                </div>
                <hr className="cls-nav__hr"/>
              </div>
              <div className="nav-body">
                {getToggleState("TOC") && selectedClass.info.classFeatures?.map((feature) => {
                  const [featureName, className, sourceName, featureLevel] = (feature.classFeature ?? feature).split("|")
                  const featureList = []
                  featureList.push(
                    <div className="cls-nav__item cls-nav__item--depth-1"
                         onClick={() => executeScroll(feature.classFeature ?? feature)}>
                      {featureName}
                    </div>
                  )
                  getTitles(findFeatureInClass(feature.classFeature ?? feature)).map(featureD => {
                    // console.log(featureD)
                    featureList.push(
                      <div
                        className="cls-nav__item cls-nav__item--depth-2"
                        onClick={() => executeScroll((feature.classFeature ?? feature) + "-" + featureD)}
                      >
                        {featureD}
                      </div>
                    )
                  })
                  // console.log(feature,feature.gainSubClassFeature)

                  if (feature.gainSubClassFeature) {
                    selectedClass.subclasses.map((subclass) => {
                      if (!getToggleState(selectedClass.id + "-subclass-" + subclass.shortName)) return
                      subclass.subclassFeatures.map((subclassFeature) => {
                        const [subclassFeatureName, subclassClassName, subclassSourceName, subclassName, subclassSource, subclassfeatureLevel] = subclassFeature.split("|")
                        // console.log(subclassFeature, featureLevel === subclassfeatureLevel)
                        if (featureLevel === subclassfeatureLevel) {
                          featureList.push(
                            <div className={"cls-nav__item cls-nav__item--depth-"
                              + (findFeatureInClass(subclassFeature)?.header ?? 1)
                              + " cls-nav__item--feature-subclass"
                            } onClick={() => executeScroll(subclassFeature)}>
                              {subclassFeatureName}
                            </div>
                          )
                          getTitles(findFeatureInClass(subclassFeature)).map(subSubFeature => {
                            const [subclassFeatureName, _, __, ___, ____, _____] = subSubFeature.split("|")
                            featureList.push(
                              <div className={"cls-nav__item cls-nav__item--depth-"
                                + (findFeatureInClass(subSubFeature)?.header ?? 1)
                                + " cls-nav__item--feature-subclass"
                              } onClick={() => executeScroll(subSubFeature)}>
                                {subclassFeatureName}
                              </div>
                            )
                          })
                        }
                      })
                    })
                  }
                  // console.log(feature, featureList)
                  return featureList
                })}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div id="subclasstabs" className="w-100 ve-flex mb-2 cls-tabs__wrp">
              <div className="ve-flex-v-center m-1 ve-btn-group mr-3 no-shrink">
                <button disabled className="ve-btn ve-btn-xs ve-btn-default cls__btn-cf--active"
                        title="Toggle Class Features">
                  Features
                </button>
                <button disabled className="ve-btn ve-btn-xs ve-btn-default"
                        title="Toggle Class Feature Options/Variants">
                  Variants
                </button>
                <button disabled className="ve-btn ve-btn-xs ve-btn-default" title="Toggle Class Info">
                  Info
                </button>
              </div>
              <div className="ve-flex-v-center ve-flex-wrap mr-2 w-100">
                {selectedClass.subclasses.map((subclass) => {
                  addToggleableState(selectedClass.id + "-subclass-" + subclass.shortName)
                  return (
                    <button onClick={() => toggleStateChange(selectedClass.id + "-subclass-" + subclass.shortName)}
                            className={"ve-btn ve-btn-default ve-btn-xs ve-flex-v-center m-1" +
                              (getToggleState(selectedClass.id + "-subclass-" + subclass.shortName) ? " cls__btn-sc--active-fresh" : "")
                            }>
                      <div>{subclass.shortName}</div>
                      <div>({subclass.source})</div>
                    </button>
                  )
                })}
                <div className="ve-muted m-1 cls-tabs__sc-not-shown ve-flex-vh-center"></div>
              </div>
              <div className="ve-flex-v-center m-1 no-shrink">
                <select disabled className="input-xs form-control cls-tabs__sel-preset">
                  <option value="-1" disabled="">Filter...</option>
                  <option value="0">View Default</option>
                  <option value="1">View Standard Plus Partnered</option>
                  <option value="2">View Standard Plus Homebrew</option>
                  <option value="3">View Most Recent</option>
                  <option value="4">View All</option>
                </select>
              </div>
              <div className="ve-flex-v-center m-1 ve-btn-group no-shrink">
                <button disabled className="ve-btn ve-btn-xs ve-btn-default"
                        title="Select All (SHIFT to filter for and include most recent; CTRL to select official plus homebrew)">
                  <span className="glyphicon glyphicon-check"></span>
                </button>
                <button disabled title="Feeling Lucky?" className="ve-btn ve-btn-xs ve-btn-default ve-flex-1">
                  <span className="glyphicon glyphicon-random"></span>
                </button>
                <button disabled className="ve-btn ve-btn-xs ve-btn-default" title="Reset Selection">
                  <span className="glyphicon glyphicon-refresh"></span>
                </button>
                <button disabled className="ve-btn ve-btn-xs ve-btn-default ve-flex-1 active"
                        title="Show Subclass Sources">
                  <span className="glyphicon glyphicon-book"></span>
                </button>
              </div>
            </div>
            <table id="pagecontent" className="w-100 stats shadow-big cls__stats">
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
              {renderFeatures()}
              {/*{featureDetails()}*/}
              {/*{formatSubFeature()}*/}
              <tr>
                <th className="ve-tbl-border" colSpan="6"></th>
              </tr>
            </table>
          </div>
        </div>
      }
    </main>
    // <div className="view-col-group--cancer h-100 mh-0">
    //   <div className="container view-col-wrapper view-col-wrapper--cancer">
    //     <div className="view-col" id="listcontainer">
    //       <TableHeader/>
    //       <div id="filtertools" className="input-group input-group--bottom ve-flex no-shrink">
    //         {columns.map((col) => {
    //           return (<button type="button" className={col.classSize + " sort ve-btn ve-btn-default ve-btn-xs"}
    //                           onClick={() => handleSort(col.sortId)}>
    //             {col.id}<span
    //             className={"lst__caret" + (sorting.startsWith(col.sortId) ? " lst__caret--active" : "") + (sorting === col.sortId + ".des" ? " lst__caret--reverse" : "")}></span>
    //           </button>)
    //         })}
    //       </div>
    //       {/*TODO: When selecting a div update the class with 'list-multi-selected'*/}
    //       <div id="list" className="list list--stats">
    //         {/*{console.log(elements)}*/}
    //         {elements.map((elem) => {
    //           // console.log(elem)
    //           return <div
    //             className={selected.id === elem.id ? "lst__row ve-flex-col list-multi-selected" : "lst__row ve-flex-col"}
    //             onClick={() => handleClick(elem)}>
    //
    //             <a href={"#" + elem.id} className="lst__row-border lst__row-inner">
    //               <span className="bold ve-col-8 pl-0 pr-1">{elem.name}</span>
    //               <span className={"ve-col-4 ve-text-center source__" + elem.source + " pl-1 pr-0 pr-1"}
    //                     title={getSourceName(elem.source)}>{elem.source}</span>
    //             </a>
    //           </div>
    //         })}
    //       </div>
    //     </div>
    //     <div className="cancer__wrp-mobile-1 cancer__anchor"></div>
    //     {/*TODO: Create tabs here original tab id: 'stat-tabs'*/}
    //     {Object.keys(selected).length === 0 ?
    //       <div className="view-col" id="contentwrapper">
    //         <div id="wrp-pagecontent" className="relative wrp-stats-table placeholder">
    //           <table id="pagecontent" className="w-100 stats">
    //             <tbody>
    //             <tr>
    //               <th className="ve-tbl-border" colSpan="6"></th>
    //             </tr>
    //             <tr>
    //               <td colSpan="6" className="initial-message initial-message--med">Select an entry from the list to
    //                 view it here
    //               </td>
    //             </tr>
    //             <tr>
    //               <th className="ve-tbl-border" colSpan="6"></th>
    //             </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div> :
    //       <Tabs className="view-col" id="contentwrapper">
    //         <TabList className="w-100 ve-flex" id="stat-tabs" defaultIndex={0}
    //                  style={{paddingLeft: "0px", marginBottom: "0px"}}>
    //           <Tab
    //             className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0 ui-tab__btn-tab-head--active">Traits</Tab>
    //           <Tab className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0">Info</Tab>
    //           {selected.images.length === 0 ?
    //             <Tab
    //               className="ui-tab__btn-tab-head ve-btn ve-btn-default stat-tab-gen pt-2p px-4p pb-0">Images</Tab>
    //             : <></>
    //           }
    //           <li className="ml-auto ve-flex" id="tabs-right">
    //             <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
    //                     title="Pin (Toggle) (Hotkey: p/P)">
    //               <span className="glyphicon glyphicon-pushpin"></span>
    //             </button>
    //             <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
    //                     title="Popout Window (SHIFT for Source Data; CTRL for Markdown Render)">
    //               <span className="glyphicon glyphicon-new-window"></span>
    //             </button>
    //             <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0 ve-btn-copy-effect"
    //                     title="Copy Link to Filters (SHIFT to add list; CTRL to copy @filter tag)">
    //               <span className="glyphicon glyphicon-magnet"></span>
    //             </button>
    //             <button className="ui-tab__btn-tab-head ve-btn ve-btn-default pt-2p px-4p pb-0"
    //                     title="Other Options">
    //               <span className="glyphicon glyphicon-option-vertical"></span>
    //             </button>
    //           </li>
    //         </TabList>
    //         <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
    //           <table className="w-100 stats">
    //             <tr>
    //               <th className="ve-tbl-border" colSpan="6"></th>
    //             </tr>
    //             <DetailsHeader/>
    //             <tr>
    //               <td colSpan={6} className="pt-3">
    //                 <b>Source:</b>
    //                 <i title={getSourceName(selected.source)}>{selected.source}</i>
    //                 , page {selected.page}. {selected.reprinted}
    //               </td>
    //             </tr>
    //             <tr>
    //               <th className="ve-tbl-border" colSpan="6"></th>
    //             </tr>
    //           </table>
    //         </TabPanel>
    //         <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
    //           <table className="w-100 stats">
    //             <tr>
    //               <th className="ve-tbl-border" colSpan="6"></th>
    //             </tr>
    //             <DetailsHeader/>
    //             <tr>
    //               <td colSpan={6} className="pt-3">
    //                 <div className="rd__b rd__b--1">
    //                   <div className="rd__b rd__b--2">
    //                     {selected.info.map((info) => {
    //                       const key = Object.keys(info)[0];
    //                       const value = info[key]
    //                       if (key === "") {
    //                         return (<p>{value}</p>)
    //                       }
    //                       if (typeof value === typeof []) {
    //                         return (
    //                           <div className="rd__b rd__b--3">
    //                             {value.map((elem) => {
    //                               return (
    //                                 <p>
    //                                   {elem === value[0] ? <>
    //                                         <span className="rd__h rd__b--3">
    //                                           <span className="entry-title-inner">{key}</span>
    //                                         </span>
    //                                     {" " + key}
    //                                   </> : key
    //                                   }
    //                                 </p>
    //                               )
    //                             })}
    //                           </div>
    //                         )
    //                       }
    //                       if (typeof value === typeof {}) {
    //                         return formatContent([value])
    //                       }
    //                       return (
    //                         <div className="rd__b rd__b--3">
    //                           <p>
    //                                   <span className="rd__h rd__b--3">
    //                                     <span className="entry-title-inner">{key}</span>
    //                                   </span>
    //                             {" " + key}
    //                           </p>
    //                         </div>
    //                       )
    //                     })}
    //                   </div>
    //                 </div>
    //               </td>
    //             </tr>
    //             <tr>
    //               <th className="ve-tbl-border" colSpan="6"></th>
    //             </tr>
    //           </table>
    //         </TabPanel>
    //         {selected.images.length === 0 ?
    //           <TabPanel id="wrp-pagecontent" className="relative wrp-stats-table">
    //             <table className="w-100 stats">
    //               <tr>
    //                 <th className="ve-tbl-border" colSpan="6"></th>
    //               </tr>
    //               <DetailsHeader/>
    //               <tr>
    //                 <th className="ve-tbl-border" colSpan="6"></th>
    //               </tr>
    //             </table>
    //           </TabPanel>
    //           : <></>
    //         }
    //       </Tabs>
    //     }
    //   </div>
    // </div>
  )
}