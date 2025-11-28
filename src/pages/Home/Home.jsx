import styles from './Home.module.css'
import { IoShield } from "react-icons/io5";
import { BsArrowUpRightCircleFill, BsArrowDownRightCircleFill } from "react-icons/bs";


const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.userDuesContainer}>
          
          <div className={`${styles.dueCard} ${styles.totalDueCard}`}>
            <div className={styles.leftSide}>
              <span
                className={`${styles.totalBalanceTitle} ${styles.greyColor}`}
              >
                Total Balance
              </span>
              <h1 className={`${styles.whiteColor} ${styles.largeFont}`}>-₹124.50</h1>
            </div>

            <div className={`${styles.rightSide} ${styles.whiteColor}`}>
              <div className={styles.iconContainer}>
                <IoShield />
              </div>
            </div>
          </div>

          <div className={`${styles.dueCard}`}>
            <div className={`${styles.leftSide} ${styles.blackColor}`}>
              <span
                className={`${styles.totalBalanceTitle} ${styles.blackColor}`}
              >
                <BsArrowUpRightCircleFill className={styles.upArrow} />
                You are owed
              </span>
              <h1 className={`${styles.blackColor} ${styles.largeFont}`}>₹50</h1>
            </div>
          </div>

          <div className={`${styles.dueCard}`}>
            <div className={`${styles.leftSide} ${styles.blackColor}`}>
              <span
                className={`${styles.totalBalanceTitle} ${styles.blackColor}`}
              >
                <BsArrowDownRightCircleFill className={styles.downArrow} />
                You owe
              </span>
              <h1 className={`${styles.blackColor} ${styles.largeFont}`}>-₹174.50</h1>
            </div>
          </div>

        </div>


        <div className={styles.bottomContainer}>
            
            <div className={styles.leftBottomContainer}>
                <h2 className={styles.blackColor}> 
                    Your Groups
                </h2>
            </div>
            
            <div className={styles.rightBottomContainer}> </div>

        </div>

      </div>
    );
}

export default Home;