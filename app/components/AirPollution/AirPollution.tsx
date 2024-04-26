"use client";
import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import { Skeleton }from "../../../components/ui/skeleton";
import { thermo } from "@/app/utils/Icons";
import { Progress } from "@/components/ui/progress";
import { AirQualityIndexText } from "@/app/utils/misc";

const AirPollution = () => {
  const { airQuality } = useGlobalContext();
  
  console.log(airQuality)
  
  
  
  //check if air quality is not null
  if (
      !airQuality ||
      !airQuality.list ||
      !airQuality.list[0] ||
      !airQuality.list[0].main
    ) {
        return (
            <Skeleton className="w-[26rem] h-[12rem]" />
        );
    }
    
    const airQualityIndex = airQuality?.list[0]?.main?.aqi * 10;
    console.log("air quality index", airQualityIndex)
    const filteredIndex = AirQualityIndexText.find((item) => {
        return item.rating == (airQualityIndex);
      }
      
  )
  return (
    <div className="air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
    dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2">
      <h2 className="flex items-center gap-2 font-medium">
        {thermo}Air pollution
        </h2>
        <Progress value={airQualityIndex} max={100} className="progress" />
        <p>Air quality is: {filteredIndex?.description}</p>
    </div>
  );
};

export default AirPollution;
