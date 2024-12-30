import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';

const AllMenu = () => {
  const [burgers, setBurgers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch burger data from the backend
  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const response = await axiosInstance.get('/burgers/');
        if (response.data && Array.isArray(response.data)) {
          setBurgers(response.data);
        } else {
          setError('Unexpected data format received.');
        }
      } catch (err) {
        console.error('Error fetching burger data:', err);
        setError('Failed to load menu items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBurgers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <p className="text-orange-500 text-xl font-bold">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <p className="text-red-500 text-xl font-bold">{error}</p>
      </div>
    );
  }

  return (
    <section id="menu" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-500 mb-12 tracking-widest uppercase">
          Full Menu
        </h2>
        {burgers.length === 0 ? (
          <p className="text-gray-300 text-lg">No menu items available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {burgers.map((burger) => (
              <div
                key={burger.id || Math.random()} // Use unique id or fallback to random key
                className="relative group text-center bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-orange-500 transition duration-300"
              >
                <img
                  src={burger.image } // Fallback to default image
                  alt={burger.name }
                  className="w-full h-40 sm:h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 group-hover:text-white">
                  {burger.name}
                </h3>
                <p className="text-md sm:text-lg text-gray-300 group-hover:text-white mt-2">
                  {burger.price} Birr
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllMenu;
