import React from "react";
import { motion } from "framer-motion";
import imageSrc from "../assets/image.png"; // Adjust path based on your structure

const Hero = () => {
  return (
    <section
      className="relative hero h-screen flex items-center justify-center bg-black bg-opacity-50"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Add overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      {/* Animated Text Content */}
      <motion.div
        className="relative text-center text-white p-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide text-orange-400 drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          THE TASTIEST BURGER IN TOWN
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Make your mouth water with our new Street Burger!
        </motion.p>
        <motion.a
          href="/menu"
          className="bg-orange-500 hover:bg-orange-600 py-2 px-6 mt-8 inline-block text-lg font-bold rounded-lg transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ORDER NOW
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
