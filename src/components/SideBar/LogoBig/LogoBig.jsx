import AppLogo from '../../AppLogo/AppLogo';
import styles from './LogoBig.module.css'

const LogoBig = () => {
    return(
        <div className={styles.container}>
            <AppLogo/>
            <h1 className={styles.logoText}>SplitBot</h1>
        </div>
    );
}

export default LogoBig;