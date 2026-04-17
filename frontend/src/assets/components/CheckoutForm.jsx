import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = ({ clientSecret, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.paymentForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Secure Payment</h2>
      <p className={styles.amount}>Total: ${(amount / 100).toFixed(2)}</p>
      
      <PaymentElement className={styles.paymentElement} />
      
      <button disabled={isLoading || !stripe || !elements} className={styles.payButton}>
        <span id="button-text">
          {isLoading ? <div className={styles.spinner}></div> : "Pay now"}
        </span>
      </button>

      {message && <div className={styles.paymentMessage}>{message}</div>}
      
      <div className={styles.footer}>
        <p>🔒 PCI-DSS Compliant Secure Payment</p>
      </div>
    </form>
  );
};

export default CheckoutForm;
