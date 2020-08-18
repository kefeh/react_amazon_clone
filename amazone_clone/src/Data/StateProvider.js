// Tracking and keeping data for the basket

import React, { createContext, useReducer } from "react";

// the data layer
export const StateContext = createContext()

// provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
); 