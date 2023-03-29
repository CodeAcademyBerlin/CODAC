import {useGetSpikesQuery} from "codac-administration"
import { useState, useEffect } from "react";

export default function Spikes() {
    const [allSpikes, setAllSpikes] = useState({})
    const { data, loading, error } = useGetSpikesQuery();
    useEffect(() => {
        setAllSpikes(data?.spikes.data)
    }, [data])
    console.log('allSpikes', allSpikes)
  
    return (
        <>
            <div className="w-screen h-screen flex align-middle justify-center">
                <h1 className="text-brand-primary-400 text-xl my-auto">Spikes Test</h1>
            </div>
        </>
    )

}