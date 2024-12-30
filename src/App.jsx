import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AllMenu from './components/AllMenu';
import ContactUs from './components/ContactUs'; // Import Contact Us
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Home Page */}
          <Route path="/menu" element={<Menu />} /> {/* Menu Page */}
          <Route path="/all-menu" element={<AllMenu />} /> {/* Full Menu Page */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
