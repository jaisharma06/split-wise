import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import SideBar from "../components/SideBar/SideBar";

const AppContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      {/* <SideBar/> */}
    </Router>
  );
};

export default AppContainer;