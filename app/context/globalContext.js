"use client";
import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});

  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");

      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forcast data: ", error);
    }
  };

  useEffect(() => {
    fetchForecast();
  }, []);
  return (
    <GlobalContext.Provider value={{ forecast }}>
      <GlobalContextUpdate.Provider value={{ setForecast }}>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
