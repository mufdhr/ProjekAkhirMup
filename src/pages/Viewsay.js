import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SayContext } from './SayContext'; 

const ViewSay = () => {
  const { says, setSays } = useContext(SayContext);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const newSays = says.filter((_, i) => i !== index);
    setSays(newSays);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-pink-200">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">View Say</h1>
      <div className="w-full max-w-3xl">
        {says.map((say, index) => (
          <div key={index} className="p-4 mb-4 border rounded-md bg-white shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Title: {say.title}</h2>
            <pre className="text-gray-600 mb-4 whitespace-pre-wrap">{say.note}</pre>
            <div className="flex space-x-4">
              <button onClick={() => navigate(`/edit/${index}`)} className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                Edit
              </button>
              <button onClick={() => handleDelete(index)} className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSay;
