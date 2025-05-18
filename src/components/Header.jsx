// import React, { useState } from 'react'
// import { FiMenu, FiX } from 'react-icons/fi' // Import icons from react-icons

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navLinks = [
//     { name: 'Home /' , href: '/' },
//     { name: 'Menu ', href: '/menu' },
//     { name: 'About Us ', href: '/about' },
//     { name: 'Book ', href: '/book' },
//     { name: 'Event ', href: '/event' },
//     { name: 'Blog ', href: '/blog' },
//     { name: 'Contact ', href: '/contact' },
//   ]

//   return (
//     <header className="bg-black  bg-opacity shadow-sm sticky top-0 z-50 text-white ">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center ">
//             <h1 href="/" className="font-bold text-white text-4xl ">
//               SAPRI <span className='text-amber-500'>N</span>AA
            

// <p className="text-[15px] ml-2 flex items-center gap-2">
//   <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//   </svg>
//   Rest  & Cafe
//   <svg className="w-5 h-5  text-amber-500" fill="currentColor" viewBox="0 0 20 20">
//     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
//   </svg>
// </p>
//             </h1>
          
            
//           </div>
           
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8 py-6 px-20">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-white hover:text-amber-500 font-medium transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white  focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <FiX className="h-6 w-6" />
//               ) : (
//                 <FiMenu className="h-6 w-6 text-white text-3xl" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4">
//             <div className="flex flex-col space-y-3">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-white hover:text-indigo-600 font-medium py-2 
//                   px-4 rounded hover:bg-gray-50 transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header



// --------------------




import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home /', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/about' },
    { name: 'Book', href: '/book' },
    { name: 'Event', href: '/event' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-black bg-opacity shadow-sm sticky top-0 z-50 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-bold text-white text-4xl">
              SAPRI <span className='text-amber-500'>N</span>AA
              <p className="text-[15px] ml-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Rest & Cafe
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              </p>
            </Link>
          </div>
           
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 py-6 px-20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-amber-500 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6 text-white text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white hover:text-indigo-600 font-medium py-2 px-4 rounded hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;