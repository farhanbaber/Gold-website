import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import AdminOrders from "./assets/components/AdminOrders.jsx";
import ProtectedRoute from "./assets/components/ProtectedRoute.jsx";
import AdminLayout from "./assets/components/AdminLayout.jsx";
import Login from "./assets/components/Login.jsx";
import Success from "./assets/components/Success.jsx";
import AdminDashboard from "./assets/components/AdminDashboard.jsx";
import ManageProducts from "./assets/components/ManageProducts.jsx";
import PageLoader from "./assets/components/PageLoader.jsx";
import WhatsAppIcon from "./assets/components/WhatsAppIcon.jsx";
import PaymentContainer from "./assets/components/PaymentContainer.jsx";
import "./App.css";

function App() {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = React.useState(true);
  const previousPathRef = React.useRef(location.pathname);

  const INITIAL_LOADER_MS = 2400;
  const ROUTE_LOADER_MS = 1100;

  React.useEffect(() => {
    const timer = setTimeout(() => setIsRouteLoading(false), INITIAL_LOADER_MS);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (previousPathRef.current === location.pathname) return;
    previousPathRef.current = location.pathname;
    setIsRouteLoading(true);
    const timer = setTimeout(() => setIsRouteLoading(false), ROUTE_LOADER_MS);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  React.useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  return (
    <div className="appLayout">
      <PageLoader show={isRouteLoading} />
      {/* 1. Header/Navbar (Top par fixed) */}
      <Navbar />

      {/* 2. Main Content (Routes ke mutabiq change hoga) */}
      <main className="contentArea">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/handmade" element={<Handmade />} />
          <Route path="/new-designs" element={<Newdesign />} />
          <Route path="/mens-collection" element={<Mencollection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/checkout" element={<PaymentContainer />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="products" element={<ManageProducts />} />
          </Route>
        </Routes>
      </main>

      {/* 3. Pagination (Ab ye har page ke niche hamesha dikhega) */}
      <Pagination />

      {/* 4. Footer */}
      <Footer />

      {/* 5. WhatsApp Floating Icon */}
      <WhatsAppIcon />
    </div>
  );
}

export default App;