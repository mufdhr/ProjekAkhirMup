import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Welcome to <span className="text-pink-500">Send A Say</span></h1>
        <p className="mt-4 text-lg text-gray-600">Kirim Pesan Untuk Seseorang.</p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <a 
            href="/events" 
            className="px-6 py-3 text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 transition-all"
          >
            View Say
          </a>
          <a 
            href="/create-event" 
            className="px-6 py-3 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-all"
          >
            Create Say
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;