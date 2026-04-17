import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm.jsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");
const apiBaseUrl = "/api";

const PaymentContainer = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Get amount and items from state (passed from Cart)
  const { amount, items } = location.state || {};

  useEffect(() => {
    if (!amount || !items) {
      navigate("/cart");
      return;
    }

    // Create PaymentIntent as soon as the page loads
    const createIntent = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/create-payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items, amount }),
        });

        const data = await response.json();

        if (response.ok) {
          setClientSecret(data.clientSecret);
        } else {
          setError(data.error || "Failed to initialize payment.");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    createIntent();
  }, [amount, items, navigate]);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#b8860b',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  if (loading) return <div style={{ textAlign: "center", padding: "50px" }}>Initializing secure checkout...</div>;
  if (error) return <div style={{ textAlign: "center", padding: "50px", color: "red" }}>{error}</div>;

  return (
    <div style={{ minHeight: "80vh", padding: "20px" }}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} amount={amount} />
        </Elements>
      )}
    </div>
  );
};

export default PaymentContainer;
