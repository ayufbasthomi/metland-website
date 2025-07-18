import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from './Navbar';
import Hero from './Hero';
import Tentang from './Tentang';
import Gallery from './Gallery';
import LocationMap from './LocationMap';
import ContactForm from './ContactForm';
import Footer from './Footer';
import UnitTypes from './components/UnitTypes';
import Facilities from './components/Facilities';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import UpdateSection from './components/UpdateSection';
import VirtualTour from './VirtualTour';

const isSiteDomain = window.location.hostname.includes(".site");

function App() {
  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://metland-cikarang-official.com/" />
        <title>Metland Cikarang - Rumah Strategis & Modern</title>
        <meta name="description" content="Metland Cikarang menawarkan rumah minimalis dengan harga terjangkau di lokasi strategis." />
        <meta name="keywords" content="metland cikarang, rumah murah cikarang, cluster cikarang" />
        <meta name="robots" content={isSiteDomain ? "noindex, nofollow" : "index, follow"} />
        <meta property="og:title" content="Perumahan Idaman di Bekasi | Metland Cikarang" />
        <meta property="og:description" content="Kawasan hunian modern dan strategis di Cikarang dengan berbagai fasilitas." />
        <meta property="og:image" content="https://www.metland-cikarang-official.com/event.png"/>
        <meta property="og:url" content="https://metland-cikarang-official.com" />
      </Helmet>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="update"><UpdateSection /></div>
      <Tentang />
      <div id="unittypes"><UnitTypes /></div>
      <div id="virtualtour"><VirtualTour/></div>
      <div id="facilities"><Facilities /></div>
      <div id="galeri"><Gallery /></div>
      <div id="lokasi"><LocationMap /></div>
      <div id="kontak"><ContactForm /></div>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
