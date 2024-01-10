import React from 'react'
import { useEffect, useState } from 'react';

export default function Project1() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    return prevTime + 10;
                })
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running])
    return (
        <div className='flex flex-col items-center justify-center py-8'>
            <h1>01 - Project Stop Watch Mini</h1>
            <div>
                <span>{('0' + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time / 10) % 60)).slice(-2)}</span>
            </div>
            <div className='w-1/3 max-w-sm flex flex-row justify-between'>
                {running ? (<button className='rounded-lg py-1 px-2 bg-yellow-500' onClick={() => setRunning(false)}>Stop</button>) :
                    (<button className='rounded-lg py-1 px-2 bg-yellow-700' onClick={() => setRunning(true)}>Start</button>)}
                <button className='border rounded-lg py-1 px-2 bg-green-400' onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>
    )
}
