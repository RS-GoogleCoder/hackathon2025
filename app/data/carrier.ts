export class Carrier {
    name: string;
    rating: number;
    image: string;

    constructor(name: string, rating: number, image: string) {
        this.name = name;
        if (rating < 0 || rating > 5) throw new Error("Rating must be between 0 and 5")
        this.rating = rating;
        this.image = image;
    }
}

export const Carriers = [
    new Carrier("Virgin Galactic", 4.7, "virgin_galactic.png"),
    new Carrier("Star Alliance", 4, "star_alliance.png"),
    new Carrier("Star Ship", 3.5, "star_ship.png"),
    new Carrier("Galactic Express", 4.2, "galactic_express.png"),
    new Carrier("Cosmic Voyages", 3.8, "cosmic_voyages.png"),
    new Carrier("Interstellar Travels", 4.5, "interstellar_travels.png"),
    new Carrier("Universal Spacelines", 4.0, "universal_spacelines.png"),
    new Carrier("Nebula Navigators", 3.9, "nebula_navigators.png"),
    new Carrier("Astro Adventures", 4.3, "astro_adventures.png"),
    new Carrier("Space X", 4.5, "space_x.png")

]