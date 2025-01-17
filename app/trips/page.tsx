'use client'

import {useSearchParams} from "next/navigation";


export default function Page() {

    const searchParams = useSearchParams();
    const searchParamsData = searchParams.get("data");
    let data;
    if (searchParamsData)
        data = JSON.parse(searchParamsData);
    else {
        return (<>
            <h1>No trip data!</h1>
            <button onClick={() => {
                document.location.href = "/booking"
            }}>Go to bookings
            </button>
        </>);
    }

    return (<>
        <h1>Trips</h1>
        <p>{data?.toString()}</p>
    </>);
}