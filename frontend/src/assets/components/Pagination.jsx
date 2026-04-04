import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
    navigate(path);
    // Trigger confetti-like effect - you can enhance this later
    if (window.navigator.vibrate) {
      window.navigator.vibrate(20); // Haptic feedback
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const pageButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    hover: {
      scale: 1.15,
      boxShadow: "0 0 25px rgba(198, 160, 90, 0.6)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.92,
    },
  };

  return (
    <motion.div
      className={styles.paginationContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.paginationWrapper}>
        {pages.map((page) => {
          const isActive = currentPageNumber === page.number;

          return (
            <motion.button
              key={page.number}
              onClick={() => handleNavigate(page.path)}
              className={`${styles.pageButton} ${isActive ? styles.active : ""}`}
              variants={pageButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className={styles.buttonContent}
                animate={isActive ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <span className={styles.pageNumber}>{page.number}</span>
              </motion.div>

              {isActive && (
                <motion.div
                  className={styles.activeBackground}
                  layoutId="activeBackground"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <div className={styles.decorativeLine}></div>
    </motion.div>
  );
};

export default Pagination;
