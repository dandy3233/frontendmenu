import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faInfoCircle, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

const Footer = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const bounce = {
    hover: { scale: 1.2, transition: { yoyo: Infinity, duration: 0.4 } },
  };

  return (
    <footer className="bg-gray-900 mt-12 shadow-xl">
      <motion.div
        className="container mx-auto py-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Contact Us</h3>
            <p className="text-gray-400">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email: <a href="mailto:dandytakilu@gmail.com" className="hover:text-orange-500">dandytakilu@gmail.com</a>
            </p>
            <p className="text-gray-400">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Phone: <a href="tel:+251927446171" className="hover:text-orange-500">(+251) 9274-46171</a>
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="/"
                  className="text-gray-400 hover:text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/menu"
                  className="text-gray-400 hover:text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faUtensils} className="mr-2" /> Menu
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#about"
                  className="text-gray-400 hover:text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/contact-us"
                  className="text-gray-400 hover:text-orange-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { href: 'https://facebook.com', icon: faFacebookF },
                { href: 'https://twitter.com', icon: faTwitter },
                { href: 'https://instagram.com', icon: faInstagram },
                { href: 'https://linkedin.com', icon: faLinkedin },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-500"
                  variants={bounce}
                  whileHover="hover"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-3xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} Panda Software Solutions. All rights reserved.
  </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
