import React from 'react'
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext.jsx';
import { buildProductId } from '../../utils/productId.js';
import GoldPriceChart from './GoldPriceChart.jsx';

const Home = () => {
  const [liked, setLiked] = React.useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const fadeInScroll = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className={styles["body"]}>
      {/* hero section */}
      <motion.div 
        className={styles["heroDev"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className={styles["hero-content"]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className={styles["hero-para"]}>Personalized jewellery 2026</p>
          <h1 className={styles["hero-title"]}>
            Elegance <span>jewellery</span>
          </h1>
          <button className={styles["hero-button"]} onClick={() => navigate('/collections')}>
            Shop Collections <i className="fa-solid fa-arrow-up-right-from-square" ></i>
          </button>
        </motion.div>
      </motion.div>
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
        <div className={styles["dots-container"]}>
          {[...Array(6)].map((_, i) => <span key={i} className={styles["dot"]}></span>)}
        </div>
        <div className={styles["slider-info"]}>
          <h3>luxrious set</h3>
          <p>$52.00 ~ $79.00</p>
        </div>
      </div>

      <motion.div 
        className={styles["second-section"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScroll}
      >
        <div className={styles["child-one"]}>
          <h1 className={styles["child-one-title"]}> <span className={styles["highlight"]}>R</span> edefining M<span><i className="fa-regular fa-gem"></i></span>dern <span className={styles["highlight"]}>L</span>uxury</h1>
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
                <button className={styles["hero-button"]} onClick={() => navigate('/collections#collections-rings')}>Lets pick a ring </button>

              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className={styles["Third-section"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScroll}
      >
        <img src="/background-img.png" alt="" className={styles["necklace-bg"]} />
        <div className={styles["img-child-one"]}>
          <img src="/left-re img.png" alt="" className={styles["img-one"]} />
          <button className={styles["img-button"]} onClick={() => navigate('/collections')}>
            <span>Shop Now <i className="fa-solid fa-diamond-turn-right"></i></span>
          </button>
        </div>
        <div className={styles["img-child-two"]}>
          <img src="/main img.png" alt="" className={styles["img-two"]} />
        </div>
        <div className={styles["img-child-three"]}>
          <div className={styles["circle-text-container"]}>
            <div className={styles["center-dot"]}></div>
            <svg viewBox="0 0 200 200" className={styles["rotating-text"]}>
              <defs>
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text fontSize="10" letterSpacing="2">
                <textPath href="#circlePath">Fayaz Jewellers Peshawar • Fayaz Jewellers Peshawar •</textPath>
              </text>
            </svg>
          </div>
          <img src="/right-re img.png" alt="" className={styles["img-three"]} />
          <img src="/earrings.png" alt="" className={styles["img-ear"]} />
        </div>
      </motion.div>

      <motion.div 
        className={styles["sixth-section"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScroll}
      >
        <div className= {styles["six-head"]}>
          <h1 className={styles["six-head-h1"]}>
            <span className={styles["highlight-two"]}>B</span>EST SELLER{" "}
            <span className={styles["highlight-two"]}>P</span>RODUCT
          </h1>
        </div>  
        <div className={styles.categorySection}>
          <div className={styles.categoryGrid}>
            {[
              { name: "EARRINGS", img: "/p-1.png", link: "/collections" },
              { name: "BRACELET", img: "/p-2.png", link: "/collections#collections-bangles" },
              { name: "NECKLACE", img: "/p-3.png", link: "/handmade#handmade-assurance" },
              { name: "RINGS", img: "/p-4.png", link: "/collections#collections-rings" },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.categoryCard}
                whileHover={{ y: -5 }}
              >
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt={item.name} />
                  <div className={styles.hoverOverlay}>
                    <a onClick={() => navigate(item.link)} className={styles.seeMore}>See More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <h3 className={styles["h-3"]}>{item.name}</h3>
                <p className={styles.ptag}>Royal Line</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        id="home-shop-category"
        className={styles["forth-section"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScroll}
      >
        <div className={styles["collection-main"]}>
          <h1 className={styles["collection-title"]}>
            <span className={styles["highlight"]}>S</span>HOP BY{" "}
            <span className={styles["highlight"]}>C</span> ATEGORY
          </h1>
        </div>
        <div className={styles["collection-child"]}>
          <div className={styles["img-box-one"]}>
            <img src="/neckles-main.png" alt="" className={styles["img-one-box"]} />
            <img src="/hover-img-main.webp" alt="" className={styles["img-one-box-hover"]} />
            <div className={styles["text-overlay"]}>
              <p>Gold has always been more than just a metal — it is a symbol of elegance, power, and timeless beauty. Every piece crafted from gold.</p>
            </div>
          </div>
          <div className={styles["right-boxes"]}>
            {[
              { id: 1, name: "Golden Aura", price: "$12.3", img: "/re-new.png", hover: "/renewset.png" },
              { id: 2, name: "Aureline Twist", price: "$15.5", img: "/ring-one.png", hover: "/ringrenew.png" },
              { id: 3, name: "Queen’s Grace", price: "$18.0", img: "/re-new-1.png", hover: "/new.sets.png" },
              { id: 4, name: "Aurora Flare", price: "$12.4", img: "/ear-one.png", hover: "/earringsrenew.png" },
            ].map(prod => (
              <motion.div key={prod.id} className={styles["product-card"]} whileHover={{ scale: 1.02 }}>
                <i
                  className={`${styles["heart-icon"]} fa-heart ${liked ? "fa-solid" : "fa-regular"}`}
                  onClick={() => {
                    setLiked(!liked);
                    addToCart({
                      id: `${prod.id}-${Date.now()}`,
                      productId: buildProductId(prod.name),
                      name: prod.name,
                      price: prod.price,
                      img: prod.img,
                    });
                  }}
                ></i>
                <img src={prod.img} alt="" className={styles["product-img"]} />
                <img src={prod.hover} alt="" className={`${styles["product-img"]} ${styles["hover-img"]}`} />
                <div className={styles["product-info"]}>
                  <h1 className={styles["header"]}>{prod.name}</h1>
                  <p className={styles["header-p"]}>{prod.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <GoldPriceChart />

      <motion.section 
        className={styles["testimonial-section"]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScroll}
      >
        <h2 className={styles.testimonialMainHeading}>OUR CURATED CONSULTANTS</h2>
        <div className={styles.testimonialGrid}>
          {[
            { id: 1, name: "FAYAZ BABER", num: "+92-3155871988", img: "/manager.jpeg", role: "Master Goldsmith" },
            { id: 2, name: "ONAIS AHMAD", num: "+92-3149051062", img: "/manager2.jpeg", role: "Quality Assurance" },
            { id: 3, name: "KASHIF BABER", num: "+92-3110095534", img: "/employee.jpeg", role: "Design Consultant" },
            { id: 4, name: "Shakir Khan", num: "+92-3329193499", img: "/clt-4.jpg", role: "Heritage Specialist" },
          ].map((manager) => (
            <motion.div key={manager.id} className={styles.testimonialCard} whileHover={{ y: -5 }}>
              <div className={styles.profileArea}>
                <div className={styles.imageCircle}>
                  <img src={manager.img} alt={manager.name} />
                  <svg className={styles.circleSvg} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" className={styles.animatedCircleLine} />
                  </svg>
                </div>
                <h3 className={styles.clientName}>{manager.name}</h3>
                <div className={styles.designLine}></div>
              </div>
              <div className={styles.feedbackBox}>
                <p className={styles.feedbackText}>"We take full responsibility for every cut and curve. Our mission is to create jewelry sets that aren't just ornaments, but a symbol of your timeless grace."</p>
                <div className={styles.ratingStars}>{"★".repeat(5)}</div>
                <span className={styles.websiteLink}>{manager.num}</span>
                <p style={{fontSize: '0.7rem', color: '#999', marginTop: '2px'}}>{manager.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Home;
