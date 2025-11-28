import styles from './BottomBar.module.css'
import { useNavigate, useLocation } from 'react-router-dom';
import BottomBarMenuItem from './BottomBarMenuItem/BottomBarMenuItem';

const BottomBar = ({menuButtons}) =>{
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className={styles.bottomBarContainer}>
            {menuButtons.map((button, index) => {
                const normalizedLink = button.link.startsWith("/")
                    ? button.link
                    : `/${button.link}`;

                return (
                    <BottomBarMenuItem 
                    key={index + 1}
                    icon={button.icon} 
                    title={button.name}
                    onClick={() => navigate(normalizedLink)}
                    location={location}
                    link= {normalizedLink}
                    />
                );
            })}
        </div>
    )
}

export default BottomBar;