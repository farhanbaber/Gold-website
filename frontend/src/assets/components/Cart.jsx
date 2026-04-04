import React, { useState } from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  // Ye state tumhari website ke dynamic data se connect hogi
  const [cartItem, setCartItem] = useState({
    name: "ADIDAS LUXE SWEATER",
    price: 65.00,
    qty: 1,
    image: "" // Agar image khali hai, to grey box dikhega
  });

  return (
    <div className={styles.cartPage}>
      {/* LEFT CONTENT */}
      <div className={styles.leftContent}>
        <h1 className={styles.bagTitle}>YOUR BAG <span>(1 ITEM)</span></h1>

        <div className={styles.itemCard}>
          <div className={styles.imageContainer}>
            {cartItem.image ? (
              <img src={cartItem.image} className={styles.productImage} alt="Product" />
            ) : (
              <span style={{color: '#999', fontSize: '12px'}}>PRODUCT IMAGE</span>
            )}
          </div>

          <div className={styles.itemDetails}>
            <h2>{cartItem.name}</h2>
            <p>Gender: Women's</p>
            <p>Color: Raw Grey / Carbon</p>
            <p>Size: M</p>
            <p className={styles.stockStatus}>In Stock ✓</p>

            <div className={styles.actionLinks}>
              <span className={styles.link}>Edit</span>
              <span className={styles.link}>Delete</span>
              <span className={styles.link}>Move to Wishlist</span>
            </div>
          </div>

          <div className={styles.priceSection}>
            <select className={styles.qtySelect}>
              {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
            </select>
            <div className={styles.price}>${cartItem.price.toFixed(2)}</div>
          </div>
        </div>

        <div style={{marginTop: '40px'}}>
           <button className={styles.checkoutBtn} style={{maxWidth: '280px'}}>
             CHECKOUT <span>→</span>
           </button>
           <p style={{fontSize: '12px', marginTop: '15px'}}>🚚 <strong>FREE SHIPPING</strong> FOR MEMBERS</p>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className={styles.sidebar}>
        <button className={styles.checkoutBtn}>
          CHECKOUT <span>→</span>
        </button>

        <div className={styles.summaryBox}>
          <h3 className={styles.summaryTitle}>ORDER SUMMARY</h3>
          
          <div className={styles.row}>
            <span>1 ITEM</span>
            <span>${cartItem.price.toFixed(2)}</span>
          </div>
          
          <div className={styles.row}>
            <span>Delivery</span>
            <span>FREE</span>
          </div>

          <div className={`${styles.row} ${styles.totalRow}`}>
            <span>Total</span>
            <span>${cartItem.price.toFixed(2)}</span>
          </div>
        </div>

        <div className={styles.promoCollapse}>
          PROMO CODE <span>+</span>
        </div>

        <div style={{marginTop: '40px'}}>
          <p style={{fontSize: '12px', fontWeight: '800', marginBottom: '15px'}}>ACCEPTED PAYMENTS</p>
          <div className={styles.paymentMethods}>
             {/* Replace with actual SVG icons */}
             <div style={{width: '40px', height: '25px', border: '1px solid #ddd'}}></div>
             <div style={{width: '40px', height: '25px', border: '1px solid #ddd'}}></div>
             <div style={{width: '40px', height: '25px', border: '1px solid #ddd'}}></div>
             <div style={{width: '40px', height: '25px', border: '1px solid #ddd'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;