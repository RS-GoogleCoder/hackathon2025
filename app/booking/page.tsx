'use client'

import "./booking.scss";
import arrowForward from "@/public/arrow_forward.svg";
import Image from "next/image";
import FilterDropdown from "@/app/components/filter-dropdown/filter-dropdown";
import {Planet, Planets} from "@/app/data/planet";
import {ReactNode, useEffect, useState} from "react";

export default function Page() {
    const [planets, setPlanets] = useState<ReactNode[]>([]);

    useEffect(() => {
        setPlanets(Planets.map((planet: Planet) => {
            return <option key={planet.name}>{planet.name}</option>;
        }));
    }, []);

    return (
        <form>
            <h1 className="heading">Booking</h1>
            <div className={"booking-main"}>
                <div className={"booking-left"}>
                    <h1>From</h1>
                    <input type="date" name="from" id="from"/>
                    <br/>
                    <select>{planets}</select>
                </div>
                <div className={"booking-middle"}>
                    <Image src={arrowForward} alt={"Forward arrow"} style={{width: "100%", height: "30%"}}/>
                </div>
                <div className={"booking-right"}>
                    <h1>To</h1>
                    <input type="date" name="to" id="to"/>
                    <br/>
                    <select>{planets}</select>
                </div>
            </div>
            <div className={"booking-bottom"}>
                <p>
                    Infants <input type="number" name="infants" id="infants" min={0} max={10}/>
                </p>
                <p>
                    Child <input type="number" name="infants" id="infants" min={0} max={10}/>
                </p>
                <p>
                    Adult <input type="number" name="infants" id="infants" min={0} max={10}/>
                </p>
                <p>Seat type</p>
                <select>
                    <option key={SeatType.Economy}>Economy</option>
                    <option key={SeatType.Business}>Business</option>
                    <option key={SeatType.First}>First</option>
                </select>
            </div>
            <button>Go 🚀</button>
        </form>
    );
}

export enum SeatType {
    Economy,
    Business,
    First
}