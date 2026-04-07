import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { resolveSearchTarget } from "../../utils/searchIndex.js";
import { useAuth } from "../../context/AuthContext.jsx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const totalUnits = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // Function to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const target = resolveSearchTarget(searchText);
    if (!target) {
      alert("No related section found. Try ring, set, watches, or bangles.");
      return;
    }
    const url = target.hash ? `${target.path}#${target.hash}` : target.path;
    navigate(url);
    setSearchText("");
    closeMenu();
  };

  return (
    <div className={styles.navContainer}>
      {/* 1. Top Gold Bar */}
      <div className={styles["nav-one"]}>
        <p>Precision | Purity | Performance</p>
        <p className={styles.desktopOnly}>Indulge in timeless beauty</p>
        <p>
          <i className="fa-brands fa-whatsapp"></i> +92-3155-871-988
        </p>
      </div>

      {/* 2. Main White Navbar */}
      <div className={styles["navtwo"]}>
        {/* Logo Section */}
        <Link to="/" onClick={closeMenu}>
          <img src="/nav.logo.png" alt="Logo" className={styles["nav-logo"]} />
        </Link>

        {/* Hamburger (Mobile Menu Toggle) */}
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>

        {/* Navigation Links + Cart */}
        <ul className={`${styles["nav-ul"]} ${menuOpen ? styles["nav-ul-open"] : ""}`}>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/collections" onClick={closeMenu}>COLLECTIONS</Link></li>
          <li><Link to="/handmade" onClick={closeMenu}>HANDMADE</Link></li>
          <li><Link to="/new-designs" onClick={closeMenu}>NEW DESIGNS</Link></li>
          <li><Link to="/mens-collection" onClick={closeMenu}>MEN'S COLLECTION</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
          {user?.role === "admin" && <li><Link to="/admin/orders" onClick={closeMenu}>ADMIN</Link></li>}
          {!user && <li className={styles.mobileOnlyAuth}><Link to="/login" onClick={closeMenu}>SIGN IN</Link></li>}
          {user && (
            <li className={styles.mobileOnlyAuth}>
              <button
                type="button"
                className={styles.authBtn}
                onClick={() => {
                  logout();
                  closeMenu();
                  navigate("/");
                }}
              >
                LOGOUT
              </button>
            </li>
          )}
          <li>
            <Link to="/cart" onClick={closeMenu} className={styles.cartLink}>
              <i className="fa-solid fa-bag-shopping"></i>
              {totalUnits > 0 && <span className={styles.cartCount}>{totalUnits}</span>}
            </Link>
          </li>

          {/* Mini Contact Form for Mobile Only */}
          {menuOpen && (
            <div className={styles.miniContact}>
              <h3>QUICK INQUIRY</h3>
              <p>Indulge in timeless beauty</p>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="3"></textarea>
              <button type="button" onClick={() => { closeMenu(); navigate("/contact"); }}>
                SEND MESSAGE
              </button>
              <div className={styles.socials}>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
          )}
        </ul>

        {/* Search Bar (Desktop) */}
        <div className={styles.rightControls}>
          <form className={styles["search-wrapper"]} onSubmit={handleSearch}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: "#888" }}></i>
            <input
              type="text"
              placeholder="Search..."
              className={styles["search-input"]}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className={styles.searchBtn}>Go</button>
          </form>
          {!user ? (
            <Link to="/login" className={styles.desktopAuthBtn} onClick={closeMenu}>SIGN IN</Link>
          ) : (
            <button
              type="button"
              className={styles.desktopAuthBtn}
              onClick={() => {
                logout();
                closeMenu();
                navigate("/");
              }}
            >
              LOGOUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;