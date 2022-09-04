import { useState } from "react";
import { formateSecondsToHMS } from "../utils/time";


export const useTimer = (initialValue = 0) => {

    const [seconds, setSeconds] = useState(initialValue)
    const [clrInterval, setClrInterval] = useState(null)
    const handleStart = () => {
        let clear = setInterval(() => {
            setSeconds((seconds) => seconds + 1)
        }, 1000);

        setClrInterval(clear)
    };
    const handlePause = () => {
        clearInterval(clrInterval)
    };
    const handleReset = () => {
        clearInterval(clrInterval);
        setSeconds(0);
    };

    return {
        handleStart,
        handlePause,
        handleReset,
        timer: formateSecondsToHMS(seconds)
    }

}