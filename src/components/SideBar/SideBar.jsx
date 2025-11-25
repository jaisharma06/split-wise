import LogoBig from './LogoBig/LogoBig';
import styles from './SideBar.module.css'
import {useContext} from 'react';
import {appContext} from '../../context/AppContext';

const SideBar = () => {

    const {localUser} = useContext(appContext);

    return(
        <div className={styles.sideBarContainer}>
            <LogoBig/>

            <div className = {styles.profileContainer}>
                <div className={styles.profileSection}>
                    <div className = {styles.profilePicture}>
                    <h1 className={styles.usernameInitial}>{localUser.name.substring(0, 1)}</h1>
                </div>
                <h1 className={styles.userName}>{localUser.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default SideBar;