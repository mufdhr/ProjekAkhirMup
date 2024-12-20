import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Selamat Datang di <span className="text-pink-500">SendASay</span>
      </h1>
      
      {/* Buttons */}
      <div className="flex space-x-8">
        <button
          onClick={() => navigate("/create")}
          className="px-6 py-3 bg-pink-400 text-white text-lg font-semibold rounded-md shadow-md hover:bg-pink-600 transform hover:scale-105 transition duration-200"
        >
          Create Say
        </button>
        <button
          onClick={() => navigate("/view")}
          className="px-6 py-3 bg-gray-300 text-gray-800 text-lg font-semibold rounded-md shadow-md hover:bg-gray-400 transform hover:scale-105 transition duration-200"
        >
          View Say
        </button>
      </div>
    </div>
  );
};

export default Home;
