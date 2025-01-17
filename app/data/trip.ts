import {BookingFormData, SeatType} from "@/app/booking/page";
import {Carrier} from "@/app/data/carrier";
import {ShipModel} from "@/app/data/shipModel";

export class Trip {
    data: BookingFormData;
    carrier: Carrier;
    model: ShipModel;
    price: number;


    constructor(data: BookingFormData, carrier: Carrier, model: ShipModel, price: number) {
        this.data = data;
        this.carrier = carrier;
        this.model = model;

        const distBetweenPlanets = Math.sqrt(
            (data.fromPlanet.coordX + data.toPlanet.coordX) ^ 2 + (data.fromPlanet.coordY + data.toPlanet.coordY) ^ 2
        )

        const carrierSurcharge = carrier.rating * 100 + (Math.random() - 0.5) * 50;

        this.price = price + (distBetweenPlanets * 800) + carrierSurcharge;
        this.price = Math.round(this.price * 50) / 50;
        this.price = (Math.round(this.price)) - 0.01;
        if (data.seatType == SeatType.Business) price += (200 * carrier.rating);
        if (data.seatType == SeatType.First) price += (800 * carrier.rating);
    }
}