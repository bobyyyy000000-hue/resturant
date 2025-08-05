import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'An absolutely extraordinary dining experience! Every dish was a masterpiece, and the service was impeccable. The attention to detail is remarkable.',
      location: 'New York, NY'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Lumière exceeded all expectations. The chef\'s tasting menu was phenomenal, and the wine pairings were perfect. A truly memorable evening.',
      location: 'San Francisco, CA'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'The ambiance is elegant yet comfortable, and the staff made us feel like royalty. The beef Wellington was the best I\'ve ever had.',
      location: 'Chicago, IL'
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'Celebrating our anniversary here was perfect. The attention to detail, from the food presentation to the service, was outstanding.',
      location: 'Los Angeles, CA'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-gold fill-gold' : 'text-gray-400'}
      />
    ));
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our valued guests about their exceptional dining experiences at Lumière.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-black/40 rounded-lg p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div>
              <p className="text-gold font-semibold text-lg mb-1">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-gray-400">
                {testimonials[currentTestimonial].location}
              </p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors duration-300 bg-black/50 rounded-full p-2"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors duration-300 bg-black/50 rounded-full p-2"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-gold' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;