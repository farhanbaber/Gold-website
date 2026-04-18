import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Page mapping
  const pages = [
    { number: 1, path: "/" },
    { number: 2, path: "/collections" },
    { number: 3, path: "/handmade" },
    { number: 4, path: "/new-designs" },
    { number: 5, path: "/mens-collection" },
    { number: 6, path: "/contact" },
    { number: 7, path: "/cart" },
  ];

  // Get current page number
  const currentPageNumber = pages.find((page) => page.path === location.pathname)?.number || 1;

  const handleNavigate = (path) => {
    // 1. Navigation trigger
    navigate(path);

    // 2. Scroll to Top (Smooth transition)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // 3. Haptic feedback
    if (window.navigator.vibrate) {
      window.navigator.vibrate(20);
    }
  };

  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for individual buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    hover: { 
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" } 
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.div
      className={styles.paginationContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={styles.paginationWrapper}>
        {pages.map((page) => {
          const isActive = currentPageNumber === page.number;

          return (
            <motion.button
              key={page.number}
              onClick={() => handleNavigate(page.path)}
              className={`${styles.pageButton} ${isActive ? styles.active : ""}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className={styles.buttonContent}>
                <span className={styles.pageNumber}>{page.number}</span>
              </div>

              {/* Active Golden Background with Motion Layout ID */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className={styles.activeBackground}
                    layoutId="activeGoldGlow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <div className={styles.decorativeLine}></div>
    </motion.div>
  );
};

export default Pagination;
