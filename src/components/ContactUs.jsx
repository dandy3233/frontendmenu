import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact-us" className="py-16 bg-black">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500 mb-8 tracking-widest uppercase"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-orange-500 mb-8 text-2xl"
          variants={itemVariants}
        >
          Reach out to us at any of our locations. We’re here to assist with any inquiries you may have.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {[
            { city: 'Los Angeles', address: '4556 Brendan Ferry', region: 'Los Angeles, CA 90210' },
            { city: 'New York', address: '886 Walter Street', region: 'New York, NY 12345' },
            { city: 'Toronto', address: '7363 Cynthia Pass', region: 'Toronto, ON N3Y 4H8' },
            { city: 'London', address: '114 Cobble Lane', region: 'London N1 2EF' },
          ].map((location, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-semibold text-orange-500 mb-2">{location.city}</h3>
              <p className="text-gray-300">{location.address}</p>
              <p className="text-gray-300">{location.region}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
