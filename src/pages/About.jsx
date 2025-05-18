// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* About Us Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           ABOUT US
//         </h2>
//         <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
//       </div>

//       {/* Who We Are Section */}
//       <div className="bg-white shadow-lg rounded-lg p-8">
//         <h3 className="text-2xl font-bold text-gray-800 mb-6">WHO WE ARE</h3>
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left Column - Image or Content */}
//           <div className="flex items-center justify-center">
//             <div className="bg-gray-200 h-64 w-full rounded-lg flex items-center justify-center">
//               <span className="text-gray-500">Company Image</span>
//             </div>
//           </div>
          
//           {/* Right Column - Content */}
//           <div className="flex flex-col justify-center">
//             <p className="text-gray-600 mb-4">
//               We are a passionate team dedicated to delivering exceptional solutions for our clients. 
//               Our expertise spans across multiple industries with a focus on innovation and quality.
//             </p>
//             <p className="text-gray-600 mb-4">
//               Founded in 2020, we've grown from a small startup to a trusted partner for businesses 
//               looking to transform their digital presence.
//             </p>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-gray-600">Innovative Solutions</span>
//               </li>
//               <li className="flex items-center">
//                 <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-gray-600">Experienced Team</span>
//               </li>
//               <li className="flex items-center">
//                 <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span className="text-gray-600">Customer Focused</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Optional Stats Section */}
//       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[
//           { number: '50+', label: 'Projects Completed' },
//           { number: '100%', label: 'Client Satisfaction' },
//           { number: '24/7', label: 'Support Available' }
//         ].map((stat, index) => (
//           <div key={index} className="bg-blue-600 text-white p-6 rounded-lg text-center">
//             <p className="text-4xl font-bold">{stat.number}</p>
//             <p className="mt-2 text-lg">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import aboutImage from "../image/ab.jpg"; // Replace with your actual image

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
