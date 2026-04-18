import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "/api";

const PaymentContainer = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

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
          body: JSON.stringify({ 
            items, 
            amount,
            customerEmail: user?.email || "guest@example.com"
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setClientSecret(data.clientSecret);
        } else {
          setError(data.error || "Failed to initialize payment.");
        }
      } catch (err) {
        setError("Network error. Backend might be down. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    createIntent();
  }, [amount, items, navigate, user?.email]);

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

  if (loading) return <div style={{ textAlign: "center", padding: "120px 20px" }}>Initializing secure checkout...</div>;
  if (error) return (
    <div style={{ textAlign: "center", padding: "120px 20px", color: "#b6402e" }}>
      <h2 style={{ marginBottom: "10px" }}>Checkout Error</h2>
      <p>{error}</p>
      <button 
        onClick={() => navigate("/cart")}
        style={{ marginTop: "20px", padding: "10px 20px", background: "#c6a05a", border: "none", borderRadius: "8px", cursor: "pointer" }}
      >
        Return to Cart
      </button>
    </div>
  );

  return (
    <div style={{ minHeight: "80vh", padding: "120px 20px 40px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} amount={amount} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default PaymentContainer;
