import styles from './BottomBarMenuItem.module.css'

const BottomBarMenuItem = ({icon, title, onClick, location, link}) => {
    return (
      <div
            className={`${styles.bottomBarMenuItem} ${
            location.pathname === link ? styles.bottomBarMenuItemActive : ""
            }`}
        onClick={onClick}
      >
        {icon}
        <h5 className={styles.title}>{title}</h5>
      </div>
    );
}

export default BottomBarMenuItem;