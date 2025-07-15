

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