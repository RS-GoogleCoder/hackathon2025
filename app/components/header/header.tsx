import './header.scss';
import Jawa from "@/public/jawa.png";
import Image from "next/image";
export default function Header() {
    return (
        <header className={"header"}>
            <h1 style={{height: "min-content"}}><a href={"/"}>TripJawa</a></h1>
            <Image src={Jawa} alt={"Jawa"} style={{height: "100%", width: "auto"}}/>
            <nav className={"nav-links"}>
                <a href={"/"}>Home</a>
                <a href={"/booking"}>Booking</a>
                <a href={"/map"}>Galaxy Map</a>
            </nav>
        </header>
    );
}