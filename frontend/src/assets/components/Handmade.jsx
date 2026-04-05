import React from 'react'
import styles from './Handmade.module.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Handmade = () => {
  const navigate = useNavigate();

  const fadeInScroll = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <section className={styles.hero}>
        <motion.div 
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className={styles.textSide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.heading}>Find Jewellery Within Yourself</h2>
            <p className={styles.description}>
              Your beauty can be highlighted only by natural appearance. So, we make jewellery that reflects your natural beauty. There are no artificial gems in our jewellery. We provide pure gold and silver.
            </p>
            <div className={styles.buttons}>
              <button className={styles.btnPrimary} onClick={() => navigate('/contact')}><span>Contact</span></button>
              <button className={styles.btnSecondary} onClick={() => navigate('/collections')}><span>Read more</span></button>
            </div>
            <div className={styles.social}>
              <span className={styles.socialIcon}><i className="fa-brands fa-instagram"></i></span>
              <div className={styles.socialText}>
                <p>Follow us on Instagram for the latest updates and exclusive offers</p>
                <p>@jewellerybrand</p>
              </div>
            </div>
          </motion.div>

          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <video src="/renew.video.ai.mp4" className={styles.mainImage} autoPlay loop muted playsInline />
              <motion.img 
                src="/handmade.img1.png" 
                alt="Jewellery detail top" 
                className={`${styles.floatingImage} ${styles.topImage}`} 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.img 
                src="/handmade.img2.png" 
                alt="Jewellery detail bottom" 
                className={`${styles.floatingImage} ${styles.bottomImage}`} 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section 
        className={styles.subHero}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInScroll}
      >
        <div className={styles.wrapper}>
          <span className={styles.line}></span>
          <h2 className={styles.title}>
            Golden
            <img src="/crown pic.png" alt="Jewelry Icon" className={styles.icon} />
            Assurance
          </h2>
          <span className={styles.line}></span>
        </div>

        <section className={styles.jewelrySectionWrapper}>
          <motion.div className={`${styles.displayTile} ${styles.heroTile}`} whileHover={{ scale: 1.02 }}>
            <div className={styles.mediaContainer}><img src="/crown.set2.png" alt="Collection" /></div>
            <div className={styles.hoverOverlay}>
              <h3 className={styles.accentHeading}>ROYAL HERITAGE</h3>
              <span className={styles.subText}>Fayaz Jewellers</span>
            </div>
          </motion.div>

          <motion.div className={`${styles.displayTile} ${styles.smallTile}`} whileHover={{ scale: 1.02 }}>
            <div className={styles.mediaContainer}><img src="/crown.set1.png" alt="Rings" /></div>
            <div className={styles.hoverOverlay}>
              <h3 className={styles.accentHeading}>GOLDEN SHINE</h3>
              <span className={styles.subText}>Fayaz Jewellers</span>
            </div>
          </motion.div>

          <motion.div className={`${styles.displayTile} ${styles.verticalSpanTile}`} whileHover={{ scale: 1.02 }}>
            <div className={styles.mediaContainer}><img src="/crwon.ring.png" alt="Watches" /></div>
            <div className={styles.hoverOverlay}>
              <h3 className={styles.accentHeading}>BRIDAL GLOW</h3>
              <span className={styles.subText}>Fayaz Jewellers</span>
            </div>
          </motion.div>

          <motion.div className={`${styles.displayTile} ${styles.smallTile}`} whileHover={{ scale: 1.02 }}>
            <div className={styles.mediaContainer}><img src="/crown3.img.png" alt="Pearls" /></div>
            <div className={styles.hoverOverlay}>
              <h3 className={styles.accentHeading}>DAILY LUXE</h3>
              <span className={styles.subText}>Fayaz Jewellers</span>
            </div>
          </motion.div>
        </section>

        <motion.div className={styles.subhero} variants={staggerContainer}>
          {[
            { id: 1, img: "/har.set1.png", title: "Radiance Royale" },
            { id: 2, img: "/har.set2.png", title: "Divine Lustr" },
            { id: 3, img: "/har.set3.png", title: "Eterna Gold" },
            { id: 4, img: "/har.set4.png", title: "Elysian Gold" },
            { id: 5, img: "/har.set5.png", title: "Regal Elegance" },
            { id: 6, img: "/har.set6.png", title: "Golden Mirage" },
            { id: 7, img: "/har.set7.png", title: "Crown of Zar" },
            { id: 8, img: "/har.set8.png", title: "Aurum Grace" },
            { id: 9, img: "/har.set9.png", title: "Golden Opulence" },
            { id: 10, img: "/har.set10.png", title: "Regalia Gold" },
            { id: 11, img: "/har.set11.png", title: "Divine Zar" },
            { id: 12, img: "/har.set12.png", title: "Zar-e-Falak" }
          ].map(item => (
            <motion.div key={item.id} className={styles.subcard1} variants={cardVariant} whileHover={{ y: -10 }}>
              <i className="fa-solid fa-heart" style={{ position: "absolute", top: "16px", right: "16px", color: "#ddd" }}></i>
              <img src={item.img} alt={item.title} />
              <h1>{item.title}</h1>
              <p>Fayaz jewellers</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <section className={styles.subherodiv}>
        <motion.div 
          className={styles.subherotext}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScroll}
        >
          <h2 className={styles.subheading}>Aesthatic <span className={styles.subheadingSpan}>Collections </span><br /> with Ne<i className="fa-brands fa-wikipedia-w"></i>est Style</h2>
          <p className={styles.subdescription}>Luxury gold sets for every precious moment</p>
        </motion.div>
       
        <section className={styles.fashion_container}>
          <div className={styles.fashion_layout_grid}>
            <div className={styles.fashion_column}>
              <div className={styles.fashion_img_box}>
                <img src="/lcv.2.png" alt="" className={styles.img_default} />
                <img src="/lx.h1.png" alt="" className={styles.img_hover} />
                <div className={styles.img_overlay}><p>Premium fashion crafted<br />for modern lifestyle<br />discover your style</p></div>
              </div>
            </div>

            <div className={`${styles.fashion_column} ${styles.fashion_col_center}`}>
              <div className={styles.fashion_img_box}>
                <img src="/lcv.1.png" alt="" className={styles.img_default} />
                <img src="/lx.h3.png" alt="" className={styles.img_hover} />
                <div className={styles.img_overlay}><p>Premium fashion crafted<br />for modern lifestyle<br />discover your style</p></div>
              </div>
              <p className={styles.fashion_description}>Discover a wide range of fashion options, including Clothing, Shoes, Accessories, and more</p>
              <button className={styles.fashion_cta_btn} onClick={() => navigate('/collections')}>
                Shop Now <span><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
              </button>
            </div>

            <div className={styles.fashion_column}>
              <button className={styles.fashion_explore_badge} onClick={() => navigate('/new-designs')}>
                <span>Explore<i className="fa-solid fa-arrow-up-right-from-square"></i></span>
              </button>
              <div className={styles.fashion_img_box}>
                <img src="/lx.3.png" alt="" className={styles.img_default} />
                <img src="/lx.h2.png" alt="" className={styles.img_hover} />
                <div className={styles.img_overlay}><p>Premium fashion crafted<br />for modern lifestyle<br />discover your style</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.fixed_section}>
          <div className={styles.fixed_overlay}>
            <p className={styles.fixed_para}>Timeless elegance crafted with passion and precision</p>
            <h2 className={styles.fixed_heading}>Fayaz Je<i className="fa-brands fa-wikipedia-w"></i>ellers</h2>
            <div className={styles.fixed_buttons}>
              <button className={styles.fashion_cta_btn} onClick={() => navigate('/collections')}><span>Explore Collection</span></button>
              <button className={styles.fashion_cta_btn} onClick={() => navigate('/contact')}><span>Contact Us</span></button>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Handmade;
