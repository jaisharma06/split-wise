import styles from './Home.module.css'
import { IoShield } from "react-icons/io5";
import { BsArrowUpRightCircleFill, BsArrowDownRightCircleFill } from "react-icons/bs";

const Home = () => {
    const tiles = [
        {
            key: 'total',
            title: 'Total Balance',
            value: '-₹124.50',
            variant: 'accent',
            icon: <IoShield />
        },
        {
            key: 'owed',
            title: 'You are owed',
            value: '₹50',
            variant: 'positive',
            icon: <BsArrowUpRightCircleFill />
        },
        {
            key: 'owe',
            title: 'You owe',
            value: '-₹174.50',
            variant: 'negative',
            icon: <BsArrowDownRightCircleFill />
        }
    ];

    return (
      <div className={styles.homeContainer}>
        <div className={styles.userDuesContainer}>
          {tiles.map(tile => (
            <section
              key={tile.key}
              className={`${styles.tile} ${styles[tile.variant]}`}
            >
              <div className={styles.tileBody}>
                <div className={styles.tileTitle}>{tile.title}</div>
                <div className={styles.tileValue}>{tile.value}</div>
              </div>
              <div className={styles.tileIcon}>{tile.icon}</div>
            </section>
          ))}
        </div>


        <div className={styles.bottomContainer}>
            <div className={styles.leftBottomContainer}>
                <h2 className={styles.sectionTitle}>Your Groups</h2>
            </div>
            <div className={styles.rightBottomContainer}> </div>
        </div>

      </div>
    );
}

export default Home;