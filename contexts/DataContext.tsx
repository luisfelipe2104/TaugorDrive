import { createContext, useState, useEffect, PropsWithChildren } from "react";

type ContextType = {
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
};

export const DataContext = createContext<ContextType | undefined>(undefined);

export function DataProvider({ children }:  PropsWithChildren<{}>) {
    const [loggedIn, setLoggedIn] = useState<ContextType['loggedIn']>(false)


    return (
        <DataContext.Provider value={{
            loggedIn,
            setLoggedIn
        }}>
            {children}
        </DataContext.Provider>
    )
}