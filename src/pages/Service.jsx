

import React from 'react';
import chefImage from "../image/chef1.jpg";

function Service() {
  return (
    <section className="bg-black w-full py-28 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Image Section - Enhanced with frame effect */}
        <div className="w-full lg:w-[48%] relative group transform translate-x-10 opacity-0 animate-slide-in-right">
          <div className="absolute -inset-2 bg-gradient-to-br from-[#da9360] to-transparent rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-lg"></div>
          <img 
            src={chefImage} 
            alt="Master Chef at Delizus" 
            className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl relative z-10 transform group-hover:-translate-x-2 transition-all duration-500 ease-out"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20 rounded-b-lg"></div>
        </div>

        {/* Content Section - Refined typography */}
        <div className="w-full lg:w-[48%] space-y-8 transform -translate-x-10 opacity-0 animate-slide-in-left">
          <header className="space-y-4">
            <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold tracking-[0.1em] text-white transform hover:translate-x-3 transition-transform duration-500 ease-out">
              W E L C O M E   T O   D E L I Z U S
            </h1>
            <h2 className="text-2xl md:text-3xl font-light italic text-amber-500 tracking-widest transform hover:translate-x-4 transition-transform duration-500 delay-100 ease-out">
              The Art of Confuges
            </h2>
          </header>

          <div className="relative py-4">
            <hr className="border-amber-500 w-24 border-t-2 absolute top-0 left-0 transform origin-left scale-x-0 lg:scale-x-100 group-hover:scale-x-110 transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
            <p className="text-gray-300/90 leading-relaxed md:leading-loose text-lg md:text-xl pt-6 transform hover:translate-x-2 transition-all duration-500 ease-out">
              At Delizus, we mix tradition with innovation to create culinary masterpieces. 
              Our chefs pour passion into every dish, using only the finest ingredients to 
              craft unforgettable dining experiences that engage all your senses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-transparent border-2 border-amber-500 
            text-amber-500 hover:bg-amber-500 hover:text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
              OUR MENU
            </button>
            <button className="bg-amber-500 hover:bg-amber-500/90 text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
              RESERVE TABLE
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

export default Service;