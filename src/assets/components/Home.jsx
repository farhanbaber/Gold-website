import React from 'react'
import styles from './Home.module.css';
import Collections from './Collections';
import { useNavigate } from 'react-router-dom';

const Home = ({ handleLike }) => {
  const [liked, setLiked] = React.useState(false);
  const navigate = useNavigate();


  return (
    <div className={styles["body"]}>
      {/* hero section */}
     <div className={styles["heroDev"]}>
  <div className={styles["hero-content"]}>
    <p className={styles["hero-para"]}>Personalized jewellery 2026</p>
    <h1 className={styles["hero-title"]}>
      Elegance <span>jewellery</span>
    </h1>
    <button className={styles["hero-button"]}>Shop Collections  <i className="fa-solid fa-arrow-up-right-from-square" ></i></button>
  </div>
</div>
<div className={styles["hero-slider-box"]}>
  <div className={styles["slider-wrapper"]}>
    <div className={styles["image-track"]}>
      <img src="/bangle.re.png" alt="1" />
      <img src="/ear-one.png" alt="2" />
      <img src="/eightimghover.png" alt="3" />
      <img src="/ringrenew.png" alt="4" />
      <img src="/h.set.png" alt="5" />
      <img src="/gold.lx.png" alt="6" />
    </div>
  </div>

  {/* Pagination Dots */}
  <div className={styles["dots-container"]}>
    <span className={styles["dot"]}></span>
    <span className={styles["dot"]}></span>
    <span className={styles["dot"]}></span>
    <span className={styles["dot"]}></span>
    <span className={styles["dot"]}></span>
    <span className={styles["dot"]}></span>
  </div>

  <div className={styles["slider-info"]}>
    <h3>luxrious set</h3>
    <p>$52.00 ~ $79.00</p>
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
<img src="/background-img.png" alt="" className={styles["necklace-bg"]} />
  <div className={styles["img-child-one"]}>
    <img src="/left-re img.png" alt="" className={styles["img-one"]} />
<button className={styles["img-button"]}><span>Shop Now <i class="fa-solid fa-diamond-turn-right"></i></span></button>

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
    <img src="/earrings.png" alt="" className={styles["img-ear"]} />
  </div>
</div>
{/* end section */}
{/* start new section */}
{ <div className={styles["sixth-section"]}>
  <div className= {styles["six-head"]}>
<h1 className={styles["six-head-h1"]}>
      <span className={styles["highlight-two"]}>B</span>EST SELLER{" "}
      <span className={styles["highlight-two"]}>P</span>RODUCT
    </h1>
  </div>  
  <div className={styles.categorySection}>
  <div className={styles.categoryGrid}>
    {[
      { name: "EARRINGS", img: "/p-1.png" },
      { name: "BRACELET", img: "/p-2.png" },
      { name: "NECKLACE", img: "/p-3.png" },
      { name: "RINGS", img: "/p-4.png" },
    ].map((item, index) => (
      <div key={index} className={styles.categoryCard}>
        <div className={styles.imageWrapper}>
          <img src={item.img} alt={item.name} />
          <div className={styles.hoverOverlay}>
              <a href="#" className={styles.seeMore}>See More <i class="fa-solid fa-arrow-up-right-from-square"></i></a>

          </div>
        </div>
        <h3 className={styles["h-3"]}>{item.name}</h3>
        <p className={styles.ptag}>Royal Line</p>
      </div>
    ))}
  </div>
</div>




</div> }
















{/* start new section */}
<div className={styles["forth-section"]}>
  <div className={styles["collection-main"]}>
    <h1 className={styles["collection-title"]}>
      <span className={styles["highlight"]}>S</span>HOP BY{" "}
      <span className={styles["highlight"]}>C</span> ATEGORY
    </h1>
  </div>

  <div className={styles["collection-child"]}>
    {/* LEFT BIG IMAGE */}
   <div className={styles["img-box-one"]}>
  <img src="/neckles-main.png" alt="" className={styles["img-one-box"]} />
   <img
    src="/hover-img-main.webp"
    alt=""
    className={styles["img-one-box-hover"]}
  />

  {/* TEXT OVERLAY */}
  <div className={styles["text-overlay"]}>
    <p>
   Gold has always been more than just a metal — it is a symbol of elegance, power, and timeless beauty. Every piece crafted from gold.
    </p>
  </div>
</div>

    {/* RIGHT SIDE GRID (2x2) */}
    <div className={styles["right-boxes"]}>
      {/* CARD 1 */}
      <div className={styles["product-card"]}>
        {/* <i className={`fa-regular fa-heart ${styles["heart-icon"]}`}></i> */}
       <i
                className={`${styles["heart-icon"]} fa-heart ${liked ? "fa-solid" : "fa-regular"}`}
                onClick={() => {
                  setLiked(!liked);  
                  navigate("/Cart");
                }}
              ></i>
        <img src="/re-new.png" alt="" className={styles["product-img"]} />
        

 <img
    src="/renewset.png"
    alt="Golden Aura Hover"
    className={`${styles["product-img"]} ${styles["hover-img"]}`}
  />

        <div className={styles["product-info"]}>
          <h1 className={styles["header"]}>Golden Aura</h1>
          <p className={styles["header-p"]}>$12.3</p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className={styles["product-card"]}>
          <i
                className={`${styles["heart-icon"]} fa-heart ${liked ? "fa-solid" : "fa-regular"}`}
                onClick={() => {
                  setLiked(!liked);  
                  navigate("/Cart");
                }}
              ></i>
        <img src="/ring-one.png" alt="" className={styles["product-img"]} />

<img
    src="/ringrenew.png"
    alt="Golden Aura Hover"
    className={`${styles["product-img"]} ${styles["hover-img"]}`}
  />

        <div className={styles["product-info"]}>
          <h1 className={styles["header"]}>Aureline Twist</h1>
          <p className={styles["header-p"]}>$15.5</p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className={styles["product-card"]}>
        {/* <i className={`fa-regular fa-heart ${styles["heart-icon"]}`}></i> */}
         <i
                className={`${styles["heart-icon"]} fa-heart ${liked ? "fa-solid" : "fa-regular"}`}
                onClick={() => {
                  setLiked(!liked);  
                  navigate("/Cart");
                }}
              ></i>
        <img src="/re-new-1.png" alt="" className={styles["product-img"]} />

<img
    src="/new.sets.png"
    alt="Golden Aura Hover"
    className={`${styles["product-img"]} ${styles["hover-img"]}`}
  />

        <div className={styles["product-info"]}>
          <h1 className={styles["header"]}>Queen’s Grace</h1>
          <p className={styles["header-p"]}>$18.0</p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className={styles["product-card"]}>
        {/* <i className={`fa-regular fa-heart ${styles["heart-icon"]}`}></i> */}
         <i
                className={`${styles["heart-icon"]} fa-heart ${liked ? "fa-solid" : "fa-regular"}`}
                onClick={() => {
                  setLiked(!liked);  
                  navigate("/Cart");
                }}
              ></i>
        <img src="/ear-one.png" alt="" className={styles["product-img"]} />

<img
    src="/earringsrenew.png"
    alt="Golden Aura Hover"
    className={`${styles["product-img"]} ${styles["hover-img"]}`}
  />


        <div className={styles["product-info"]}>
          <h1 className={styles["header"]}>Aurora Flare</h1>
          <p className={styles["header-p"]}>$12.4</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* end section */}

{/* strat new section */}

<div className= {styles[ "fifth-section"]}>
  <div className={styles["fifth-section-child"]}>
  <div className={styles.overlay}></div>
  <video src="/video.mp4" autoPlay loop muted playsInline   preload="auto" className={styles["fifth-section-video"]}></video>
  <h1 className={styles.headingsOne}>Crafted in Luxury|Defined by Gold</h1>
</div>

  
  

</div>

{/* end section */}

{/* start foter */}


{/* ye div main hain */}
    </div>
  )
}

export default Home;
