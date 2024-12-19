import json

def get_resources(path):
    with open(path, "r", encoding="utf-8") as file:
        data = json.load(file)
        file.close()
    return data


def main():
    races = get_resources("races.json")
    races_json = ""
    for race in races:
        races_json += str(race)
        if race != races[-1]:
            races += ", "
                
    
    backgrounds = get_resources("backgrounds.json")
    backgrounds_json = ""
    for background in backgrounds:
        backgrounds_json += background["name"]
        if background != backgrounds[-1]:
            backgrounds_json += ", "
    print("\n\n")
    print(races_json)
    print("\n\n")
    print(backgrounds_json)
    print("\n\n")
    
if __name__ == "__main__":
    main()