import React, { useState } from 'react';
import { Plus, Leaf, Flame } from 'lucide-react';
import { dishes } from '../data/dishes';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const { addItem } = useCart();

  const menuCategories = {
    starters: 'Starters',
    mains: 'Main Courses',
    desserts: 'Desserts',
    drinks: 'Beverages'
  };

  const filteredDishes = dishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Menu</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with the finest ingredients and culinary expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(menuCategories).map(([key, title]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gold text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {menuCategories[activeCategory as keyof typeof menuCategories]}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {dish.vegetarian && (
                      <span className="bg-green-600 text-white p-1 rounded-full">
                        <Leaf size={16} />
                      </span>
                    )}
                    {dish.spicy && (
                      <span className="bg-red-600 text-white p-1 rounded-full">
                        <Flame size={16} />
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-white">{dish.name}</h4>
                    <span className="text-gold font-bold text-xl">${dish.price}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{dish.description}</p>
                  {dish.ingredients && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Ingredients:</p>
                      <div className="flex flex-wrap gap-1">
                        {dish.ingredients.map((ingredient, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => addItem(dish)}
                    className="w-full bg-gold text-black py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Plus size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;