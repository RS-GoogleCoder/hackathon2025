import "./page.scss";
import RecommendedCard from "@/app/components/recommended-card/recommended-card";
import {Planets} from "@/app/data/planet";
import VaderFortress from "@/public/vader_fortress.webp";
import SenateBuilding from "@/public/Galactic_Senate.webp";
import CloudCity from "@/public/MCQ-cloudcity.webp";

export default function Page() {
    return (
        <>
            <div className={"heading-container"}><h1 className={"top-picks"}>Top Picks</h1></div>
            <div className="recommended-container">
                <RecommendedCard name={"Fortress Vader"} planet={Planets.find(e => {
                    return e.name === "Mustafar"
                })!} image={VaderFortress}/>

                <RecommendedCard name={"Galactic Senate"} planet={Planets.find(e => {
                    return e.name === "Coruscant"
                })!} image={SenateBuilding}/>

                <RecommendedCard name={"Cloud City"} planet={Planets.find(e => {
                    return e.name === "Bespin"
                })!} image={CloudCity}/>
            </div>
        </>
    )
}