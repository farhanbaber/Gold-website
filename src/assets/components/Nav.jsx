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
