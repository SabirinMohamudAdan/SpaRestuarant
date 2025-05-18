// import React from 'react';
// import img from "../image/bg2.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';

// // Enhanced Animation Variants
// const slideIn = {
//   hidden: { x: 100, opacity: 0 },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15
//     }
//   },
//   exit: {
//     x: -100,
//     opacity: 0,
//     transition: { duration: 0.3 }
//   }
// };

// const buttonAnim = {
//   rest: { scale: 1 },
//   hover: { 
//     y: -3,
//     scale: 1.05,
//     transition: { 
//       type: "spring",
//       stiffness: 400,
//       damping: 10
//     }
//   },
//   tap: { 
//     y: 2,
//     scale: 0.98,
//     transition: { duration: 0.1 }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "DELICIOUS FOOD",
//     "GREAT EXPERIENCE",
//     "PREMIUM QUALITY"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-rotate every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   return (
//     <>
//       <Header/>
      
//       <div className="relative h-screen w-full overflow-hidden">
//         <img 
//           src={img} 
//           alt="Background" 
//           className="absolute inset-0 w-full h-full object-cover"
//         />
        
//         {/* Dark overlay for better text contrast */}
//         <div className="absolute inset-0 bg-black/30"></div>
        
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="text-center px-4 w-full max-w-3xl">
//             {/* Slider Container with Perfectly Positioned Arrows */}
//             <div className="h-32 mb-4 relative flex items-center justify-center px-16">
//               <AnimatePresence mode='wait'>
//                 <motion.h1
//                   key={currentIndex}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={slideIn}
//                   className="text-white text-4xl md:text-5xl font-bold tracking-wide whitespace-nowrap"
//                 >
//                   {texts[currentIndex]}
//                 </motion.h1>
//               </AnimatePresence>

//               {/* Enhanced Navigation Arrows */}
//               <motion.button 
//                 onClick={goToPrev}
//                 className="absolute left-4 text-white z-10"
//                 aria-label="Previous slide"
//                 whileHover={{ scale: 1.3, x: -3 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FiChevronLeft size={28} className="drop-shadow-md"/>
//               </motion.button>
              
//               <motion.button 
//                 onClick={goToNext}
//                 className="absolute right-4 text-white z-10"
//                 aria-label="Next slide"
//                 whileHover={{ scale: 1.3, x: 3 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <FiChevronRight size={28} className="drop-shadow-md"/>
//               </motion.button>
//             </div>

//             {/* Dots Indicator */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="flex justify-center mt-6 space-x-3"
//             >
//               {texts.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#da9360]' : 'bg-white/50'}`}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.8 }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </motion.div>

//             {/* Animated Paragraph */}
//             <motion.p
//               className="text-[#da9360] text-lg mt-2 mb-8"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               Enjoy the real fresh food from our chef
//             </motion.p>
            
//             {/* Supercharged Button Animations */}
//             <motion.div 
//               className="flex justify-center gap-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: { staggerChildren: 0.1 }
//                 }
//               }}
//             >
//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 whileHover="hover"
//                 whileTap="tap"
//                 variants={buttonAnim}
//                 className="relative bg-transparent text-white px-8 py-3 border-2 border-white rounded-full group overflow-hidden"
//               >
//                 <span className="relative z-10 font-medium">Book Now</span>
//                 <motion.span
//                   className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 origin-center"
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
              
//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 whileHover={{
//                   ...buttonAnim.hover,
//                   backgroundColor: "#c47e4a",
//                   boxShadow: "0 5px 15px rgba(218, 147, 96, 0.4)"
//                 }}
//                 whileTap={buttonAnim.tap}
//                 className="relative bg-[#da9360] text-white px-8 py-3 rounded-full overflow-hidden font-medium"
//               >
//                 <span className="relative z-10">View Menu</span>
//                 <motion.span
//                   className="absolute inset-0 bg-[#c47e4a] rounded-full scale-0 hover:scale-100 origin-center"
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;



// import React from 'react';
// import img from "../image/bg2.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';

// // Slower Animation Variants
// const slideIn = {
//   hidden: { x: 100, opacity: 0 },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 50,  // Softer spring
//       damping: 15,
//       duration: 1.2   // Longer duration
//     }
//   },
//   exit: {
//     x: -100,
//     opacity: 0,
//     transition: { 
//       duration: 0.8   // Slower exit
//     }
//   }
// };

// const buttonAnim = {
//   rest: { scale: 1 },
//   hover: { 
//     y: -3,
//     scale: 1.05,
//     transition: { 
//       type: "spring",
//       stiffness: 300,  // Softer spring
//       damping: 15,
//       duration: 0.8    // Longer duration
//     }
//   },
//   tap: { 
//     y: 2,
//     scale: 0.98,
//     transition: { 
//       duration: 0.3    // Slightly slower tap
//     }
//   }
// };

// // New slow fade variant for paragraph
// const slowFade = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1.5,
//       ease: "easeOut"
//     }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "EXQUISITE ATMOSPHERE"
   
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Slower auto-rotation (4 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   return (
//     <>
//       <Header/>
      
//       <div className="relative h-screen w-full overflow-hidden">
//         <img 
//           src={img} 
//           alt="Background" 
//           className="absolute inset-0 w-full h-full object-cover"
//         />
        
//         <div className="absolute inset-0 bg-black/30"></div>
        
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="text-center px-4 w-full max-w-3xl">
//             {/* Slider Container */}
//             <div className="h-32 mb-4 relative flex items-center justify-center px-16">
//               <AnimatePresence mode='wait'>
//                 <motion.h1
//                   key={currentIndex}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={slideIn}
//                   className="text-white text-4xl md:text-5xl font-bold tracking-wide whitespace-nowrap"
//                 >
//                   {texts[currentIndex]}
//                 </motion.h1>
//               </AnimatePresence>

//               {/* Navigation Arrows */}
//               <motion.button 
//                 onClick={goToPrev}
//                 className="absolute left-4 text-white z-10"
//                 aria-label="Previous slide"
//                 whileHover={{ scale: 1.3, x: -3 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <FiChevronLeft size={28} className="drop-shadow-md"/>
//               </motion.button>
              
//               <motion.button 
//                 onClick={goToNext}
//                 className="absolute right-4 text-white z-10"
//                 aria-label="Next slide"
//                 whileHover={{ scale: 1.3, x: 3 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <FiChevronRight size={28} className="drop-shadow-md"/>
//               </motion.button>
//             </div>

//             {/* Dots Indicator */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 1 }}
//               className="flex justify-center mt-6 space-x-3"
//             >
//               {texts.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#da9360]' : 'bg-white/50'}`}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.8 }}
//                   transition={{ duration: 0.5 }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </motion.div>

//             {/* Slower Animated Paragraph */}
//             <motion.p
//               className="text-[#da9360] text-lg mt-2 mb-8"
//               initial="hidden"
//               animate="visible"
//               variants={slowFade}
//               transition={{ delay: 0.8 }}
//             >
//               Enjoy the real fresh food from our chef
//             </motion.p>
            
//             {/* Slower Button Animations */}
//             <motion.div 
//               className="flex justify-center gap-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: { 
//                     staggerChildren: 0.2,
//                     delayChildren: 1.0
//                   }
//                 }
//               }}
//             >
//               <motion.button
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 whileHover="hover"
//                 whileTap="tap"
//                 variants={buttonAnim}
//                 className="relative bg-transparent text-white px-8 py-3 border-2 border-white rounded-full group overflow-hidden"
//                 transition={{ duration: 0.8 }}
//               >
//                 <span className="relative z-10 font-medium">Book Now</span>
//                 <motion.span
//                   className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 origin-center"
//                   transition={{ duration: 0.8 }}
//                 />
//               </motion.button>
              
//               <motion.button
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 whileHover={{
//                   ...buttonAnim.hover,
//                   backgroundColor: "#c47e4a",
//                   boxShadow: "0 5px 15px rgba(218, 147, 96, 0.4)"
//                 }}
//                 whileTap={buttonAnim.tap}
//                 className="relative bg-[#da9360] text-white px-8 py-3 rounded-full overflow-hidden font-medium"
//                 transition={{ duration: 0.8 }}
//               >
//                 <span className="relative z-10">View Menu</span>
//                 <motion.span
//                   className="absolute inset-0 bg-[#c47e4a] rounded-full scale-0 hover:scale-100 origin-center"
//                   transition={{ duration: 0.8 }}
//                 />
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;


// import React from 'react';
// import img from "../image/bg3.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';

// // Professional Animation Variants
// const slideIn = {
//   hidden: { 
//     x: 80, 
//     opacity: 0,
//     filter: 'blur(5px)'
//   },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       type: "spring",
//       stiffness: 60,
//       damping: 20,
//       mass: 1.5,
//       duration: 1.5
//     }
//   },
//   exit: {
//     x: -80,
//     opacity: 0,
//     filter: 'blur(5px)',
//     transition: { 
//       duration: 1,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// const buttonAnim = {
//   rest: { 
//     scale: 1,
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
//   },
//   hover: { 
//     y: -4,
//     scale: 1.03,
//     boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
//     transition: { 
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//       duration: 0.5
//     }
//   },
//   tap: { 
//     y: 1,
//     scale: 0.98,
//     transition: { 
//       duration: 0.2
//     }
//   }
// };

// const fadeUp = {
//   hidden: { 
//     opacity: 0, 
//     y: 40,
//     filter: 'blur(2px)'
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: 'blur(0px)',
//     transition: {
//       duration: 1.2,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "EXQUISITE ATMOSPHERE"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-rotation with variable timing
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, currentIndex === 0 ? 4500 : 5500); // Longer display for second slide
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   return (
//     <>
//       <Header/>
      
//       <div className="relative h-screen w-full overflow-hidden">
//         <motion.img 
//           src={img} 
//           alt="Background" 
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2, ease: "easeOut" }}
//         />
        
//         <motion.div 
//           className="absolute inset-0 bg-black/30"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.3 }}
//           transition={{ duration: 1.5 }}
//         />
        
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="text-center px-4 w-full max-w-3xl">
//             {/* Slider Container */}
//             <div className="h-32 mb-4 relative flex items-center justify-center px-16">
//               <AnimatePresence mode='wait'>
//                 <motion.h1
//                   key={currentIndex}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={slideIn}
//                   className="text-white text-7xl md:text-5xl font-bold tracking-wide
//                    whitespace-nowrap"
//                 >
//                   {texts[currentIndex]}
//                 </motion.h1>
//               </AnimatePresence>

//               {/* Navigation Arrows */}
//               <motion.button 
//                 onClick={goToPrev}
//                 className="absolute left-10 text-white z-10"
//                 aria-label="Previous slide"
//                 whileHover={{ 
//                   scale: 1.3, 
//                   x: -3,
//                   transition: { type: "spring", stiffness: 500 }
//                 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 400 }}
//               >
//                 <FiChevronLeft size={28} className="drop-shadow-lg"/>
//               </motion.button>
              
//               <motion.button 
//                 onClick={goToNext}
//                 className="absolute right-4 text-white z-10"
//                 aria-label="Next slide"
//                 whileHover={{ 
//                   scale: 1.3, 
//                   x: 3,
//                   transition: { type: "spring", stiffness: 500 }
//                 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 400 }}
//               >
//                 <FiChevronRight size={28} className="drop-shadow-lg"/>
//               </motion.button>
//             </div>

//             {/* Dots Indicator */}
//             <motion.div 
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: { staggerChildren: 0.1 }
//                 }
//               }}
//               className="flex justify-center mt-6 space-x-3"
//             >
//               {texts.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#da9360]' : 'bg-white/50'}`}
//                   variants={fadeUp}
//                   whileHover={{ 
//                     scale: 1.3,
//                     backgroundColor: currentIndex === index ? '#da9360' : '#ffffff80'
//                   }}
//                   whileTap={{ scale: 0.8 }}
//                   transition={{ type: "spring" }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </motion.div>

//             {/* Animated Paragraph */}
//             <motion.p
//               className="text-[#da9360] text-2xl mt-2 mb-8"
//               initial="hidden"
//               animate="visible"
//               variants={fadeUp}
//               transition={{ delay: 0.4 }}
//             >
//               Enjoy the real fresh food from our chef
//             </motion.p>
            
//             {/* Professional Button Animations */}
//             <motion.div 
//               className="flex justify-center gap-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: { 
//                     staggerChildren: 0.15,
//                     delayChildren: 0.6
//                   }
//                 }
//               }}
//             >
//               <motion.button
//                 variants={fadeUp}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className="relative bg-transparent text-white px-8 py-3
//                  border-2 border-white rounded-full group overflow-hidden"
//               >
//                 <span className="relative z-10 font-medium">Book Now</span>
//                 <motion.span
//                   className="absolute inset-0 bg-black rounded-full scale-0 
//                   group-hover:scale-100 origin-center"
//                   transition={{ 
//                     duration: 0.6,
//                     ease: "easeOut"
//                   }}
//                 />
//               </motion.button>
              
//               <motion.button
//                 variants={fadeUp}
//                 whileHover={{
//                   ...buttonAnim.hover,
//                   backgroundColor: "#c47e4a",
//                   boxShadow: "0 8px 20px rgba(218, 147, 96, 0.5)"
//                 }}
//                 whileTap={buttonAnim.tap}
//                 className="relative bg-[#da9360] text-white px-8 py-3 rounded-full overflow-hidden font-medium"
//               >
//                 <span className="relative z-10">View Menu</span>
//                 <motion.span
//                   className="absolute inset-0 bg-[#c47e4a] rounded-full scale-0 hover:scale-100 origin-center"
//                   transition={{ 
//                     duration: 0.6,
//                     ease: "easeOut"
//                   }}
//                 />
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;



// import React from 'react';
// import img from "../image/bg3.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';

// // Unified Animation Variants
// const slideIn = {
//   hidden: { 
//     x: 80, 
//     opacity: 0,
//     filter: 'blur(5px)'
//   },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       type: "spring",
//       stiffness: 60,
//       damping: 20,
//       mass: 1.5,
//       duration: 1.5
//     }
//   },
//   exit: {
//     x: -80,
//     opacity: 0,
//     filter: 'blur(5px)',
//     transition: { 
//       duration: 1,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// const unifiedButtonAnim = {
//   rest: { 
//     scale: 1,
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     y: 0
//   },
//   hover: { 
//     y: -5,
//     scale: 1.05,
//     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
//     transition: { 
//       type: "spring",
//       stiffness: 500,
//       damping: 15,
//       duration: 0.4
//     }
//   },
//   tap: { 
//     y: 2,
//     scale: 0.98,
//     transition: { 
//       duration: 0.15
//     }
//   }
// };

// const fadeUp = {
//   hidden: { 
//     opacity: 0, 
//     y: 40,
//     filter: 'blur(2px)'
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: 'blur(0px)',
//     transition: {
//       duration: 1.2,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "EXQUISITE ATMOSPHERE"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, currentIndex === 0 ? 4500 : 5500);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   return (
//     <>
//       <Header/>
      
//       <div className="relative h-screen w-full overflow-hidden">
//         <motion.img 
//           src={img} 
//           alt="Background" 
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2, ease: "easeOut" }}
//         />
        
//         <motion.div 
//           className="absolute inset-0 bg-black/30"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.3 }}
//           transition={{ duration: 1.5 }}
//         />
        
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="text-center px-4 w-full max-w-3xl">
//             <div className="h-32 mb-4 relative flex items-center justify-center px-16">
//               <AnimatePresence mode='wait'>
//                 <motion.h1
//                   key={currentIndex}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={slideIn}
//                   className="text-white text-5xl md:text-6xl font-bold tracking-wide whitespace-nowrap"
//                 >
//                   {texts[currentIndex]}
//                 </motion.h1>
//               </AnimatePresence>

//               <motion.button 
//                 onClick={goToPrev}
//                 className="absolute left-4 md:left-10 text-white z-10"
//                 aria-label="Previous slide"
//                 whileHover="hover"
//                 whileTap="tap"
//                 variants={unifiedButtonAnim}
//               >
//                 <FiChevronLeft size={32} className="drop-shadow-lg"/>
//               </motion.button>
              
//               <motion.button 
//                 onClick={goToNext}
//                 className="absolute right-4 md:right-10 text-white z-10"
//                 aria-label="Next slide"
//                 whileHover="hover"
//                 whileTap="tap"
//                 variants={unifiedButtonAnim}
//               >
//                 <FiChevronRight size={32} className="drop-shadow-lg"/>
//               </motion.button>
//             </div>

//             <motion.div 
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: { staggerChildren: 0.1 }
//                 }
//               }}
//               className="flex justify-center mt-6 space-x-10"
//             >
//               {texts.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#da9360]' : 'bg-white/50'}`}
//                   variants={fadeUp}
//                   whileHover="hover"
//                   whileTap="tap"
//                   custom={0.5}
//                 />
//               ))}
//             </motion.div>

//             <motion.p
//               className="text-[#da9360] text-xl md:text-2xl mt-4 mb-10"
//               initial="hidden"
//               animate="visible"
//               variants={fadeUp}
//               transition={{ delay: 0.4 }}
//             >
//               Enjoy the real fresh food from our chef
//             </motion.p>
            
//             <motion.div 
//               className="flex justify-center gap-8"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: { 
//                     staggerChildren: 0.15,
//                     delayChildren: 0.6
//                   }
//                 }
//               }}
//             >
//               <motion.button
//                 variants={fadeUp}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className="relative bg-transparent text-white px-10 py-4 
//                 border-2 border-white rounded-full group overflow-hidden text-lg"
//               >
//                 <span className="relative z-10 font-medium">Book Now</span>
//                 <motion.span
//                   className="absolute inset-0 bg-black rounded-full scale-0
//                    group-hover:scale-100 origin-center"
//                   transition={{ 
//                     duration: 0.5,
//                     ease: "easeOut"
//                   }}
//                 />
//               </motion.button>
              
//               <motion.button
//                 variants={fadeUp}
//                 whileHover={{
//                   ...unifiedButtonAnim.hover,
//                   backgroundColor: "#c47e4a",
//                   boxShadow: "0 8px 20px rgba(218, 147, 96, 0.5)"
//                 }}
//                 whileTap={unifiedButtonAnim.tap}
//                 className="relative bg-[#da9360] text-white px-10 py-4 rounded-full overflow-hidden font-medium text-lg"
//               >
//                 <span className="relative z-10">View Menu</span>
//                 <motion.span
//                   className="absolute inset-0 bg-[#c47e4a] rounded-full scale-0 hover:scale-100 origin-center"
//                   transition={{ 
//                     duration: 0.5,
//                     ease: "easeOut"
//                   }}
//                 />
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;


// import React from 'react';
// import img from "../image/bg3.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';
// import Service from './Service';

// // Animation Variants
// const slideIn = {
//   hidden: { 
//     x: 80, 
//     opacity: 0,
//     filter: 'blur(5px)'
//   },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       type: "spring",
//       stiffness: 60,
//       damping: 20,
//       mass: 1.5,
//       duration: 1.5
//     }
//   },
//   exit: {
//     x: -80,
//     opacity: 0,
//     filter: 'blur(5px)',
//     transition: { 
//       duration: 1,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// const buttonAnim = {
//   rest: { 
//     scale: 1,
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
//   },
//   hover: { 
//     y: -4,
//     scale: 1.03,
//     boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
//     transition: { 
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//       duration: 0.5
//     }
//   },
//   tap: { 
//     y: 1,
//     scale: 0.98,
//     transition: { 
//       duration: 0.2
//     }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "EXQUISITE ATMOSPHERE"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, currentIndex === 0 ? 4500 : 5500);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   return (
//     <>
//       <Header/>
      
//       <div className="relative h-screen w-full overflow-hidden">
//         <motion.img 
//           src={img} 
//           alt="Background" 
//           className="absolute inset-0 w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 2, ease: "easeOut" }}
//         />
        
//         <motion.div 
//           className="absolute inset-0 bg-black/30"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.3 }}
//           transition={{ duration: 1.5 }}
//         />
        
//         <div className="relative z-10 h-full flex items-center justify-center">
//           <div className="text-center px-4 w-full max-w-5xl">
//             {/* Slider Container with Extra Wide Spacing */}
//             <div className="relative flex items-center justify-between w-full">
//               {/* Left Arrow - Positioned very left */}
//               <motion.button 
//                 onClick={goToPrev}
//                 className="text-white z-10"
//                 aria-label="Previous slide"
//                 whileHover={{ 
//                   scale: 1.3, 
//                   x: -5,
//                   transition: { type: "spring", stiffness: 500 }
//                 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 400 }}
//                 style={{ marginLeft: '-6rem' }} // Pushed further left
//               >
//                 <FiChevronLeft size={28} className="drop-shadow-lg"/>
//               </motion.button>
              
//               {/* Text Content - Made smaller */}
//               <div className="h-28 flex items-center justify-center px-4 mx-4 flex-1">
//                 <AnimatePresence mode='wait'>
//                   <motion.h1
//                     key={currentIndex}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={slideIn}
//                     className="text-white text-5xl md:text-7xl font-bold tracking-wide whitespace-nowrap" // Smaller text size
//                   >
//                     {texts[currentIndex]}
//                   </motion.h1>
//                 </AnimatePresence>
//               </div>
              
//               {/* Right Arrow - Positioned very right */}
//               <motion.button 
//                 onClick={goToNext}
//                 className="text-white z-10"
//                 aria-label="Next slide"
//                 whileHover={{ 
//                   scale: 1.3, 
//                   x: 5,
//                   transition: { type: "spring", stiffness: 500 }
//                 }}
//                 whileTap={{ scale: 0.9 }}
//                 transition={{ type: "spring", stiffness: 400 }}
//                 style={{ marginRight: '-6rem' }} // Pushed further right
//               >
//                 <FiChevronRight size={28} className="drop-shadow-lg"/>
//               </motion.button>
//             </div>

//             {/* Dots Indicator */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 1 }}
//               className="flex justify-center mt-6 space-x-3"
//             >
//               {texts.map((_, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#da9360]' : 'bg-white/50'}`}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.8 }}
//                   transition={{ duration: 0.5 }}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </motion.div>

//             {/* Animated Paragraph */}
//             <motion.p
//               className="text-[#da9360] text-2xl mt-2 mb-8"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               Enjoy the real fresh food from our chef
//             </motion.p>
            
//             {/* Button Animations */}
//             <motion.div 
//               className="flex justify-center gap-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: { 
//                     staggerChildren: 0.15,
//                     delayChildren: 0.6
//                   }
//                 }
//               }}
//             >
//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 whileHover="hover"
//                 whileTap="tap"
                
//                 variants={buttonAnim}
//                 className="relative bg-transparent text-white px-8 py-3 border-2
//                  border-white rounded-full group overflow-hidden "
//               >
//                 <span className="relative z-10 font-medium">Book Now</span>
//                 <motion.span
//                   className="absolute inset-0 bg-black rounded-full scale-0
//                    group-hover:scale-100 origin-center"
//                   transition={{ duration: 0.3 }}
                  
//                 />
//               </motion.button>
              
//               <motion.button
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 whileHover={{
//                   ...buttonAnim.hover,
//                   backgroundColor: "#c47e4a",
//                   boxShadow: "0 5px 15px rgba(218, 147, 96, 0.4)"
//                 }}
//                 whileTap={buttonAnim.tap}
//                 className="relative bg-[#da9360] text-white px-8 py-3 rounded-full overflow-hidden font-medium"
//               >
//                 <span className="relative z-10">View Menu</span>
//                 <motion.span
//                   className="absolute inset-0 bg-[#c47e4a] rounded-full scale-0 hover:scale-100 origin-center"
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>

//   {/* Services Section */}
//   <div className=' bg-black  w-full    pt-[200px] '>
//  <p className='text-white'>Lorem ipsum dolor sit.</p>

//  <div className='bg-black h-[300px] w-[300px] border border-[#da9360]'>
    
//  </div>
//  </div>
//       </div>
//     </>
//   );
// }

// export default Home;











// import React from 'react';
// import bgImage from "../image/bg3.jpg"; // Background image
// import img1 from "../image/s6.jpg";
// import img2 from "../image/s5.jpg";
// import img3 from "../image/s4.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';
// import Service from './Service';
// import SpecialsCard from './SpcialSer';
// import MenuSection from './Menus';
// import ReservationForm from './Booking';
// import EventsSection from './Events';
// import StatsSection from './Stats';
// import Footer from '../components/Footer';

// // Animation Variants
// const slideIn = {
//   hidden: { 
//     x: 80, 
//     opacity: 0,
//     filter: 'blur(5px)'
//   },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       type: "spring",
//       stiffness: 60,
//       damping: 20,
//       mass: 1.5,
//       duration: 1.5
//     }
//   },
//   exit: {
//     x: -80,
//     opacity: 0,
//     filter: 'blur(5px)',
//     transition: { 
//       duration: 1,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// const serviceItem = {
//   hidden: { y: 50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

// const imageHover = {
//   rest: { scale: 1, transition: { duration: 0.3 } },
//   hover: { 
//     scale: 1.05,
//     transition: { 
//       duration: 0.4,
//       ease: [0.25, 0.1, 0.25, 1]
//     }
//   }
// };

// const buttonAnim = {
//   rest: { 
//     scale: 1,
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
//   },
//   hover: { 
//     y: -3,
//     scale: 1.02,
//     boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//     transition: { 
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//       duration: 0.4
//     }
//   },
//   tap: { 
//     y: 1,
//     scale: 0.98,
//     transition: { 
//       duration: 0.15
//     }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "EXQUISITE ATMOSPHERE",
//     "Cunta macaan iyo Jawi dagan"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, currentIndex === 0 ? 4500 : 5500);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   const services = [
//     {
//       id: 1,
//       title: "Fine Dining",
//       description: "Experience our exquisite tasting menus prepared by award-winning chefs.",
//       image: img1
//     },
//     {
//       id: 2,
//       title: "Private Events",
//       description: "Host your special occasions in our elegant private dining rooms.",
//       image: img2
//     },
//     {
//       id: 3,
//       title: "Drink",
//       description: "Discover perfect drink matches curated by our sommeliers.",
//       image: img3
//     }
//   ];

//   return (
//     <>
//       <Header/>
      
//       <div className="relative w-full min-h-screen">
//         {/* Hero Section with Background Image */}
//         <div className="h-screen relative overflow-hidden">
//           {/* Optimized Background Image */}
//           <motion.div 
//             className="absolute inset-0 w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//           >
//             <img 
//               src={bgImage} 
//               alt="Restaurant Background" 
//               className="w-full h-full object-cover"
//               loading="eager"
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             />
//             <div className="absolute inset-0 bg-black/30"></div>
//           </motion.div>
          
//           <div className="relative z-10 h-full flex items-center justify-center">
//             <div className="text-center px-4 w-full max-w-5xl">
//               {/* Slider Container */}
//               <div className="relative flex items-center justify-between w-full">
//                 <motion.button 
//                   onClick={goToPrev}
//                   className="text-white z-10"
//                   aria-label="Previous slide"
//                   whileHover={{ 
//                     scale: 1.2,
//                     x: -3,
//                     transition: { type: "spring", stiffness: 500 }
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                   style={{ marginLeft: '-6rem' }}
//                 >
//                   <FiChevronLeft size={24} className="drop-shadow-lg"/>
//                 </motion.button>
                
//                 <div className="h-28 flex items-center justify-center px-4 mx-4 flex-1">
//                   <AnimatePresence mode='wait'>
//                     <motion.h1
//                       key={currentIndex}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       variants={slideIn}
//                       className="text-white text-4xl md:text-6xl font-bold tracking-wide whitespace-nowrap"
//                     >
//                       {texts[currentIndex]}
//                     </motion.h1>
//                   </AnimatePresence>
//                 </div>
                
//                 <motion.button 
//                   onClick={goToNext}
//                   className="text-white z-10"
//                   aria-label="Next slide"
//                   whileHover={{ 
//                     scale: 1.2,
//                     x: 3,
//                     transition: { type: "spring", stiffness: 500 }
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                   style={{ marginRight: '-6rem' }}
//                 >
//                   <FiChevronRight size={24} className="drop-shadow-lg"/>
//                 </motion.button>
//               </div>

//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 1 }}
//                 className="flex justify-center mt-6 space-x-3"
//               >
//                 {texts.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? 
//                       'bg-amber-500' : 'bg-white/50'}`}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ duration: 0.3 }}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </motion.div>

//               <motion.p
//                 className="text-amber-500 text-2xl mt-2 mb-6 font-normal  "
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.4 }}
//               >
//                 Enjoy the real fresh food from our chef
//               </motion.p>
              
//               <motion.div 
//                 className="flex justify-center gap-4 mt-0"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: {
//                     transition: { 
//                       staggerChildren: 0.1,
//                       delayChildren: 0.5
//                     }
//                   }
//                 }}
//               >
//                 <motion.button
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   whileHover="hover"
//                   whileTap="tap"
//                   variants={buttonAnim}
//                   className="relative bg-transparent text-white  px-10 py-4 
//                    border-2 border-white rounded-full group overflow-hidden text-xl
//                     mt-8 "
//                 >
//                   <span className="relative z-10 font-medium">Book Now</span>
//                   <motion.span
//                     className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-100 origin-center"
//                     transition={{ duration: 0.25 }}
//                   />
//                 </motion.button>
                
//                 <motion.button
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   whileHover={{
//                     ...buttonAnim.hover,
//                     backgroundColor: "#c47e4a",
//                     boxShadow: "0 6px 12px rgba(218, 147, 96, 0.3)"
//                   }}
//                   whileTap={buttonAnim.tap}
//                   className="relative bg-amber-500 text-white px-10 py-4 
//                    rounded-full overflow-hidden font-medium text-xl mt-8"
//                 >
//                   <span className="relative z-10">View Menu</span>
//                   <motion.span 
//                     className="absolute inset-0 bg-amber-500 rounded-full scale-0 hover:scale-100 origin-center"
//                     transition={{ duration: 0.25 }}
//                   />
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Services Section */}
//         <div className="relative z-20 w-full bg-black pt-24 pb-20">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <p className="text-amber-500 text-sm uppercase tracking-widest mb-2">What We Offer</p>
//               <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">Our Premium Services</h2>
//             </motion.div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   variants={serviceItem}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <motion.div
//                     className="h-[500px] border border-[#da9360]/30 rounded-lg
//                      bg-black/80 p-6 overflow-hidden flex flex-col"
//                     whileHover={{ 
//                       borderColor: "#da9360",
//                       boxShadow: "0 10px 25px rgba(218, 147, 96, 0.2)",
//                       transition: { duration: 0.3 }
//                     }}
//                   >
//                     <motion.div
//                       className="flex-1 overflow-hidden rounded-lg mb-6"
//                       initial="rest"
//                       whileHover="hover"
//                     >
//                       <motion.img 
//                         src={service.image} 
//                         alt={service.title}
//                         className="w-full h-full object-cover"
//                         variants={imageHover}
//                       />
//                     </motion.div>
//                     <h3 className="text-amber-500 text-xl md:text-2xl font-medium mb-4 group-hover:text-white transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-white/80 text-sm md:text-base mb-6 group-hover:text-white transition-colors duration-300">
//                       {service.description}
//                     </p>
//                     <motion.button
//                       className="mt-auto w-fit text-amber-500  text-sm border-b border-transparent hover:border-[#da9360] pb-1 transition-all duration-300"
//                       whileHover={{ x: 5 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Learn more →
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div className='mt-20'>
//             <Service/>
//           </div>


          
//         </div>

        
//             <SpecialsCard/>
//            <MenuSection/>
//            <ReservationForm/>
//            <EventsSection/>
//            <StatsSection/>
//            <Footer/>
//       </div>
//     </>
//   );
// }

// export default Home;


import React from 'react';
import bgImage from "../image/bg3.jpg"; // Background image
import img1 from "../image/s6.jpg";
import img2 from "../image/s5.jpg";
import img3 from "../image/s4.jpg";
import Header from '../components/Header';
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import { useState, useEffect } from 'react';
import Service from './Service';
import SpecialsCard from './SpcialSer';
import MenuSection from './Menus';
import ReservationForm from './Booking';
import EventsSection from './Event';
import StatsSection from './Stats';
import Footer from '../components/Footer';
import AboutUs from './About';

// Animation Variants
const slideIn = {
  hidden: { 
    x: 80, 
    opacity: 0,
    filter: 'blur(5px)'
  },
  visible: { 
    x: 0, 
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: -80,
    opacity: 0,
    filter: 'blur(5px)',
    transition: { 
      duration: 1,
      ease: [0.2, 0.8, 0.3, 1]
    }
  }
};

const serviceItem = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageHover = {
  rest: { scale: 1, transition: { duration: 0.3 } },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const buttonAnim = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    y: -3,
    scale: 1.02,
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10,
      duration: 0.4
    }
  },
  tap: { 
    y: 1,
    scale: 0.98,
    transition: { 
      duration: 0.15
    }
  }
};

function Home() {
  const texts = [
    "ENJOY YOUR DINNER",
    "EXQUISITE ATMOSPHERE",
    "Cunta macaan iyo Jawi dagan"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, currentIndex === 0 ? 4500 : 5500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
  };

  const services = [
    {
      id: 1,
      title: "Fine Dining",
      description: "Experience our exquisite tasting menus prepared by award-winning chefs.",
      image: img1
    },
    {
      id: 2,
      title: "Private Events",
      description: "Host your special occasions in our elegant private dining rooms.",
      image: img2
    },
    {
      id: 3,
      title: "Drink",
      description: "Discover perfect drink matches curated by our sommeliers.",
      image: img3
    }
  ];

  return (
    <>
      {/* <Header/> */}
      
      <div className="relative w-full min-h-screen">
        {/* Hero Section with Background Image */}
        <div className="h-screen relative overflow-hidden">
          {/* Optimized Background Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src={bgImage} 
              alt="Restaurant Background" 
              className="w-full h-full object-cover"
              loading="eager"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 w-full max-w-5xl">
              {/* Slider Container */}
              <div className="relative flex items-center justify-between w-full">
                {!isMobile && (
                  <motion.button 
                    onClick={goToPrev}
                    className="text-white z-10"
                    aria-label="Previous slide"
                    whileHover={{ 
                      scale: 1.2,
                      x: -3,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    style={{ marginLeft: '-6rem' }}
                  >
                    <FiChevronLeft size={24} className="drop-shadow-lg"/>
                  </motion.button>
                )}
                
                <div className="h-28 flex items-center justify-center px-4 mx-4 flex-1">
                  <AnimatePresence mode='wait'>
                    <motion.h1
                      key={currentIndex}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={slideIn}
                      className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide"
                    >
                      {texts[currentIndex]}
                    </motion.h1>
                  </AnimatePresence>
                </div>
                
                {!isMobile && (
                  <motion.button 
                    onClick={goToNext}
                    className="text-white z-10"
                    aria-label="Next slide"
                    whileHover={{ 
                      scale: 1.2,
                      x: 3,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    style={{ marginRight: '-6rem' }}
                  >
                    <FiChevronRight size={24} className="drop-shadow-lg"/>
                  </motion.button>
                )}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex justify-center mt-6 space-x-3"
              >
                {texts.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? 
                      'bg-amber-500' : 'bg-white/50'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>

              <motion.p
                className="text-amber-500 text-lg sm:text-xl md:text-2xl mt-2 mb-6 font-normal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Enjoy the real fresh food from our chef
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 mt-0"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { 
                      staggerChildren: 0.1,
                      delayChildren: 0.5
                    }
                  }
                }}
              >
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonAnim}
                  className="relative bg-transparent text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 
                   border-2 border-white rounded-full group overflow-hidden text-base sm:text-lg md:text-xl
                    mt-4 sm:mt-8"
                >
                  <span className="relative z-10 font-medium">Book Now</span>
                  <motion.span
                    className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-100 origin-center"
                    transition={{ duration: 0.25 }}
                  />
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    ...buttonAnim.hover,
                    backgroundColor: "#c47e4a",
                    boxShadow: "0 6px 12px rgba(218, 147, 96, 0.3)"
                  }}
                  whileTap={buttonAnim.tap}
                  className="relative bg-amber-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 
                   rounded-full overflow-hidden font-medium text-base sm:text-lg md:text-xl mt-4 sm:mt-8"
                >
                  <span className="relative z-10">View Menu</span>
                  <motion.span 
                    className="absolute inset-0 bg-amber-500 rounded-full scale-0 hover:scale-100 origin-center"
                    transition={{ duration: 0.25 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="relative z-20 w-full bg-black pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-widest mb-2">What We Offer</p>
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">Our Premium Services</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={serviceItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="h-[400px] sm:h-[450px] md:h-[500px] border border-[#da9360]/30 rounded-lg
                     bg-black/80 p-4 sm:p-6 overflow-hidden flex flex-col"
                    whileHover={{ 
                      borderColor: "#da9360",
                      boxShadow: "0 10px 25px rgba(218, 147, 96, 0.2)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className="flex-1 overflow-hidden rounded-lg mb-4 sm:mb-6"
                      initial="rest"
                      whileHover="hover"
                    >
                      <motion.img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        variants={imageHover}
                      />
                    </motion.div>
                    <h3 className="text-amber-500 text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-4 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                    <motion.button
                      className="mt-auto w-fit text-amber-500 text-xs sm:text-sm border-b border-transparent hover:border-[#da9360] pb-1 transition-all duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn more →
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className='mt-12 sm:mt-16 md:mt-20'>
            <Service/>
          </div>
        </div>

        <SpecialsCard/>
        <MenuSection/>
        <ReservationForm/>
        <EventsSection/>
        <StatsSection/>
        {/* <AboutUs/> */}
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default Home;




// -------------------///


// import React, { useState, useEffect } from 'react';
// import bgImage from "../image/bg3.jpg";
// import img1 from "../image/s6.jpg";
// import img2 from "../image/s5.jpg";
// import img3 from "../image/s4.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import Service from './Service';
// import SpecialsCard from './SpcialSer';
// import MenuSection from './Menus';
// import ReservationForm from './Booking';
// import EventsSection from './Events';
// import StatsSection from './Stats';
// import Footer from '../components/Footer';

// const slideIn = {
//   hidden: { x: 80, opacity: 0, filter: 'blur(5px)' },
//   visible: {
//     x: 0, opacity: 1, filter: 'blur(0px)',
//     transition: { type: "spring", stiffness: 60, damping: 20, mass: 1.5, duration: 1.5 }
//   },
//   exit: {
//     x: -80, opacity: 0, filter: 'blur(5px)',
//     transition: { duration: 1, ease: [0.2, 0.8, 0.3, 1] }
//   }
// };

// const serviceItem = {
//   hidden: { y: 50, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const imageHover = {
//   rest: { scale: 1, transition: { duration: 0.3 } },
//   hover: { scale: 1.05, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }
// };

// const buttonAnim = {
//   rest: { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
//   hover: {
//     y: -3, scale: 1.02,
//     boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//     transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.4 }
//   },
//   tap: { y: 1, scale: 0.98, transition: { duration: 0.15 } }
// };

// function Home() {
//   const texts = ["ENJOY YOUR DINNER", "EXQUISITE ATMOSPHERE", "Cunta macaan iyo Jawi dagan"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % texts.length);
//     }, currentIndex === 0 ? 4500 : 5500);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const services = [
//     { id: 1, title: "Fine Dining", description: "Experience our exquisite tasting menus prepared by award-winning chefs.", image: img1 },
//     { id: 2, title: "Private Events", description: "Host your special occasions in our elegant private dining rooms.", image: img2 },
//     { id: 3, title: "Drink", description: "Discover perfect drink matches curated by our sommeliers.", image: img3 }
//   ];

//   return (
//     <>
//       <Header />
//       <div className="relative w-full min-h-screen">
//         <div className="h-screen relative overflow-hidden">
//           <motion.div className="absolute inset-0 w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
//             <img src={bgImage} alt="Restaurant Background" className="w-full h-full object-cover absolute top-0 left-0" loading="eager" />
//             <div className="absolute inset-0 bg-black/30"></div>
//           </motion.div>
//           <div className="relative z-10 h-full flex items-center justify-center px-4">
//             <div className="text-center w-full max-w-5xl mx-auto px-2 sm:px-4">
//               <div className="relative flex items-center justify-between w-full">
//                 {!isMobile && (
//                   <motion.button onClick={() => setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length)}
//                     className="text-white z-10 ml-2 sm:ml-0"
//                     whileHover={{ scale: 1.2, x: -3 }} whileTap={{ scale: 0.9 }}>
//                     <FiChevronLeft size={24} className="drop-shadow-lg" />
//                   </motion.button>
//                 )}
//                 <div className="h-24 sm:h-36 flex items-center justify-center px-2 sm:px-4 flex-1">
//                   <AnimatePresence mode='wait'>
//                     <motion.h1 key={currentIndex} initial="hidden" animate="visible" exit="exit" variants={slideIn}
//                       className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
//                       {texts[currentIndex]}
//                     </motion.h1>
//                   </AnimatePresence>
//                 </div>
//                 {!isMobile && (
//                   <motion.button onClick={() => setCurrentIndex((prev) => (prev + 1) % texts.length)}
//                     className="text-white z-10 mr-2 sm:mr-0"
//                     whileHover={{ scale: 1.2, x: 3 }} whileTap={{ scale: 0.9 }}>
//                     <FiChevronRight size={24} className="drop-shadow-lg" />
//                   </motion.button>
//                 )}
//               </div>
//               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
//                 className="flex justify-center mt-6 space-x-3">
//                 {texts.map((_, index) => (
//                   <motion.button key={index} onClick={() => setCurrentIndex(index)}
//                     className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? 'bg-amber-500' : 'bg-white/50'}`}
//                     whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} />
//                 ))}
//               </motion.div>
//               <motion.p className="text-amber-500 text-base sm:text-lg md:text-xl mt-2 mb-6 font-normal"
//                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.4 }}>
//                 Enjoy the real fresh food from our chef
//               </motion.p>
//               <motion.div className="flex flex-col sm:flex-row justify-center gap-4"
//                 initial="hidden" animate="visible"
//                 variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}>
//                 <motion.button initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} whileHover="hover" whileTap="tap"
//                   variants={buttonAnim}
//                   className="relative bg-transparent text-white px-6 py-3 border-2 border-white rounded-full group overflow-hidden text-base">
//                   <span className="relative z-10 font-medium">Book Now</span>
//                   <motion.span className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-100 origin-center" transition={{ duration: 0.25 }} />
//                 </motion.button>
//                 <motion.button initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} whileHover={{ ...buttonAnim.hover }} whileTap={buttonAnim.tap}
//                   className="relative bg-amber-500 text-white px-6 py-3 rounded-full overflow-hidden font-medium text-base">
//                   <span className="relative z-10">View Menu</span>
//                   <motion.span className="absolute inset-0 bg-amber-500 rounded-full scale-0 hover:scale-100 origin-center" transition={{ duration: 0.25 }} />
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         <div className="relative z-20 w-full bg-black pt-12 pb-12">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="text-center sm:text-left">
//               <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">What We Offer</p>
//               <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10">Our Premium Services</h2>
//             </motion.div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {services.map((service, index) => (
//                 <motion.div key={service.id} variants={serviceItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1 }} className="group">
//                   <motion.div className="h-[350px] md:h-[450px] border border-[#da9360]/30 rounded-lg bg-black/80 p-4 overflow-hidden flex flex-col"
//                     whileHover={{ borderColor: "#da9360", boxShadow: "0 10px 25px rgba(218, 147, 96, 0.2)" }}>
//                     <motion.div className="flex-1 overflow-hidden rounded-lg mb-4" initial="rest" whileHover="hover">
//                       <motion.img src={service.image} alt={service.title} className="w-full h-full object-cover" variants={imageHover} />
//                     </motion.div>
//                     <h3 className="text-amber-500 text-lg md:text-xl font-medium mb-2 group-hover:text-white transition-colors duration-300">{service.title}</h3>
//                     <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">{service.description}</p>
//                     <motion.button className="mt-auto text-amber-500 text-sm border-b border-transparent hover:border-[#da9360] pb-1 transition-all duration-300" whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
//                       Learn more →
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//             <div className='mt-12'>
//               <Service />
//             </div>
//           </div>
//         </div>

//         <SpecialsCard />
//         <MenuSection />
//         <ReservationForm />
//         <EventsSection />
//         <StatsSection />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;



// import React from 'react';
// import bgImage from "../image/bg3.jpg"; // Import your background image
// import img1 from "../image/s6.jpg";
// import img2 from "../image/s5.jpg";
// import img3 from "../image/s4.jpg";
// import Header from '../components/Header';
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';
// import Service from './Service';
// import SpecialsCard from './SpcialSer';
// import MenuSection from './Menus';
// import EventsSection from './Events';
// import StatsSection from './Stats';
// import Footer from '../components/Footer';
// import ReservationForm from './Booking';

// // Animation Variants
// const slideIn = {
//   hidden: { 
//     x: 80, 
//     opacity: 0,
//     filter: 'blur(5px)'
//   },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       type: "spring",
//       stiffness: 60,
//       damping: 20,
//       mass: 1.5,
//       duration: 1.5
//     }
//   },
//   exit: {
//     x: -80,
//     opacity: 0,
//     filter: 'blur(5px)',
//     transition: { 
//       duration: 1,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// const serviceItem = {
//   hidden: { y: 50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

// const imageHover = {
//   rest: { scale: 1, transition: { duration: 0.3 } },
//   hover: { 
//     scale: 1.05,
//     transition: { 
//       duration: 0.4,
//       ease: [0.25, 0.1, 0.25, 1]
//     }
//   }
// };

// const buttonAnim = {
//   rest: { 
//     scale: 1,
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
//   },
//   hover: { 
//     y: -3,
//     scale: 1.02,
//     boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//     transition: { 
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//       duration: 0.4
//     }
//   },
//   tap: { 
//     y: 1,
//     scale: 0.98,
//     transition: { 
//       duration: 0.15
//     }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "EXQUISITE ATMOSPHERE"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, currentIndex === 0 ? 4500 : 5500);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   const services = [
//     {
//       id: 1,
//       title: "Fine Dining",
//       description: "Experience our exquisite tasting menus prepared by award-winning chefs.",
//       image: img1
//     },
//     {
//       id: 2,
//       title: "Private Events",
//       description: "Host your special occasions in our elegant private dining rooms.",
//       image: img2
//     },
//     {
//       id: 3,
//       title: "Wine Pairing",
//       description: "Discover perfect wine matches curated by our sommeliers.",
//       image: img3
//     }
//   ];

//   return (
//     <>
//       <Header/>
      
//       <div className="relative w-full min-h-screen">
//         {/* Hero Section with Background Image */}
//         <div className="h-screen relative overflow-hidden">
//           {/* Background Image with Overlay */}
//           <motion.div 
//             className="absolute inset-0 w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//           >
//             <img 
//               src={bgImage} 
//               alt="Restaurant Interior" 
//               className="w-full h-full object-cover"
//               loading="eager"
//             />
//             <div className="absolute inset-0 bg-black/50"></div>
//           </motion.div>
          
//           <div className="relative z-10 h-full flex items-center justify-center">
//             <div className="text-center px-4 w-full max-w-5xl">
//               {/* Slider Container */}
//               <div className="relative flex items-center justify-between w-full">
//                 <motion.button 
//                   onClick={goToPrev}
//                   className="text-white z-10"
//                   aria-label="Previous slide"
//                   whileHover={{ 
//                     scale: 1.2,
//                     x: -3,
//                     transition: { type: "spring", stiffness: 500 }
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                   style={{ marginLeft: '-6rem' }}
//                 >
//                   <FiChevronLeft size={24} className="drop-shadow-lg"/>
//                 </motion.button>
                
//                 <div className="h-28 flex items-center justify-center px-4 mx-4 flex-1">
//                   <AnimatePresence mode='wait'>
//                     <motion.h1
//                       key={currentIndex}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       variants={slideIn}
//                       className="text-white text-4xl md:text-6xl font-bold tracking-wide whitespace-nowrap"
//                     >
//                       {texts[currentIndex]}
//                     </motion.h1>
//                   </AnimatePresence>
//                 </div>
                
//                 <motion.button 
//                   onClick={goToNext}
//                   className="text-white z-10"
//                   aria-label="Next slide"
//                   whileHover={{ 
//                     scale: 1.2,
//                     x: 3,
//                     transition: { type: "spring", stiffness: 500 }
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                   style={{ marginRight: '-6rem' }}
//                 >
//                   <FiChevronRight size={24} className="drop-shadow-lg"/>
//                 </motion.button>
//               </div>

//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 1 }}
//                 className="flex justify-center mt-6 space-x-3"
//               >
//                 {texts.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-2.5 h-2.5 rounded-full ${currentIndex === index ? 'bg-[#da9360]' : 'bg-white/50'}`}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.8 }}
//                     transition={{ duration: 0.3 }}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </motion.div>

//               <motion.p
//                 className="text-[#da9360] text-xl mt-2 mb-6"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.4 }}
//               >
//                 Enjoy the real fresh food from our chef
//               </motion.p>
              
//               <motion.div 
//                 className="flex justify-center gap-4"
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   visible: {
//                     transition: { 
//                       staggerChildren: 0.1,
//                       delayChildren: 0.5
//                     }
//                   }
//                 }}
//               >
//                 <motion.button
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   whileHover="hover"
//                   whileTap="tap"
//                   variants={buttonAnim}
//                   className="relative bg-transparent text-white px-6 py-2 border-2 border-white rounded-full group overflow-hidden text-sm"
//                 >
//                   <span className="relative z-10 font-medium">Book Now</span>
//                   <motion.span
//                     className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-100 origin-center"
//                     transition={{ duration: 0.25 }}
//                   />
//                 </motion.button>
                
//                 <motion.button
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   whileHover={{
//                     ...buttonAnim.hover,
//                     backgroundColor: "#c47e4a",
//                     boxShadow: "0 6px 12px rgba(218, 147, 96, 0.3)"
//                   }}
//                   whileTap={buttonAnim.tap}
//                   className="relative bg-[#da9360] text-white px-6 py-2 rounded-full overflow-hidden font-medium text-sm"
//                 >
//                   <span className="relative z-10">View Menu</span>
//                   <motion.span
//                     className="absolute inset-0 bg-[#c47e4a] rounded-full scale-0 hover:scale-100 origin-center"
//                     transition={{ duration: 0.25 }}
//                   />
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* Services Section */}
//         <div className="relative z-20 w-full bg-black pt-24 pb-20">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <p className="text-[#da9360] text-sm uppercase tracking-widest mb-2">What We Offer</p>
//               <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">Our Premium Services</h2>
//             </motion.div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   variants={serviceItem}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <motion.div
//                     className="h-[500px] border border-[#da9360]/30 rounded-lg bg-black/80 p-6 overflow-hidden flex flex-col"
//                     whileHover={{ 
//                       borderColor: "#da9360",
//                       boxShadow: "0 10px 25px rgba(218, 147, 96, 0.2)",
//                       transition: { duration: 0.3 }
//                     }}
//                   >
//                     <motion.div
//                       className="flex-1 overflow-hidden rounded-lg mb-6"
//                       initial="rest"
//                       whileHover="hover"
//                     >
//                       <motion.img 
//                         src={service.image} 
//                         alt={service.title}
//                         className="w-full h-full object-cover"
//                         variants={imageHover}
//                       />
//                     </motion.div>
//                     <h3 className="text-[#da9360] text-xl md:text-2xl font-medium mb-4 group-hover:text-white transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-white/80 text-sm md:text-base mb-6 group-hover:text-white transition-colors duration-300">
//                       {service.description}
//                     </p>
//                     <motion.button
//                       className="mt-auto w-fit text-white text-sm border-b border-transparent hover:border-[#da9360] pb-1 transition-all duration-300"
//                       whileHover={{ x: 5 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Learn more →
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <div className='mt-20'>
//             <Service/>
//           </div>
//           </div>

//           <SpecialsCard />
// //         <MenuSection />
// //         <ReservationForm/>
// //         <EventsSection/>
// //         <StatsSection/>
// //         <Footer />
         
        
//         {/* <div className='mt-20'>
//             <SpecialsCard/>
//           </div>
//           </div> */}
//       </div>
//     </>
//   );
// }

// export default Home;

// import React from 'react';
// import img from "../image/bg3.jpg";
// import img1 from "../image/s1.jpg";
// import img2 from "../image/s2.jpg";
// import img3 from "../image/s3.jpg";
// import Header from '../components/Header';
// import { motion } from "framer-motion";
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
// import { useState, useEffect } from 'react';

// // Animation Variants
// const slideIn = {
//   hidden: { 
//     x: 80, 
//     opacity: 0,
//     filter: 'blur(5px)'
//   },
//   visible: { 
//     x: 0, 
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: {
//       type: "spring",
//       stiffness: 60,
//       damping: 20,
//       mass: 1.5,
//       duration: 1.5
//     }
//   },
//   exit: {
//     x: -80,
//     opacity: 0,
//     filter: 'blur(5px)',
//     transition: { 
//       duration: 1,
//       ease: [0.2, 0.8, 0.3, 1]
//     }
//   }
// };

// const serviceCardAnim = {
//   hidden: { 
//     y: 50,
//     opacity: 0,
//     scale: 0.95
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//       duration: 0.8
//     }
//   },
//   hover: {
//     y: -10,
//     scale: 1.02,
//     boxShadow: "0 15px 30px rgba(218, 147, 96, 0.2)",
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 10,
//       duration: 0.3
//     }
//   }
// };

// const imageAnim = {
//   hover: {
//     scale: 1.05,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut"
//     }
//   }
// };

// function Home() {
//   const texts = [
//     "ENJOY YOUR DINNER",
//     "EXQUISITE ATMOSPHERE"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext();
//     }, currentIndex === 0 ? 4500 : 5500);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % texts.length);
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
//   };

//   return (
//     <>
//       <Header/>
      
//       <div className="relative w-full min-h-screen">
//         {/* Hero Section */}
//         <div className="h-screen relative">
//           <motion.img 
//             src={img} 
//             alt="Background" 
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 2, ease: "easeOut" }}
//           />
          
//           <div className="absolute inset-0 bg-black/30"/>
          
//           <div className="relative z-10 h-full flex items-center justify-center">
//             {/* ... (keep your existing hero section content) ... */}
//           </div>
//         </div>

//         {/* Services Section */}
//         <div className="relative z-20 w-full bg-black pt-40 pb-20 overflow-hidden">
//           <div className="max-w-7xl mx-auto px-4">
//             <motion.p 
//               className="text-white text-2xl md:text-3xl mb-12 text-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               Our Premium Services
//             </motion.p>
            
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-3 gap-8"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ staggerChildren: 0.2 }}
//             >
//               {/* Service Card 1 */}
//               <motion.div 
//                 className="h-[400px] border border-[#da9360] rounded-lg bg-black/80 p-6 overflow-hidden"
//                 variants={serviceCardAnim}
//                 whileHover="hover"
//               >
//                 <motion.div 
//                   className="h-48 mb-4 overflow-hidden rounded-lg"
//                   whileHover={imageAnim}
//                 >
//                   <img 
//                     src={img1} 
//                     alt="Fine Dining" 
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//                 <h3 className="text-[#da9360] text-xl mb-4">Fine Dining</h3>
//                 <p className="text-white">Experience our exquisite tasting menus prepared by award-winning chefs.</p>
//               </motion.div>

//               {/* Service Card 2 */}
//               <motion.div 
//                 className="h-[400px] border border-[#da9360] rounded-lg bg-black/80 p-6 overflow-hidden"
//                 variants={serviceCardAnim}
//                 whileHover="hover"
//                 transition={{ delay: 0.1 }}
//               >
//                 <motion.div 
//                   className="h-48 mb-4 overflow-hidden rounded-lg"
//                   whileHover={imageAnim}
//                 >
//                   <img 
//                     src={img2} 
//                     alt="Private Events" 
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//                 <h3 className="text-[#da9360] text-xl mb-4">Private Events</h3>
//                 <p className="text-white">Host your special occasions in our elegant private dining rooms.</p>
//               </motion.div>

//               {/* Service Card 3 */}
//               <motion.div 
//                 className="h-[400px] border border-[#da9360] rounded-lg bg-black/80 p-6 overflow-hidden"
//                 variants={serviceCardAnim}
//                 whileHover="hover"
//                 transition={{ delay: 0.2 }}
//               >
//                 <motion.div 
//                   className="h-48 mb-4 overflow-hidden rounded-lg"
//                   whileHover={imageAnim}
//                 >
//                   <img 
//                     src={img3} 
//                     alt="Wine Pairing" 
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//                 <h3 className="text-[#da9360] text-xl mb-4">Wine Pairing</h3>
//                 <p className="text-white">Discover perfect wine matches curated by our sommeliers.</p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;