import {Feature, PlayerClass} from "../Models";
import {Parser} from "./parser";
import React from "react";

export class Renderer {
  constructor(selected: {}) {
    this.selected = selected;
  }

  selected
  getToggleState: function
  toggleStateChange: function

  render(selected, getToggleState, toggleStateChange, type: string = "") {
    this.selected = selected
    this.getToggleState = getToggleState
    this.toggleStateChange = toggleStateChange

    switch (type) {
      case "PlayerRace": {
        return selected.info.classFeatures.map(feature => {
          const featureLevel = (feature.classFeature ?? feature).split("|").pop()
          const featuresDetails = [];
          featuresDetails.push(Renderer.renderClassFeature(feature.classFeature ?? feature))
          if (feature.gainSubClassFeature) {
            featuresDetails.push(
              selected.subclasses.map((subclass) => {
                const subClassesDetails = []
                if (!getToggleState(selected.id + "-subclass-" + subclass.shortName)) return ""
                subClassesDetails.push(
                  subclass.subclassFeatures.map((subclassFeature) => {
                    const subclassFeaturesDetails = []
                    const subclassFeatureLevel = subclassFeature.split("|").pop()
                    if (featureLevel === subclassFeatureLevel) {
                      subclassFeaturesDetails.push(Renderer.renderClassFeature(subclassFeature))
                    }
                    return subclassFeaturesDetails
                  })
                )
                return subClassesDetails
              })
            )
          }

          return featuresDetails
        })
      }
      default:
        return `Not Implemented: ${selected.constructor}`
    }
  }

  renderContent = (entry, depth: number = 1, toggle: string = "") => {
    if (!entry) {}

    else if (Array.isArray(entry)) return entry.map(item => this.renderContent(item, depth, toggle));
    else if (entry.type) {
      switch (entry.type) {
        case "subFeature": {
          return this.renderClassFeature(entry.subFeature, 2)
        }
        case "entries": {
          if (depth > 1) {
            return <div></div>
          }
          toggle = toggle + "-sub-" + entry.name ?? ""
          // addToggleableState(toggle)
          // console.log(entry, entry.entries)
          return <div className="rd__b rd__b--2">
            <h3 className="rd__h rd__h--2">
              <span className="entry-title-inner">{entry.name}</span>
              <span className="ve-flex-vh-center" onClick={() => this.toggleStateChange(toggle)}>
                <span className="">[{this.getToggleState(toggle) ? "–" : "+"}]</span>
              </span>
            </h3>
            {this.getToggleState(toggle) ? this.renderContent(entry.entries, depth++, toggle) : ""}
          </div>
        }
        case "list": {
          // console.log(entry)
          return <ul className={"rd__list " + entry.style ?? ""}>
            {entry.entries.map(item => {
              return <li className="rd__li">{this.renderContent(item, depth++, toggle)}</li>
            })}
          </ul>
        }
        default:
          return <><br/>Not yet implemented: "{entry.type}".</>
      }
    } else if (typeof entry === "string") {
      return <p>{entry}</p>
    } else return false;
  }

  renderClassFeature = (featureStringId: string, header: number = 1) => {
    const selectedClass: PlayerClass = this.selected
    const featureObject = selectedClass.findFeatureInClass(featureStringId)
    let featureName, className, featureSource, featureLevel, subclassClassName, subclassClassSource, subclassName
    let toggleName

    if (featureObject?.subclassShortName) {
      [featureName, subclassClassName, subclassClassSource, subclassName, featureSource, featureLevel] = featureStringId.split("|")
      toggleName = selectedClass.id + "-subclass-" + (featureObject?.subclassShortName ?? "Unknown") + "-feature-" + featureName
    } else {
      [featureName, className, featureSource, featureLevel] = featureStringId.split("|")
      toggleName = selectedClass.id + "-feature-" + featureName
    }

    // addToggleableState(toggleName)
    return <tr className="cls-main__linked-titles">
      <td colSpan={6}>
        <div
          className={"rd__b rd__b--" + (featureObject?.header ?? header) + (featureObject?.subclassShortName ? " cls__feature-subclass" : "")}>
          <h2 className={"rd__h rd__h--" + (featureObject?.header ?? header)}>
            <span className="entry-title-inner">
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
                onClick={() => this.getToggleState(toggleName)}
              >
                [{this.getToggleState(toggleName) ? "–" : "+"}]
              </span>
            </span>
          </h2>
          {featureObject ? "" : <p>Unable to find {featureStringId}</p>}
          {this.getToggleState(toggleName) && this.renderContent(featureObject?.entries, header, toggleName)}
        </div>
      </td>
    </tr>

  }
}
