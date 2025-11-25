import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AppContext from "../context/AppContext";
import SideBar from '../components/SideBar/SideBar'
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";

const AppContainer = () => {
  return (
    <Router>
      <AppContext>
        <Routes>

          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <SideBar/>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </AppContext>
    </Router>
  );
};

export default AppContainer;
