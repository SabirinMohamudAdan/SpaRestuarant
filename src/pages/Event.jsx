


import React, { useState, useRef } from 'react';
import bgImage from "../image/bg3.jpg";
import { motion } from 'framer-motion';
import event1Video from "../image/ve1.mp4";
import event2Video from "../image/ve2.mp4";
import event3Video from "../image/ve3.mp4";
import Footer from '../components/Footer';

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  
  


  const events = [
    {
      title: "Xafladaha  Gaar ah  ",
      date: "20 April 2025",
      time: "Saacadaha Duhr ilaa 1:30 galabnimo",
      description: "Ku soo dhowow cunta macaan   oo aad ku raaxaysan doonto habka loo diyaariyey loona kariyey ",
      video: event1Video,
      cta: "Is-diiwaangeli Meeshaada"
    },
    {
      title: "Habeen Madadaalada",
      date: "21 April 2025",
      time: "Kadib Salaada Maghrib ilaa 10:00 habeennimo",
      description: "Habeen madadaalo leh oo loo gu tala galay  dhalinyarada",
      video: event2Video,
      cta: "Iibso Tikidkaaga"
    },
    {
      title: "Habeen Qoyska",
      date: "22 April 2025",
      time: "6:30 galabnimo - 9:30 habeennimo",
      description: "Casho gaar ah oo loogu talagalay qoysaska ",
      video: event3Video,
      cta: "Diiwaan Gali Ballantaada"
    }
  ];

  const nextSlide = () => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const handleSlideChange = (index) => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].pause();
    }
    setCurrentIndex(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(245, 158, 11, 0.4)",
      backgroundColor: "#d97706"
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <div 
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgb(0, 0, 0), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black "></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-amber-400">Upcoming</span> Events
          </motion.h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-amber-500 mx-auto mb-4"
          />
          <motion.h2 
            className="text-xl md:text-2xl text-amber-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join Us for Special Moments
          </motion.h2>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-center mb-8 space-x-4">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Events Slider */}
        <motion.div 
          className="relative h-[500px] w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              variants={itemVariants}
              whileHover="hover"
              style={{
                transform: `translateX(${(index - currentIndex) * 120}%)`,
                width: 'calc(100% - 4rem)',
                margin: '0 auto'
              }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Event Video */}
                <div className="md:w-1/2 h-64 md:h-full overflow-hidden relative">
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={event.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay={index === currentIndex}
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button 
                      className="p-3 rounded-full bg-amber-500 bg-opacity-80 text-white hover:bg-amber-600 transition transform hover:scale-110"
                      onClick={() => {
                        const video = videoRefs.current[index];
                        video.paused ? video.play() : video.pause();
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Event Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 px-8 rounded-lg font-medium transition-all shadow-lg"
                  >
                    {event.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slider Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-amber-400 w-6' : 'bg-amber-200'}`}
            />
          ))}
        </div>
      </div>
   
    {/* <Footer/> */}

    </div>
  
  );
};

export default EventsSection;