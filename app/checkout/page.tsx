'use client'

import {useSearchParams} from "next/navigation";
import {Trip,} from "../data/trip";
import {ReactNode} from "react";
import {Planet} from "@/app/data/planet";
import {GetDistance} from "@/app/booking/page";

export default function Page() {
    const searchParams = useSearchParams();
    const tripInfoString = searchParams.get("tripInfo");
    if (!tripInfoString)
        return (
            <div>
                <h1>No trip info!</h1>
                <button onClick={() => {
                    document.location.href = "/booking"
                }}>Go to bookings
                </button>
            </div>
        )

    const tripInfo = JSON.parse(tripInfoString) as Trip;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const billingAddress = form.billingAddress.value.trim();
        const cardNumber = form.cardNumber.value.trim();
        const nameOnCard = form.nameOnCard.value.trim();
        const expiryDate = form.expiryDate.value.trim();
        const securityCode = form.securityCode.value.trim();

        if (!billingAddress || !cardNumber || !nameOnCard || !expiryDate || !securityCode) {
            alert("Please fill in all payment fields.");
            return;
        }

        const cardNumberRegex = /^\d{16}$/;
        if (!cardNumberRegex.test(cardNumber)) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }

        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiryDateRegex.test(expiryDate)) {
            alert("Please enter a valid expiry date in MM/YY format.");
            return;
        }

        const securityCodeRegex = /^\d{3}$/;
        if (!securityCodeRegex.test(securityCode)) {
            alert("Please enter a valid 3-digit security code.");
            return;
        }
        document.location.href = "/finished-payment?planet=" + (tripInfo.data.toPlanet as Planet).name;
    }

    return (
        <div>
            <h1>Checkout</h1>
            {TripInfoToHTML(tripInfo)}
            <br/><br/>
            <h2>Amount due: Ȼ{tripInfo.price} (CRED)(no incl. GST)</h2>
            <h2>Amount due: Ȼ{Math.round(tripInfo.price * 1.1)}.99 (CRED)(incl. GST)</h2>
            <br/><br/><br/>
            <form onSubmit={handleSubmit}>
                <h2>Payment Information</h2>
                <label>
                    Billing Address:
                    <input type="text" name="billingAddress" placeholder="1234 Main St"/>
                </label>
                <br/>
                <label>
                    Card Number:
                    <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456"/>
                </label>
                <br/>
                <label>
                    Name on Card:
                    <input type="text" name="nameOnCard" placeholder="John Doe"/>
                </label>
                <br/>
                <label>
                    Expiry Date:
                    <input type="text" name="expiryDate" placeholder="MM/YY"/>
                </label>
                <br/>
                <label>
                    Security Code:
                    <input type="text" name="securityCode" placeholder="123"/>
                </label>
                <br/>
                <button>Complete payment</button>
            </form>
        </div>
    )
}

function TripInfoToHTML(tripInfo: Trip): ReactNode {
    const fromDate = new Date(tripInfo.data.fromDate);
    const toDate = new Date(tripInfo.data.toDate);
    const dist = Math.round(GetDistance(tripInfo.data));

    return (
        <>
            <h2>Trip Information</h2>
            <p><strong>Carrier:</strong> {tripInfo.carrier.name}</p>
            <p><strong>Ship Model:</strong> {tripInfo.model.manufacturer} {tripInfo.model.model}</p>
            <p><strong>Price:</strong> Ȼ{tripInfo.price.toLocaleString()} (CRED)</p>
            <p><strong>From:</strong> {(tripInfo.data.fromPlanet as Planet).name}</p>
            <p><strong>To:</strong> {(tripInfo.data.toPlanet as Planet).name}</p>
            <p><strong>Distance:</strong> {dist} ly</p>
            <p><strong>Departure Date:</strong> {fromDate.toDateString()}</p>
            <p><strong>Return Date:</strong> {toDate.toDateString()}</p>
        </>
    );
}