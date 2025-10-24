import React from 'react'
import styles from './Home.module.css';
import Collections from './Collections';

const Home = () => {
  return (
    <div>
     <div className={styles["heroDev"]}>
  <div className={styles["hero-content"]}>
    <p className={styles["hero-para"]}>Personalized jewellery 2026</p>
    <h1 className={styles["hero-title"]}>
      Elegance <span>jewellery</span>
    </h1>
    <button className={styles["hero-button"]}>Shop Collections</button>
  </div>
</div>

    </div>
  )
}

export default Home
