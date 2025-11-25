import { AiOutlineGoogle } from "react-icons/ai";
import styles from './GoogleButton.module.css'

const GoogleButton = ()=>{
    return(
        <button className={styles.googleBtn}>
            <AiOutlineGoogle className={styles.icon}/>
            <span className={styles.buttonText}>Continue with Google</span>
        </button>
    );
}

export default GoogleButton;