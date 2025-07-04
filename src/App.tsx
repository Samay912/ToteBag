import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;