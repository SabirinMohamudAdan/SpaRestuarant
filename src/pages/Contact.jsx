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
// import React from 'react';
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import aboutImage from '../image/ab.jpg'; // Using AboutUs image

// function Contact() {
//   return (
//     <section className="bg-black w-full py-28 px-4 md:px-10 lg:px-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row justify-between items-center gap-16">

//         {/* Image Section */}
//         <div className="w-full lg:w-[48%] relative group transform translate-x-10 opacity-0 animate-fade-in-right">
//           <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/30 to-transparent rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-lg"></div>
//           <img 
//             src={aboutImage} 
//             alt="Contact Visual" 
//             className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-[0_15px_50px_-5px_rgba(255,191,0,0.4)] relative z-10 group-hover:scale-105 transition-transform duration-500 ease-out"
//           />
//           <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20 rounded-b-lg"></div>
//         </div>

//         {/* Contact Info Section */}
//         <div className="w-full lg:w-[48%] transform -translate-x-10 opacity-0 animate-fade-in-left space-y-8">
//           <header className="space-y-4">
//             <h1 className="text-3xl md:text-4xl font-bold tracking-[0.1em] text-white transform hover:translate-x-3 transition-transform duration-500 ease-out">
//               C O N T A C T   U S
//             </h1>
//             <h2 className="text-xl md:text-2xl font-light italic text-amber-500 tracking-widest transform hover:translate-x-4 transition-transform duration-500 delay-100 ease-out">
//               Get In Touch
//             </h2>
//           </header>

//           <p className="text-gray-300/90 leading-relaxed md:leading-loose text-lg md:text-xl hover:translate-x-2 transition-transform duration-500 ease-out">
//             Feel free to reach out to us for any inquiries, project collaborations, or support. We're always here to help.
//           </p>

//           <div className="space-y-4 text-lg text-gray-300">
//             <p className="flex items-center gap-3"><FaEnvelope className="text-amber-500" /> <span>Email:</span> <span className="text-white">contact@yourcompany.com</span></p>
//             <p className="flex items-center gap-3"><FaPhoneAlt className="text-amber-500" /> <span>Phone:</span> <span className="text-white">+252 61 2345678</span></p>
//             <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-amber-500" /> <span>Location:</span> <span className="text-white">Mogadishu, Somalia</span></p>
//             <p className="flex items-center gap-3"><FaClock className="text-amber-500" /> <span>Hours:</span> <span className="text-white">Sat - Thu: 8:00 AM – 6:00 PM</span></p>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex items-center gap-6 pt-6">
//             <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300"><FaFacebookF /></a>
//             <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300"><FaTwitter /></a>
//             <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300"><FaLinkedinIn /></a>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 pt-6">
//             <button className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-amber transition-all duration-300 ease-out uppercase tracking-widest">
//               Send Message
//             </button>
//             <button className="bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes fade-in-right {
//           from { transform: translateX(60px) scale(0.95); opacity: 0; }
//           to { transform: translateX(0) scale(1); opacity: 1; }
//         }
//         @keyframes fade-in-left {
//           from { transform: translateX(-60px) scale(0.95); opacity: 0; }
//           to { transform: translateX(0) scale(1); opacity: 1; }
//         }
//         .animate-fade-in-right {
//           animation: fade-in-right 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         .animate-fade-in-left {
//           animation: fade-in-left 1s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
//         }
//         .hover\\:shadow-amber:hover {
//           box-shadow: 0 8px 30px rgba(255, 191, 0, 0.4);
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Contact;


// ---------------------

// import React, { useState } from 'react';
// import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe, FaBuilding, FaHeadset } from 'react-icons/fa';
// import aboutImage from '../image/ab.jpg'; // Using AboutUs image

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => setSubmitSuccess(false), 5000);
//     }, 1500);
//   };

//   return (
//     <section className="bg-black w-full py-28 px-4 md:px-10 lg:px-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row justify-between items-start gap-16">
//         {/* Image Section */}
//         <div className="w-full lg:w-[48%] relative group transform translate-x-10 opacity-0 animate-fade-in-right">
//           <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/30 to-transparent rounded-lg opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md group-hover:blur-lg"></div>
//           <img 
//             src={aboutImage} 
//             alt="Company Headquarters" 
//             className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-[0_15px_50px_-5px_rgba(255,191,0,0.4)] relative z-10 group-hover:scale-105 transition-transform duration-500 ease-out"
//           />
//           <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20 rounded-b-lg"></div>
          
//           {/* Map Overlay */}
//           <div className="absolute bottom-8 right-8 z-30 w-[300px] h-[200px] bg-black/90 border border-amber-500/50 rounded-lg overflow-hidden shadow-2xl">
//             <iframe 
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.041183752716!2d45.34024131475384!3d2.0421449984255066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5842591e6a1389%3A0x2a0e3e9a2d7b5f0e!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
//               width="100%" 
//               height="100%" 
//               style={{ border: 0 }}
//               allowFullScreen="" 
//               loading="lazy"
//               title="Company Location"
//             ></iframe>
//           </div>
//         </div>

//         {/* Contact Info Section */}
//         <div className="w-full lg:w-[48%] transform -translate-x-10 opacity-0 animate-fade-in-left">
//           <header className="space-y-4 mb-10">
//             <h1 className="text-3xl md:text-4xl font-bold tracking-[0.1em] text-white transform hover:translate-x-3 transition-transform duration-500 ease-out">
//               C O N T A C T   U S
//             </h1>
//             <h2 className="text-xl md:text-2xl font-light italic text-amber-500 tracking-widest transform hover:translate-x-4 transition-transform duration-500 delay-100 ease-out">
//               Get In Touch With Our Team
//             </h2>
//           </header>

//           <p className="text-gray-300/90 leading-relaxed md:leading-loose text-lg md:text-xl mb-10 hover:translate-x-2 transition-transform duration-500 ease-out">
//             We're committed to providing exceptional service. Contact us via the information below, 
//             or fill out our contact form to send us a message directly. Our team typically responds 
//             within 1 business day.
//           </p>
          
//           {/* Contact Information Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//             <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800 hover:border-amber-500/30 transition-colors duration-300">
//               <div className="flex items-start gap-4">
//                 <div className="bg-amber-500/10 p-3 rounded-full">
//                   <FaEnvelope className="text-amber-500 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-amber-500 mb-1">Email Address</h3>
//                   <p className="text-white">contact@yourcompany.com</p>
//                   <p className="text-gray-400 text-sm mt-1">General inquiries</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800 hover:border-amber-500/30 transition-colors duration-300">
//               <div className="flex items-start gap-4">
//                 <div className="bg-amber-500/10 p-3 rounded-full">
//                   <FaPhoneAlt className="text-amber-500 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-amber-500 mb-1">Phone Number</h3>
//                   <p className="text-white">+252 61 2345678</p>
//                   <p className="text-gray-400 text-sm mt-1">Mon-Fri, 8:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800 hover:border-amber-500/30 transition-colors duration-300">
//               <div className="flex items-start gap-4">
//                 <div className="bg-amber-500/10 p-3 rounded-full">
//                   <FaMapMarkerAlt className="text-amber-500 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-amber-500 mb-1">Headquarters</h3>
//                   <p className="text-white">123 Business Avenue</p>
//                   <p className="text-white">Mogadishu, Somalia</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800 hover:border-amber-500/30 transition-colors duration-300">
//               <div className="flex items-start gap-4">
//                 <div className="bg-amber-500/10 p-3 rounded-full">
//                   <FaClock className="text-amber-500 text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-amber-500 mb-1">Working Hours</h3>
//                   <p className="text-white">Sat - Thu: 8:00 AM – 6:00 PM</p>
//                   <p className="text-gray-400 text-sm mt-1">Friday: Closed</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Department Contacts */}
//           <div className="mb-10">
//             <h3 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
//               <FaBuilding className="text-amber-500" /> Department Contacts
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-gray-900/50 p-4 rounded-lg">
//                 <h4 className="font-medium text-white mb-1">Sales</h4>
//                 <p className="text-amber-500 text-sm">sales@yourcompany.com</p>
//               </div>
//               <div className="bg-gray-900/50 p-4 rounded-lg">
//                 <h4 className="font-medium text-white mb-1">Support</h4>
//                 <p className="text-amber-500 text-sm">support@yourcompany.com</p>
//               </div>
//               <div className="bg-gray-900/50 p-4 rounded-lg">
//                 <h4 className="font-medium text-white mb-1">Careers</h4>
//                 <p className="text-amber-500 text-sm">careers@yourcompany.com</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold text-amber-500 mb-4 flex items-center gap-2">
//               <FaHeadset className="text-amber-500" /> Send Us a Message
//             </h3>
            
//             {submitSuccess ? (
//               <div className="bg-green-900/40 border border-green-700 rounded-lg p-6 mb-6 text-center">
//                 <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h4>
//                 <p className="text-green-300">Thank you for contacting us. We'll get back to you shortly.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-gray-400 mb-2 text-sm">Full Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-gray-400 mb-2 text-sm">Phone Number</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
//                       placeholder="+252 61 2345678"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-400 mb-2 text-sm">Subject</label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
//                       placeholder="How can we help?"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-gray-400 mb-2 text-sm">Your Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
//                     placeholder="Please provide details about your inquiry..."
//                   ></textarea>
//                 </div>
                
//                 <button 
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold py-3 px-8 rounded-none transform hover:-translate-y-1 hover:shadow-amber transition-all duration-300 ease-out uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? 'Sending...' : 'Send Message'}
//                 </button>
//               </form>
//             )}
//           </div>
          
//           {/* Social Media Icons */}
//           <div className="pt-6 border-t border-gray-800">
//             <h3 className="text-lg font-medium text-gray-400 mb-4">Connect With Us</h3>
//             <div className="flex items-center gap-6">
//               <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300 transform hover:scale-110"><FaFacebookF /></a>
//               <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300 transform hover:scale-110"><FaTwitter /></a>
//               <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300 transform hover:scale-110"><FaLinkedinIn /></a>
//               <a href="#" className="text-amber-500 hover:text-white text-xl transition duration-300 transform hover:scale-110"><FaGlobe /></a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes fade-in-right {
//           from { transform: translateX(60px) scale(0.95); opacity: 0; }
//           to { transform: translateX(0) scale(1); opacity: 1; }
//         }
//         @keyframes fade-in-left {
//           from { transform: translateX(-60px) scale(0.95); opacity: 0; }
//           to { transform: translateX(0) scale(1); opacity: 1; }
//         }
//         .animate-fade-in-right {
//           animation: fade-in-right 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         .animate-fade-in-left {
//           animation: fade-in-left 1s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
//         }
//         .hover\\:shadow-amber:hover {
//           box-shadow: 0 8px 30px rgba(255, 191, 0, 0.4);
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Contact;


// ------------

import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe, FaBuilding, FaHeadset } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black w-full py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
            CONTACT US
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Get in touch with our team for any inquiries or support. We're always ready to assist you.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 bg-gray-800/30 rounded-xl p-8 border border-gray-700/50 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-8 pb-3 border-b border-amber-500/30">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-full mt-1">
                  <FaMapMarkerAlt className="text-amber-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-500 mb-1">Our Location</h3>
                  <p className="text-white">123 Business Avenue</p>
                  <p className="text-white">Mogadishu, Somalia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-full mt-1">
                  <FaEnvelope className="text-amber-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-500 mb-1">Email Address</h3>
                  <p className="text-white">contact@yourcompany.com</p>
                  <p className="text-gray-400">General inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-full mt-1">
                  <FaPhoneAlt className="text-amber-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-500 mb-1">Phone Number</h3>
                  <p className="text-white">+252 61 2345678</p>
                  <p className="text-gray-400">Mon-Fri, 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-full mt-1">
                  <FaClock className="text-amber-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-500 mb-1">Working Hours</h3>
                  <p className="text-white">Sat - Thu: 8:00 AM – 6:00 PM</p>
                  <p className="text-gray-400">Friday: Closed</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-700/50 mt-6">
                <h3 className="text-lg font-medium text-gray-400 mb-4">Connect With Us</h3>
                <div className="flex items-center gap-5">
                  <a href="#" className="bg-amber-500/10 p-3 rounded-full hover:bg-amber-500 text-amber-500 hover:text-white text-xl transition duration-300">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="bg-amber-500/10 p-3 rounded-full hover:bg-amber-500 text-amber-500 hover:text-white text-xl transition duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="bg-amber-500/10 p-3 rounded-full hover:bg-amber-500 text-amber-500 hover:text-white text-xl transition duration-300">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="bg-amber-500/10 p-3 rounded-full hover:bg-amber-500 text-amber-500 hover:text-white text-xl transition duration-300">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-gray-800/30 rounded-xl p-8 border border-gray-700/50 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-8 pb-3 border-b border-amber-500/30">Send Us a Message</h2>
            
            {submitSuccess ? (
              <div className="bg-green-900/40 border border-green-700 rounded-lg p-6 mb-6 text-center">
                <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h4>
                <p className="text-green-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="+252 61 2345678"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 text-sm">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg font-semibold py-3 px-8 rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Map Section at the Bottom */}
        <div className="rounded-xl overflow-hidden shadow-2xl mb-12">
          <div className="flex items-center justify-between bg-gradient-to-r from-amber-600 to-amber-700 p-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white text-xl" />
              <h2 className="text-white text-xl font-bold">Our Location in Mogadishu</h2>
            </div>
            <p className="text-amber-100 hidden md:block">Zoom in to see our headquarters</p>
          </div>
          <div className="w-full h-[400px] md:h-[500px] bg-gray-900">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.44827899822!2d45.28789669999999!3d2.0407795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5842593136252b%3A0x3e8335b7d7d5973f!2sMogadishu!5e0!3m2!1sen!2sso!4v1717958852072!5m2!1sen!2sso" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe>
          </div>
        </div>
        
        {/* Additional Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <FaBuilding className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Headquarters</h3>
            </div>
            <p className="text-gray-300 mb-2">123 Business Avenue</p>
            <p className="text-gray-300">Mogadishu, Somalia</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <FaHeadset className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Customer Support</h3>
            </div>
            <p className="text-gray-300 mb-2">support@yourcompany.com</p>
            <p className="text-gray-300">+252 61 8765432</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <FaEnvelope className="text-amber-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Business Inquiries</h3>
            </div>
            <p className="text-gray-300 mb-2">partnerships@yourcompany.com</p>
            <p className="text-gray-300">+252 61 5555555</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;