<<<<<<< HEAD
import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top small bar */}
      <div className={styles["nav-one"]}>
        <p>Precision | Purity | Performance</p>
        <p>Indulge in timeless beauty | special offer ends tonight</p>
        <p>
          Order Online: <i className="fa-brands fa-whatsapp"></i> +92-3155-871-988
        </p>
      </div>

      {/* Main Navbar */}
      <div className={styles["navtwo"]}>
        <img src="/nav.logo.png" alt="Logo" className={styles["nav-logo"]} />

        {/* Hamburger Icon */}
        <div
          className={styles["hamburger"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${styles["nav-ul"]} ${
            menuOpen ? styles["nav-ul-open"] : ""
          }`}
        >
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/collections">COLLECTIONS</Link></li>
          <li><Link to="/handmade">HANDMADE</Link></li>
          <li><Link to="/new-designs">NEW DESIGNS</Link></li>
          <li><Link to="/mens-collection">MEN'S COLLECTION</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/cart"><i class="fa-solid fa-bag-shopping"></i></Link></li>
        </ul>

        {/* Search Bar */}
        <div className={styles["search-wrapper"]}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search..."
            className={styles["search-input"]}
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
=======
import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navContainer}>
      {/* 1. Top Gold Bar */}
      <div className={styles["nav-one"]}>
        <p>Precision | Purity | Performance</p>
        <p>Indulge in timeless beauty</p>
        <p><i className="fa-brands fa-whatsapp"></i> +92-3155-871-988</p>
      </div>

      {/* 2. Main White Navbar */}
      <div className={styles["navtwo"]}>
        {/* Logo Section */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/nav.logo.png" alt="Logo" className={styles["nav-logo"]} />
        </Link>

        {/* Hamburger (Mobile Menu Toggle) */}
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>

        {/* Navigation Links + Cart */}
        <ul className={`${styles["nav-ul"]} ${menuOpen ? styles["nav-ul-open"] : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/collections" onClick={() => setMenuOpen(false)}>COLLECTIONS</Link></li>
          <li><Link to="/handmade" onClick={() => setMenuOpen(false)}>HANDMADE</Link></li>
          <li><Link to="/new-designs" onClick={() => setMenuOpen(false)}>NEW DESIGNS</Link></li>
          <li><Link to="/mens-collection" onClick={() => setMenuOpen(false)}>MEN'S COLLECTION</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </li>

          {/* Mini Contact Form for Mobile Only */}
          <div className={styles.miniContact}>
            <h3>QUICK INQUIRY</h3>
            <p>Indulge in timeless beauty</p>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="3"></textarea>
            <button>SEND MESSAGE</button>
            <div className={styles.socials}>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </div>
        </ul>

        {/* Search Bar (Desktop) */}
        <div className={styles["search-wrapper"]}>
          <i className="fa-solid fa-magnifying-glass" style={{ color: '#888' }}></i>
          <input type="text" placeholder="Search..." className={styles["search-input"]} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
>>>>>>> dfab93ec86318ba27bb5ece6a81bc063a5bb661a
