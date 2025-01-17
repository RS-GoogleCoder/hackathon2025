'use client'

import "./booking.scss";
import arrowForward from "@/public/arrow_forward.svg";
import Image from "next/image";
import {Planet, Planets} from "@/app/data/planet";
import {ReactNode, useEffect, useState} from "react";
import {useSearchParams} from 'next/navigation'

export default function Page() {
    const [planets, setPlanets] = useState<ReactNode[]>([]);
    const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

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
        }
    }, [planet]);

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
                    <select value={selectedPlanet || ""} onChange={(e) => setSelectedPlanet(e.target.value)}>
                        {planets}
                    </select>
                </div>
            </div>
            <div className={"booking-bottom"}>
                <div>
                    <h2>Seat type</h2>
                    <div>
                        <p>
                            Infants <input type="number" name="infants" id="infants" min={0} max={10}/>
                        </p>
                        <p>
                            Child <input type="number" name="infants" id="infants" min={0} max={10}/>
                        </p>
                        <p>
                            Adult <input type="number" name="infants" id="infants" min={0} max={10}/>
                        </p>
                    </div>
                    <select>
                    <option key={SeatType.Economy}>Economy</option>
                    <option key={SeatType.Business}>Business</option>
                    <option key={SeatType.First}>First</option>
                </select>
                </div>
                <button>Go 🚀</button>
            </div>
            
        </form>
    );
}

export enum SeatType {
    Economy,
    Business,
    First
}