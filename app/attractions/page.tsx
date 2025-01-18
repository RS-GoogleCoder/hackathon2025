'use client'

import {Attraction, Attractions} from "@/app/data/attraction";
import {useEffect, useState} from "react";
import Image from "next/image";
import "./attractions.scss";
import {useSearchParams} from "next/navigation";

export default function Page() {
    const [attractions, setAttractions] = useState<Attraction[]>([]);
    const [planetFilter, setPlanetFilter] = useState<string>("");

    const params = useSearchParams();

    useEffect(() => {
        setPlanetFilter(params.get("planet") || "");
    }, [params]);

    useEffect(() => {
        const filteredAttractions = planetFilter
            ? Attractions.filter(a => a.location.name === planetFilter)
            : Attractions;
        setAttractions(filteredAttractions.sort((a, b) => b.rating - a.rating));
    }, [planetFilter]);

    return <>
        <h1>Attractions</h1>
        <div>
            <label htmlFor="planet-filter">Filter by Planet:</label>
            <select id="planet-filter" style={{fontSize: "1rem"}} value={planetFilter}
                    onChange={(e) => setPlanetFilter(e.target.value)}>
                <option value="">All</option>
                {Array.from(new Set(Attractions.map(a => a.location.name))).map(planet => (
                    <option key={planet} value={planet}>{planet}</option>
                ))}
            </select>
        </div>
        <div className={"attractions-container"}>
            {attractions.map(a => <div key={a.name} className={"attraction"}>
                <h2>{a.name}</h2>
                <Image src={"/attractions/" + a.image} alt={a.name} width={200} height={200} style={{width: "auto"}}/>
                <p>{a.description}</p>
                <p>Rating: {a.rating}⭐</p>
                <p>Location: {a.locationLocal}, {a.location.name}
                    <button onClick={() => {
                        window.location.href = "/booking?planet=" + a.location.name;
                    }}>Go
                    </button>
                </p>
            </div>)
            }
        </div>
    </>
}