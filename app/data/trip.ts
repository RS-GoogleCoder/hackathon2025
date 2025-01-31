﻿import {BookingFormData, GetDistance, SeatType} from "@/app/booking/page";
import {Carrier} from "@/app/data/carrier";
import {ShipModel} from "@/app/data/shipModel";
import {Planet} from "@/app/data/planet";

export class Trip {
    data: BookingFormData;
    carrier: Carrier;
    model: ShipModel;
    price: number;


    constructor(data: BookingFormData, carrier: Carrier, model: ShipModel) {
        this.data = data;
        this.carrier = carrier;
        this.model = model;


        const carrierSurcharge = carrier.rating * 100 + (Math.random() - 0.5) * 50;

        this.price = (GetDistance(data) * 800) + carrierSurcharge;
        this.price = Math.round(this.price * 50) / 50;
        this.price = (Math.round(this.price)) - 0.01;

        this.price += data.children * 12 * (800 * carrier.rating);
        this.price += data.adults * 25 * (800 * carrier.rating);

        if (data.seatType == SeatType.Business) this.price *= 2;
        if (data.seatType == SeatType.First) this.price *= 5;
    }


}
