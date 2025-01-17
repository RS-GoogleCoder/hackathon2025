import "./booking.scss";
import arrowForward from "@/public/arrow_forward.svg";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <h1>Booking</h1>
            <form className={"booking-main"}>
                <div className={"booking-left"}>
                    <h1>From</h1>
                </div>
                <div className={"booking-middle"}>
                    <Image src={arrowForward} alt={"Forward arrow"} style={{width: "100%", height: "30%"}}/>
                </div>
                <div className={"booking-right"}>
                    <h1>To</h1>
                </div>
            </form>
        </div>
    );
}