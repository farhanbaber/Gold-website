import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "goldWebsiteCartItems";

const CartContext = createContext(null);

const readInitialCart = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (!savedCart) return [];
    const parsed = JSON.parse(savedCart);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(readInitialCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (!product) return;
    setCartItems((prev) => [...prev, { ...product, quantity: product.quantity || 1 }]);
  };

  const removeFromCart = (itemId, itemIndex) => {
    setCartItems((prev) =>
      prev.filter((item, index) => {
        if (itemId) return item.id !== itemId;
        return index !== itemIndex;
      })
    );
  };

  const updateItemQuantity = (itemId, quantity, itemIndex) => {
    const safeQty = Math.max(1, Number(quantity) || 1);
    setCartItems((prev) =>
      prev.map((item, index) => {
        if (itemId) return item.id === itemId ? { ...item, quantity: safeQty } : item;
        return index === itemIndex ? { ...item, quantity: safeQty } : item;
      })
    );
  };

  const clearCart = () => setCartItems([]);

  const updateItemPrice = (itemId, price, itemIndex) => {
    setCartItems((prev) =>
      prev.map((item, index) => {
        const isTarget = itemId ? item.id === itemId : index === itemIndex;
        if (!isTarget) return item;
        return { ...item, price };
      })
    );
  };

  const updateQuantity = (itemId, type, itemIndex) => {
    setCartItems((prev) =>
      prev.map((item, index) => {
        const isTarget = itemId ? item.id === itemId : index === itemIndex;
        if (!isTarget) return item;
        const current = item.quantity || 1;
        const next = type === "increase" ? current + 1 : current - 1;
        return { ...item, quantity: Math.max(1, next) };
      })
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(String(item.price || "").replace(/[^0-9.-]+/g, "")) || 0;
    return sum + price * (item.quantity || 1);
  }, 0);

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateItemQuantity,
      updateQuantity,
      updateItemPrice,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [cartItems, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
