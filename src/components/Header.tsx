import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gold cursor-pointer" onClick={() => scrollToSection('hero')}>
            Lumière
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                className="text-white hover:text-gold transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative text-white hover:text-gold transition-colors duration-300"
            >
              <ShoppingCart size={24} />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gold transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/95 rounded-lg">
            {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-white hover:text-gold transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                toggleCart();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-white hover:text-gold transition-colors duration-300"
            >
              Cart ({state.items.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;