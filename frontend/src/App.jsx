import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Nav.jsx";
import Footer from "./assets/components/Footer.jsx";
import Home from "./assets/components/Home.jsx";
import Collections from "./assets/components/Collections.jsx";
import Handmade from "./assets/components/Handmade.jsx";
import Newdesign from "./assets/components/Newdesign.jsx";
import Mencollection from "./assets/components/Mencollection.jsx";
import Contact from "./assets/components/Contact.jsx";
import Cart from "./assets/components/Cart.jsx";
import Pagination from "./assets/components/Pagination.jsx";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="appLayout">
      {/* 1. Header/Navbar (Top par fixed) */}
      <Navbar />

      {/* 2. Main Content (Routes ke mutabiq change hoga) */}
      <main className="contentArea">
        <Routes>
          <Route path="/" element={<Home handleLike={handleAddToCart} />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/handmade" element={<Handmade />} />
          <Route path="/new-designs" element={<Newdesign />} />
          <Route path="/mens-collection" element={<Mencollection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </main>

      {/* 3. Pagination (Ab ye har page ke niche hamesha dikhega) */}
      <Pagination />

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;