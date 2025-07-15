// import Home from "./pages/Home"


// function App() {
  

//   return (
//     <>
//      <Home/>
       
//     </>
//   )
// }

// export default App



// import {  Router, Routes, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// // import Header from "."; // Assuming your Header component is in Header.js
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Book from "./pages/Book";
// import Event from "./pages/Event";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import Header from './components/Header';
// import MenuSection from './pages/Menus';

// function App() {
//   return (
//     <Router>
//       {/* <Header /> */}
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<MenuSection/>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/book" element={<Book />} />
//         <Route path="/event" element={<Event />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
// import Menu from "./pages/Menu";
import About from "./pages/About";

import Event from "./pages/Event";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from './components/Header';
import MenuSection from './pages/Menus';
import Footer from './components/Footer';
import ReservationForm from './pages/Booking';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<ReservationForm />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;