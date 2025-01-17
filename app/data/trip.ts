import {BookingFormData} from "@/app/booking/page";
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
        this.price = price;
    }
}