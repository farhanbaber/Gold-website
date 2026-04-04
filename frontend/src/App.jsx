import Navbar from "./assets/components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./assets/components/Footer.jsx";
import Home from "./assets/components/Home.jsx";
import Collections from "./assets/components/Collections.jsx";
import Handmade from "./assets/components/Handmade.jsx";
import Newdesign from "./assets/components/Newdesign.jsx";
import Mencollection from "./assets/components/Mencollection.jsx";
import Contact from "./assets/components/Contact.jsx";
import Cart from "./assets/components/Cart.jsx";
import React ,{ useState} from "react";
import "./App.css";

function App() {
  const [cartItems,setCartItems]= useState([]);

  const handleAddToCart = (product) => {
    setCartItems( (prev) => [...prev, product]);
  }
  return (
    <div className="appLayout">
  <Navbar />

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

  <Footer />
</div>

  );
}

export default App;
