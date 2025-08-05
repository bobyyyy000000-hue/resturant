import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">Lumière</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fine dining excellence where culinary artistry meets exceptional service, creating unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Gallery', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold" />
                <span className="text-gray-400 text-sm">123 Culinary Avenue, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span className="text-gray-400 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold" />
                <span className="text-gray-400 text-sm">info@lumiererestaurant.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Monday - Thursday</p>
              <p className="text-gold">5:30 PM - 10:00 PM</p>
              <p>Friday - Saturday</p>
              <p className="text-gold">5:30 PM - 11:00 PM</p>
              <p>Sunday</p>
              <p className="text-gold">5:30 PM - 9:30 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Lumière Restaurant. All rights reserved. | Designed with passion for culinary excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;