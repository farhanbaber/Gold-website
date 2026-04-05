import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Mencollection.module.css';

const fadeInScroll = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

/* ============================================================
   1. RING SECTION (Infinite Vertical Scroll)
   ============================================================ */
const RingSection = () => {
  const columnLeftData = [
    { id: 'l1', img: '/std.1.png', price: '$2500', title: 'Elite Diamond' },
    { id: 'l2', img: '/std.2.png', price: '$1800', title: 'Gold Classic' },
    { id: 'l3', img: '/std.3.png', price: '$3200', title: 'Royal Stone' },
    { id: 'l4', img: '/std.4.png', price: '$4500', title: 'Platinum Silk' },
    { id: 'l5', img: '/std.5.png', price: '$2100', title: 'Rose Gold' },
    { id: 'l6', img: '/std.6.png', price: '$2700', title: 'Ruby Spark' },
    { id: 'l7', img: '/std.7.png', price: '$1900', title: 'Silver Mist' },
    { id: 'l8', img: '/std.8.png', price: '$3100', title: 'Emerald' },
    { id: 'l9', img: '/std.9.png', price: '$2400', title: 'Topaz' },
    { id: 'l10', img: '/std.10.png', price: '$2900', title: 'Opal' },
    { id: 'l11', img: '/std.11.png', price: '$3500', title: 'Pearl' },
    { id: 'l12', img: '/std.12.png', price: '$4200', title: 'Jade' },
    { id: 'l13', img: '/std.13.png', price: '$1600', title: 'Bronze' },
    { id: 'l14', img: '/std.15.png', price: '$3800', title: 'Sapphire' },
    { id: 'l15', img: '/std.16.png', price: '$5000', title: 'Crown' },
  ];

  const columnRightData = [
    { id: 'r1', img: '/std.17.png', price: '$1200', title: 'Silver Oak' },
    { id: 'r2', img: '/std.18.png', price: '$2900', title: 'Emerald Cut' },
    { id: 'r3', img: '/std.19.png', price: '$3800', title: 'Sapphire Blue' },
    { id: 'r4', img: '/std.20.png', price: '$1500', title: 'Ruby Red' },
    { id: 'r5', img: '/std.21.png', price: '$5000', title: 'Vintage Glow' },
    { id: 'r6', img: '/std.22.png', price: '$2200', title: 'Gold Band' },
    { id: 'r7', img: '/std.23.png', price: '$1700', title: 'Rose Petal' },
    { id: 'r8', img: '/std.24.png', price: '$3300', title: 'Moissanite' },
    { id: 'r9', img: '/std.25.png', price: '$2600', title: 'Titanium' },
    { id: 'r10', img: '/std.26.png', price: '$2100', title: 'Amber' },
    { id: 'r11', img: '/std.27.jpg', price: '$3900', title: 'Amethyst' },
    { id: 'r12', img: '/std.28.png', price: '$4100', title: 'Zircon' },
    { id: 'r13', img: '/std.29.png', price: '$1400', title: 'Steel' },
    { id: 'r14', img: '/std.30.jpg', price: '$3600', title: 'Crystal' },
    { id: 'r15', img: '/std.31.png', price: '$4800', title: 'Royal' },
  ];

  const buildScrollList = (data) => (
    [...data, ...data, ...data].map((item, index) => (
      <div key={`${item.id}-${index}`} className={styles.Scroll_Card_Unit_88}>
        <div className={styles.Scroll_Img_Wrapper_99}>
          <img src={item.img} alt={item.title} />
        </div>
        <div className={styles.Scroll_Info_Box_11}>
          <span className={styles.Scroll_Price_Tag_Bold}>{item.price}</span>
          <p className={styles.Scroll_Title_Muted}>{item.title}</p>
        </div>
      </div>
    ))
  );

  return (
    <motion.div 
      className={styles.Vertical_Scroll_Main_Section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInScroll}
    >
      <div className={styles.Vertical_Scroll_Inner_Layout}>
        <div className={`${styles.Vertical_Track_Base} ${styles.Anim_Slide_Up_Infinite}`}>
          {buildScrollList(columnLeftData)}
        </div>

        <div className={styles.Center_Stand_Wrapper}>
          <img src="/strads.maim.png" alt="Jewelry Stand" className={styles.Stand_Img} />
          <div className={styles.Stand_Overlay}>
            <span className={styles.Stand_Text}>PREMIUM STUDS</span>
          </div>
        </div>

        <div className={`${styles.Vertical_Track_Base} ${styles.Anim_Slide_Down_Infinite}`}>
          {buildScrollList(columnRightData)}
        </div>
      </div>
    </motion.div>
  );
};

/* ============================================================
   2. WATCH SECTION
   ============================================================ */
const watches = [
  { id: 1, name: "Chronograph Gold", price: "$1,250", img: "/re-wth-1.png" },
  { id: 2, name: "Silver Executive", price: "$890", img: "/re-wth-2.png" },
  { id: 3, name: "Midnight Stealth", price: "$1,100", img: "/re-wth-3.png" },
  { id: 4, name: "Rose Gold Classic", price: "$950", img: "/rew-4.webp" },
  { id: 5, name: "Ocean Diver Spec", price: "$1,400", img: "/rew-5.jfif" },
  { id: 6, name: "Titanium Sport", price: "$750", img: "/rew-6.png" },
  { id: 7, name: "Leather Heritage", price: "$620", img: "/rew-7.png" },
  { id: 8, name: "Royal Skeleton", price: "$2,500", img: "/rew-8.png" },
  { id: 9, name: "Royal Skeleton V2", price: "$2,500", img: "/wth-9.webp" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const WatchSection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.headingWrapper}>
        <span className={styles.subTitle}>Exclusive Collection</span>
        <div className={styles.headingContent}>
          <div className={styles.line}></div>
          <h2 className={styles.mainHeading}>Timeless Luxury</h2>
          <div className={styles.line}></div>
        </div>
      </div>

      <motion.div
        className={styles.watchGrid}
        variants={containerVariants}
        initial="hidden"
<<<<<<< HEAD
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
=======
        animate="visible"
>>>>>>> dfab93ec86318ba27bb5ece6a81bc063a5bb661a
      >
        {watches.map((watch) => (
          <motion.div key={watch.id} className={styles.watchCard} variants={cardVariants} whileHover={{ y: -5 }}>
            <div className={styles.imgWrapper}>
              <img src={watch.img} alt={watch.name} className={styles.watchImg} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.watchTitle}>{watch.name}</h3>
              <div className={styles.cardFooter}>
                <span className={styles.watchPrice}>{watch.price}</span>
                <button className={styles.cta} onClick={() => navigate('/cart')}>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

/* ============================================================
   3. FOREVER BOND GRID
   ============================================================ */
const ForeverBondGrid = () => {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Aurum Elite", price: "$1500", img: "/menc.1.png" },
    { id: 2, name: "Regal Classic", price: "$1800", img: "/mens.2.png" },
    { id: 3, name: "Luxe Bond", price: "$1200", img: "/mens.3.png" },
    { id: 4, name: "Nova Spark", price: "$2500", img: "/mens.4.png" },
    { id: 5, name: "Eterna Gold", price: "$3000", img: "/mens.5.png" },
    { id: 6, name: "Crown Royal", price: "$4500", img: "/mens.6.png" },
    { id: 7, name: "Vero Silver", price: "$1100", img: "/mens.7.png" },
    { id: 8, name: "Solace Gem", price: "$2200", img: "/mens.8.png" },
    { id: 9, name: "Glimmer Rose", price: "$950", img: "/mens.9.png" },
    { id: 10, name: "Royal Velvet", price: "$5000", img: "/mens.10.png" },
    { id: 11, name: "Luna Mist", price: "$1600", img: "/mens.11.png" },
    { id: 12, name: "Aura Glow", price: "$1400", img: "/mens.re.png" },
  ];

  return (
    <motion.main 
      className={styles.fb_main_wrapper_v1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInScroll}
    >
      <div className={styles.fb_section_header_divider}>
        <h1 className={styles.fb_header_title_text}>Forever Bond Collection</h1>
      </div>
      <div className={styles.fb_product_grid_system}>
        {products.map((item) => (
          <motion.article key={item.id} className={styles.fb_card_component_root} whileHover={{ scale: 1.02 }}>
            <div className={styles.fb_product_identity_group}>
              <h2 className={styles.fb_item_nomenclature}>{item.name}</h2>
              <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
            </div>
            <div className={styles.fb_visual_asset_container}>
              <img src={item.img} alt={item.name} className={styles.fb_core_image_element} />
            </div>
            <div className={styles.fb_action_utility_bar}>
              <span className={styles.fb_price_display_unit}>{item.price}</span>
              <button className={styles.cta} onClick={() => navigate('/cart')}><span>Add To Cart</span></button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.main>
  );
};

/* ============================================================
   4. MAIN EXPORT COMPONENT (Mencollection)
   ============================================================ */
const Mencollection = () => {
  const [index, setIndex] = useState(0);
  const ringImages = [
    '/pla.1.png', '/pla.2.png', '/pla.3.png', '/pla.4.png', '/pla.5.png',
    '/pla.6.png', '/pla.7.png', '/pla.8.png', '/pla.9.png', '/pla.10.png',
    '/pla.11.png', '/pla.12.png', '/pla.13.png', '/pla.14.png', '/pla.15.png',
    '/pla.16.png', '/pla.17.png', '/pla.18.png', '/pla.19.png', '/pla.20.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ringImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [ringImages.length]);

  return (
    <div className={styles.wrapper}>
      <motion.section 
        className={styles.heroContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.mainCard}>
          <div className={styles.leftContent}>
            <div className={styles.imageCircle}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={ringImages[index]}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.7 }}
                  className={styles.animatedRing}
                />
              </AnimatePresence>
            </div>
          </div>
          <div className={styles.textContent}>
            <span className={styles.subText}>Premium Rings</span>
            <h1 className={styles.mainTitle}>ESSENCE</h1>
            <div className={styles.lineWrapper}><div className={styles.movingLine}></div></div>
          </div>
          <div className={styles.rightContent}>
            <motion.img 
              src="/gold.bra.png" 
              alt="Luxury" 
              className={styles.largeStaticGem}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.section>

      <RingSection />
      <ForeverBondGrid />
      <WatchSection />
    </div>
  );
};

export default Mencollection;