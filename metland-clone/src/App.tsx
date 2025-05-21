import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Tentang from './Tentang';
import Gallery from './Gallery';
import LocationMap from './LocationMap';
import ContactForm from './ContactForm';
import Footer from './Footer';
import UnitTypes from './components/UnitTypes';
import Facilities from './components/Facilities';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'; // ✅ Add this

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero"><Hero /></div>
      <Tentang />
      <div id="unittypes"><UnitTypes /></div>
      <div id="facilities"><Facilities /></div>
      <div id="galeri"><Gallery /></div>
      <div id="lokasi"><LocationMap /></div>
      <div id="kontak"><ContactForm /></div>
      <Footer />
      <WhatsAppFloatingButton /> {/* ✅ Add this here */}
    </div>
  );
}

export default App;
