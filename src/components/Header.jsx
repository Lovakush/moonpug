import React, { useState } from "react";
import logo from '../assets/moonpug.webp'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img
            src= {logo}
            alt="MoonPug Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-xl font-bold">MoonPug</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#contract" className="hover:text-yellow-400">
            Contract Address
          </a>
          <a href="#how-to-buy" className="hover:text-yellow-400">
            How to Buy
          </a>
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Buy Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <a
            href="#home"
            className="block py-2 hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#contract"
            className="block py-2 hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contract Address
          </a>
          <a
            href="#how-to-buy"
            className="block py-2 hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            How to Buy
          </a>
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 bg-red-500 hover:bg-red-600 text-center text-white rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Buy Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
