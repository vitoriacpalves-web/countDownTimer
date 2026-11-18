import { CountDownContext } from "./CountDownContext"
import React, { useState } from 'react'

export const CountDownProvider = ({ children }) => {
    const [event, setEvent] = useState(null);

    return (
        <CountDownContext.Provider value={{ event, setEvent }}>
            {children}
        </CountDownContext.Provider>
    )
}