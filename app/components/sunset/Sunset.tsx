'use client'
import React from 'react'
import { useGlobalContext } from '../../context/globalContext';
import { Skeleton } from '@/components/ui/skeleton';
import { UnixToTime } from '@/app/utils/misc';
import { sunset } from '@/app/utils/Icons';

const Sunset = () => {
    const forecast = useGlobalContext();

    console.log("forecast", forecast)

    if (!forecast || !forecast?.forecast?.sys || !forecast?.forecast?.sys?.sunset) {
        return <Skeleton className="w-[26rem] h-[12rem]" />
    }

    const times = forecast?.forecast?.sys?.sunset;
    const timeZone = forecast?.forecast?.timezone;

    const sunsetTime = UnixToTime(times, timeZone)
    const sunriseTime = UnixToTime(forecast?.forecast?.sys?.sunrise, timeZone)

    console.log("sunset time", sunsetTime)


    return (
        <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
            <div className="top">
                <h2 className="flex items-center gap-2 font-medium">{sunset} Sunset</h2>
                <p>{sunsetTime}</p>
            </div>

            <p>Sunrise: {sunriseTime}</p>
        </div>
    )
}

export default Sunset