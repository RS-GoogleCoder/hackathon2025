'use server'

import {Trip} from "@/app/data/trip";
import {Planet} from "@/app/data/planet";
import nodemailer from "nodemailer";

async function GetPaymentEmail(name: string, address: string, tripInfo: Trip): Promise<string> {
    const totalSeats = tripInfo.data.infants + tripInfo.data.children + tripInfo.data.adults;
    const seats: string[] = [];
    const rowNumber = Math.round(Math.random() * 100);

    for (let i = 0; i < totalSeats; i++) {
        let seat: string;
        do {
            const seatLetter = String.fromCharCode(65 + (seats.length % 24));
            seat = `${rowNumber + Math.floor(seats.length / 24)}${seatLetter}`;
        } while (seats.includes(seat));
        seat += " (" + Math.random().toString(36).substring(2, 14).toUpperCase() + ")";
        seats.push(seat);
    }
    seats.sort();
    return `
<div>
<style>
.email-container {
    font-family: Arial, sans-serif;
    color: #333;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 600px;
    margin: auto;
}
.email-header {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}
.email-body {
    font-size: 16px;
    line-height: 1.5;
}
.email-footer {
    margin-top: 20px;
    font-size: 14px;
    color: #777;
}
</style>
<div class="email-container">
    <div class="email-body">
        <p>Dear ${name},</p>
        <p>Thank you for your payment. Here are your trip details:</p>
        <p><strong>Carrier:</strong> ${tripInfo.carrier.name}</p>
        <p><strong>Ship Model:</strong> ${tripInfo.model.manufacturer} ${tripInfo.model.model}</p>
        <p><strong>Price:</strong> Ȼ${tripInfo.price.toLocaleString()} (CRED)</p>
        <p><strong>From:</strong> ${(tripInfo.data.fromPlanet as Planet).name}</p>
        <p><strong>To:</strong> ${(tripInfo.data.toPlanet as Planet).name}</p>
        <p><strong>Departure Date:</strong> ${new Date(tripInfo.data.fromDate).toDateString()}</p>
        <p><strong>Return Date:</strong> ${new Date(tripInfo.data.toDate).toDateString()}</p>
        <br/>
        <p><strong>Your seats:</strong></p>
        <ul>
            ${seats.map(seat => `<li>${seat}</li>`).join('')}
        </ul>
    </div>
    <div class="email-footer">
        <p>Best regards,</p>
        <p>TripJawa</p>
        <br/>
        <p>Billed from: ${address}</p>
    </div>
</div>
</div>
`;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tripjawaofficial@gmail.com',
        pass: 'vmqw oszr kxvu jpqr '
    }
});

export async function SendMail(email: string, name: string, address: string, tripInfo: Trip) {
    const emailBody = await GetPaymentEmail(name, address, tripInfo);
    const mailOptions = {
        from: 'TripJawa',
        to: email,
        subject: 'TripJawa Receipt',
        html: emailBody
    }
    transporter.sendMail(mailOptions, function (error: any, info: { response: string; }) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}