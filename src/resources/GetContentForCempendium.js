
const fs = require("fs")
function main() {
    const compendium = {}


    const races = require("./races.json")
    let racesString = ""
    races.map((race, idx) => {
        race.subraces ?
            race.subraces.map((subrace, idxx) => {
                racesString += `${race.name} ${subrace.name}` + (idxx == race.subraces.length - 1 && idx == races.length - 1 ? "" : ", ")
            }) :
            racesString += race.name + (idx != races.length - 1 ? ", " : "")
    })
    compendium["Races"] = racesString

    const backgrounds = require("./backgrounds.json")
    let backgroundsString = ""
    backgrounds.map((background, idx) => {
        backgroundsString += background.name + (idx != backgrounds.length - 1 ? ", " : "")
    })
    compendium["Backgrounds"] = backgroundsString

    // let languagesString = ""

    // races.map(race=>{
    //     race.info.l
    // })

    // compendium["Languages"] = languagesString

    const classes = require("./classes.json")
    const classesObject = {}
    classes.map((clazz, idx) => {
        const infos = clazz.info
        const subclasses = {}
        clazz.subclasses.map((subclass, subclassIdx) => {
            const subclassDetails = {}
            Array(20).fill(".").map((_, idx) => {
                subclassDetails[`level${idx + 1}`] = getFeatureAtLevel(clazz.subclassFeatures, idx + 1, subclass.shortName)
            })
            subclasses[subclass.name.toLocaleLowerCase()] = subclassDetails
        })
        const classDetails = {
            level: getSubclassLevel(infos.classFeatures),
            hitdice: `d${infos.hitDice.faces}`,
            spellcasting: infos.spellcasting??"",
            subclass: subclasses,
        }
        Array(20).fill(".").map((_, idx) => {
            classDetails[`level${idx + 1}`] = getFeatureAtLevel(clazz.classFeatures, idx + 1)
        })
        classDetails["hitDice"] = `d${infos.hitDice.faces}`
        classesObject[infos.name.toLowerCase()] = classDetails

    })
    compendium["Classes"] = classesObject



    fs.writeFile("file.json", JSON.stringify(compendium), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })
}

function getFeatureAtLevel(features, level, subclass) {
    let featureList = features.filter(f => {

        return subclass ? f.level === level && f.subclassShortName === subclass : f.level === level
    })
    featureList = featureList.map(f => f.name.toLocaleLowerCase())
    // console.log(featureList)
    return featureList.join(", ")
}

function getSubclassLevel(features) {
    let featureList = features.filter(f => f.classFeature?true:false)

    featureList = featureList.map(f => f.classFeature.split("|").pop())
    
    return Number(featureList[0])
}


main()