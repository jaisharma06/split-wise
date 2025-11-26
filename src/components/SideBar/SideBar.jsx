import LogoBig from './LogoBig/LogoBig';
import styles from './SideBar.module.css';
import { useContext } from 'react';
import { appContext } from '../../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = ({ menuButtons }) => {
    const { localUser } = useContext(appContext);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.sideBarContainer}>
            <LogoBig />

            <div className={styles.sideBarMenu}>
                {menuButtons.map((button, index) => {
                    const normalizedLink = button.link.startsWith("/")
                        ? button.link
                        : "/" + button.link;

                    return (
                        <button
                            key={index + 1}
                            className={`${styles.sidebarMenuButton} ${
                                location.pathname === normalizedLink
                                    ? styles.sideBarMenuButtonActive
                                    : ''
                            }`}
                            onClick={() => navigate(normalizedLink)}
                        >
                            {button.icon}{button.name}
                        </button>
                    );
                })}
            </div>

            <div className={styles.profileContainer}>
                <div className={styles.profileSection}>
                    <div className={styles.profilePicture}>
                        <h1 className={styles.usernameInitial}>
                            {localUser.name.substring(0, 1)}
                        </h1>
                    </div>
                    <h1 className={styles.userName}>{localUser.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
