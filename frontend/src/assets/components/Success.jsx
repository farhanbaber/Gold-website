import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4242";

const Success = () => {
  const location = useLocation();
  const { clearCart } = useCart();

  React.useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get("session_id");
    clearCart();

    const loadTransaction = async () => {
      if (!sessionId) return;
      try {
        const res = await fetch(`${apiBaseUrl}/checkout-session/${sessionId}`);
        const data = await res.json();
        console.log("Stripe transaction details:", data);
      } catch (error) {
        console.log("Unable to fetch transaction details", error);
      }
    };

    loadTransaction();
  }, [clearCart, location.search]);

  return (
    <div style={{ minHeight: "75vh", display: "grid", placeItems: "center", textAlign: "center" }}>
      <div>
        <div style={{ fontSize: "64px", animation: "pulse 1.2s ease-in-out infinite" }}>✓</div>
        <h1>Order Confirmed</h1>
        <p>Your payment has been received successfully.</p>
      </div>
    </div>
  );
};

export default Success;
