import React, { useEffect } from "react";
import { FaApple, FaPhoneAlt, FaLaptop, FaTablet } from "react-icons/fa"; // Importing icons
import AOS from "aos"; // Importing AOS for scroll animations
import { motion } from "framer-motion"; // Importing framer-motion for enhanced animations
import "aos/dist/aos.css"; // Importing AOS styles

const services = [
  {
    title: "Quick Diagnostic",
    description:
      "Need a service? Save time and find out what's wrong with your device. We provide expert repair services for Apple products, including iPhones, iPads, and MacBooks. Whether it's a cracked screen, battery replacement, or water damage, we have you covered.",
    icon: <FaApple className="text-4xl text-yellow-500" />,
  },
  {
    title: "iPhone Repair",
    description:
      "Whether it's a cracked screen, battery issue, or malfunctioning buttons, we provide efficient and professional iPhone repairs. Get your device back to working condition in no time!",
    icon: <FaPhoneAlt className="text-4xl text-yellow-500" />,
  },
  {
    title: "MacBook Repair",
    description:
      "From screen repairs to logic board issues, we offer expert MacBook repair services. Our technicians are trained to handle all kinds of problems, providing quick and reliable fixes.",
    icon: <FaLaptop className="text-4xl text-yellow-500" />,
  },
  {
    title: "iPad Repair",
    description:
      "iPads are a valuable investment, and we offer repairs for broken screens, battery replacements, and other technical issues. Our iPad repair services ensure your device is working like new.",
    icon: <FaTablet className="text-4xl text-yellow-500" />,
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <section className="py-12 bg-black text-white" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-10">
          Our Expert Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:bg-yellow-500 hover:text-black cursor-pointer"
              data-aos="fade-up" // AOS animation effect when the element appears
              data-aos-duration="1000" // Duration of the animation
              data-aos-delay={`${index * 100}`} // Stagger the animation based on index
              whileHover={{ scale: 1.05, rotate: 2 }} // Framer-motion hover effect with scale and rotation
              whileTap={{ scale: 0.95 }} // Framer-motion tap effect with scale
            >
              <div className="p-6 text-center">
                <motion.div
                  className="mb-4"
                  whileHover={{ y: -10, rotate: 15 }} // Animate icon on hover
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
