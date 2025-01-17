export const ShipManufacturers = [
    "Boing",
    "SpaceBus"
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
]