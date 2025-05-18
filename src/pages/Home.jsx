


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




