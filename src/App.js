import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Home  from "./components/Home/Home";
import Product from "./components/Product/Product";
import Service from "./components/Service/Service";
// import Contact from "./components/Contact";
import Account from "./components/Account/Account";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <Router>
      <>
       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product  />} />
        <Route path="/Service" element={<Service />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Account" element={<Account />} />

        </Routes>
      
      </>
    </Router>
  );
}

export default App;
