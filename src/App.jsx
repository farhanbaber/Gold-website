import Navbar from "./assets/components/Nav.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./assets/components/Home.jsx";
import Collections from "./assets/components/Collections.jsx";
import Handmade from "./assets/components/Handmade.jsx";
import Newdesign from "./assets/components/Newdesign.jsx";
import Mencollection from "./assets/components/Mencollection.jsx";
import Contact from "./assets/components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/handmade" element={<Handmade />} />
        <Route path="/new-designs" element={<Newdesign />} />
        <Route path="/mens-collection" element={<Mencollection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
