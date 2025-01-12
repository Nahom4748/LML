import React from "react";
import { motion } from "framer-motion";

// Importing images directly
import appleLogo from "../../assets/images/apple.png";
import samsungLogo from "../../assets/images/samsung.png";
import lgLogo from "../../assets/images/lg.png";
import googleLogo from "../../assets/images/google.png";

const logos = [
  { id: 1, name: "Apple", src: appleLogo },
  { id: 2, name: "Samsung", src: samsungLogo },
  { id: 3, name: "LG", src: lgLogo },
  { id: 4, name: "Google", src: googleLogo },
];

const WeRepairLog = () => {
  return (
    <section className="w-full overflow-hidden bg-black py-16">
      <div className="container mx-auto text-center">
        {/* Title Section with Yellow Text */}
        <h2 className="text-4xl font-semibold text-yellow-500 mb-8">
          We Repair
        </h2>

        <motion.div
          className="flex items-center justify-center space-x-12" // Centered logos with smaller spacing
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15, // Faster motion duration (reduced from 25 to 15)
              ease: "easeInOut",
            },
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 group transition-transform duration-500 ease-in-out transform hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-28 h-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-125 filter sepia(1) saturate(5) hue-rotate(-30deg)"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeRepairLog;
