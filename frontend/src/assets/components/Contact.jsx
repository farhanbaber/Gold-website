import React from 'react';
import styles from './Contact.module.css';
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been received.');
  };

  const fadeInScroll = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.div 
        className={styles.contactHeader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link> / <span>Contact Us</span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '700', margin: 0 }}>
            Contact Us
          </h1>
        </div>
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          className={styles.mainContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScroll}
        >
          <div className={styles.leftSection}>
            <h2>Get in touch with us</h2>
            <p>
              We're here to help you find the perfect piece of jewelry. Reach out to us through any of these channels.
            </p>

            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <div className={styles.infoText}>
                <h4>Phone Number</h4>
                <p>+92 300 1234567</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div className={styles.infoText}>
                <h4>E-Mail address</h4>
                <p>info@yourbrand.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaLocationDot className={styles.infoIcon} />
              <div className={styles.infoText}>
                <h4>Location</h4>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Your name here"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="Your email here"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.cta}>
                <span>Submit Now</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
