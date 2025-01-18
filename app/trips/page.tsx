﻿'use client'

import {useSearchParams} from "next/navigation";
import {BookingFormData, GetDistance, SeatType} from "@/app/booking/page";
import {Carriers} from "@/app/data/carrier";
import {Trip} from "@/app/data/trip";
import {ShipModels} from "@/app/data/shipModel";
import {useEffect, useState} from "react";
import "./trips.scss";
import {Planet} from "@/app/data/planet";

export default function Page() {
    const searchParams = useSearchParams();
    const searchParamsData = searchParams.get("data");
    let data: BookingFormData;

    const [trips, setTrips] = useState<Trip[]>([]);
    const [sortOption, setSortOption] = useState<string>("rating");

    if (searchParamsData) {
        data = JSON.parse(searchParamsData);
        console.dir(data);

        useEffect(() => {
            setTrips(GetRandomTrips(data, 20));
        }, []);
    } else {
        return (
            <>
                <h1>No trip data!</h1>
                <button onClick={() => {
                    document.location.href = "/booking"
                }}>Go to bookings
                </button>
            </>
        );
    }

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(e.target.value);
    };

    const sortedTrips = [...trips].sort((a, b) => {
        if (sortOption === "price") {
            return a.price - b.price;
        } else if (sortOption === "rating") {
            return b.carrier.rating - a.carrier.rating;
        }
        return 0;
    });

    return (
        <>
            <h1>Trips</h1>
            <p>{DataToString(data)}</p>
            <p>Distance: {Math.round(GetDistance(data))} ly</p>
            <label htmlFor="sort">Sort by: </label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="price">Price</option>
                <option value="rating">Carrier Rating</option>
            </select>
            <table>
                <tbody>
                {sortedTrips.map((trip: Trip, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{trip.carrier.name} ({trip.carrier.rating}⭐)</td>
                            <td>{trip.model.manufacturer} {trip.model.model}</td>
                            <td>Ȼ{trip.price.toLocaleString()} (CRED)</td>
                            <td>
                                <button onClick={() => {
                                    const info = JSON.stringify(trip);
                                    document.location.href = "/checkout?tripInfo=" + info;
                                }}>Select
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export function DataToString(bookingFormData: BookingFormData) {
    const outboundDate = DateToString(bookingFormData.fromDate);
    const returnDate = DateToString(bookingFormData.toDate);
    const infants = bookingFormData.infants > 0 ? (bookingFormData.infants + " infants + ") : "";
    const children = bookingFormData.children > 0 ? bookingFormData.children + " children + " : "";


    return outboundDate + " - " + returnDate + ", \t " + (bookingFormData.fromPlanet as Planet).name + " to " + (bookingFormData.toPlanet as Planet).name + ", \t " +
        infants + children + bookingFormData.adults + " adults (" + SeatTypeToString(bookingFormData.seatType as SeatType) + ")";
}

function DateToString(date: Date) {
    date = new Date(date);
    return date.toDateString();
    //return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

function SeatTypeToString(seatType: SeatType) {
    switch (seatType) {
        case SeatType.Economy:
            return "Economy";
        case SeatType.Business:
            return "Business";
        case SeatType.First:
            return "First";
    }
}

function GetRandomTrip(data: BookingFormData): Trip {
    let random = Math.random();
    const randomCarrierIndex = Math.floor(random * Carriers.length);
    const carrier = Carriers[randomCarrierIndex];

    random = Math.random();
    const randomModelIndex = Math.floor(random * ShipModels.length);
    const shipModel = ShipModels[randomModelIndex];


    return new Trip(data, carrier, shipModel);
}

function GetRandomTrips(data: BookingFormData, amount: number): Trip[] {
    const trips = [];
    for (let i = 0; i < amount; i++) {
        trips.push(GetRandomTrip(data));
    }
    return trips;
}