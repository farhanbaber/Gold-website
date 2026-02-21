import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Mencollection.module.css';

// Yahan apni 20 images ka array
const ringImages = [
  '/images/ring1.png',
  '/images/ring2.png',
  '/images/ring3.png',
  // ... baqi 20 images yahan add karein
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
              src="/" 
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