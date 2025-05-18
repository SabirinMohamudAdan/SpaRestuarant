


// -----------------------------

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import all images
import img1 from "../image/m1.jpg";
import img2 from "../image/m2.jpg";
import img3 from "../image/m3.jpg";
import img4 from "../image/m4.jpg";
import img5 from "../image/limo.jpg";
import img6 from "../image/d5.jpg";
import img7 from "../image/d3.jpg";
import img8 from "../image/qumbo.jpg";
import img9 from "../image/qare.jpg";
import img10 from "../image/d8.jpg";
import img11 from "../image/d10.jpg";
import img12 from "../image/sr1.jpg";
import img13 from "../image/sr2.png";
import img14 from "../image/cup1.jpg";
import img15 from "../image/cup8.jpg";
import img16 from "../image/cup5.jpg";
import img17 from "../image/cup3.jpg";
import img18 from "../image/cup10.jpg";
import img19 from "../image/cup2.jpg";
import img20 from "../image/cup4.jpg";
import img21 from "../image/pe1.jpg";
import img22 from "../image/pe5.jpg";
import img23 from "../image/pe3.jpg";
import img24 from "../image/brg2.jpg";
import img25 from "../image/ch1.jpg";
import img26 from "../image/fish1.jpg";
import img27 from "../image/sh1.jpg";
import img28 from "../image/sh2.jpg";
import img29 from "../image/sh4.jpg";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("MAINS");
  const [showMoreDrinks, setShowMoreDrinks] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef();

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        const cartButton = document.querySelector('.cart-button');
        if (!cartButton.contains(event.target)) {
          setIsCartOpen(false);
        }
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  const menuItems = [
    {
      category: "MAINS",
      items: [
        {
          id: 1,
          name: "Chicken Crispy Roll",
          description: "Crispy fried chicken rolls with special dipping sauce",
          price: "$20",
          image: img1
        },
        {
          id: 2,
          name: "Roasted Chicken",
          description: "Herb-roasted free-range chicken with vegetables",
          price: "$8",
          image: img2
        },
        {
          id: 3,
          name: "Leomon",
          description: "Fresh salmon with lemon butter sauce",
          price: "$4",
          image: img5
        },
        {
          id: 4,
          name: "Coconut",
          description: "Our special drink",
          price: "$2",
          image: img8
        },
        {
          id: 5,
          name: "Watermelom",
          description: "Our special drink",
          price: "$5",
          image: img9
        },
        {
          id: 6,
          name: "Spicy Shrimp Platter",
          description: "Grilled shrimp with spicy garlic sauce",
          price: "$30",
          image: img3
        }
      ]
    },
    {
      category: "STARTER",
      items: [
        {
          id: 7,
          name: "Baked Crab Cheese",
          description: "Lump crab meat baked with three cheeses",
          price: "$50",
          image: img3
        },
        {
          id: 8,
          name: "Baked Crab Cheese",
          description: "Lump crab meat baked with three cheeses",
          price: "$40",
          image: img12
        },
        {
          id: 9,
          name: "Cheese Shrimp Roll",
          description: "Crispy shrimp rolls with melted cheese",
          price: "$42",
          image: img4
        },
        {
          id: 10,
          name: "Fish burger with cheese",
          description: "Crispy shrimp rolls with melted cheese",
          price: "$42",
          image: img13
        }
      ]
    },
    {
      category: "CHICKEN",
      items: [
        {
          id: 11,
          name: "Burger",
          description: "burger with chicken",
          price: "$20",
          image: img24
        },
        {
          id: 12,
          name: "Chicken",
          description: "chicken with delicious test",
          price: "$25",
          image: img25
        },
        {
          id: 13,
          name: "Peaza",
          description: "peaza with chicken",
          price: "$15",
          image: img21
        },
        {
          id: 14,
          name: "Peaza",
          description: "peaza with chicken",
          price: "$20",
          image: img22
        },
        {
          id: 15,
          name: "Peaza",
          description: "peaza with chicken",
          price: "$30",
          image: img23
        },
        {
          id: 16,
          name: "Fish",
          description: "Fish with chicken",
          price: "$15",
          image: img26
        },
        {
          id: 17,
          name: "Shuwarma",
          description: "Shuwarma with chicken",
          price: "$21",
          image: img27
        },
        {
          id: 18,
          name: "Shuwarma",
          description: "Shuwarma with chicken",
          price: "$20",
          image: img28
        },
        {
          id: 19,
          name: "Shuwarma",
          description: "Shuwarma with chicken",
          price: "$26",
          image: img29
        }
      ]
    },
    {
      category: "COFFEE",
      items: [
        {
          id: 20,
          name: "Cool Coffee",
          description: "Cofee chocolate with nice",
          price: "$9",
          image: img14
        },
        {
          id: 21,
          name: "Chocolate Coffee",
          description: "Cofee chocolate with nice",
          price: "$5",
          image: img20
        },
        {
          id: 22,
          name: "Coffee",
          description: "Hot Coffee",
          price: "$9",
          image: img18
        },
        {
          id: 23,
          name: "Coffee",
          description: "Cofee chocolate with nice",
          price: "$10",
          image: img19
        },
        {
          id: 24,
          name: "Coffee",
          description: "Coffee chocolate with hot",
          price: "$7",
          image: img15
        },
        {
          id: 25,
          name: "Chocolate Coffe",
          description: "Coffee chocolate with nice",
          price: "$8",
          image: img16
        },
        {
          id: 26,
          name: "Coffee",
          description: "Cool Coffee with nice",
          price: "$12",
          image: img17
        }
      ]
    },
    {
      category: "DRINKS",
      items: [
        {
          id: 27,
          name: "Leomon",
          description: "Our special leomon  ",
          price: "$2",
          image: img6
        },
        {
          id: 28,
          name: "Leomon ",
          description: "Our special  leomon",
          price: "$1.3",
          image: img10
        },
        {
          id: 29,
          name: "Classic Chocolate",
          description: "Refreshing with cocktail",
          price: "$3.5",
          image: img7
        },
        {
          id: 30,
          name: "Classic Chocolate",
          description: "Refreshing mint lime cocktail",
          price: "$6",
          image: img11
        },
        ...(showMoreDrinks ? [
          {
            id: 31,
            name: "Coconut",
            description: "Refreshing mint lime cocktail",
            price: "$5",
            image: img8
          },
          {
            id: 32,
            name: "Watermelon",
            description: "Refreshing mint lime cocktail",
            price: "$7",
            image: img9
          }
        ] : [])
      ]
    }
  ];

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemId);
      if (existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => item.id !== itemId);
      }
    });
  };

  const removeItemCompletely = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "DRINKS") {
      setShowMoreDrinks(false);
    }
  };

  const currentItems = menuItems.find(section => section.category === activeCategory)?.items || [];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black w-full relative">
      {/* Cart Button */}
      <motion.button
        onClick={() => setIsCartOpen(!isCartOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="cart-button fixed top-6 right-12 z-50 bg-amber-500
         text-white p-3 rounded-full shadow-lg "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </motion.button>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <motion.div 
          ref={cartRef}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-full sm:w-96 bg-gray-900 z-40 shadow-2xl overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Your Order</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center bg-gray-800 p-3 rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                        <p className="text-amber-500 font-bold">{item.price}</p>
                        
                        <div className="flex items-center mt-2">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-amber-500 hover:text-amber-400 p-1"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="mx-2 text-white">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="text-amber-500 hover:text-amber-400 p-1"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => removeItemCompletely(item.id)}
                            className="ml-2 text-red-500 hover:text-red-400 p-1"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300">Total Items:</span>
                    <span className="text-white font-bold">
                      {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Price:</span>
                    <span className="text-amber-500 font-bold text-xl">${calculateTotal()}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-bold transition">
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
            O U R M E N U
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-amber-500 italic">
            Healthy & Tasty
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex overflow-x-auto pb-2 mb-8 sm:mb-12 hide-scrollbar"
        >
          <div className="flex space-x-1 sm:space-x-2 mx-auto border-b border-gray-700">
            {menuItems.map((section, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(section.category)}
                className={`whitespace-nowrap px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-medium transition
                  ${activeCategory === section.category 
                    ? 'text-amber-500 border-b-2 border-amber-500' 
                    : 'text-white hover:text-amber-400'}`}
              >
                {section.category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-4 sm:p-5"
            >
              <motion.div 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-amber-100 shadow-lg mb-4 sm:mb-6"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="w-full max-w-xs">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2 sm:mb-3">{item.description}</p>
                <div className="text-amber-500 text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.price}</div>
                <motion.button
                  onClick={() => addToCart(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base font-medium transition"
                >
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {activeCategory === "DRINKS" && !showMoreDrinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-6 sm:mt-8"
          >
            <motion.button
              onClick={() => setShowMoreDrinks(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-amber-500 text-amber-500 py-1 sm:py-2 px-6 sm:px-8 rounded-full text-sm sm:text-base font-medium hover:bg-amber-500 hover:text-white transition"
            >
              View More Drinks
            </motion.button>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MenuSection;



