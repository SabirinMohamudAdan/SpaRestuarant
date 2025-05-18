


import React from 'react';
import aboutImage from "../image/ab.jpg"; 

function AboutUs() {
  return (
    <section className="bg-black w-full py-28 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-[48%] relative group transform translate-x-10 opacity-0 animate-slide-in-right">
          <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-transparent rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-lg"></div>
          <img 
            src={aboutImage} 
            alt="About Us" 
            className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl relative z-10 transform group-hover:-translate-x-2 transition-all duration-500 ease-out"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20 rounded-b-lg"></div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[48%] space-y-8 transform -translate-x-10 opacity-0 animate-slide-in-left">
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.1em] text-white transform hover:translate-x-3 transition-transform duration-500 ease-out">
              A B O U T   U S
            </h1>
            <h2 className="text-xl md:text-2xl font-light italic text-amber-500 tracking-widest transform hover:translate-x-4 transition-transform duration-500 delay-100 ease-out">
              Who We Are
            </h2>
          </header>

          <p className="text-gray-300/90 leading-relaxed md:leading-loose text-lg md:text-xl transform hover:translate-x-2 transition-all duration-500 ease-out">
            We are a passionate team committed to delivering top-notch digital solutions. Since our founding in 2020, we have grown into a trusted partner for businesses looking to innovate and thrive in the digital world.
          </p>

          <ul className="space-y-2 text-lg">
            {["Innovative Solutions", "Experienced Team", "Customer Focused"].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg className="h-5 w-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-transparent border-2 border-amber-500
             text-amber-500 hover:bg-amber-500 hover:text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
              Learn More
            </button>
            <button className="bg-amber-500 hover:bg-amber-500 text-white
             text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
        }
      `}</style>
    </section>
  );
}

export default AboutUs;
