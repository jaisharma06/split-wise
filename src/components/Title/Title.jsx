import styles from './Title.module.css'

const Title = ({children, subTitle}) => {
    return(
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                {children}
            </h1>
            <h2 className={styles.subTitle}>
                {subTitle}
            </h2>
        </div>
    );
}

export default Title;