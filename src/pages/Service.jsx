
// import React from 'react'
// import img from "../image/chef1.jpg";
// function Service() {
//   return (
//     <div >
// <div className=' bg-black  w-full    pt-[200px] text-white flex gap-20 '>


 
//     <div>
//       <img src={img} alt="" />
//     </div>
//     <div>
//       <h1>Welcome To Delizus</h1>
//       <p>The Art of Cookings</p>
//       <hr />

//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//           ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
//           in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//          mollit anim id est laborum.</p>
//          <button>Read More</button>
//     </div>

//  </div>
// </div>


 
//   )
// }

// export default Service


// import React from 'react';
// import chefImage from "../image/chef1.jpg";

// function Service() {
//   return (
//     <div className="bg-black w-full pt-[200px] pb-20 px-4 md:px-10 lg:px-20">
//       <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2">
//           <img 
//             src={chefImage} 
//             alt="Professional Chef" 
//             className="w-full h-auto rounded-lg shadow-2xl"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">Welcome To Delizus</h1>
//           <p className="text-xl italic text-gray-300">The Art of Cooking</p>
          
//           <hr className="border-yellow-400 my-4" />
          
//           <p className="text-gray-300 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
//             ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
          
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-300">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service;

// import React from 'react';
// import chefImage from "../image/chef1.jpg";

// function Service() {
//   return (
//     <div className="bg-black w-full pt-[200px] pb-20 px-4 md:px-10 lg:px-20">
//       <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
//         {/* Image Section with Animation */}
//         <div className="w-full lg:w-1/2 transition-transform duration-500 hover:scale-[1.02]">
//           <img 
//             src={chefImage} 
//             alt="Professional Chef" 
//             className="w-full h-auto rounded-lg shadow-2xl transition-all duration-300 hover:shadow-lg"
//           />
//         </div>

//         {/* Content Section with Animations */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 transition-transform duration-300 hover:translate-x-2">
//             Welcome To Delizus
//           </h1>
          
//           <p className="text-xl italic text-gray-300 transition-transform duration-300 delay-75 hover:translate-x-2">
//             The Art of Cooking
//           </p>
          
//           <hr className="border-yellow-400 my-4 transition-all duration-500 origin-left hover:scale-x-105" />
          
//           <p className="text-gray-300 leading-relaxed transition-transform duration-300 delay-100 hover:translate-y-1">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//           </p>
          
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service;



// import React from 'react';
// import chefImage from "../image/chef1.jpg";

// function Service() {
//   return (
//     <div className="bg-black w-full pt-[200px] pb-20 px-4 md:px-10 lg:px-20">
//       <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
//         {/* Image Section - Slides in from right */}
//         <div className="w-full lg:w-1/2 transform lg:translate-x-10 hover:translate-x-0 transition-all duration-500 ease-out">
//           <img 
//             src={chefImage} 
//             alt="Professional Chef" 
//             className="w-full h-auto rounded-lg shadow-2xl transform hover:-translate-x-2 transition-all duration-300 ease-in-out hover:shadow-xl"
//           />
//         </div>

//         {/* Content Section - Slides in from left */}
//         <div className="w-full lg:w-1/2 space-y-6 transform lg:-translate-x-10 hover:translate-x-0 transition-all duration-500 ease-out">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 transform hover:translate-x-3 transition-transform duration-300 ease-in-out">
//             Welcome To Delizus
//           </h1>
          
//           <p className="text-xl italic text-gray-300 transform hover:translate-x-4 transition-transform duration-300 delay-100 ease-in-out">
//             The Art of Cooking
//           </p>
          
//           <hr className="border-yellow-400 my-4 transform origin-left hover:scale-x-110 transition-all duration-500 ease-in-out" />
          
//           <p className="text-gray-300 leading-relaxed transform hover:translate-x-2 transition-transform duration-300 delay-150 ease-in-out">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//           </p>
          
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transform hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service;


// import React from 'react';
// import chefImage from "../image/chef1.jpg";

// function Service() {
//   return (
//     <div className="bg-black w-full pt-[200px] pb-20 px-4 md:px-10 lg:px-20">
//       <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
//         {/* Image Section - Slides in from right */}
//         <div className="w-full lg:w-1/2 transform lg:translate-x-10 hover:translate-x-0 transition-all duration-500 ease-out">
//           <img 
//             src={chefImage} 
//             alt="Professional Chef" 
//             className="w-full h-auto rounded-lg shadow-2xl transform hover:-translate-x-2 transition-all duration-300 ease-in-out hover:shadow-xl"
//           />
//         </div>

//         {/* Content Section - Slides in from left */}
//         <div className="w-full lg:w-1/2 space-y-6 transform lg:-translate-x-10 hover:translate-x-0 transition-all duration-500 ease-out">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 transform hover:translate-x-3 transition-transform duration-300 ease-in-out">
//             Welcome To Delizus
//           </h1>
          
//           <p className="text-xl italic text-gray-300 transform hover:translate-x-4 transition-transform duration-300 delay-100 ease-in-out">
//             The Art of Cooking
//           </p>
          
//           <hr className="border-yellow-400 my-4 transform origin-left hover:scale-x-110 transition-all duration-500 ease-in-out" />
          
//           <p className="text-gray-300 leading-relaxed transform hover:translate-x-2 transition-transform duration-300 delay-150 ease-in-out">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
//             ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
//             sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
//             id est laborum.
//           </p>
          
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transform hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95">
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service;


// import React from 'react';
// import chefImage from "../image/chef1.jpg";

// function Service() {
//   return (
//     <div className="bg-black w-full pt-[200px] pb-20 px-4 md:px-10 lg:px-20 overflow-x-hidden">
//       <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
//         {/* Image Section - Slides from right on load, hovers left */}
//         <div className="w-full lg:w-1/2 transform translate-x-10 lg:translate-x-20 opacity-0 lg:opacity-100 animate-slide-in-right">
//           <img 
//             src={chefImage} 
//             alt="Professional Chef" 
//             className="w-full h-auto rounded-lg shadow-2xl transform hover:-translate-x-3 transition-all duration-500 ease-out hover:shadow-2xl"
//           />
//         </div>

//         {/* Content Section - Slides from left on load, hovers right */}
//         <div className="w-full lg:w-1/2 space-y-6 transform -translate-x-10 lg:-translate-x-20 opacity-0 lg:opacity-100 animate-slide-in-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 transform hover:translate-x-4 transition-transform duration-500 ease-out">
//             Welcome To Delizus
//           </h1>
          
//           <p className="text-xl italic text-gray-300 transform hover:translate-x-5 transition-transform duration-500 delay-75 ease-out">
//             The Art of Cooking
//           </p>
          
//           <hr className="border-yellow-400 my-4 transform origin-left scale-x-0 lg:scale-x-100 hover:scale-x-110 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
          
//           <p className="text-gray-300 leading-relaxed transform hover:translate-x-3 transition-transform duration-500 delay-100 ease-out">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
//             ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
          
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transform hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-out hover:shadow-xl active:scale-95">
//             Read More
//           </button>
//         </div>
//       </div>
      
//       {/* Add this to your global CSS */}
//       <style jsx>{`
//         @keyframes slide-in-right {
//           from { transform: translateX(40px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes slide-in-left {
//           from { transform: translateX(-40px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         .animate-slide-in-right {
//           animation: slide-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Service;


// import React from 'react';
// import chefImage from "../image/chef1.jpg";

// function Service() {
//   return (
//     <div className="bg-black w-full pt-[200px] pb-20 px-4 md:px-10 lg:px-20 overflow-x-hidden">
//       <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row 
//       justify-between items-center">
//         {/* Image Section - Slides from right on load, hovers left */}
//         <div className="w-full lg:w-[45%] transform translate-x-10 lg:translate-x-20 opacity-0 lg:opacity-100 animate-slide-in-right">
//           <img 
//             src={chefImage} 
//             alt="Professional Chef" 
//             className="w-full h-[500px] rounded-lg shadow-2xl transform hover:-translate-x-3 transition-all duration-500 ease-out hover:shadow-2xl"
//           />
//         </div>

//         {/* Content Section - Slides from left on load, hovers right */}
//         <div className="w-full lg:w-[50%] space-y-6 transform -translate-x-10 lg:-translate-x-20 opacity-0 lg:opacity-100 animate-slide-in-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 transform hover:translate-x-4 transition-transform duration-500 ease-out">
//             Welcome To Delizus
//           </h1>
          
//           <p className="text-xl italic text-gray-300 transform hover:translate-x-5 transition-transform duration-500 delay-75 ease-out">
//             The Art of Cooking
//           </p>
          
//           <hr className="border-yellow-400 my-4 transform origin-left scale-x-0 lg:scale-x-100 hover:scale-x-110 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
          
//           <p className="text-gray-300 leading-relaxed transform hover:translate-x-3 transition-transform duration-500 delay-100 ease-out">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
//             ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
          
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transform hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-out hover:shadow-xl active:scale-95">
//             Read More
//           </button>
//         </div>
//       </div>
      
//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes slide-in-right {
//           from { transform: translateX(40px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes slide-in-left {
//           from { transform: translateX(-40px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         .animate-slide-in-right {
//           animation: slide-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Service;


// import React from 'react';
// import chefImage from "../image/chef1.jpg";

// function Service() {
//   return (
//     <div className="bg-black w-full pt-[200px] pb-20 px-4 md:px-10 lg:px-20 overflow-x-hidden">
//       <div className="max-w-6xl mx-auto text-white flex flex-col lg:flex-row
//        justify-between ">
//         {/* Image Section - Slides from right on load, hovers left */}
//         <div className="w-full lg:w-[45%] transform translate-x-10 lg:translate-x-20 opacity-0 lg:opacity-100 animate-slide-in-right">
//           <img 
//             src={chefImage} 
//             alt="Professional Chef" 
//             className="w-full h-[500px] rounded-lg shadow-2xl transform hover:-translate-x-3 transition-all duration-500 ease-out hover:shadow-2xl"
//           />
//         </div>

//         {/* Content Section - Slides from left on load, hovers right */}
//         <div className="w-full lg:w-[50%] space-y-6 transform -translate-x-10 lg:-translate-x-20 opacity-0 lg:opacity-100 animate-slide-in-left">
//           <h1 className="text-5xl md:text-5xl font-bold text-white  transform hover:translate-x-4 transition-transform duration-500 ease-out">
//             Welcome To Delizus
//           </h1>
          
//           <p className="text-xl italic text-[#da9360]
//            transform hover:translate-x-5 transition-transform duration-500 
//            delay-75 ease-out">
//             The Art of Cooking
//           </p>
          
//           <hr className="border-[#da9360] w-32 my-4 transform origin-left scale-x-0
//            lg:scale-x-100 hover:scale-x-110 transition-all duration-700
//             ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
          
//           {/* Enhanced Paragraph */}
//           <p className="text-gray-300 leading-relaxed md:leading-loose transform hover:translate-x-3 transition-all duration-500 ease-out hover:text-white group-hover:text-white/90">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
//             ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
//             sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
//             id est laborum.
//           </p>
          
//           <button className="bg-[#da9360] hover:bg-[#da9360] text-white text-2xl
//            font-bold py-3 px-8 rounded-full transform hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 ease-out hover:shadow-xl active:scale-95">
//             Read More
//           </button>
//         </div>
//       </div>
      
//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes slide-in-right {
//           from { transform: translateX(40px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes slide-in-left {
//           from { transform: translateX(-40px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         .animate-slide-in-right {
//           animation: slide-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         .animate-slide-in-left {
//           animation: slide-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Service;

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
              At Delizus, we blend tradition with innovation to create culinary masterpieces. 
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