export class Planet {
    name: string = "Some planet";

    constructor(name: string) {
        this.name = name;
    }
}

export const Planets = [
    new Planet("Earth"),
    new Planet("Tatooine"),
    new Planet("Alderaan"),
    new Planet("Yavin IV"),
    new Planet("Hoth"),
    new Planet("Dagobah"),
]