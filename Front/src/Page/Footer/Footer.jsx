import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-semibold text-yellow-500">
            Connect with Us!
          </h2>
          <div className="flex mt-4 md:mt-0">
            {/* Social Icons */}
            <a
              href="#"
              className="mx-2 text-2xl text-white hover:text-yellow-500 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="mx-2 text-2xl text-white hover:text-yellow-500 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="mx-2 text-2xl text-white hover:text-yellow-500 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="mx-2 text-2xl text-white hover:text-yellow-500 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="mx-2 text-2xl text-white hover:text-yellow-500 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-600"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-yellow-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-500 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-yellow-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
