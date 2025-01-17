'use client'

import {useSearchParams} from "next/navigation";
import {BookingFormData} from "@/app/booking/page";


export default function Page() {

    const searchParams = useSearchParams();
    const searchParamsData = searchParams.get("data");
    let data: BookingFormData;
    if (searchParamsData)
        data = JSON.parse(searchParamsData);
    else {
        return (<>
            <h1>No trip data!</h1>
            <button onClick={() => {
                document.location.href = "/booking"
            }}>Go to bookings
            </button>
        </>);
    }

    return (<>
        <h1>Trips</h1>
        <p>{DataToString(data)}</p>
    </>);
}

function DataToString(bookingFormData: BookingFormData) {
    const outboundDate = DateToString(bookingFormData.fromDate);
    const returnDate = DateToString(bookingFormData.toDate);
    const infants = bookingFormData.infants > 0 ? (bookingFormData.infants + " infants + ") : "";
    const children = bookingFormData.children > 0 ? bookingFormData.children + " children + " : "";


    return outboundDate + " - " + returnDate + ", \t " + bookingFormData.fromPlanet.name + " to " + bookingFormData.toPlanet.name + ", \t " +
        infants + children + bookingFormData.adults + " adults (" + bookingFormData.seatType.toString() + ")";
}

function DateToString(date: Date) {
    return date.toString();
    //return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}