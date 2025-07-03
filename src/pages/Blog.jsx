import React from 'react';
import { motion } from "framer-motion";
import blog1 from "../image/ch1.jpg";
import blog2 from "../image/ch4.jpg";
import blog3 from "../image/chef1.jpg";
import blog4 from "../image/buker.jpg";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const hoverCard = {
  rest: { 
    y: 0,
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
  },
  hover: { 
    y: -8,
    scale: 1.02,
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Somali Spice Blending",
      excerpt: "Discover the ancient techniques behind our signature spice mixtures that define Somali cuisine.",
      date: "June 15, 2025",
      category: "Culinary Arts",
      image: blog1,
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Sustainable Sourcing: Our Farm Partners",
      excerpt: "How we're building relationships with local farmers to bring you the freshest ingredients.",
      date: "May 28, 2025",
      category: "Sustainability",
      image: blog2,
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Follow our executive chef through a typical day of creating culinary masterpieces.",
      date: "May 12, 2025",
      category: "Behind Scenes",
      image: blog3,
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "The Perfect Pairing: Somali Tea Traditions",
      excerpt: "Explore the cultural significance and preparation of traditional Somali shaah.",
      date: "April 30, 2025",
      category: "Culture",
      image: blog4,
      readTime: "3 min read"
    }
  ];

  const categories = [
    "Culinary Arts",
    "Recipes",
    "Sustainability",
    "Events",
    "Culture",
    "Behind Scenes"
  ];

  return (
    <div className="bg-[#0c0c0c] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-widest mb-2">
            Culinary Insights
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Savory Journal
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {blogPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  variants={fadeIn}
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div 
                    className="bg-black rounded-xl overflow-hidden border border-gray-800 h-full flex flex-col"
                    variants={hoverCard}
                  >
                    <div className="overflow-hidden">
                      <motion.img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-56 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-amber-500 text-xs font-medium tracking-wide px-2 py-1 bg-amber-500/10 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                        <span className="text-gray-500 text-sm">
                          {post.readTime}
                        </span>
                        <motion.button
                          className="text-amber-500 hover:text-amber-400 font-medium text-sm flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button className="w-10 h-10 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 rounded-full">
                  &lt;
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-amber-500 text-white rounded-full">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-full">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-full">
                  3
                </button>
                <span className="px-2 text-gray-600">...</span>
                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-full">
                  8
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 rounded-full">
                  &gt;
                </button>
              </nav>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <motion.div 
              className="bg-black/40 border border-gray-800 rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-bold mb-4 pb-3 border-b border-gray-800">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between">
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                      {category}
                    </a>
                    <span className="text-gray-600">12</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 border border-gray-800 rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-bold mb-4 pb-3 border-b border-gray-800">
                Popular Posts
              </h3>
              <div className="space-y-5">
                <a href="#" className="flex group">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <div>
                    <h4 className="text-white group-hover:text-amber-400 transition-colors mb-1">
                      The History of Somali Coffee
                    </h4>
                    <p className="text-gray-500 text-sm">June 2, 2025</p>
                  </div>
                </a>
                <a href="#" className="flex group">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <div>
                    <h4 className="text-white group-hover:text-amber-400 transition-colors mb-1">
                      Seasonal Menu Changes Explained
                    </h4>
                    <p className="text-gray-500 text-sm">May 18, 2025</p>
                  </div>
                </a>
                <a href="#" className="flex group">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <div>
                    <h4 className="text-white group-hover:text-amber-400 transition-colors mb-1">
                      Chef's Table Experience
                    </h4>
                    <p className="text-gray-500 text-sm">April 25, 2025</p>
                  </div>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-amber-900/60 to-amber-800/30 border border-amber-800/50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-white text-xl font-bold mb-3">
                  Culinary Newsletter
                </h3>
                <p className="text-amber-100 mb-5">
                  Get exclusive recipes, chef insights, and event invites
                </p>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 bg-black/30 text-white placeholder-gray-400 rounded-lg border border-amber-700/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                  />
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;