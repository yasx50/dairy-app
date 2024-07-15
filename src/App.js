import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Home  from "./components/Home";
import Product from "./components/Product";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product  />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;
