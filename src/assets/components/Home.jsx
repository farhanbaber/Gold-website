import React from 'react'
import styles from './Home.module.css';
import Collections from './Collections';

const Home = () => {
  return (
    <div>
      {/* hero section */}
     <div className={styles["heroDev"]}>
  <div className={styles["hero-content"]}>
    <p className={styles["hero-para"]}>Personalized jewellery 2026</p>
    <h1 className={styles["hero-title"]}>
      Elegance <span>jewellery</span>
    </h1>
    <button className={styles["hero-button"]}>Shop Collections</button>
  </div>
</div>
{/* end hero section */}

{/* start new section */}
<div className={styles["second-section"]}>
    <div className={styles["child-one"]}>
        <div className={styles["animated-bg"]}>

      <h1 className={styles["child-one-title"]}>Redefining Modern Luxury</h1>
      </div>
      {/* img section */}
     

    </div>
   <div className= {styles["main-parent"]}>
    <div className={styles["child-two"]}  >
      <img src="/couple img.jpg" alt="" className={styles["child-two-img"]} />
      <img src="/ring img.png" alt="" className={styles["child-three-img"]} />
    </div>
    <div className={styles["child-three"]}  >
      <div className={styles["child-img"]}>
      <img src="/logo.ring.png" alt="" className={styles["child-four-img"]} />
      </div>
      <div className={styles["child-text"]}>
      <h1 className={styles["child-three-heading"]}>CELEBRATE YOUR LOVE WITHOUT SACRIFICING MOTHER EARTH</h1>
      <div className={styles["child-para"]}>
      <p className={styles["child-paragraph"]}>Discover our exquisite collection of lab-grown diamond jewelry, where ethical craftsmanship meets timeless elegance. Each piece is meticulously designed to celebrate your unique love story while honoring our commitment to sustainability. Embrace the brilliance of lab-grown diamonds and make a statement that reflects your values and style.</p><br />
      {/* <button>LETS PICK A RING </button> */}
    <button className={styles["hero-button"]}>Lets pick a ring </button>

      </div>
      </div>
    </div>
        
      </div>
</div>


{/* ye div main hain */}
    </div>
  )
}

export default Home
