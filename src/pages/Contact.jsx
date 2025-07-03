// import React from 'react';

// function Contact() {
//   return (
//     <section className="bg-black w-full py-28 px-4 md:px-10 lg:px-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row justify-between items-center gap-16">
//         {/* Content Section */}
//         <div className="w-full lg:w-[48%] transform -translate-x-10 opacity-0 animate-slide-in-left space-y-8">
//           <header className="space-y-4">
//             <h1 className="text-3xl md:text-4xl font-bold tracking-[0.1em] text-white transform hover:translate-x-3 transition-transform duration-500 ease-out">
//               C O N T A C T   U S
//             </h1>
//             <h2 className="text-xl md:text-2xl font-light italic text-amber-500 tracking-widest transform hover:translate-x-4 transition-transform duration-500 delay-100 ease-out">
//               Get In Touch
//             </h2>
//           </header>

//           <p className="text-gray-300/90 leading-relaxed md:leading-loose text-lg md:text-xl">
//             We'd love to hear from you. Whether you're curious about features, a free trial, or even press—we’re ready to answer any and all questions.
//           </p>

//           <div className="space-y-4 text-gray-300 text-lg">
//             <p><strong>Email:</strong> <span className="text-white">contact@yourcompany.com</span></p>
//             <p><strong>Phone:</strong> <span className="text-white">+252 61 2345678</span></p>
//             <p><strong>Location:</strong> <span className="text-white">Mogadishu, Somalia</span></p>
//           </div>

//           <div className="flex flex-wrap gap-4 pt-4">
//             <button className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
//               Send Message
//             </button>
//             <button className="bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Embedded Google Map or Placeholder */}
//         <div className="w-full lg:w-[48%] transform translate-x-10 opacity-0 animate-slide-in-right">
//           <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-amber-500">
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.153847026233!2d45.3162239!3d2.0469344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58426ccf0bba9f%3A0x832ff8a462db8ef!2sMogadishu!5e0!3m2!1sen!2sso!4v1610000000000!5m2!1sen!2sso"
//               width="100%"
//               height="450"
//               allowFullScreen=""
//               loading="lazy"
//               className="w-full h-full border-none"
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes slide-in-right {
//           from { transform: translateX(60px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         @keyframes slide-in-left {
//           from { transform: translateX(-60px); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }
//         .animate-slide-in-right {
//           animation: slide-in-right 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         .animate-slide-in-left {
//           animation: slide-in-left 1s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Contact;
// ---------------------
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import aboutImage from '../image/ab.jpg'; // Using AboutUs image

function Contact() {
  return (
    <section className="bg-black w-full py-28 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row justify-between items-center gap-16">

        {/* Image Section */}
        <div className="w-full lg:w-[48%] relative group transform translate-x-10 opacity-0 animate-fade-in-right">
          <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/30 to-transparent rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-lg"></div>
          <img 
            src={aboutImage} 
            alt="Contact Visual" 
            className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-[0_15px_50px_-5px_rgba(255,191,0,0.4)] relative z-10 group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20 rounded-b-lg"></div>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-[48%] transform -translate-x-10 opacity-0 animate-fade-in-left space-y-8">
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.1em] text-white transform hover:translate-x-3 transition-transform duration-500 ease-out">
              C O N T A C T   U S
            </h1>
            <h2 className="text-xl md:text-2xl font-light italic text-amber-500 tracking-widest transform hover:translate-x-4 transition-transform duration-500 delay-100 ease-out">
              Get In Touch
            </h2>
          </header>

          <p className="text-gray-300/90 leading-relaxed md:leading-loose text-lg md:text-xl hover:translate-x-2 transition-transform duration-500 ease-out">
            Feel free to reach out to us for any inquiries, project collaborations, or support. We're always here to help.
          </p>

          <div className="space-y-4 text-lg text-gray-300">
            <p className="flex items-center gap-3"><FaEnvelope className="text-amber-500" /> <span>Email:</span> <span className="text-white">contact@yourcompany.com</span></p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-amber-500" /> <span>Phone:</span> <span className="text-white">+252 61 2345678</span></p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-amber-500" /> <span>Location:</span> <span className="text-white">Mogadishu, Somalia</span></p>
            <p className="flex items-center gap-3"><FaClock className="text-amber-500" /> <span>Hours:</span> <span className="text-white">Sat - Thu: 8:00 AM – 6:00 PM</span></p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6 pt-6">
            <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300"><FaFacebookF /></a>
            <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300"><FaTwitter /></a>
            <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300"><FaLinkedinIn /></a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-amber transition-all duration-300 ease-out uppercase tracking-widest">
              Send Message
            </button>
            <button className="bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-right {
          from { transform: translateX(60px) scale(0.95); opacity: 0; }
          to { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes fade-in-left {
          from { transform: translateX(-60px) scale(0.95); opacity: 0; }
          to { transform: translateX(0) scale(1); opacity: 1; }
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
        }
        .hover\\:shadow-amber:hover {
          box-shadow: 0 8px 30px rgba(255, 191, 0, 0.4);
        }
      `}</style>
    </section>
  );
}

export default Contact;
