import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, Check } from 'lucide-react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          guests: '2',
          date: '',
          time: '',
          message: ''
        });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="reservations" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Reservation Confirmed!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for your reservation. We've sent a confirmation email with all the details. 
              We look forward to serving you an exceptional dining experience.
            </p>
            <p className="text-gold text-lg">See you at Lumière!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Make a Reservation</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience. We recommend booking in advance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Reservation Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="text-gold w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
                    <p className="text-gray-400">Monday - Thursday: 5:30 PM - 10:00 PM</p>
                    <p className="text-gray-400">Friday - Saturday: 5:30 PM - 11:00 PM</p>
                    <p className="text-gray-400">Sunday: 5:30 PM - 9:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="text-gold w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Group Reservations</h4>
                    <p className="text-gray-400">For parties of 8 or more, please call us directly at (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Calendar className="text-gold w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Cancellation Policy</h4>
                    <p className="text-gray-400">Please provide at least 24 hours notice for cancellations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 bg-black border rounded-lg text-white focus:outline-none focus:border-gold transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 bg-black border rounded-lg text-white focus:outline-none focus:border-gold transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 bg-black border rounded-lg text-white focus:outline-none focus:border-gold transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-700'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full p-3 bg-black border rounded-lg text-white focus:outline-none focus:border-gold transition-colors ${
                        errors.date ? 'border-red-500' : 'border-gray-700'
                      }`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full p-3 bg-black border rounded-lg text-white focus:outline-none focus:border-gold transition-colors ${
                        errors.time ? 'border-red-500' : 'border-gray-700'
                      }`}
                    >
                      <option value="">Select time</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </select>
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Special dietary requirements, celebration details, seating preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-black py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-colors duration-300 transform hover:scale-105"
                >
                  Reserve Table
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;