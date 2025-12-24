import { createContext, useState } from "react";

export const appContext = createContext('app-context');

const AppContext = ({children}) => {

    // Initialize from localStorage if user chose "Remember me"
    const stored = typeof window !== 'undefined' ? localStorage.getItem('localUser') : null;
    const initialUser = stored ? JSON.parse(stored) : null;

    const [localUser, setLocalUser] = useState(initialUser);
    const [isAuthenticated, setAuthenticated] = useState(!!initialUser);

    return(
        <appContext.Provider value={{localUser, setLocalUser, isAuthenticated, setAuthenticated}}>
            {children}
        </appContext.Provider>
    )
}

export default AppContext;