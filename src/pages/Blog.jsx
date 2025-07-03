// import React from 'react';
// import { motion } from "framer-motion";
// import blog1 from "../image/ch1.jpg";
// import blog2 from "../image/ch4.jpg";
// import blog3 from "../image/chef1.jpg";
// import blog4 from "../image/buker.jpg";

// // Animation Variants
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const staggerContainer = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const hoverCard = {
//   rest: { 
//     y: 0,
//     scale: 1,
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
//   },
//   hover: { 
//     y: -8,
//     scale: 1.02,
//     boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
//     transition: { 
//       duration: 0.4,
//       ease: [0.25, 0.1, 0.25, 1]
//     }
//   }
// };

// function Blog() {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "The Art of Somali Spice Blending",
//       excerpt: "Discover the ancient techniques behind our signature spice mixtures that define Somali cuisine.",
//       date: "June 15, 2025",
//       category: "Culinary Arts",
//       image: blog1,
//       readTime: "4 min read"
//     },
//     {
//       id: 2,
//       title: "Sustainable Sourcing: Our Farm Partners",
//       excerpt: "How we're building relationships with local farmers to bring you the freshest ingredients.",
//       date: "May 28, 2025",
//       category: "Sustainability",
//       image: blog2,
//       readTime: "6 min read"
//     },
//     {
//       id: 3,
//       title: "Behind the Scenes: A Day in Our Kitchen",
//       excerpt: "Follow our executive chef through a typical day of creating culinary masterpieces.",
//       date: "May 12, 2025",
//       category: "Behind Scenes",
//       image: blog3,
//       readTime: "5 min read"
//     },
//     {
//       id: 4,
//       title: "The Perfect Pairing: Somali Tea Traditions",
//       excerpt: "Explore the cultural significance and preparation of traditional Somali shaah.",
//       date: "April 30, 2025",
//       category: "Culture",
//       image: blog4,
//       readTime: "3 min read"
//     }
//   ];

//   const categories = [
//     "Culinary Arts",
//     "Recipes",
//     "Sustainability",
//     "Events",
//     "Culture",
//     "Behind Scenes"
//   ];

//   return (
//     <div className="bg-[#0c0c0c] py-16 sm:py-20 md:py-24 lg:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-12 sm:mb-16 md:mb-20"
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-widest mb-2">
//             Culinary Insights
//           </p>
//           <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             The Savory Journal
//           </h2>
//           <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Main Content */}
//           <div className="lg:w-2/3">
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-2 gap-8"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//             >
//               {blogPosts.map((post) => (
//                 <motion.article 
//                   key={post.id}
//                   variants={fadeIn}
//                   className="group"
//                   initial="rest"
//                   whileHover="hover"
//                   animate="rest"
//                 >
//                   <motion.div 
//                     className="bg-black rounded-xl overflow-hidden border border-gray-800 h-full flex flex-col"
//                     variants={hoverCard}
//                   >
//                     <div className="overflow-hidden">
//                       <motion.img 
//                         src={post.image} 
//                         alt={post.title}
//                         className="w-full h-56 object-cover"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.4 }}
//                       />
//                     </div>
//                     <div className="p-6 flex flex-col flex-grow">
//                       <div className="flex justify-between items-center mb-3">
//                         <span className="text-amber-500 text-xs font-medium tracking-wide px-2 py-1 bg-amber-500/10 rounded-full">
//                           {post.category}
//                         </span>
//                         <span className="text-gray-400 text-xs">
//                           {post.date}
//                         </span>
//                       </div>
//                       <h3 className="text-white text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
//                         {post.title}
//                       </h3>
//                       <p className="text-gray-400 mb-4 flex-grow">
//                         {post.excerpt}
//                       </p>
//                       <div className="flex justify-between items-center pt-4 border-t border-gray-800">
//                         <span className="text-gray-500 text-sm">
//                           {post.readTime}
//                         </span>
//                         <motion.button
//                           className="text-amber-500 hover:text-amber-400 font-medium text-sm flex items-center"
//                           whileHover={{ x: 5 }}
//                         >
//                           Read More
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                           </svg>
//                         </motion.button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.article>
//               ))}
//             </motion.div>
            
//             {/* Pagination */}
//             <div className="mt-12 flex justify-center">
//               <nav className="flex items-center space-x-1">
//                 <button className="w-10 h-10 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 rounded-full">
//                   &lt;
//                 </button>
//                 <button className="w-10 h-10 flex items-center justify-center bg-amber-500 text-white rounded-full">
//                   1
//                 </button>
//                 <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-full">
//                   2
//                 </button>
//                 <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-full">
//                   3
//                 </button>
//                 <span className="px-2 text-gray-600">...</span>
//                 <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 rounded-full">
//                   8
//                 </button>
//                 <button className="w-10 h-10 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 rounded-full">
//                   &gt;
//                 </button>
//               </nav>
//             </div>
//           </div>
          
//           {/* Sidebar */}
//           <div className="lg:w-1/3">
//             <motion.div 
//               className="bg-black/40 border border-gray-800 rounded-xl p-6 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-white text-lg font-bold mb-4 pb-3 border-b border-gray-800">
//                 Categories
//               </h3>
//               <ul className="space-y-3">
//                 {categories.map((category, index) => (
//                   <li key={index} className="flex justify-between">
//                     <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
//                       {category}
//                     </a>
//                     <span className="text-gray-600">12</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
            
//             <motion.div 
//               className="bg-black/40 border border-gray-800 rounded-xl p-6 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-white text-lg font-bold mb-4 pb-3 border-b border-gray-800">
//                 Popular Posts
//               </h3>
//               <div className="space-y-5">
//                 <a href="#" className="flex group">
//                   <div className="flex-shrink-0 mr-4">
//                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//                   </div>
//                   <div>
//                     <h4 className="text-white group-hover:text-amber-400 transition-colors mb-1">
//                       The History of Somali Coffee
//                     </h4>
//                     <p className="text-gray-500 text-sm">June 2, 2025</p>
//                   </div>
//                 </a>
//                 <a href="#" className="flex group">
//                   <div className="flex-shrink-0 mr-4">
//                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//                   </div>
//                   <div>
//                     <h4 className="text-white group-hover:text-amber-400 transition-colors mb-1">
//                       Seasonal Menu Changes Explained
//                     </h4>
//                     <p className="text-gray-500 text-sm">May 18, 2025</p>
//                   </div>
//                 </a>
//                 <a href="#" className="flex group">
//                   <div className="flex-shrink-0 mr-4">
//                     <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//                   </div>
//                   <div>
//                     <h4 className="text-white group-hover:text-amber-400 transition-colors mb-1">
//                       Chef's Table Experience
//                     </h4>
//                     <p className="text-gray-500 text-sm">April 25, 2025</p>
//                   </div>
//                 </a>
//               </div>
//             </motion.div>
            
//             <motion.div 
//               className="bg-gradient-to-r from-amber-900/60 to-amber-800/30 border border-amber-800/50 rounded-xl p-6"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <div className="text-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <h3 className="text-white text-xl font-bold mb-3">
//                   Culinary Newsletter
//                 </h3>
//                 <p className="text-amber-100 mb-5">
//                   Get exclusive recipes, chef insights, and event invites
//                 </p>
//                 <div className="mb-4">
//                   <input 
//                     type="email" 
//                     placeholder="Your email address" 
//                     className="w-full px-4 py-3 bg-black/30 text-white placeholder-gray-400 rounded-lg border border-amber-700/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
//                   />
//                 </div>
//                 <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
//                   Subscribe
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;

// -------------------

import React, { useState, useEffect } from 'react';
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
  // Initial blog data
  const initialBlogPosts = [
    {
      id: 1,
      title: "The Art of Somali Spice Blending",
      excerpt: "Discover the ancient techniques behind our signature spice mixtures that define Somali cuisine.",
      date: "June 15, 2025",
      category: "Culinary Arts",
      image: blog1,
      readTime: "4 min read",
      views: 1243,
      comments: 18
    },
    {
      id: 2,
      title: "Sustainable Sourcing: Our Farm Partners",
      excerpt: "How we're building relationships with local farmers to bring you the freshest ingredients.",
      date: "May 28, 2025",
      category: "Sustainability",
      image: blog2,
      readTime: "6 min read",
      views: 987,
      comments: 12
    },
    {
      id: 3,
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Follow our executive chef through a typical day of creating culinary masterpieces.",
      date: "May 12, 2025",
      category: "Behind Scenes",
      image: blog3,
      readTime: "5 min read",
      views: 2156,
      comments: 24
    },
    {
      id: 4,
      title: "The Perfect Pairing: Somali Tea Traditions",
      excerpt: "Explore the cultural significance and preparation of traditional Somali shaah.",
      date: "April 30, 2025",
      category: "Culture",
      image: blog4,
      readTime: "3 min read",
      views: 1765,
      comments: 15
    },
    {
      id: 5,
      title: "Somali Coastal Cuisine: Seafood Specialties",
      excerpt: "Discover our coastal-inspired dishes featuring the freshest catches of the day.",
      date: "June 22, 2025",
      category: "Recipes",
      image: blog1,
      readTime: "5 min read",
      views: 1321,
      comments: 9
    },
    {
      id: 6,
      title: "The Art of Traditional Somali Bread Making",
      excerpt: "Learn about the cultural significance and techniques of authentic Somali bread.",
      date: "June 18, 2025",
      category: "Culinary Arts",
      image: blog2,
      readTime: "4 min read",
      views: 1897,
      comments: 22
    },
    {
      id: 7,
      title: "Zero-Waste Kitchen Initiatives",
      excerpt: "How we're reducing food waste and promoting sustainability in our restaurant.",
      date: "June 10, 2025",
      category: "Sustainability",
      image: blog3,
      readTime: "7 min read",
      views: 1456,
      comments: 17
    },
    {
      id: 8,
      title: "Somali Wedding Feast Traditions",
      excerpt: "Exploring the rich culinary traditions of Somali wedding celebrations.",
      date: "May 30, 2025",
      category: "Culture",
      image: blog4,
      readTime: "6 min read",
      views: 2012,
      comments: 26
    }
  ];

  const categories = [
    "All Posts",
    "Culinary Arts",
    "Recipes",
    "Sustainability",
    "Events",
    "Culture",
    "Behind Scenes"
  ];

  // State management
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [filteredPosts, setFilteredPosts] = useState(initialBlogPosts);
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [popularPosts, setPopularPosts] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  // Calculate category counts
  useEffect(() => {
    const counts = {};
    initialBlogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    counts["All Posts"] = initialBlogPosts.length;
    setCategoryCounts(counts);
  }, []);

  // Filter posts by category
  useEffect(() => {
    if (activeCategory === "All Posts") {
      setFilteredPosts(initialBlogPosts);
    } else {
      const filtered = initialBlogPosts.filter(post => post.category === activeCategory);
      setFilteredPosts(filtered);
    }
    setCurrentPage(1);
  }, [activeCategory]);

  // Apply search filter
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(activeCategory === "All Posts" ? initialBlogPosts : 
        initialBlogPosts.filter(post => post.category === activeCategory));
    } else {
      const filtered = initialBlogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
    setCurrentPage(1);
  }, [searchQuery]);

  // Sort posts
  useEffect(() => {
    let sortedPosts = [...filteredPosts];
    
    switch(sortOption) {
      case "newest":
        sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "popular":
        sortedPosts.sort((a, b) => b.views - a.views);
        break;
      case "most-commented":
        sortedPosts.sort((a, b) => b.comments - a.comments);
        break;
      default:
        break;
    }
    
    setFilteredPosts(sortedPosts);
  }, [sortOption]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Get popular posts (top 3 by views)
  useEffect(() => {
    const popular = [...initialBlogPosts]
      .sort((a, b) => b.views - a.views)
      .slice(0, 3);
    setPopularPosts(popular);
  }, []);

  // Newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      // Simulate API call
      setTimeout(() => {
        setSubscribed(true);
        setEmail("");
        // Reset after 3 seconds
        setTimeout(() => setSubscribed(false), 3000);
      }, 500);
    }
  };

  return (
    <div className="bg-[#0c0c0c] py-16 sm:py-20 md:py-24 lg:py-28" id="blog">
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
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our culinary journey through stories, recipes, and behind-the-scenes glimpses of our restaurant's passion for authentic Somali cuisine.
          </p>
        </motion.div>

        {/* Blog Controls */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? "bg-amber-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category} {categoryCounts[category] ? `(${categoryCounts[category]})` : ''}
              </button>
            ))}
          </div>
          
          {/* Search and Sort */}
          <div className="flex gap-4 flex-wrap">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select
              className="bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="most-commented">Most Commented</option>
            </select>
            
            <div className="flex">
              <button 
                className={`px-3 py-2 rounded-l-lg ${viewMode === 'grid' ? 'bg-amber-500' : 'bg-gray-800'}`}
                onClick={() => setViewMode('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                className={`px-3 py-2 rounded-r-lg ${viewMode === 'list' ? 'bg-amber-500' : 'bg-gray-800'}`}
                onClick={() => setViewMode('list')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className={`${viewMode === 'grid' ? 'lg:w-2/3' : 'w-full'}`}>
            {filteredPosts.length === 0 ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-white text-xl font-bold mt-4">No posts found</h3>
                <p className="text-gray-400 mt-2">Try a different search or category</p>
                <button 
                  className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                  onClick={() => {
                    setActiveCategory("All Posts");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <>
                <motion.div 
                  className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2' : 'space-y-8'} gap-8`}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {currentPosts.map((post) => (
                    <motion.article 
                      key={post.id}
                      variants={fadeIn}
                      className="group"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <motion.div 
                        className={`bg-black rounded-xl overflow-hidden border border-gray-800 ${viewMode === 'grid' ? 'h-full flex flex-col' : 'flex flex-col md:flex-row'}`}
                        variants={hoverCard}
                      >
                        <div className={`overflow-hidden ${viewMode === 'grid' ? '' : 'md:w-1/3'}`}>
                          <motion.img 
                            src={post.image} 
                            alt={post.title}
                            className={`w-full ${viewMode === 'grid' ? 'h-56' : 'h-64 md:h-full'} object-cover`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                        <div className={`p-6 flex flex-col flex-grow ${viewMode === 'grid' ? '' : 'md:w-2/3'}`}>
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
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {post.views.toLocaleString()}
                              </span>
                              <span className="flex items-center text-gray-500 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                {post.comments}
                              </span>
                              <span className="text-gray-500 text-sm">
                                {post.readTime}
                              </span>
                            </div>
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
                {pageNumbers.length > 1 && (
                  <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-1">
                      <button 
                        className="w-10 h-10 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 rounded-full disabled:opacity-30"
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : currentPage)}
                        disabled={currentPage === 1}
                      >
                        &lt;
                      </button>
                      
                      {pageNumbers.map(number => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`w-10 h-10 flex items-center justify-center rounded-full ${
                            currentPage === number
                              ? 'bg-amber-500 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800'
                          }`}
                        >
                          {number}
                        </button>
                      ))}
                      
                      <button 
                        className="w-10 h-10 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 rounded-full disabled:opacity-30"
                        onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
                        disabled={currentPage === pageNumbers.length}
                      >
                        &gt;
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Sidebar */}
          {viewMode === 'grid' && (
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
                      <button 
                        className={`text-left w-full ${activeCategory === category ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'} transition-colors`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                      <span className="text-gray-600">{categoryCounts[category] || 0}</span>
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
                  {popularPosts.map((post, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="flex group"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="flex-shrink-0 mr-4">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="text-white group-hover:text-amber-400 transition-colors mb-1 text-sm font-medium">
                          {post.title}
                        </h4>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-amber-500 text-xs mr-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {post.views.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
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
                  
                  {subscribed ? (
                    <div className="bg-green-500/20 text-green-400 py-3 px-4 rounded-lg mb-4">
                      Thank you for subscribing!
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe}>
                      <div className="mb-4">
                        <input 
                          type="email" 
                          placeholder="Your email address" 
                          className="w-full px-4 py-3 bg-black/30 text-white placeholder-gray-400 rounded-lg border border-amber-700/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-black/40 border border-gray-800 rounded-xl p-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white text-lg font-bold mb-4 pb-3 border-b border-gray-800">
                  Recent Comments
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">Ahmed M.</h4>
                      <p className="text-gray-400 text-xs mb-1">on <a href="#" className="text-amber-500 hover:underline">Somali Tea Traditions</a></p>
                      <p className="text-gray-300 text-sm">"This brought back memories of my grandmother's kitchen!"</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">Fatima A.</h4>
                      <p className="text-gray-400 text-xs mb-1">on <a href="#" className="text-amber-500 hover:underline">Sustainable Sourcing</a></p>
                      <p className="text-gray-300 text-sm">"Love your commitment to local farmers!"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;