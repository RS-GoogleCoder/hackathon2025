import './header.scss';
import Jawa from "@/public/jawa.png";
import Image from "next/image";
export default function Header() {
    return (
        <header className={"header"}>
            <a style={{display: "flex", alignItems: "center"}} href={"/"}>
                <h1>TripJawa</h1>
                <Image src={Jawa} alt={"Jawa"} style={{height: "2rem", width: "auto", marginLeft: "0.5rem"}}/>
            </a>
            <nav className={"nav-links"}>
                <a href={"/"}>Home</a>
                <a href={"/booking"}>Booking</a>
                <a href={"/map"}>Galaxy Map</a>
            </nav>
        </header>
    );
}