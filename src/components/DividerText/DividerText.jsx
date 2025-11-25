import styles from './DividerText.module.css'

const DividerText = ({children})=>{
    return(
    <div className={styles.divider}>
        <span className={styles.text}>{children}</span>
    </div>
    );
}

export default DividerText;