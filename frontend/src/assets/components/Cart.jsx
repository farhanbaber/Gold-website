import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import { useCart } from '../../context/CartContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { loadStripe } from '@stripe/stripe-js';
import { buildProductId } from '../../utils/productId.js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");
const apiBaseUrl = "/api";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { cartItems, removeFromCart, updateItemQuantity, updateQuantity, updateItemPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const parseItemPrice = React.useCallback((item) => {
    const direct = parseFloat(String(item.price || "").replace(/[^0-9.-]+/g, ""));
    if (Number.isFinite(direct) && direct > 0) return direct;
    const fromUnitAmount = Number(item.unitAmount || 0) / 100;
    return Number.isFinite(fromUnitAmount) && fromUnitAmount > 0 ? fromUnitAmount : 0;
  }, []);

  React.useEffect(() => {
    const hydrateMissingPrices = async () => {
      const missing = cartItems
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => parseItemPrice(item) <= 0 && item.productId);

      if (!missing.length) return;

      await Promise.all(
        missing.map(async ({ item, index }) => {
          try {
            const res = await fetch(`${apiBaseUrl}/products/${item.productId}`);
            const data = await res.json();
            if (!res.ok || !data?.product?.unitAmount) return;
            const trusted = `$${(data.product.unitAmount / 100).toFixed(2)}`;
            updateItemPrice(item.id, trusted, index);
          } catch {
            // ignore per-item lookup errors
          }
        })
      );
    };

    hydrateMissingPrices();
  }, [cartItems, parseItemPrice, updateItemPrice]);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseItemPrice(item);
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);
  const totalUnits = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  React.useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get("payment") === "success") {
      clearCart();
      alert("Payment successful. Thank you for your purchase.");
      navigate("/cart", { replace: true });
      return;
    }

    if (query.get("payment") === "cancel") {
      alert("Payment was cancelled.");
      navigate("/cart", { replace: true });
    }
  }, [clearCart, location.search, navigate]);

  const handleCheckout = async () => {
    if (!cartItems.length || isCheckingOut) return;
    if (!user) {
      navigate(`/login?redirect=${encodeURIComponent("/cart")}`);
      return;
    }
    if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
      alert("Checkout is not configured yet (missing payment keys). Please contact us on WhatsApp to place your order.");
      return;
    }

    setIsCheckingOut(true);
    try {
      // Calculate total amount in cents for Stripe
      const amount = Math.round(subtotal * 100);
      
      // Navigate to the custom checkout page instead of opening Stripe Checkout directly
      navigate("/checkout", { 
        state: { 
          amount, 
          items: cartItems.map((item) => ({
            ...item,
            productId: item.productId || buildProductId(item.name),
            unitAmount: Math.round(parseItemPrice(item) * 100),
            quantity: item.quantity || 1
          })) 
        } 
      });
      
    } catch (error) {
      alert("Checkout initialization failed. Please try again or contact us via WhatsApp.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className={styles.cartPage}>
      {cartItems.length > 0 ? (
        <>
          <div className={styles.leftContent}>
            <h1 className={styles.bagTitle}>
              Cart <span>{totalUnits} {totalUnits === 1 ? 'item' : 'items'}</span>
            </h1>
            <div className={styles.checkoutSteps}>
              <span className={styles.activeStep}>1. Cart</span>
              <span>2. Checkout</span>
              <span>3. Payment</span>
            </div>
            {!user && (
              <p className={styles.checkoutHint}>
                Sign in to proceed to checkout. Guest checkout is not available.
              </p>
            )}

            {cartItems.map((item, index) => {
              const itemPrice = parseItemPrice(item);
              const lineTotal = itemPrice * (item.quantity || 1);

              return (
                <motion.div
                  key={item.id || index}
                  className={styles.itemCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
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
                    <p>Fayaz Jewellers Luxury Collection</p>
                    <p className={styles.stockStatus}>In Stock</p>
                    <div className={styles.actionLinks}>
                      <button
                        type="button"
                        className={`${styles.linkBtn} ${styles.deleteBtn}`}
                        onClick={() => removeFromCart(item.id, index)}
                      >
                        <i className="fa-regular fa-trash-can"></i> Delete Item
                      </button>
                      <span className={styles.link}>Save for later</span>
                    </div>
                  </div>

                  <div className={styles.priceSection}>
                    <label className={styles.qtyLabel}>Qty</label>
                    <div className={styles.qtyStepper}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, "decrease", index)}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        -
                      </button>
                      <select
                        className={styles.qtySelect}
                        value={item.quantity || 1}
                        onChange={(e) => updateItemQuantity(item.id, Number(e.target.value), index)}
                      >
                        {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, "increase", index)}
                      >
                        +
                      </button>
                    </div>
                    <div className={styles.price}>${lineTotal.toLocaleString()}</div>
                  </div>
                </motion.div>
              );
            })}

            <div className={styles.footerAction}>
              <button className={styles.checkoutBtn} onClick={handleCheckout} disabled={isCheckingOut}>
                {isCheckingOut ? "PROCESSING..." : <>CHECKOUT <span>→</span></>}
              </button>
              <p className={styles.shippingText}>Free shipping on all prepaid orders</p>
            </div>
          </div>

          <div className={styles.sidebar}>
            <button className={styles.checkoutBtn} onClick={handleCheckout} disabled={isCheckingOut}>
              {isCheckingOut ? "PROCESSING..." : <>CHECKOUT <span>→</span></>}
            </button>

            <div className={styles.summaryBox}>
              <h3 className={styles.summaryTitle}>ORDER SUMMARY</h3>
              <div className={styles.row}>
                <span>{totalUnits} ITEM(S)</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className={styles.row}>
                <span>Delivery</span>
                <span>$0.00</span>
              </div>
              <div className={`${styles.row} ${styles.totalRow}`}>
                <span>Total</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
            </div>

            <div className={styles.couponBox}>
              <p>Have a coupon?</p>
              <div className={styles.couponRow}>
                <input className={styles.couponInput} placeholder="Coupon code" />
                <button className={styles.applyBtn}>Apply</button>
              </div>
            </div>

            <div className={styles.paymentWrap}>
              <p className={styles.paymentTitle}>ACCEPTED PAYMENTS</p>
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