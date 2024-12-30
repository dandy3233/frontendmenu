import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUtensils, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
      if (window.innerWidth > 1024) {
        setIsOpen(false); // Ensure the menu is closed on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const linkHover = {
    hover: { scale: 1.1, color: "#FFA500" },
  };

  return (
    <nav className="bg-black text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-4xl font-bold font-lobster text-orange-500 tracking-wide"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          LOCAL BURGER
        </motion.h1>

        {/* Toggle Button */}
        <button
          className="text-white block lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
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
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <AnimatePresence>
          {(isOpen || isDesktop) && (
            <motion.ul
              className={`absolute lg:static top-16 left-0 lg:flex lg:flex-row lg:space-x-6 bg-black lg:bg-transparent w-full lg:w-auto space-y-4 lg:space-y-0 text-center lg:text-left ${
                isOpen ? "flex flex-col" : "hidden lg:block"
              }`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <motion.li whileHover="hover" variants={linkHover}>
                <Link
                  to="/"
                  className="hover:text-orange-500 flex items-center justify-center lg:justify-start px-4 py-2"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkHover}>
                <Link
                  to="/menu"
                  className="hover:text-orange-500 flex items-center justify-center lg:justify-start px-4 py-2"
                >
                  <FontAwesomeIcon icon={faUtensils} className="mr-2" /> Menu
                </Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkHover}>
                <Link
                  to="/contact-us"
                  className="hover:text-orange-500 flex items-center justify-center lg:justify-start px-4 py-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
                </Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
