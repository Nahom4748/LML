import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/images/icons/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-yellow-500 py-4 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img
                className="h-10 w-10 rounded-full" // Added rounded-full to make the logo circular
                src={logo}
                alt="Logo"
              />
              <p className="sr-only">Website Title</p>
            </a>
          </div>

          {/* Navigation Menu for Desktop */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-8">
            {["Home", "Services", "Locations", "Contact"].map((item, index) => (
              <a
                key={index}
                aria-current="page"
                className="inline-block rounded-lg px-4 py-2 text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
                href={`${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-yellow-500 text-gray-900 shadow-md md:hidden"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ul className="flex flex-col space-y-4 p-4">
            {["Home", "Services", "Locations", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-white hover:text-yellow-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Contact Section (Icons for Facebook, LinkedIn, Instagram, and Email) */}
      <div className="flex justify-center gap-6 mt-6 md:hidden">
        <a
          href="mailto:info@example.com"
          className="text-gray-900 hover:text-white transition-colors duration-300"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-white transition-colors duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-white transition-colors duration-300"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-white transition-colors duration-300"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </header>
  );
};

export default Header;
