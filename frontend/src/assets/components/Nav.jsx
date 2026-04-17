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
        {/* 1. Logo Section */}
        <div className={styles.logoAndLinks}>
          <Link to="/" onClick={closeMenu}>
            <img src="/nav.logo.png" alt="Logo" className={styles["nav-logo"]} />
          </Link>

          {/* 2. Navigation Links (Desktop) */}
          <ul className={styles["nav-ul"]}>
            <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
            <li><Link to="/collections" onClick={closeMenu}>COLLECTIONS</Link></li>
            <li><Link to="/handmade" onClick={closeMenu}>HANDMADE</Link></li>
            <li><Link to="/new-designs" onClick={closeMenu}>NEW DESIGNS</Link></li>
            <li><Link to="/mens-collection" onClick={closeMenu}>MEN'S COLLECTION</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
          </ul>
        </div>

        {/* 3. Right Side Controls (Cart + Search + Auth) */}
        <div className={styles.rightControls}>
          <Link to="/cart" onClick={closeMenu} className={styles.cartLink}>
            <i className="fa-solid fa-bag-shopping"></i>
            {totalUnits > 0 && <span className={styles.cartCount}>{totalUnits}</span>}
          </Link>
          
          <form className={styles["search-wrapper"]} onSubmit={handleSearch}>
            <i className="fa-solid fa-magnifying-glass" style={{ color: "#888" }}></i>
            <input
              type="text"
              placeholder="Search..."
              className={styles["search-input"]}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
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

          {/* Mobile Hamburger (Only visible on small screens) */}
          <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>

        {/* Mobile Slide-in Menu (hidden on desktop) */}
        <ul className={`${styles.mobileMenu} ${menuOpen ? styles["mobileMenu-open"] : ""}`}>
           {/* ... existing mobile menu links ... */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;