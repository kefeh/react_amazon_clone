// Tracking and keeping data for the basket

import React, { createContext, useReducer, useContext } from "react";

// the data layer
export const StateContext = createContext()

// provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// use it inside a component
export const useStateValue = () => useContext(StateContext);