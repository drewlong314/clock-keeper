"use client"
import { useEffect, useState } from "react"

const Timer = () => {
    const startingTime = 1701834519915
    const [timeElapsed, setTimeElapsed] = useState(Date.now() - startingTime)
    const [timeDisplay, setTimeDisplay] = useState("")

    const convertTime = (timeElapsed: number) => {

        const result = new Date(timeElapsed)
            .toISOString()
            .slice(11, 19);
        console.log(result);
        return result;
    }

    convertTime(timeElapsed)

    setInterval(() => {
        setTimeElapsed(Date.now() - startingTime)
    }, 1000)

    useEffect(() => {
        setTimeDisplay(convertTime(timeElapsed))
    }, [timeElapsed])


    return (
        <div>{timeDisplay}</div>
    )
}

export default Timer;
