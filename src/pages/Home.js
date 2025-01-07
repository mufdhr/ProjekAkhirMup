import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          .spin {
            animation: spin 6s linear infinite;
          }
        `}
      </style>
      {/* Heading */}
      <div className="flex items-center mb-8">
        <img
          src="notes.jpg"
          alt="Logo"
          className="w-16 h-16 mr-4 spin"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome To
          </h1>
          <h1 className="text-5xl font-bold text-pink-500">SendASay</h1>
        </div>
      </div>
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
