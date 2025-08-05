import React from 'react';
import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef preparing food"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="text-gray-300 space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">A Passion for Excellence</h3>
            <p className="text-lg leading-relaxed">
              Founded in 2010 by Chef Marcus Laurent, Lumière was born from a simple vision: to create an extraordinary dining experience that celebrates the artistry of French cuisine while embracing modern innovation.
            </p>
            <p className="text-lg leading-relaxed">
              Our culinary philosophy centers on sourcing the finest seasonal ingredients, supporting local farmers, and crafting each dish with meticulous attention to detail. Every plate tells a story of tradition, creativity, and passion.
            </p>
            <p className="text-lg leading-relaxed">
              Located in the heart of the city, our intimate 60-seat restaurant offers an elegant atmosphere where exceptional food meets impeccable service, creating memories that last a lifetime.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-black/40 rounded-lg">
            <Award className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Award Winning</h3>
            <p className="text-gray-400">Michelin starred restaurant with multiple culinary awards</p>
          </div>
          <div className="text-center p-8 bg-black/40 rounded-lg">
            <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Made with Love</h3>
            <p className="text-gray-400">Every dish crafted with passion and attention to detail</p>
          </div>
          <div className="text-center p-8 bg-black/40 rounded-lg">
            <Users className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Family Owned</h3>
            <p className="text-gray-400">A family tradition passed down through generations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;