import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import Header from "@/app/components/header/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TripJawa",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        <main>
            {children}

        </main>
        </body>
        </html>
    );
}
