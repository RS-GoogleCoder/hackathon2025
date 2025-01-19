'use client'

import {Attraction, Attractions} from "@/app/data/attraction";
import {useEffect, useState} from "react";
import Image from "next/image";
import Carousel from "@/app/components/carousel/carousel";
import "./attractions/attractions.scss";
import {Carrier, Carriers} from "./data/carrier";

export default function Page() {
    const [topRatedAttractions, setTopRatedAttractions] = useState<Attraction[]>([]);
    const [topRatedCarriers, setTopRatedCarriers] = useState<Carrier[]>([]);

    useEffect(() => {
        const filteredAttractions = Attractions.filter(a => a.rating >= 4.7 && a.rating <= 4.9);
        setTopRatedAttractions(filteredAttractions);

        const filteredCarriers = Carriers.filter(a => a.rating >= 4 && a.rating <= 4.9);
        setTopRatedCarriers(filteredCarriers);
    }, []);

    return <>
        <h1 style={{textAlign: "center"}}>Our top picks</h1>
        <Carousel interval={3000} showControls={false} reverse={false}>
            {topRatedAttractions.map(a => (
                <div key={a.name} className={"attraction"}>
                    <h2>{a.name}</h2>
                    <Image src={"/attractions/" + a.image} alt={a.name} width={200} height={200}
                           style={{width: "auto"}}/>
                    <p>{a.description}</p>
                    <p>Rating: {a.rating}⭐</p>
                    <p>Location: {a.locationLocal}, {a.location.name}
                        <button onClick={() => {
                            window.location.href = "/booking?planet=" + a.location.name;
                        }}>Go
                        </button>
                    </p>
                </div>
            ))}
        </Carousel>
        <h1 style={{textAlign: "center"}}>Travel with:</h1>
        <Carousel interval={3000} showControls={false} reverse={true}>
            {topRatedCarriers.map(a => (
                <div key={a.name} className={"attraction"}>
                    <h2>{a.name}</h2>
                    <Image src={"/carriers/" + a.image} alt={a.name} width={200} height={200}
                           style={{width: "auto"}}/>
                    <p>Rating: {a.rating}⭐</p>
                </div>
            ))}
        </Carousel>
        <div style={{textAlign: "center", fontSize: "1.5em", marginTop: "4rem"}}>
            <a href={"/booking"} style={{textDecoration: "none"}}>Bookings</a> • <a href={"/attractions"}
                                                                                    style={{textDecoration: "none"}}>Attractions</a> • <a
            href={"/map"} style={{textDecoration: "none"}}>Galaxy
            Map</a>
        </div>
    </>
}