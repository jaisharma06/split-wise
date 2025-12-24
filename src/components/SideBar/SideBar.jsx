import LogoBig from './LogoBig/LogoBig';
import styles from './SideBar.module.css';
import { useContext } from 'react';
import { appContext } from '../../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar = ({ menuButtons = [] }) => {
    const { localUser } = useContext(appContext) || {};
    const navigate = useNavigate();
    const location = useLocation();

    const userName = localUser?.name || 'Guest';
    const initial = userName.charAt(0).toUpperCase();

    return (
        <nav className={styles.sideBarContainer} aria-label="Primary Navigation">
            <LogoBig />

            <div className={styles.sideBarMenu}>
                {menuButtons.map((button, index) => {
                    const normalizedLink = button.link?.startsWith('/') ? button.link : `/${button.link || ''}`;
                    const isActive = location.pathname === normalizedLink;

                    return (
                        <button
                            key={button.key || index}
                            className={`${styles.sidebarMenuButton} ${isActive ? styles.sideBarMenuButtonActive : ''}`}
                            onClick={() => navigate(normalizedLink)}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <span className={styles.menuIcon}>{button.icon}</span>
                            <span className={styles.menuText}>{button.name}</span>
                        </button>
                    );
                })}
            </div>

            <div className={styles.profileContainer}>
                <div className={styles.profileSection}>
                    <div className={styles.profilePicture} aria-hidden>
                        <span className={styles.usernameInitial}>{initial}</span>
                    </div>
                    <div className={styles.userMeta}>
                        <div className={styles.userName}>{userName}</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SideBar;
