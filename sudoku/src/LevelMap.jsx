import React from 'react';

const LevelMap = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/space-map-background.jpg')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Central Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Galaxy Map</h1>
        <p className="text-xl">Select a level to start your adventure!</p>

        {/* Example of Level Buttons */}
        <div className="mt-6">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg m-2 hover:bg-blue-700">
            Level 1
          </button>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg m-2 hover:bg-blue-700">
            Level 2
          </button>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg m-2 hover:bg-blue-700">
            Level 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default LevelMap;
