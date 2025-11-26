import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AppContext from "../context/AppContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import ProtectedLayout from "./ProtectedLayout";



const AppContainer = () => {
  return (
    <Router>
      <AppContext>
        <Routes>

          <Route 
            element={
              <ProtectedRoute>
                <ProtectedLayout/>
              </ProtectedRoute>
            }
          >
            <Route path='/home' element = {<Home/>}/> 
            <Route path='/settings' element = {<Settings/>}/>
          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </AppContext>
    </Router>
  );
};

export default AppContainer;
