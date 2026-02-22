import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Mencollection.module.css';

const ringImages = [
  '/pla.1.png', '/pla.2.png', '/pla.3.png', '/pla.4.png', '/pla.5.png',
  '/pla.6.png', '/pla.7.png', '/pla.8.png', '/pla.9.png', '/pla.10.png',
  '/pla.11.png', '/pla.12.png', '/pla.13.png', '/pla.14.png', '/pla.15.png',
  '/pla.16.png', '/pla.17.png', '/pla.18.png', '/pla.19.png', '/pla.20.png'
];

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
      {/* Hidden div for preloading images - Taake mobile lag na kare */}
      <div style={{ display: 'none' }}>
        {ringImages.map((src) => <img key={src} src={src} alt="preload" />)}
      </div>

      <section className={styles.heroContainer}>
        <div className={styles.mainCard}>
          <div className={styles.leftContent}>
            <div className={styles.imageCircle}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index} // key ko index rakhein taake uniquely identify ho
                  src={ringImages[index]}
                  initial={{ opacity: 0, x: -20 }} // Mobile ke liye simple rakhein
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={styles.animatedRing}
                />
              </AnimatePresence>
            </div>
          </div>

      <div className={styles.textContent}>
  <span className={styles.subText}>Premium & Beautiful Rings</span>
  <h1 className={styles.mainTitle}>ESSENCE</h1>
  
  {/* Line Container */}
  <div className={styles.lineWrapper}>
    <div className={styles.movingLine}></div>
  </div>
</div>

          <div className={styles.rightContent}>
            <motion.img 
              src="gold.bra.png" 
              alt="Luxury Gemstone" 
              className={styles.largeStaticGem}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GemSection;