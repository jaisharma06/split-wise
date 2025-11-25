import LogoBig from './LogoBig/LogoBig';
import styles from './SideBar.module.css'

const SideBar = () => {
    return(
        <div className={styles.sideBarContainer}>
            <LogoBig/>
        </div>
    );
}

export default SideBar;