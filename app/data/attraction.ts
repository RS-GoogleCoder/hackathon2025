import {GetPlanets, Planet} from "@/app/data/planet";

export class Attraction {
    name: string;
    description: string;
    image: string;
    rating: number;
    location: Planet;
    locationLocal: string;

    constructor(name: string, description: string, image: string, rating: number, location: Planet, locationLocal: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.rating = rating;
        this.location = location;
        this.locationLocal = locationLocal;
    }
}

export const Attractions = [
    new Attraction("Burj Khalifa", "The tallest building of the old world", "burj_khalifa.jpg", 4.7, GetPlanets()[0], "Dubai"),
    new Attraction("Eiffel Tower", "The most famous tower of the old world", "eiffel_tower.jpg", 4.5, GetPlanets()[0], "Paris"),
    new Attraction("Statue of Liberty", "The symbol of freedom", "statue_of_liberty.jpg", 4.3, GetPlanets()[0], "New York"),
    new Attraction("Great Wall of China", "The longest wall of the old world", "china_wall.webp", 4.6, GetPlanets()[0], "Beijing"),
    new Attraction("Machu Picchu", "The lost city of the Incas", "machu_picchu.jpg", 4.4, GetPlanets()[0], "Cuzco"),
    new Attraction("Taj Mahal", "The symbol of love", "taj_mahal.webp", 4.7, GetPlanets()[0], "Agra"),

    new Attraction("Mos Eisley Cantina", "A popular bar in Mos Eisley", "mos_eisley_cantina.jpeg", 4.8, GetPlanets()[1], "Mos Eisley"),
    new Attraction("Lars Homestead", "The home of Luke Skywalker", "lars_home.webp", 4.6, GetPlanets()[1], "Tatooine Desert"),
    new Attraction("Jabba's Palace", "The palace of the infamous Jabba the Hutt", "jabba_palace.webp", 4.7, GetPlanets()[1], "Dune Sea"),

    new Attraction("Royal Palace of Alderaan", "The majestic palace of the royal family", "alderaan_palace.webp", 4.9, GetPlanets()[2], "Aldera"),
    new Attraction("Alderaan University", "The most prestigious university in the galaxy", "alderaan_university.webp", 4.8, GetPlanets()[2], "Aldera"),
    new Attraction("Alderaan Gardens", "Beautiful gardens with exotic flora", "alderaan_gardens.jpg", 4.7, GetPlanets()[2], "Aldera"),

    new Attraction("Echo Base", "The secret Rebel Alliance base", "echo_base.jpg", 4.8, GetPlanets()[3], "Hoth"),
    new Attraction("Wampa Cave", "The cave of the fearsome Wampa", "wampa_cave.webp", 4.5, GetPlanets()[3], "Hoth"),
    new Attraction("Hoth Ice Plains", "Vast and beautiful ice plains", "ice_plains.webp", 4.7, GetPlanets()[3], "Hoth"),

    new Attraction("Yoda's Hut", "The humble home of Jedi Master Yoda", "yoda_hut.jpeg", 4.9, GetPlanets()[4], "Dagobah Swamp"),
    new Attraction("Dark Side Cave", "A mysterious cave strong with the dark side of the Force", "dark_side_cave.webp", 4.6, GetPlanets()[4], "Dagobah Swamp"),
    new Attraction("Dagobah Swamps", "Dense and murky swamps teeming with life", "dagobah_swamp.jpeg", 4.7, GetPlanets()[4], "Dagobah Swamp"),

    new Attraction("Mustafar Lava Fields", "Expansive fields of flowing lava", "mustafar_lava.jpg", 4.8, GetPlanets()[5], "Mustafar"),
    new Attraction("Fortress Vader", "The dark fortress of Darth Vader", "fortress_vader.png", 4.9, GetPlanets()[5], "Mustafar"),
    new Attraction("Mustafar Mining Complex", "A large mining facility", "mustafar_mining_corp.webp", 4.7, GetPlanets()[5], "Mustafar"),

    new Attraction("Jedi Temple", "The central hub of the Jedi Order", "jedi_temple.webp", 4.9, GetPlanets()[6], "Coruscant"),
    new Attraction("Galactic Senate", "The seat of the Galactic Republic", "galactic_senate.webp", 4.8, GetPlanets()[6], "Coruscant"),
    new Attraction("Imperial Palace", "The former palace of the Emperor", "imperial_palace.webp", 4.8, GetPlanets()[6], "Coruscant"),
    new Attraction("Coruscant Skyline", "A breathtaking view of the cityscape", "coruscant_skyline.jpg", 4.7, GetPlanets()[6], "Coruscant"),
    new Attraction("Galactic Museum", "A museum showcasing the history of the galaxy", "galactic_museum.webp", 4.6, GetPlanets()[6], "Coruscant"),

    new Attraction("Cloud City", "A floating city in the clouds", "cloud_city.webp", 4.9, GetPlanets()[7], "Bespin"),
    new Attraction("Tibanna Gas Refinery", "Complex facilities to process the valuable tibanna gas", "tibanna_gas.webp", 4.7, GetPlanets()[7], "Bespin"),

    new Attraction("Theed Royal Palace", "The majestic palace of the Naboo royalty", "naboo_royal_palace.jpeg", 4.9, GetPlanets()[8], "Theed"),
    new Attraction("Otoh Gunga", "The underwater city of the Gungans", "gungan_city.webp", 4.8, GetPlanets()[8], "Lake Paonga"),
    new Attraction("Naboo Plains", "Beautiful and serene plains", "naboo_grass.webp", 4.7, GetPlanets()[8], "Naboo"),

]
