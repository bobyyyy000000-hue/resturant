import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for reservations, inquiries, or to learn more about our dining experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="text-gold w-6 h-6 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-400">
                  123 Culinary Avenue<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-gold w-6 h-6 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-400">(555) 123-4567</p>
                <p className="text-gray-500 text-sm">For reservations and inquiries</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-gold w-6 h-6 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-400">info@lumiererestaurant.com</p>
                <p className="text-gray-400">events@lumiererestaurant.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-gold w-6 h-6 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Hours</h3>
                <div className="text-gray-400 space-y-1">
                  <p>Monday - Thursday: 5:30 PM - 10:00 PM</p>
                  <p>Friday - Saturday: 5:30 PM - 11:00 PM</p>
                  <p>Sunday: 5:30 PM - 9:30 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-2">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1635959552000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;