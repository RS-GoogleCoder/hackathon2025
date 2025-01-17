export class Planet {
    name: string = "Some planet";
    coordX: number = 0;
    coordY: number = 0;


    constructor(name: string) {
        this.name = name;
    }
}

const Planets = [
    new Planet("Earth"),
    new Planet("Tatooine"),
    new Planet("Alderaan"),
    new Planet("Yavin IV"),
    new Planet("Hoth"),
    new Planet("Dagobah"),
    new Planet("Mustafar"),
    new Planet("Coruscant"),
    new Planet("Bespin"),
]

export function GetPlanets(): Planet[] {
    const modifiedPlanets = Planets;
    modifiedPlanets.forEach(p => {
        p.coordX = (Math.random() - 0.5) * 1000;
        p.coordY = (Math.random() - 0.5) * 1000;
    });
    return modifiedPlanets;
}