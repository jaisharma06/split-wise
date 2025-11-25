import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../context/AppContext";

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useContext(appContext);

    return isAuthenticated ? children : <Navigate to='/' replace/>
}

export default ProtectedRoute;