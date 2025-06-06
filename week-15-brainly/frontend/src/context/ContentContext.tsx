import React, { createContext, ReactNode, useState } from "react";

interface ContentProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValues: ContentProps = {
    open: false,
    setOpen: () => { }
}

export const ContentContext = createContext<ContentProps>(defaultValues)

interface ContentProviderProps {
    children: ReactNode;
}

const ContentContextProvider = ({ children }: ContentProviderProps) => {
    const [open, setOpen] = useState(false)

    return (
        <ContentContext.Provider value={{open, setOpen}}>
            {children}
        </ContentContext.Provider>
    )
}

export default ContentContextProvider