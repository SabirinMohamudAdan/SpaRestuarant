// import bgImage from "../image/bg3.jpg"; // Make sure to import your background image
// import img from "../image/i1.jpg";
// import img1 from "../image/i2.jpg";
// import img2 from "../image/i3.jpg";
// import img3 from "../image/i4.jpg";
// const SpecialsCard = () => {
//   const menuItems = [
//     { 
//       name: "Roasted Chicken", 
//       price: "$55", 
//       popular: true,
//       image:img2
//     },
//     { 
//       name: "Baked Crab Cheese", 
//       price: "$66", 
//       spicy: true,
//       image: img3
//     },
//     { 
//       name: "Foie Gras", 
//       price: "$99", 
//       premium: true,
//       image: img1
//     },
//   ];

//   return (
//     <div 
//       className="min-h-screen w-full flex items-center justify-center p-4"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
//       <div className="relative z-10 w-full max-w-6xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-white uppercase font-serif tracking-wider mb-2">
//             Today's Special
//           </h2>
//           <p className="text-amber-200 italic text-xl">Fresh and delicious</p>
//         </div>

//         {/* Three Featured Boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {menuItems.map((item, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Food Image */}
//               <div className="h-48 overflow-hidden">
//                 <img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Food Info */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
//                   <span className="text-xl font-bold text-amber-600">{item.price}</span>
//                 </div>
                
//                 {item.popular && (
//                   <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
//                     Popular
//                   </span>
//                 )}
//                 {item.spicy && (
//                   <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mb-2">
//                     Spicy
//                   </span>
//                 )}
                
//                 <button className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition">
//                   Add to Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Full Menu Button */}
//         <div className="text-center mt-12">
//           <button className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition">
//             View Full Menu
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialsCard;

// ---------------------
// import React from 'react';
// import bgImage from "../image/bg3.jpg";
//    import img from "../image/i1.jpg";
//     import img1 from "../image/i2.jpg";
// import img2 from "../image/i3.jpg";
// import img3 from "../image/i4.jpg";
// import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// const SpecialsCard = () => {
//   const menuItems = [
//     { 
//       name: "Roasted Chicken", 
//       price: "$55", 
//       popular: true,
//       description: "Herb-crusted free-range chicken with roasted vegetables",
//       image: img
//     },
//     { 
//       name: "Baked Crab Cheese", 
//       price: "$66", 
//       spicy: true,
//       description: "Lump crab meat baked with three cheeses and spices",
//       image: img1
//     },
//     { 
//       name: "Foie Gras", 
//       price: "$99", 
//       premium: true,
//       description: "Seared duck liver with black truffle reduction",
//       image: img2
//     },
//     { 
//       name: "Filet Mignon", 
//       price: "$89", 
//       premium: true,
//       description: "8oz grass-fed beef with red wine demi-glace",
//       image: img3
//     }
//   ];

//   return (
//     <div 
//       className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       {/* Dark overlay with subtle animation */}
//       <motion.div 
//         className="absolute inset-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ duration: 1 }}
//       />
      
//       <div className="relative z-10 w-full max-w-7xl">
//         {/* Animated Header */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white uppercase font-serif tracking-wider mb-2">
//           Today's Special
//           </h2>
//           <motion.p 
//             className="text-amber-500 italic text-xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//            Fresh and delicious
//           </motion.p>
//         </motion.div>

//         {/* Four Featured Boxes with Staggered Animation */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.15
//               }
//             }
//           }}
//         >
//           {menuItems.map((item, index) => (
//             <motion.div 
//               key={index}
//               variants={{
//                 hidden: { y: 50, opacity: 0 },
//                 visible: { 
//                   y: 0, 
//                   opacity: 1,
//                   transition: {
//                     type: "spring",
//                     stiffness: 100
//                   }
//                 }
//               }}
//               whileHover={{ 
//                 y: -10,
//                 transition: { type: "spring", stiffness: 300 }
//               }}
//               className=" bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-lg
//                overflow-hidden relative border border-white/20"
//             >
//               {/* Food Image with Hover Effect */}
//               <div className="h-56 overflow-hidden relative">
//                 <motion.img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                   initial={{ scale: 1 }}
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.5 }}
//                 />
//                 {/* Floating Badges */}
//                 <div className="absolute top-3 right-3 flex gap-2">
//                   {item.popular && (
//                     <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md animate-pulse">
//                       Popular
//                     </span>
//                   )}
//                   {item.spicy && (
//                     <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                       Spicy
//                     </span>
//                   )}
//                   {item.premium && (
//                     <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                       Premium
//                     </span>
//                   )}
//                 </div>
//               </div>
              
//               {/* Food Info */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                   <span className="text-xl font-bold text-amber-500">{item.price}</span>
//                 </div>
                
//                 <p className="text-white text-sm mb-4">{item.description}</p>
                
//                 <motion.button
//                   className="w-full flex items-center justify-center gap-2
//                    bg-amber-500 hover:bg-amber-500 text-white py-3 px-4 rounded-lg font-medium transition group"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <FiShoppingCart className="group-hover:scale-110 transition" />
//                   <span>Add to Order</span>
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Full Menu Button with Arrow Animation */}
//         <motion.div 
//           className="text-center mt-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <button className="group flex items-center justify-center mx-auto 
//           bg-transparent border-2 border-[#da9360]0 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
//             <span>View Full Menu</span>
//             <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SpecialsCard;

// --------------------------



import React from 'react';
import bgImage from "../image/bg3.jpg";
import img from "../image/i1.jpg";
import img1 from "../image/i2.jpg";
import img2 from "../image/i3.jpg";
import img3 from "../image/i4.jpg";
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SpecialsCard = () => {
  const menuItems = [
    { 
      name: "Roasted Chicken", 
      price: "$55", 
      popular: true,
      description: "Herb-crusted free-range chicken with roasted vegetables",
      image: img
    },
    { 
      name: "Baked Crab Cheese", 
      price: "$66", 
      spicy: true,
      description: "Lump crab meat baked with three cheeses and spices",
      image: img1
    },
    { 
      name: "Foie Gras", 
      price: "$99", 
      premium: true,
      description: "Seared duck liver with black truffle reduction",
      image: img2
    },
    { 
      name: "Filet Mignon", 
      price: "$89", 
      premium: true,
      description: "8oz grass-fed beef with red wine demi-glace",
      image: img3
    }
  ];

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase font-serif tracking-wider mb-2">
            Today's Special
          </h2>
          <motion.p 
            className="text-amber-500 italic text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Fresh and delicious
          </motion.p>
        </motion.div>

        {/* Responsive Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden relative border border-white/20"
            >
              {/* Food Image with Hover Effect */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Floating Badges */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-1 sm:gap-2">
                  {item.popular && (
                    <span className="inline-block bg-green-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-md animate-pulse">
                      Popular
                    </span>
                  )}
                  {item.spicy && (
                    <span className="inline-block bg-red-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-md">
                      Spicy
                    </span>
                  )}
                  {item.premium && (
                    <span className="inline-block bg-amber-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-md">
                      Premium
                    </span>
                  )}
                </div>
              </div>
              
              {/* Food Info */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-lg sm:text-xl font-bold text-amber-500">{item.price}</span>
                </div>
                
                <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">{item.description}</p>
                
                <motion.button
                  className="w-full flex items-center justify-center gap-2
                   bg-amber-500 hover:bg-amber-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiShoppingCart className="group-hover:scale-110 transition" />
                  <span className="text-sm sm:text-base">Add to Order</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Menu Button with Arrow Animation */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="group flex items-center justify-center mx-auto 
          bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300">
            <span>View Full Menu</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialsCard;


// import React from 'react';
// import bgImage from "../image/bg3.jpg";
// import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';

// const SpecialsCard = () => {
//   const menuItems = [
//     { 
//       name: "Roasted Chicken", 
//       price: "$55", 
//       popular: true,
//       description: "Succulent free-range chicken roasted with herbs",
//       image: "/images/chicken.jpg"
//     },
//     { 
//       name: "Baked Crab Cheese", 
//       price: "$66", 
//       spicy: true,
//       description: "Fresh crab meat baked with three cheeses",
//       image: "/images/crab.jpg"
//     },
//     { 
//       name: "Foie Gras", 
//       price: "$99", 
//       premium: true,
//       description: "Premium duck liver with truffle reduction",
//       image: "/images/foie-gras.jpg"
//     },
//   ];

//   return (
//     <div 
//       className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       {/* Dark overlay with subtle animation */}
//       <motion.div 
//         className="absolute inset-0 bg-black bg-opacity-50"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         transition={{ duration: 1 }}
//       />
      
//       <div className="relative z-10 w-full max-w-6xl">
//         {/* Animated Header */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white uppercase font-serif tracking-wider mb-2">
//             Today's Special
//           </h2>
//           <motion.p 
//             className="text-amber-200 italic text-xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             Fresh and delicious
//           </motion.p>
//         </motion.div>

//         {/* Three Featured Boxes with Staggered Animation */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.2
//               }
//             }
//           }}
//         >
//           {menuItems.map((item, index) => (
//             <motion.div 
//               key={index}
//               variants={{
//                 hidden: { y: 50, opacity: 0 },
//                 visible: { 
//                   y: 0, 
//                   opacity: 1,
//                   transition: {
//                     type: "spring",
//                     stiffness: 100
//                   }
//                 }
//               }}
//               whileHover={{ 
//                 y: -10,
//                 transition: { type: "spring", stiffness: 300 }
//               }}
//               className="bg-white rounded-xl shadow-xl overflow-hidden relative"
//             >
//               {/* Food Image with Hover Effect */}
//               <div className="h-48 overflow-hidden relative">
//                 <img 
//                   src={item.image} 
//                   alt={item.name}
//                   className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
//                 />
//                 {/* Floating Badges */}
//                 <div className="absolute top-3 right-3 flex gap-2">
//                   {item.popular && (
//                     <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                       Popular
//                     </span>
//                   )}
//                   {item.spicy && (
//                     <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                       Spicy
//                     </span>
//                   )}
//                   {item.premium && (
//                     <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
//                       Premium
//                     </span>
//                   )}
//                 </div>
//               </div>
              
//               {/* Food Info */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
//                   <span className="text-xl font-bold text-amber-600">{item.price}</span>
//                 </div>
                
//                 <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
//                 <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition group">
//                   <FiShoppingCart className="group-hover:scale-110 transition" />
//                   <span>Add to Order</span>
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Full Menu Button with Arrow Animation */}
//         <motion.div 
//           className="text-center mt-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <button className="group flex items-center justify-center mx-auto bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition">
//             <span>View Full Menu</span>
//             <FiArrowRight className="ml-2 group-hover:translate-x-1 transition" />
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SpecialsCard;