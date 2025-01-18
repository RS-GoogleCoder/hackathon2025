'use client'

import {Attraction, Attractions} from "@/app/data/attraction";
import {useEffect, useState} from "react";
import Image from "next/image";
import "./attractions/attractions.scss";

export default function Page() {
    const [attractions, setAttractions] = useState<Attraction[]>([]);

    useEffect(() => {
        const sortedAttractions = Attractions.sort((a, b) => b.rating - a.rating);
        setAttractions(sortedAttractions.slice(0, 3)); // Get top 3 attractions
    }, []);

    return <>
        <h1 style={{textAlign: "center"}}>Our top picks</h1>
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
        <div style={{textAlign: "center", fontSize: "1.5em", marginTop: "4rem"}}>
            <a href={"/booking"} style={{textDecoration: "none"}}>Bookings</a> • <a href={"/attractions"}
                                                                                    style={{textDecoration: "none"}}>Attractions</a> • <a
            href={"/map"} style={{textDecoration: "none"}}>Galaxy
            Map</a>
        </div>
    </>
}