"use client";
import React, { useContext, useState, createContext } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState("hello");

  return (
    <GlobalContext.Provider value={{ state }}>
      <GlobalContextUpdate.Provider value={{ setState }}>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
