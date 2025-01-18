'use client'

import {useSearchParams} from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const planet = searchParams.get("planet");
    return (
        <div style={{textAlign: "center", width: "100%"}}>
            <h3>Payment Successful!</h3>
            <h1>Enjoy your trip!</h1>
            {planet && <button onClick={() => {
                document.location.href = `/attractions?planet=${planet}`
            }}> See things to do on {planet}
            </button>}
        </div>
    )
}