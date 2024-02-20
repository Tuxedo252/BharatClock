import React, { useEffect, useState } from 'react';

export default function CurrentTime() {
    let [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    let localDate = currentTime.toLocaleDateString();
    let localTime = currentTime.toLocaleTimeString();

    return (
        <p>
            This is the current time:{localDate} - {localTime}
        </p>
    )
}
