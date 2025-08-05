import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="bg-black text-white">
        <Header />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;