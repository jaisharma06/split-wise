import LogoBig from '../SideBar/LogoBig/LogoBig';
import styles from './TopBar.module.css'
import { appContext } from '../../context/AppContext';
import { useContext } from 'react';

const TopBar = () =>{
    const { localUser } = useContext(appContext);
    return(
        <div className={styles.topBarContainer}>
            <LogoBig/>

            <div className={styles.profilePicture}>
                <h1 className={styles.usernameInitial}>
                    {localUser.name.substring(0, 1)}
                </h1>
            </div>

        </div>
    )
}

export default TopBar;