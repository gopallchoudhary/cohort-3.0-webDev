import { createContext, useState } from "react";


export const SideBarContext = createContext()

const SideBarContextProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return(
        <SideBarContext.Provider value={{sidebarOpen, setSidebarOpen}}>
            {children}

        </SideBarContext.Provider>
    )
}

export default SideBarContextProvider
