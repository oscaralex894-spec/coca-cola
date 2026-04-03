import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalizationWidget from './components/PersonalizationWidget';
import ProductShowcase from './components/ProductShowcase';
import UGCGallery from './components/UGCGallery';
import SustainabilityCounter from './components/SustainabilityCounter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-coke-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PersonalizationWidget />
        <ProductShowcase />
        <SustainabilityCounter />
        <UGCGallery />
      </main>
      <Footer />
    </div>
  );
}
