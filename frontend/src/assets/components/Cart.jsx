import React from 'react';
import styles from './Cart.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems = [] }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cartPage}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <h1>Your Shopping Cart</h1>
          <p>Review your selected masterpieces</p>
        </div>

        {cartItems.length > 0 ? (
          <div className={styles.cartList}>
            {cartItems.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.cartItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.itemInfo}>
                  <h3>{item.name || "Untitled Masterpiece"}</h3>
                  <p>{item.price || "$0.00"}</p>
                </div>
              </motion.div>
            ))}
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <div className={styles.iconWrapper}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <h2>Your cart is currently empty</h2>
            <p>Explore our collections to add items you love</p>
            <button className={styles.cta} onClick={() => navigate('/collections')}>
              <span>Start Shopping</span>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
