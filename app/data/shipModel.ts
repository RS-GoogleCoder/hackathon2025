export const ShipManufacturers = [
    "Boing",
    "SpaceBus",
    "Kuat Drive Yards",
    "StarWorks",
    "CosmoCorp"
]

export class ShipModel {
    manufacturer: string;
    model: string;

    constructor(manufacturer: string, model: string) {
        this.manufacturer = manufacturer;
        this.model = model;
    }
}

export const ShipModels = [
    new ShipModel(ShipManufacturers[0], "929"),
    new ShipModel(ShipManufacturers[0], "939"),
    new ShipModel(ShipManufacturers[0], "949"),
    new ShipModel(ShipManufacturers[0], "959"),
    new ShipModel(ShipManufacturers[0], "969"),
    new ShipModel(ShipManufacturers[0], "979"),
    new ShipModel(ShipManufacturers[0], "989"),
    new ShipModel(ShipManufacturers[0], "999"),

    new ShipModel(ShipManufacturers[1], "b560"),
    new ShipModel(ShipManufacturers[1], "b570"),
    new ShipModel(ShipManufacturers[1], "b580"),

    new ShipModel(ShipManufacturers[2], "G100"),
    new ShipModel(ShipManufacturers[2], "G200"),
    new ShipModel(ShipManufacturers[2], "G300"),

    new ShipModel(ShipManufacturers[3], "S1"),
    new ShipModel(ShipManufacturers[3], "S2"),
    new ShipModel(ShipManufacturers[3], "S3"),

    new ShipModel(ShipManufacturers[4], "C10"),
    new ShipModel(ShipManufacturers[4], "C20"),
    new ShipModel(ShipManufacturers[4], "C30")
]