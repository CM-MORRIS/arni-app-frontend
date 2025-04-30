import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/nrw_transparent.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="relative flex justify-between items-center px-6 md:px-12 py-4 shadow-sm bg-white sticky top-0 z-50">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Neuro Rehab Wales Logo" className="h-20 object-contain" />
      </Link>
      <nav className="hidden md:flex items-center space-x-4 md:space-x-6">
        <Link to="/" className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded">Home</Link>
        <Link to="/blog" className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded">Blog</Link>
        <Link to="/contact" className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded">Contact Us</Link>
        <Link to="/book" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Book Now</Link>
        <Link to="/login" className="px-3 py-2 font-medium border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">Login/Signup</Link>
        <a href="https://www.instagram.com/neuro_rehab_wales" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-gray-700 hover:text-blue-600">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-gray-700 hover:text-blue-600">
          <FaFacebookF />
        </a>
      </nav>
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-2 p-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded">Home</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded">Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded">Contact Us</Link>
          <Link to="/book" onClick={() => setMenuOpen(false)} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Book Now</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="px-3 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded">Login/Signup</Link>
          <div className="flex space-x-4 pt-4">
            <a href="https://www.instagram.com/neuro_rehab_wales" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600"><FaInstagram /></a>
            <a href="https://www.facebook.com/..." target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600"><FaFacebookF /></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;