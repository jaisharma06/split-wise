import styles from './Home.module.css'
import { IoShield } from "react-icons/io5";


const Home = () => {
    return(
        <div className={styles.homeContainer}>
            <div className={styles.userDuesContainer}> 
                <div className= {`${styles.dueCard} ${styles.totalDueCard}`}>
                    <div className={styles.leftSide}>
                        <span className={styles.totalBalanceTitle}>Total Balance</span>
                        <h1 className={styles.remainingBalance}>-₹124.50</h1>
                    </div>

                    <div className={styles.rightSide}>
                        <IoShield />
                    </div>
                </div>

                <div className= {`${styles.dueCard}`}>

                </div>
                 <div className= {`${styles.dueCard}`}>

                </div>
            </div>
        </div>
    );
}

export default Home;