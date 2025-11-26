import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { AiFillSetting, AiFillDashboard } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { FiActivity } from "react-icons/fi";

const menuButtons = [
  { icon: <AiFillDashboard />, name: "Dashboard", link: "/home" },
  { icon: <MdGroups />, name: "Groups", link: "/groups" },
  { icon: <FiActivity />, name: "Activity", link: "/activity" },
  { icon: <AiFillSetting />, name: "Settings", link: "/settings" }
];

const ProtectedLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar menuButtons={menuButtons} />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;
