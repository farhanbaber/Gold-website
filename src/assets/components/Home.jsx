import React from 'react'
import styles from './Home.module.css';
import Collections from './Collections';

const Home = () => {
  return (
    <div className={styles["body"]}>
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

      <h1 className={styles["child-one-title"]}> <span className={styles["highlight"]}>R</span> edefining M<span><i class="fa-regular fa-gem"></i></span>dern <span className={styles["highlight"]}>L</span>uxury</h1>
      {/* img section */}
     

    </div>
   <div className= {styles["main-parent"]}>
    <div className={styles["child-two"]}  >
      <img src="/couple img.jpg" alt="" className={styles["child-two-img"]} />
      <img src="/ring-re img.jpg" alt="" className={styles["child-three-img"]} />
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
{/* end section */}
{/* start new one  */}

<div className={styles["Third-section"]}>
  <div className={styles["img-child-one"]}>
    <img src="/left-re img.png" alt="" className={styles["img-one"]} />
    <button className={styles["img-button"]}>Shop Now</button>

    
  </div>
  <div className={styles["img-child-two"]}>
    <img src="/main img.png" alt="" className={styles["img-two"]} />
  </div>
  <div className={styles["img-child-three"]}>
    <div className={styles["circle-text-container"]}>
  <div className={styles["center-dot"]}></div>
  <svg viewBox="0 0 200 200" className={styles["rotating-text"]}>
    <defs>
      <path
        id="circlePath"
        d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
      />
    </defs>
    <text fontSize="10" letterSpacing="2">
      <textPath href="#circlePath">
        Fayaz Jewellers Peshawar • Fayaz Jewellers Peshawar •
      </textPath>
    </text>
  </svg>
</div>

    <img src="/right-re img.png" alt="" className={styles["img-three"]} />
  </div>
</div>



{/* ye div main hain */}
    </div>
  )
}

export default Home
