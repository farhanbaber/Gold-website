  import React from 'react'
  import styles from './Handmade.module.css'

const Handmade = () => {
  return (
    <>
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
            <span className={styles.socialIcon}>
  <i className="fa-brands fa-instagram"></i>
</span>

            <div className={styles.socialText}>
              <p>Follow us on Instagram for the latest updates and exclusive offers</p>
              <p>@jewellerybrand</p>
            </div>
          </div>
        </div>

        {/* Right Images Side */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
         <video
  src="/renew.video.ai.mp4"        // ensure file name correct ho
  className={styles.mainImage}
  autoPlay                     // autoplay
  loop                         // infinite loop
  muted                        // browser autoplay ke liye required
  playsInline                  // mobile devices ke liye
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
    {/* end of the section */}
    <section className={styles.subHero}>
<div className={styles.wrapper}>
  <span className={styles.line}></span>

  <h2 className={styles.title}>
    Golden
    <img
      src="/crown pic.png"
      alt="Jewelry Icon"
      className={styles.icon}
    />
    Assurance
  </h2>

  <span className={styles.line}></span>
</div>

    <section className={styles.jewelrySectionWrapper}>
      
      {/* 1. Large Left Tile */}
      <div className={`${styles.displayTile} ${styles.heroTile}`}>
        <div className={styles.mediaContainer}>
          <img src="/crown.set2.png" alt="Collection" />
        </div>
        <div className={styles.hoverOverlay}>
          <h3 className={styles.accentHeading}>ROYAL HERITAGE</h3>
          <span className={styles.subText}>Fayaz Jewellers</span>
        </div>
      </div>

      {/* 2. Small Top Center Tile */}
      <div className={`${styles.displayTile} ${styles.smallTile}`}>
        <div className={styles.mediaContainer}>
          <img src="/crown.set1.png" alt="Rings" />
        </div>
        <div className={styles.hoverOverlay}>
          <h3 className={styles.accentHeading}>GOLDEN SHINE</h3>\
                    <span className={styles.subText}>Fayaz Jewellers</span>

        </div>
      </div>

      {/* 3. Large Right Tile */}
      <div className={`${styles.displayTile} ${styles.verticalSpanTile}`}>
        <div className={styles.mediaContainer}>
          <img src="/crwon.ring.png" alt="Watches" />
        </div>
        <div className={styles.hoverOverlay}>
          <h3 className={styles.accentHeading}>BRIDAL GLOW</h3>
                    <span className={styles.subText}>Fayaz Jewellers</span>

        </div>
      </div>

      {/* 4. Small Bottom Center Tile */}
      <div className={`${styles.displayTile} ${styles.smallTile}`}>
        <div className={styles.mediaContainer}>
          <img src="/crown3.img.png" alt="Pearls" />
        </div>
        <div className={styles.hoverOverlay}>
          <h3 className={styles.accentHeading}>DAILY LUXE</h3>
                    <span className={styles.subText}>Fayaz Jewellers</span>

        </div>
      </div>
      {/* end of the section */}
      {/* start new section of main parent two */}
    <div className={styles.subhero}>
  <div className={styles.subcard1}>
    <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}
    <img src="/har.set1.png" alt="item" />
    <h1>Radiance Royale</h1>
    <p>Fayaz jewellers</p>
  </div>

  <div className={styles.subcard1}>
        <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set2.png" alt="item" />
    <h1>Divine Lustr</h1>
        <p>Fayaz jewellers</p>

  </div>

  <div className={styles.subcard1}>
        <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set3.png" alt="item" />
    <h1>Eterna Gold</h1>
        <p>Fayaz jewellers</p>

  </div>

  <div className={styles.subcard1}>
        <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set4.png" alt="item" />
    <h1>Elysian Gold</h1>
        <p>Fayaz jewellers</p>

  </div>

  {/* next row */}
  <div className={styles.subcard1}>
            <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set5.png" alt="item" />
    <h1>Regal Elegance</h1>
        <p>Fayaz jewellers</p>

  </div>

  <div className={styles.subcard1}>
            <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set6.png" alt="item" />
    <h1>Golden Mirage</h1>
        <p>Fayaz jewellers</p>

  </div>

  <div className={styles.subcard1}>
                <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set7.png" alt="item" />
    <h1>Crown of Zar</h1>
        <p>Fayaz jewellers</p>

  </div>

  <div className={styles.subcard1}>
                <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set8.png" alt="item" />
    <h1>Aurum Grace</h1>
    <p>Fayaz jewellers</p>
  </div>


  <div className={styles.subcard1}>
                <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set9.png" alt="item" />
    <h1>Golden Opulence</h1>
    <p>Fayaz jewellers</p>
  </div>


  <div className={styles.subcard1}>
                <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set10.png" alt="item" />
    <h1>Regalia Gold</h1>
    <p>Fayaz jewellers</p>
  </div>



  <div className={styles.subcard1}>
                <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set11.png" alt="item" />
    <h1>Divine Zar</h1>
    <p>Fayaz jewellers</p>
  </div>



  <div className={styles.subcard1}>
                <i className={`fas fa-heart ${styles.heartIcon}`}></i>   {/* Font Awesome heart */}

    <img src="/har.set12.png" alt="item" />
    <h1>Zar-e-Falak</h1>
    <p>Fayaz jewellers</p>
  </div>

</div>

    </section>

    </section>
    {/* new section */}
    <section className={styles.subherodiv}>
      <div className={styles.subherotext}>
        <h2 className={styles.subheading}>Aesthatic <span className={styles.subheadingSpan}>Collections </span><br /> with Ne<i class="fa-brands fa-wikipedia-w"></i>est Style</h2>
        <p className={styles.subdescription}>
      
    Luxury gold sets for every precious moment
        </p>
      </div>
     
    <section className={styles.fashion_container}>
      <div className={styles.fashion_layout_grid}>

        {/* Left Column */}
        <div className={styles.fashion_column}>
          <div className={styles.fashion_img_box}>
            <img src="/lcv.2.png" alt="" className={styles.img_default} />
            <img src="/lx.h1.png" alt="" className={styles.img_hover} />
              <div className={styles.img_overlay}>
    <p>
      Premium fashion crafted<br />
      for modern lifestyle<br />
      discover your style
    </p>
  </div>
          </div>
        </div>

        {/* Center Column */}
        <div className={`${styles.fashion_column} ${styles.fashion_col_center}`}>
          <div className={styles.fashion_img_box}>
            <img src="/lcv.1.png" alt="" className={styles.img_default} />
            <img src="/lx.h3.png" alt="" className={styles.img_hover} />
                 <div className={styles.img_overlay}>
    <p>
      Premium fashion crafted<br />
      for modern lifestyle<br />
      discover your style
    </p>
  </div>
          </div>

          <p className={styles.fashion_description}>
            Discover a wide range of fashion options, including Clothing, Shoes, Accessories, and more
          </p>

          {/* BUTTON — UNCHANGED */}
          <button className={styles.fashion_cta_btn}>
            Shop Now <span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </button>
        </div>

        {/* Right Column */}
        <div className={styles.fashion_column}>

          {/* BUTTON — UNCHANGED */}
          <button className={styles.fashion_explore_badge}>
            <span>
              Explore
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </button>

          <div className={styles.fashion_img_box}>
            <img src="/lx.3.png" alt="" className={styles.img_default} />
            <img src="/lx.h2.png" alt="" className={styles.img_hover} />
                 <div className={styles.img_overlay}>
    <p>
      Premium fashion crafted<br />
      for modern lifestyle<br />
      discover your style
    </p>
  </div>
          </div>
        </div>

      </div>
    </section>
    {/* new section */}
   <section className={styles.fixed_section}>
  <div className={styles.fixed_overlay}>
    
    <p className={styles.fixed_para}>
      Timeless elegance crafted with passion and precision
    </p>

    <h2 className={styles.fixed_heading}>
      Fayaz Je<i class="fa-brands fa-wikipedia-w"></i>ellers
    </h2>

   <div className={styles.fixed_buttons}>
  <button className={styles.fashion_cta_btn}>
    <span>Explore Collection</span>
  </button>

  <button className={styles.fashion_cta_btn}>
    <span>Contact Us</span>
  </button>
</div>


  </div>
</section>



    </section>
    
    
  



    </>
    
  )
}

export default Handmade
