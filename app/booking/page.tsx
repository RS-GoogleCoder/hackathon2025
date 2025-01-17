'use client'

import "./booking.scss";
import arrowForward from "@/public/arrow_forward.svg";
import Image from "next/image";
import {Planet, Planets} from "@/app/data/planet";
import React, {ReactNode, useEffect, useState} from "react";
import {useSearchParams} from 'next/navigation'

export default function Page() {
    const [planets, setPlanets] = useState<ReactNode[]>([]);
    const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
    const [formData, setFormData] = useState(new BookingFormData());

    const searchParams = useSearchParams();
    const planet = searchParams.get('planet');

    useEffect(() => {
        setPlanets(Planets.map((planet: Planet) => {
            return <option key={planet.name} value={planet.name}>{planet.name}</option>;
        }));
    }, []);

    useEffect(() => {
        if (planet) {
            setSelectedPlanet(planet);
            setFormData(prevData => ({...prevData, toPlanet: Planets.find(e => e.name === planet)!}));
        }
    }, [planet]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        document.location.href = `/checkout?` + JSON.stringify(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="heading">Booking</h1>
            <div className={"booking-main"}>
                <div className={"booking-left"}>
                    <h1>From</h1>
                    <input type="date" name="fromDate" id="from" onChange={handleInputChange}/>
                    <br/>
                    <select name="fromPlanet" onChange={handleInputChange}>
                        {planets}
                    </select>
                </div>
                <div className={"booking-middle"}>
                    <Image src={arrowForward} alt={"Forward arrow"} style={{width: "100%", height: "30%"}}/>
                </div>
                <div className={"booking-right"}>
                    <h1>To</h1>
                    <input type="date" name="toDate" id="to" onChange={handleInputChange}/>
                    <br/>
                    <select name="toPlanet" value={selectedPlanet || ""} onChange={(e) => {
                        setSelectedPlanet(e.target.value);
                        handleInputChange(e);
                    }}>
                        {planets}
                    </select>
                </div>
            </div>
            <div className={"booking-bottom"}>
                <div>
                    <h2>Seat type</h2>
                    <div>
                        <p>
                            Infants <input type="number" name="infants" id="infants" min={0} max={10}
                                           defaultValue={0} onChange={handleInputChange}/>
                        </p>
                        <p>
                            Child <input type="number" name="children" id="children" min={0} max={10}
                                         defaultValue={0} onChange={handleInputChange}/>
                        </p>
                        <p>
                            Adult <input type="number" name="adults" id="adults" min={0} max={10}
                                         defaultValue={1} onChange={handleInputChange}/>
                        </p>
                    </div>
                    <select name="seatType" onChange={handleInputChange}>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First">First</option>
                    </select>
                </div>
                <button type="submit"
                        onClick={() => document.querySelector('.rocket')?.classList.add('move-rocket')}>Go <span
                    className="rocket">🚀</span></button>
            </div>
        </form>
    );
}

export enum SeatType {
    Economy,
    Business,
    First
}

class BookingFormData {
    fromDate: Date;
    toDate: Date;
    fromPlanet: Planet;
    toPlanet: Planet;
    infants: number;
    children: number;
    adults: number;
    seatType: SeatType;

    constructor() {
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromPlanet = Planets[0];
        this.toPlanet = Planets[0];
        this.infants = 0;
        this.children = 0;
        this.adults = 0;
        this.seatType = SeatType.Economy;
    }
}