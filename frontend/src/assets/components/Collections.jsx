import React from 'react'
import styles from "./Collection.module.css";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import { buildProductId } from '../../utils/productId.js';

const Collections = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleAddToCartCapture = (event) => {
    const addButton = event.target.closest(`.${styles.addBtn}`);
    if (!addButton) return;

    const card = addButton.closest(`.${styles.goldCard}`);
    if (!card) return;

    const name = card.querySelector(`.${styles.mainHeading}`)?.textContent?.trim() || "Untitled Item";
    const price = card.querySelector(`.${styles.priceValue}`)?.textContent?.trim() || "$0";
    const img = card.querySelector(`.${styles.imgDefault}`)?.getAttribute("src") || "";
    const id = `${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;
    const productId = buildProductId(name);

    addToCart({ id, productId, name, price, img });
  };

  return (
    <div className={styles.collectionBody} onClickCapture={handleAddToCartCapture}>
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.textContent}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.titlese}>
              Classic and<br />
              Elegant Silver<br />
              Jewelry.
            </h1>
            <p className={styles.subtitle}>
              The only blink that matters.<br />
              Shop high class silver jewelry in our shop.
            </p>
            <button className={styles.shopButton} onClick={() => navigate('/handmade')}>
              Shop Now <span className={styles.arrow}>→</span>
            </button>
          </motion.div>

          <motion.div 
            className={styles.imageWrapper}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.mainImage}>
              <img src="/collec 1.png" alt="Elegant silver jewelry on hands" />
            </div>
            <div className={styles.sideImage}>
              <img src="/collec 2.png" alt="Silver necklace" />
              <div className={styles.numberedList}>
                <span>Elegance</span>
                <span>Signature</span>
                <span>Imperial</span>
                <span>Precious</span>
              </div>
            </div>
            <div className={styles.starIcon}>✦</div>
          </motion.div>
        </div>
      </motion.section>

      <section id="collections-signature" className={styles.showcase}>
        <div className={styles.wrapper}>
          <span className={styles.line}></span>
          <h2 className={styles.titles}>
            Signature
            <img src="/h.set.png" alt="Ring Icon" className={styles.icon} />
            Designs
          </h2>
          <span className={styles.line}></span>
        </div>

        <motion.div 
          className={styles.showcasecontainer}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Static original cards recreated */}
          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Royal Gold Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/orighover.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/orignal.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$20.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Elite Gold Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/secimg.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/secimghover.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$24.2</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Premium Gold Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="thirdimg.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/thirdimghover.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$60.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Prime Gold Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/forthimg.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/forthimghover.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$12.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Gold Deluxe Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/fifthimg.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/fifthimghover.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$79.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Ultimate Gold Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/sixthimg.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/siximghover.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$40.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Royal Gold Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/sevenimg.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/sevenimghover.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$76.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Classic Gold Set</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/eightimg.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/eightimghover.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$34.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.exclusiveShowcase}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScroll}
        >
          <div className={`${styles.imageWrappers} ${styles.featured}`}>
            <img src="collectionimg.png" alt="Model wearing jewelry" className={styles.mainImages} />
            <div className={styles.overlay}>
              <span className={styles.hoverText}>Discover timeless jewelery crafted to elevate your everyday elegance.</span>
            </div>
          </div>
          <div className={styles.content}>
            <h5 className={styles.pill}>New Arrival</h5>
            <h1 className={styles.title}>The Art Of Radiant <br /><span className={styles.highlight}>Reffinement</span></h1>
            <p className={styles.description}>Discover timeless elegance with our handcrafted pieces that blend modern sophistication and classic artistry.</p>
            <div className={styles.ctaWrapper}>
              <button className={styles.ctaButton} onClick={() => navigate('/new-designs')}><span>Shop Now</span></button>
            </div>
            <div className={styles.smallImageWrapper}>
              <img src="collectionimgtwo.png" alt="Gold rings" className={styles.smallImage} />
              <div className={styles.smallImageWrapper}>
                <img src="/collectionimgtwo.png" alt="Gold rings" className={styles.smallImage} />
                <video src="/hover.video.mp4" muted loop playsInline autoPlay preload="auto" className={styles.hoverVideo} />
                <div className={styles.fullOverlay}><span className={styles.overlayHeading}>Elegant Gold</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="collections-bangles" className={styles.newSection}>
        <div className={styles.wrapper}>
          <span className={styles.line}></span>
          <h2 className={styles.titles}>
            Royal Bangles
            <img src="/bangle.re.png" alt="Ring Icon" className={styles.icon} />
            Collections
          </h2>
          <span className={styles.line}></span>
        </div>

        <motion.div 
          className={styles.showcasecontainer}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Classic Cut</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/bang1.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/bang.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$24.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Royal Line</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/bang2.jpg" alt="Jewellery" className={styles.imgDefault} />
              <img src="/band.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$13.2</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Prime Gold</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="bang3.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/bang3.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$32.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Elite Band</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/bang4.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/bang4.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$92.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          {/* ... and so on ... */}
          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Pure Grace</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/bang5.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/bang5.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$56.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Golden Edge</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/bang6.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/bang6.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$60.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Heritage Band</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/bang7.jpg" alt="Jewellery" className={styles.imgDefault} />
              <img src="/bang7.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$54.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Fine Craft</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/bang8.jpg" alt="Jewellery" className={styles.imgDefault} />
              <img src="/bang8.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$24.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        className={styles.trendingSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScroll}
      >
        <div className={styles.textWrapper}>
          <h2 className={styles.mainTitle}>TRENDING</h2>
          <p className={styles.subtitle}>MINIMALISTIC RINGS DESIGN</p>
        </div>
        <div className={styles.imagesGrid}>
          <div className={styles.imgItem1}><img src="/ring five.png" alt="1" /></div>
          <div className={styles.imgItem2}><img src="/ring four.png" alt="2" /></div>
          <div className={styles.imgItem3}><img src="/ring three.png" alt="3" /></div>
          <div className={styles.imgItem4}><img src="/ring two.png" alt="4" /></div>
          <div className={styles.imgItem5}><img src="/ring one1.png" alt="5" /></div>
          <div className={styles.imgItem6}><img src="/ring 6.png" alt="6" /></div>
          <div className={styles.imgItem7}><img src="/ring 5.png" alt="7" /></div>
        </div>
      </motion.section>

      <section id="collections-rings" className={styles.ringsSection} >
        <div className={styles.wrapper}>
          <span className={styles.line}></span>
          <h2 className={styles.titles}>
            Forever Bond 
            <img src="/rings.re.png" alt="Ring Icon" className={styles.icon} />
            Rings
          </h2>
          <span className={styles.line}></span>
        </div>

        <motion.div 
          className={styles.showcasecontainer}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Aurum</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.1.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.1.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$1.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Regal</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.2.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.2.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$9.2</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          {/* ... and so on ... */}
          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Luxe</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.3.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.3.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$7.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Nova</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.4.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.4.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$42.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Eterna</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.5.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.5.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$3.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Crown</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.6.jpg" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.6.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$9.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Vero</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.7.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.7.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$01.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>

          <motion.div className={styles.goldCard} variants={cardVariant}>
            <h1 className={styles.mainHeading}>Solace</h1>
            <div className={styles.toppara}><p>Fayaz Jewellers</p></div>
            <div className={styles.mainimg}>
              <img src="/rings.8.png" alt="Jewellery" className={styles.imgDefault} />
              <img src="/rings.8.h.png" alt="Hover" className={styles.imgHover} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
              <span className={styles.priceValue}>$2.4</span>
              <button className={styles.addBtn} onClick={() => navigate('/cart')}><span>Add to Cart</span></button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Collections;
