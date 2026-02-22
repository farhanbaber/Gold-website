import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Mencollection.module.css';

// Yahan apni 20 images ka array
const ringImages = [
  '/pla.1.png',
  '/pla.2.png',
  '/pla.3.png',
  '/pla.4.png',
  '/pla.5.png',
  '/pla.6.png',
  '/pla.7.png',
  '/pla.8.png',
  '/pla.9.png',
  '/pla.10.png',
  '/pla.11.png',
  '/pla.12.png',
  '/pla.13.png',
  '/pla.14.png',
  '/pla.15.png',
  '/pla.16.png',
  '/pla.17.png',
  '/pla.18.png',
  '/pla.19.png',
  '/pla.20.png'
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
          
          {/* Left Side: Animated Ring Container */}
          <div className={styles.leftContent}>
            <div className={styles.imageCircle}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={ringImages[index]}
                  src={ringImages[index]}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={styles.animatedRing}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Center: Luxury Text */}
          <div className={styles.textContent}>
            <span className={styles.subText}>Premium & Beautiful Gemstones</span>
            <h1 className={styles.mainTitle}>COLLECTION</h1>
            <div className={styles.goldenLine}></div>
          </div>

          {/* Right Side: Large Static Gemstone */}
          <div className={styles.rightContent}>
            <motion.img 
              src="ayt.png" 
              alt="Luxury Gemstone" 
              className={styles.largeStaticGem}
              animate={{ y: [0, -15, 0] }} // Subtle floating animation
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default GemSection;