import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#eeeee4] shadow-md w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/logo.png" // Replace with the actual logo path
            alt="Brand Logo"
            className="w-20 h-20"
          />
          
        </div>

        {/* Toggle Button */}
        <button
          className="md:hidden text-blue-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#eeeee4] md:bg-transparent shadow-md md:shadow-none z-10 transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="border-b md:border-none border-lightGray">
            <Link
              to="/"
              className="block py-3 px-6 md:px-0 text-blue-500 hover:text-pink font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none border-lightGray">
            <Link
              to="/classes"
              className="block py-3 px-6 md:px-0 text-blue-500 hover:text-pink font-medium"
              onClick={() => setIsOpen(false)}
            >
              Classes
            </Link>
          </li>
          <li className="border-b md:border-none border-lightGray">
            <Link
              to="/gallery"
              className="block py-3 px-6 md:px-0 text-blue-500 hover:text-pink font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-3 px-6 md:px-0 text-blue-500 hover:text-pink font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 