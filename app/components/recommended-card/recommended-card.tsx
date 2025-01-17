'use client'

import "./recommended-card.scss";
import {Planet} from "@/app/data/planet";
import Globe from "@/public/globe.svg";
import Image from "next/image";
import {ReactNode} from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export default function RecommendedCard(props: { name: string, planet: Planet, image: StaticImport }) {
    {
        return (
            <div className="recommended-card">
                <div>
                    <p>
                        <Image src={Globe} alt={props.name}/> {props.planet.name}
                        <button onClick={() => {
                            document.location.href = `/booking?planet=${props.planet.name}`
                        }}>Go
                        </button>
                    </p>
                </div>
                <div>
                    <h2>{props.name}</h2>
                    <Image className={"icon"} src={props.image} alt={props.name}/>
                </div>
            </div>
        )
    }
}