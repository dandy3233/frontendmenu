import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // For navigation
import axiosInstance from '../utils/axios';

const Menu = () => {
  const [burgers, setBurgers] = useState([]);
  const [filteredBurgers, setFilteredBurgers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const navigate = useNavigate(); // Initialize the navigate function

  // Fetch burger data from the backend
  useEffect(() => {
    axiosInstance.get('/burgers/')
      .then((response) => {
        setBurgers(response.data);
        setFilteredBurgers(response.data); // Set the initial filtered burgers
      })
      .catch((error) => {
        console.error('There was an error fetching the burger data!', error);
      });
  }, []);

  // Filter burgers based on the selected filter
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    if (event.target.value === 'All') {
      setFilteredBurgers(burgers);
    } else {
      setFilteredBurgers(burgers.filter((burger) => burger.type === event.target.value));
    }
  };

  // Handle navigation to the full menu page
  const goToAllMenu = () => {
    navigate('/all-menu'); // Replace '/all-menu' with your actual route for the full menu page
  };

  return (
    <motion.section
      id="menu"
      className="py-16 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500 mb-12 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Make Yourself At Home
        </motion.h2>

        <div className="flex justify-end mb-6">
          <motion.select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="bg-gray-800 text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
            whileFocus={{ borderColor: "#FF7F50", scale: 1.05 }}
          >
            <option value="All">All Burgers</option>
            <option value="Street">Street Burgers</option>
            <option value="Cheese">Cheese Burgers</option>
            <option value="Veggie">Veggie Burgers</option>
            <option value="BBQ">BBQ Burgers</option>
            <option value="Mushroom">Mushroom Burgers</option>
          </motion.select>
        </div>

        {filteredBurgers.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {filteredBurgers.map((burger, index) => (
              <motion.div
                key={index}
                className="relative group text-center bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 127, 80, 0.5)" }}
              >
                <img
                  src={burger.image}
                  alt={burger.name}
                  className="w-full h-40 sm:h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 group-hover:text-white">
                  {burger.name}
                </h3>
                <p className="text-md sm:text-lg text-gray-300 group-hover:text-white mt-2">
                  {burger.price}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            className="text-lg sm:text-xl font-medium text-gray-400 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            No burgers available at the moment!
          </motion.p>
        )}
      </div>

      <div className="flex justify-center items-center mt-8">
        <motion.button
          onClick={goToAllMenu}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition transform hover:scale-110"
          whileHover={{ scale: 1.2, backgroundColor: "#FF7F50" }}
          whileTap={{ scale: 0.9 }}
        >
          Full Menu
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Menu;
