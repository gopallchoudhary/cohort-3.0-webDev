import { createContext, useState } from "react";

export const BulbContext = createContext()

const BulbContextProvider = ({children}) => {
    const [bulbOn, setBulbOn] = useState(true)

    return (
        <BulbContext.Provider value={{bulbOn, setBulbOn}}>
            {children}
        </BulbContext.Provider>
    )
}

export default BulbContextProvider