import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      {/* Shape Divider */}
      <div className={styles.customShapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19
               c-82.26-17.34-168.06-16.33-250.45.39
               -57.84,11.73-114,31.07-172,41.86
               A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
               C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className= { styles.shapefill}
          ></path>
        </svg>
      </div>

      <div className={styles.footerContainer}>

        {/* Contact Block */}
        <div className={styles.contactBlock}>
          {/* Left Section - Profile Image */}
          <div className={styles.leftSection}>
            <div className={styles.photoCircle}>
              <img
                src="/your-photo.jpg"
                alt="Profile"
                className={styles.profileImg}
              />
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className={styles.rightSection}>
            <div className={styles.headerInfo}>
              <h3>ANDREW JOHNSON</h3>
              <p>Business Analyst</p>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                {/* Icon here */}
                <p>905 Oak St, Wisconsin Dells, WI 53965, USA</p>
              </div>

              <div className={styles.contactItem}>
                {/* Icon here */}
                <p>www.yourwebsite.com</p>
              </div>

              <div className={styles.contactItem}>
                {/* Icon here */}
                <p>123 456 789</p>
              </div>

              <div className={styles.contactItem}>
                {/* Icon here */}
                <p>@yourfacebook</p>
              </div>

              <div className={styles.contactItem}>
                {/* Icon here */}
                <p>email@companyname.com</p>
              </div>

              <div className={styles.contactItem}>
                {/* Icon here */}
                <p>@yourinstagram</p>
              </div>

              <div className={styles.contactItem}>
                {/* Icon here */}
                <p>@yourtwitter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          © 2025 BusinessPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
