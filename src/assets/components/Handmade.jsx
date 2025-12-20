  import React from 'react'
  import styles from './Handmade.module.css'

const Handmade = () => {
  return (
 <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Text Side */}
        <div className={styles.textSide}>
          <h2 className={styles.heading}>Find Jewellery Within Yourself</h2>
          <p className={styles.description}>
            Your beauty can be highlighted only by natural appearance. So, we make jewellery that reflects your natural beauty. There are no artificial gems in our jewellery. We provide pure gold and silver.
          </p>
         <div className={styles.buttons}>
  <button className={styles.btnPrimary}>
    <span>Contact</span>
  </button>
  <button className={styles.btnSecondary}>
    <span>Read more</span>
  </button>
</div>
          <div className={styles.social}>
            <span className={styles.socialIcon}><i class="fa-brands fa-instagram"></i></span>
            <div className={styles.socialText}>
              <p>Follow us on Instagram for the latest updates and exclusive offers</p>
              <p>@jewellerybrand</p>
            </div>
          </div>
        </div>

        {/* Right Images Side */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img 
              src="/main.h.png" 
              alt="Handmade Jewellery" 
              className={styles.mainImage} 
            />

            <img
              src="/handmade.img1.png"
              alt="Jewellery detail top"
              className={`${styles.floatingImage} ${styles.topImage}`}
            />

            <img
              src="/handmade.img2.png"
              alt="Jewellery detail bottom"
              className={`${styles.floatingImage} ${styles.bottomImage}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Handmade
