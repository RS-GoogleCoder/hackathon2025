'use client'

import './header.scss';
import Jawa from "@/public/jawa.png";
import Image from "next/image";
import {useEffect, useState} from 'react';

export default function Header() {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <header className={"header"}>
            <a style={{display: "flex", alignItems: "center"}} href={"/"}>
                <h1>TripJawa</h1>
                <Image src={Jawa} alt={"Jawa"} style={{height: "2rem", width: "auto", marginLeft: "0.5rem"}}/>
            </a>
            <nav className={"nav-links"}>
                <a href={"/"} className={currentPath === "/" ? "active" : ""}>Home</a>
                <a href={"/booking"}
                   className={currentPath === "/booking" || currentPath === "/trips" || currentPath === "/checkout" ? "active" : ""}>Booking</a>
                <a href={"/map"} className={currentPath === "/map" ? "active" : ""}>Galaxy Map</a>
                <a href={"/attractions"} className={currentPath === "/attractions" ? "active" : ""}>Attractions</a>
            </nav>
        </header>
    );
}