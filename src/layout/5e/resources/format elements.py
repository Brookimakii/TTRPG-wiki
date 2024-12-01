import json


def main():
    with open("feats.json", "r", encoding="utf-8") as f:
        feats = json.load(f)
        f.close()
    elements = {}
    for feat in feats:
        elements[feat["name"]] = {
            "description": f"{"*Prérequis*" + feat["prerequisite"] + "*\n\n" if "prerequisite" in feat.keys() else ""}{feat["shortDesc"]}",
            "sources": [feat["source"]]
        }
    print(elements)

    input()

    with open("races.json", "r", encoding="utf-8") as f:
        races = json.load(f)
        f.close()
    elements = {}
    for race in races:
        elements[race["name"]] = {
            "description": f"{"*Prérequis*" + race["prerequisite"] + "*\n\n" if "prerequisite" in race.keys() else ""}{race["shortDesc"]}",
            "sources": [race["source"]]
        }


if __name__ == "__main__":
    main()
