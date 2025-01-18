'use client'

import {GetPlanets} from "@/app/data/planet";
import {useEffect, useRef} from "react";

export default function Page() {
    const planets = GetPlanets();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                planets.forEach(planet => {
                    const x = canvas.width / 2 + planet.coordX;
                    const y = canvas.height / 2 - planet.coordY;
                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, 2 * Math.PI);
                    ctx.fillStyle = 'white';
                    ctx.fill();
                    ctx.stroke();
                    ctx.fillText(planet.name, x + 10, y);
                });
            }
        }
    }, [planets]);

    return (
        <div>
            <h1>Galaxy Map</h1>
            <canvas ref={canvasRef} width={1920} height={1080} style={{width: "100%"}}/>
        </div>
    );
}