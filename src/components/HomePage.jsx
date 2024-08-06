// src/components/HomePage.jsx
import React from 'react';

const HomePage = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-8 transition-opacity duration-700 ease-in-out">
        Welcome to Your Birthday Treasure Hunt!
      </h1>
      <p className="text-lg mb-6 text-gray-300">
        Embark on a quest to find your present. Click the button below to begin your adventure!
      </p>
      <button
        onClick={onStart}
        className="bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
      >
        Start
      </button>
    </div>
  );
};

export default HomePage;
