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
      <section className={styles.heroContainer}>
        <div className={styles.mainCard}>
          
          <div className={styles.leftContent}>
            <div className={styles.imageCircle}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={ringImages[index]}
                  // Luxury Animations Wapas Agayi
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 15 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.43, 0.13, 0.23, 0.96] // Custom Cubic Bezier for smooth feel
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
    </div>
  );
};

export default GemSection;