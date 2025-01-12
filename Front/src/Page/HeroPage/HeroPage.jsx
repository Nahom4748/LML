import React, { useState } from "react";
import img from "../../assets/images/new1.png";
import logo from "../../assets/images/icons/Logo.png"; // Add your logo path

const services = [
  {
    title: "Quick Diagnostic",
    description:
      "Need a service? Save time and find out what's wrong with your device. We provide expert repair services for Apple products, including iPhones, iPads, and MacBooks.",
  },
  {
    title: "iPhone Repair",
    description:
      "From cracked screens to battery issues, we provide efficient and professional iPhone repairs, ensuring your device is back to working condition in no time!",
  },
  {
    title: "MacBook Repair",
    description:
      "Expert repairs for MacBooks, including screen replacements, logic board fixes, and much more. Get your MacBook working like new with our quick services.",
  },
];

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // Track hover state for the component

  // Update the cursor position to make the logo follow it
  const handleMouseMove = (e) => {
    if (isHovered) {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  // Log the service title when a service is hovered
  const handleServiceHover = (serviceTitle) => {
    console.log(`Hovered on: ${serviceTitle}`);
  };

  return (
    <section
      className="bg-black text-yellow-400 text-center py-24 relative overflow-hidden h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Rotating Logo */}
      <div
        className="absolute"
        style={{
          left: cursorPosition.x - 30, // Offset the logo to make it align with the cursor
          top: cursorPosition.y - 30,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className={`w-16 h-16 opacity-80 animate-spin-slow transition-all duration-200 ${
            isHovered ? "block" : "hidden"
          }`}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="h-96 w-96 bg-yellow-500 opacity-20 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Left Content */}
        <div className="flex-1 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight animate__fadeInDown">
            Masterful Repairs with Unmatched Precision
          </h1>
          <p className="mb-6 text-lg md:text-xl animate__fadeIn">
            We provide expert repair services for Apple products, including
            iPhones, iPads, and MacBooks. Whether it's a cracked screen, battery
            replacement, or water damage, we have you covered with quick,
            professional fixes.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl">
              Let's Talk
            </button>
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-12 md:mt-0">
          <img
            src={img}
            alt="Hero"
            className="rounded-lg shadow-xl animate__fadeInUp"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
