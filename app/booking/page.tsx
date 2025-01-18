'use client'

import "./booking.scss";
import arrowForward from "@/public/arrow_forward.svg";
import Image from "next/image";
import {Planet, GetPlanets} from "@/app/data/planet";
import React, {ReactNode, useEffect, useState} from "react";
import {useSearchParams} from 'next/navigation'

export default function Page() {
    const [planets, setPlanets] = useState<ReactNode[]>([]);
    const [formData, setFormData] = useState<BookingFormData>(new BookingFormData());
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const searchParams = useSearchParams();
    const planet = searchParams.get('planet');

    useEffect(() => {
        const planets = GetPlanets();
        const planetsSort = planets.sort((a, b) => a.name.localeCompare(b.name));
        setPlanets(planetsSort.map((planet: Planet) => {
            return <option key={planet.name} value={planet.name}>{planet.name}</option>;
        }));
    }, []);

    useEffect(() => {
        if (planet) {
            const newPlanet = GetPlanets().find(e => e.name === planet)!.name;
            const currentFormData = formData;
            currentFormData.toPlanet = newPlanet;
            setFormData(currentFormData);
            console.dir(formData.toPlanet)
        }
    }, [planet]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        if (name === "fromDate" || name === "toDate") {
            setFormData(prevData => ({...prevData, [name]: new Date(value)}));
        } else {
            setFormData(prevData => ({...prevData, [name]: value}));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (formData.fromPlanet === formData.toPlanet) {
            newErrors.toPlanet = "From and To planets cannot be the same";
        }
        if (!formData.toPlanet || formData.toPlanet === "Select...") {
            newErrors.toPlanet = "Please select a destination planet";
        }
        if (formData.fromDate >= formData.toDate) {
            newErrors.toDate = "Return date must be after departure date";
        }
        if (formData.infants == 0 && formData.children == 0 && formData.adults == 0) {
            newErrors.seats = "Select at least one seat";
        }
        if (formData.adults == 0 && (formData.children > 0 || formData.infants > 0)) {
            newErrors.adults = "At least one adult is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        if (typeof (formData.toPlanet) == typeof ("")) {
            formData.toPlanet = GetPlanets().find(e => e.name === formData.toPlanet!)!;
        }
        if (typeof (formData.fromPlanet) == typeof ("")) {
            formData.fromPlanet = GetPlanets().find(e => e.name === formData.fromPlanet!)!;
        }
        document.querySelector('.rocket')?.classList.add('move-rocket');
        document.location.href = `/trips?data=` + JSON.stringify(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="heading">Booking</h1>
            <div className={"booking-main"}>
                <div className={"booking-left"}>
                    <h1>From</h1>
                    <select name="fromPlanet" onChange={handleInputChange}>
                        {planets}
                    </select>
                </div>
                <div className={"booking-middle"}>
                    <Image src={arrowForward} alt={"Forward arrow"}/>
                    <h3>Depart</h3>
                    <input type="date" name="fromDate" id="from" onChange={handleInputChange}
                           defaultValue={formData.fromDate.toISOString().split('T')[0]}/>
                    <h3>Return</h3>
                    <input type="date" name="toDate" id="to" onChange={handleInputChange}
                           defaultValue={new Date(formData.toDate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}/>
                    {errors.toDate && <p className="error">{errors.toDate}</p>}
                    {errors.seats && <p className="error">{errors.seats}</p>}
                    {errors.adults && <p className="error">{errors.adults}</p>}
                    <br/>
                    <br/>
                </div>
                <div className={"booking-right"}>
                    <h1>To</h1>
                    <select name="toPlanet" value={formData.toPlanet as string} onChange={(e) => {
                        handleInputChange(e);
                    }}>
                        <option>Select...</option>
                        {planets}
                    </select>
                    {errors.toPlanet && <p className="error">{errors.toPlanet}</p>}
                </div>
            </div>
            <div className={"booking-bottom"}>
                <div>
                    <h2>Seats</h2>
                    <table width={"100%"}>
                        <tbody>
                        <tr>
                            <td>Infants</td>
                            <td><input type="number" name="infants" id="infants" min={0} max={10} defaultValue={0}
                                       onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td>Child</td>
                            <td><input type="number" name="children" id="children" min={0} max={10} defaultValue={0}
                                       onChange={handleInputChange}/></td>
                        </tr>
                        <tr>
                            <td>Adult</td>
                            <td><input type="number" name="adults" id="adults" min={0} max={10} defaultValue={1}
                                       onChange={handleInputChange}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <select name="seatType" onChange={handleInputChange} style={{marginTop: "1rem"}}>
                        <option value="Economy">Economy</option>
                        <option value="Business">Business</option>
                        <option value="First">First</option>
                    </select>
                </div>
                <button type="submit" style={{fontSize: "2rem"}}>Go <span className="rocket">🚀</span></button>
            </div>
        </form>
    );
}

export enum SeatType {
    Economy,
    Business,
    First
}

export class BookingFormData {
    fromDate: Date;
    toDate: Date;
    fromPlanet: string | Planet;
    toPlanet: string | Planet | undefined;
    infants: number;
    children: number;
    adults: number;
    seatType: SeatType;

    constructor() {
        this.fromDate = new Date();
        this.toDate = new Date();
        this.toDate.setDate(this.fromDate.getDate() + 7);

        this.fromDate = new Date(this.fromDate);
        this.toDate = new Date(this.toDate);

        this.fromPlanet = GetPlanets()[0];
        this.toPlanet = undefined;
        this.infants = 0;
        this.children = 0;
        this.adults = 1;
        this.seatType = SeatType.Economy;
    }
}


export function GetDistance(data: BookingFormData): number {
    const fromPlanet = data.fromPlanet as Planet;
    const toPlanet = data.toPlanet as Planet;
    return Math.sqrt(
        Math.pow(fromPlanet.coordX - toPlanet.coordX, 2) + Math.pow(fromPlanet.coordY - toPlanet.coordY, 2)
    );
}