import React from 'react';
import styles from './Contact.module.css';
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your form submission logic here (API call etc.)
    alert('Thank you! Your message has been received.');
  };

  return (
    <>
      {/* Header Section - Same as before */}
      <div className={styles.contactHeader}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a> / <span>Contact Us</span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '700', margin: 0 }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.mainContent}>

          {/* Left Side - Contact Info (Same) */}
          <div className={styles.leftSection}>
            <h2>Get in touch with us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Velit eget elit arcu vitae. 
              Non fermentum condimentum sem sed urna.
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

          {/* Right Side - Contact Form */}
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

              {/* === YOUR GOLDEN SHINE BUTTON === */}
              <button type="submit" className={styles.cta}>
                <span>Submit Now</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;