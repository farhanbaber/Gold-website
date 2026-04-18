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

        {/* Mobile: cart + menu toggle */}
        <div className={styles.mobileTopBar}>
          <Link to="/cart" onClick={closeMenu} className={styles.cartLink}>
            <i className="fa-solid fa-bag-shopping"></i>
            {totalUnits > 0 && <span className={styles.cartCount}>{totalUnits}</span>}
          </Link>
          <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>

        {/* Desktop Links + Search */}
        <ul className={`${styles["nav-ul"]} ${menuOpen ? styles["nav-ul-open"] : ""}`}>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/collections" onClick={closeMenu}>COLLECTIONS</Link></li>
          <li><Link to="/handmade" onClick={closeMenu}>HANDMADE</Link></li>
          <li><Link to="/new-designs" onClick={closeMenu}>NEW DESIGNS</Link></li>
          <li><Link to="/mens-collection" onClick={closeMenu}>MEN'S COLLECTION</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
          
          <li className={styles.desktopOnly}>
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
          </li>

          <li className={styles.cartDesktopItem}>
            <Link to="/cart" onClick={closeMenu} className={styles.cartLink}>
              <i className="fa-solid fa-bag-shopping"></i>
              {totalUnits > 0 && <span className={styles.cartCount}>{totalUnits}</span>}
            </Link>
          </li>

          {!user ? (
            <li><Link to="/login" className={styles.authBtn} onClick={closeMenu}>SIGN IN</Link></li>
          ) : (
            <li>
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
