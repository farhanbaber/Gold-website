import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = ({ cartItems = [] }) => {
  const navigate = useNavigate();

  // Calculate total price dynamically
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;
    return acc + price;
  }, 0);

  return (
    <div className={styles.cartPage}>
      {cartItems.length > 0 ? (
        <>
          {/* LEFT CONTENT: Item List */}
          <div className={styles.leftContent}>
            <h1 className={styles.bagTitle}>
              YOUR BAG <span>({cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'})</span>
            </h1>

            {cartItems.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.itemCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.imageContainer}>
                  {item.img ? (
                    <img src={item.img} className={styles.productImage} alt={item.name} />
                  ) : (
                    <div className={styles.placeholderImg}>IMAGE</div>
                  )}
                </div>

                <div className={styles.itemDetails}>
                  <h2>{item.name || "Untitled Masterpiece"}</h2>
                  <p>Category: Luxury Collection</p>
                  <p className={styles.stockStatus}>In Stock ✓</p>

                  <div className={styles.actionLinks}>
                    <span className={styles.link}>Edit</span>
                    <span className={styles.link}>Delete</span>
                    <span className={styles.link}>Move to Wishlist</span>
                  </div>
                </div>

                <div className={styles.priceSection}>
                  <select className={styles.qtySelect}>
                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                  </select>
                  <div className={styles.price}>{item.price}</div>
                </div>
              </motion.div>
            ))}

            <div style={{ marginTop: '40px' }}>
              <button className={styles.checkoutBtn} style={{ maxWidth: '280px' }} onClick={() => navigate('/checkout')}>
                CHECKOUT <span>→</span>
              </button>
              <p style={{ fontSize: '12px', marginTop: '15px' }}>🚚 <strong>FREE SHIPPING</strong> FOR MEMBERS</p>
            </div>
          </div>

          {/* RIGHT SIDEBAR: Order Summary */}
          <div className={styles.sidebar}>
            <button className={styles.checkoutBtn} onClick={() => navigate('/checkout')}>
              CHECKOUT <span>→</span>
            </button>

            <div className={styles.summaryBox}>
              <h3 className={styles.summaryTitle}>ORDER SUMMARY</h3>
              
              <div className={styles.row}>
                <span>{cartItems.length} ITEM(S)</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              
              <div className={styles.row}>
                <span>Delivery</span>
                <span>FREE</span>
              </div>

              <div className={`${styles.row} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
            </div>

            <div className={styles.promoCollapse}>
              PROMO CODE <span>+</span>
            </div>

            <div style={{ marginTop: '40px' }}>
              <p style={{ fontSize: '12px', fontWeight: '800', marginBottom: '15px' }}>ACCEPTED PAYMENTS</p>
              <div className={styles.paymentMethods}>
                <div className={styles.paymentBox}>VISA</div>
                <div className={styles.paymentBox}>MC</div>
                <div className={styles.paymentBox}>AMEX</div>
                <div className={styles.paymentBox}>PP</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* EMPTY CART STATE */
        <motion.div 
          className={styles.emptyCart}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className={styles.iconWrapper}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <h2>Your bag is empty</h2>
          <p>Explore our collections to add items you love</p>
          <button className={styles.cta} onClick={() => navigate('/collections')}>
            <span>Start Shopping</span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;