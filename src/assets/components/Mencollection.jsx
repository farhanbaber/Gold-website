import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Mencollection.module.css';

const ringImages = [
  '/pla.1.png', '/pla.2.png', '/pla.3.png', '/pla.4.png', '/pla.5.png',
  '/pla.6.png', '/pla.7.png', '/pla.8.png', '/pla.9.png', '/pla.10.png',
  '/pla.11.png', '/pla.12.png', '/pla.13.png', '/pla.14.png', '/pla.15.png',
  '/pla.16.png', '/pla.17.png', '/pla.18.png', '/pla.19.png', '/pla.20.png'
];

const RingSection = () => {
  // LEFT: 15 Images (Manual Paths)
  const columnLeftData = [
    { id: 'l1', img: '/assets/ring-l1.png', price: '$2500', title: 'Elite Diamond' },
    { id: 'l2', img: '/assets/ring-l2.png', price: '$1800', title: 'Gold Classic' },
    { id: 'l3', img: '/assets/ring-l3.png', price: '$3200', title: 'Royal Stone' },
    { id: 'l4', img: '/assets/ring-l4.png', price: '$4500', title: 'Platinum Silk' },
    { id: 'l5', img: '/assets/ring-l5.png', price: '$2100', title: 'Rose Gold' },
    { id: 'l6', img: '/assets/ring-l6.png', price: '$2700', title: 'Ruby Spark' },
    { id: 'l7', img: '/assets/ring-l7.png', price: '$1900', title: 'Silver Mist' },
    { id: 'l8', img: '/assets/ring-l8.png', price: '$3100', title: 'Emerald' },
    { id: 'l9', img: '/assets/ring-l9.png', price: '$2400', title: 'Topaz' },
    { id: 'l10', img: '/assets/ring-l10.png', price: '$2900', title: 'Opal' },
    { id: 'l11', img: '/assets/ring-l11.png', price: '$3500', title: 'Pearl' },
    { id: 'l12', img: '/assets/ring-l12.png', price: '$4200', title: 'Jade' },
    { id: 'l13', img: '/assets/ring-l13.png', price: '$1600', title: 'Bronze' },
    { id: 'l14', img: '/assets/ring-l14.png', price: '$3800', title: 'Sapphire' },
    { id: 'l15', img: '/assets/ring-l15.png', price: '$5000', title: 'Crown' },
  ];

  // RIGHT: 15 Images (Manual Paths)
  const columnRightData = [
    { id: 'r1', img: '/assets/ring-r1.png', price: '$1200', title: 'Silver Oak' },
    { id: 'r2', img: '/assets/ring-r2.png', price: '$2900', title: 'Emerald Cut' },
    { id: 'r3', img: '/assets/ring-r3.png', price: '$3800', title: 'Sapphire Blue' },
    { id: 'r4', img: '/assets/ring-r4.png', price: '$1500', title: 'Ruby Red' },
    { id: 'r5', img: '/assets/ring-r5.png', price: '$5000', title: 'Vintage Glow' },
    { id: 'r6', img: '/assets/ring-r6.png', price: '$2200', title: 'Gold Band' },
    { id: 'r7', img: '/assets/ring-r7.png', price: '$1700', title: 'Rose Petal' },
    { id: 'r8', img: '/assets/ring-r8.png', price: '$3300', title: 'Moissanite' },
    { id: 'r9', img: '/assets/ring-r9.png', price: '$2600', title: 'Titanium' },
    { id: 'r10', img: '/assets/ring-r10.png', price: '$2100', title: 'Amber' },
    { id: 'r11', img: '/assets/ring-r11.png', price: '$3900', title: 'Amethyst' },
    { id: 'r12', img: '/assets/ring-r12.png', price: '$4100', title: 'Zircon' },
    { id: 'r13', img: '/assets/ring-r13.png', price: '$1400', title: 'Steel' },
    { id: 'r14', img: '/assets/ring-r14.png', price: '$3600', title: 'Crystal' },
    { id: 'r15', img: '/assets/ring-r15.png', price: '$4800', title: 'Royal' },
  ];

  const buildScrollList = (data) => (
    /* Triple the data for ultimate smoothness so no gaps appear */
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
    <div className={styles.Vertical_Scroll_Main_Section}>
      <div className={styles.Vertical_Scroll_Inner_Layout}>
        {/* Left Column (Ab aapki marzi ke mutabiq directions set hain) */}
        <div className={`${styles.Vertical_Track_Base} ${styles.Anim_Slide_Up_Infinite}`}>
          {buildScrollList(columnLeftData)}
        </div>

        {/* CENTER STAND */}
        <div className={styles.Center_Stand_Wrapper}>
          <img src="/assets/stand.png" alt="Jewelry Stand" className={styles.Stand_Img} />
          <div className={styles.Stand_Overlay}>
            <span className={styles.Stand_Text}>PREMIUM STANDS</span>
          </div>
        </div>

        {/* Right Column */}
        <div className={`${styles.Vertical_Track_Base} ${styles.Anim_Slide_Down_Infinite}`}>
          {buildScrollList(columnRightData)}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   2. MAIN GEM SECTION (Wrapper)
   ============================================================ */
const GemSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ringImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Aapka Existing Hero Section */}
      <section className={styles.heroContainer}>
        <div className={styles.mainCard}>
          <div className={styles.leftContent}>
            <div className={styles.imageCircle}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={ringImages[index]}
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 15 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.43, 0.13, 0.23, 0.96] 
                  }}
                  className={styles.animatedRing}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className={styles.textContent}>
            <span className={styles.subText}>Premium Rings</span>
            <h1 className={styles.mainTitle}>ESSENCE</h1>
            <div className={styles.lineWrapper}>
              <div className={styles.movingLine}></div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <motion.img 
              src="gold.bra.png" 
              alt="Luxury Gemstone" 
              className={styles.largeStaticGem}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* --- SCROLLING SECTION ADDED HERE --- */}
      <RingSection />

    </div>
  );
};

export default GemSection;