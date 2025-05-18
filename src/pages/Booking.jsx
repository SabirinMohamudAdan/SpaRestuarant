// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import bgImage from "../image/bg3.jpg";

// const ReservationForm = () => {
//   const [formData, setFormData] = useState({
//     date: '',
//     time: '',
//     persons: '',
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Reservation submitted:', formData);
//     // Add your form submission logic here
//   };

//   return (
//     <div 
//       className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8 relative"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
//       <div className="relative z-10 max-w-md mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-black bg-opacity-90 backdrop-blur-sm rounded-xl
//            shadow-2xl overflow-hidden p-8 w-[600px] h-[800px]"
//         >
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-white
//              uppercase tracking-wider mb-2  ">
//               BOOK A TABLE
//             </h1>
//             <h2 className="text-xl text-amber-500 font-medium">Reservation</h2>
//             <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 gap-6">
//               {/* Date and Time in one row */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-white text-sm font-bold mb-2" htmlFor="date">
//                     Date
//                   </label>
//                   <input
//                     type="date"
//                     id="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-white text-sm font-bold mb-2" htmlFor="time">
//                     Time
//                   </label>
//                   <input
//                     type="time"
//                     id="time"
//                     name="time"
//                     value={formData.time}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Persons */}
//               <div>
//                 <label className="block text-white text-sm font-bold mb-2" htmlFor="persons">
//                   Persons
//                 </label>
//                 <select
//                   id="persons"
//                   name="persons"
//                   value={formData.persons}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                   required
//                 >
//                   <option value="">Select number of persons</option>
//                   <option value="1">1 Person</option>
//                   <option value="2">2 Persons</option>
//                   <option value="3">3 Persons</option>
//                   <option value="4">4 Persons</option>
//                   <option value="5+">5+ Persons</option>
//                 </select>
//               </div>

//               {/* Name and Email */}
//               <div>
//                 <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                   required
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
//                   Any Special Requests?
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="3"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
//                   placeholder="Dietary restrictions, celebrations, etc."
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full bg-amber-500 hoverbg-[#da9360] text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
//               >
//                 RESERVE NOW
//               </motion.button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ReservationForm;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from "../image/bg3.jpg";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    persons: '',
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div 
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-md mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8 w-full"
        >
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mb-2">
              BOOK A TABLE
            </h1>
            <h2 className="text-lg sm:text-xl text-amber-500 font-medium">Reservation</h2>
            <div className="w-16 sm:w-20 h-1 bg-amber-500 mx-auto mt-3 sm:mt-4"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {/* Date and Time in one row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-white text-sm font-medium sm:font-bold mb-1 sm:mb-2" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium sm:font-bold mb-1 sm:mb-2" htmlFor="time">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>
              </div>

              {/* Persons */}
              <div>
                <label className="block text-white text-sm font-medium sm:font-bold mb-1 sm:mb-2" htmlFor="persons">
                  Persons
                </label>
                <select
                  id="persons"
                  name="persons"
                  value={formData.persons}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Select number of persons</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5+">5+ Persons</option>
                </select>
              </div>

              {/* Name and Email */}
              <div>
                <label className="block text-white text-sm font-medium sm:font-bold mb-1 sm:mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium sm:font-bold mb-1 sm:mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium sm:font-bold mb-1 sm:mb-2" htmlFor="message">
                  Any Special Requests?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Dietary restrictions, celebrations, etc."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 sm:py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-sm sm:text-base"
              >
                RESERVE NOW
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ReservationForm;