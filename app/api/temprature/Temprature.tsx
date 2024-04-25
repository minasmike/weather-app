'use client'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import moment  from 'moment'
import { KelvinToCelsius } from '@/app/utils/misc';
import {
    clearSky,
    cloudy,
    drizzleIcon,
    navigation,
    rain,
    snow,
    thunderstorm
} from "@/app/utils/Icons";

const Temprature = () => {
    const forecast = useGlobalContext();
    const { main, timezone, name, weather } = forecast.forecast


    console.log(timezone)
    console.log()
    if (!forecast || !weather) {
        console.log(forecast)
        console.log(weather)
        return <div>Loading...</div>;
    }

    const temp = KelvinToCelsius(main?.temp)
    const minTemp = KelvinToCelsius(main?.temp_min)
    const maxTemp = KelvinToCelsius(main?.temp_max)


    // State
    const [locaTime, setLocaTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");

    const { main: weatherMain, description, icon } = weather[0];

    const getIcon = () => {
        switch (weatherMain) {
            case "Drizzle":
                return drizzleIcon;
            case "Rain":
                return rain;
            case "Snow":
                return snow;
            case "Clear":
                return clearSky;
            case "Clouds":
                return cloudy;
            case "Thunderstorm":
                return thunderstorm;
            default:
                return clearSky;
        }
    };
    console.log(currentDay)
console.log(locaTime)

// time

useEffect(() => {
    const inteval = setInterval(() => {
        const localMoment = moment().utcOffset(timezone / 60);
        // set to 24 hours format
        const formatedTime = localMoment.format("LTS");
        
        // day of the week
        const day = localMoment.format("dddd");

        setLocaTime(formatedTime);
        setCurrentDay(day);
    }, 1000);
}, [timezone])

    return (
        <div className='pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none '>
            <p className="flex justify-between items-center px-4">
                <span className="font-medium">{currentDay}</span>
                <span className='font-medium'>{locaTime}</span>
            </p>
            <p className='py-10 font-bold gap-1 px-4 flex'>
                <span>{name}</span>
                <span>{navigation}</span>
            </p>
            <p className='py-10 text-9xl font-bold self-center'>{temp}°</p>
            <div className='px-4'>
                <div>
                    <span>{getIcon()}</span>
                    <p className='pt-2 capitalize text-lg font-medium'>{description}</p>
                </div>
                <p className='flex items-center gap-2'>
                    <span className='flex'>Low: <p className='font-bold'>{minTemp}°</p></span>
                    <span className='flex'>High:  <p className='font-bold'>{maxTemp}°</p></span>
                </p>
            </div>
        </div>
    )
}

export default Temprature