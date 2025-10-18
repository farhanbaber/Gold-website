import React from 'react'
import styles from './Home.module.css';

const Home = () => {
  return (
        <div className={styles['nav-one']}>
            <p className={styles['nav-text']}>Precision | Purity | Performance</p>
            <p className={styles['nav-subtext']}>Indulge in timeless beauty | special offer ends tonight</p>
            <p className={styles['nav-num']}>Order Online: <i class="fa-brands fa-whatsapp" id='icon'></i> +92-3155-871-988</p>

    </div>
  )
}

export default Home
