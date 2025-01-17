export class Carrier {
    name: string;
    rating: number;

    constructor(name: string, rating: number) {
        this.name = name;
        if (rating < 0 || rating > 5) throw new Error("Rating must be between 0 and 5")
        this.rating = rating;
    }
}

export const Carriers = [
    new Carrier("Star Alliance", 4),
    new Carrier("Star Ship", 3.5)
]