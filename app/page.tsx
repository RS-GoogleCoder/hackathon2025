'use client'

import {Attraction, Attractions} from "@/app/data/attraction";
import {useEffect, useState} from "react";
import Image from "next/image";
import CustomCarousel from "@/app/components/carousel/carousel";
import "./attractions/attractions.scss";
import {Carrier, Carriers} from "./data/carrier";
import "../app/components/carousel/carousel.scss";

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
        <CustomCarousel interval={3000} showControls={false}>
            {topRatedAttractions.map(a => (
                <div key={a.name} className={"carousel-item"}>
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
        </CustomCarousel>
        <h1 style={{textAlign: "center"}}>Travel with:</h1>
        <CustomCarousel interval={3000} showControls={false}>
            {topRatedCarriers.map(a => (
                <div key={a.name} className={"carousel-item"}>
                    <h2><Image className="small-image" src={"/carriers/" + a.image} alt={a.name} width={200}
                               height={200} style={{width: "auto"}}/>
                        {a.name}</h2>
                    <p>Rating: {a.rating}⭐</p>
                </div>
            ))}
        </CustomCarousel>
        <div style={{textAlign: "center", fontSize: "1.5em", marginTop: "4rem"}}>
            <a href={"/booking"} style={{textDecoration: "none"}}>Bookings</a> • <a href={"/attractions"}
                                                                                    style={{textDecoration: "none"}}>Attractions</a> • <a
            href={"/map"} style={{textDecoration: "none"}}>Galaxy Map</a>
        </div>
    </>
}