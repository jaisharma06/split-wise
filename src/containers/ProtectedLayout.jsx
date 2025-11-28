import styles from "./ProtectedLayout.module.css";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { AiFillSetting, AiFillDashboard } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import TopBar from "../components/TopBar/TopBar";
import BottomBar from "../components/BottomBar/BottomBar";

const menuButtons = [
  { icon: <AiFillDashboard />, name: "Dashboard", link: "/home" },
  { icon: <MdGroups />, name: "Groups", link: "/groups" },
  { icon: <FiActivity />, name: "Activity", link: "/activity" },
  { icon: <AiFillSetting />, name: "Settings", link: "/settings" }
];

const ProtectedLayout = () => {
  return (
    <div className={styles.protectedContainer}>
      <SideBar menuButtons={menuButtons} />
      <TopBar />
      <BottomBar/>
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;
