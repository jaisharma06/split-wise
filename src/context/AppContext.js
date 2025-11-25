import { createContext, useState } from "react";

export const appContext = createContext('app-context');

const AppContext = ({children}) => {

    const [localUser, setLocalUser] = useState(null);
    const [isAuthenticated, setAuthenticated] = useState(false);

    return(
        <appContext.Provider value={{localUser, setLocalUser, isAuthenticated, setAuthenticated}}>
            {children}
        </appContext.Provider>
    )
}

export default AppContext;