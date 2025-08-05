import React from 'react';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          Lumière
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-gold">
          Fine Dining. Exceptional Experience. Culinary Excellence.
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Where passion meets precision in every dish, creating unforgettable moments that illuminate your dining experience.
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-gold text-black px-8 py-4 text-lg font-semibold rounded-full hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Hero;