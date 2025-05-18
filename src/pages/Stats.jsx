import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const StatsSection = () => {
  const controls = useAnimation();
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    { number: 8330, label: "Home of Works" },
    { number: 248, label: "Products Complete" },
    { number: 852, label: "Size of Pros" },
    { number: 615, label: "Days of Coffee" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  // Number counting animation component
  const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 2000; // 2 seconds for all numbers to count
      const startTime = Date.now();
      const endValue = value;
      
      const animate = () => {
        const now = Date.now();
        const progress = Math.min(1, (now - startTime) / duration);
        const currentValue = Math.floor(progress * endValue);
        
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isVisible, value]);

    return (
      <motion.span 
        className="text-4xl font-bold text-amber-500 mb-2"
        whileHover={{ scale: 1.1 }}
      >
        {displayValue.toLocaleString()}
      </motion.span>
    );
  };

  return (
    <div ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.5 }
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center relative overflow-hidden"
            >
              {/* Progress bar background */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                {/* Animated progress bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      width: "100%",
                      transition: { 
                        delay: 0.3, // Same delay for all progress bars
                        duration: 2, // Matches number counting duration
                        ease: "easeOut"
                      }
                    }
                  }}
                  className="h-full bg-amber-500"
                />
              </div>
              
              <div className="min-h-[60px] flex items-center justify-center">
                <AnimatedNumber value={stat.number} />
              </div>
              <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;