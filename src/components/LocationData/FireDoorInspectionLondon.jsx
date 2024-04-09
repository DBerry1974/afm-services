import React from 'react';
import londonPostcodes from './londonPostcodes';

const FireDoorInspectionLondon = () => {
  return (
    <div className="fire-door-inspection-london max-w-7xl mx-auto px-4 py-10 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-4">Fire Door Inspection in London</h2>

      <h3 className="text-2xl text-white font-bold mb-4">Postcodes</h3>
      <div className="lg:grid lg:grid-cols-4 gap-2">
        {londonPostcodes.map((town, index) => (
          <div key={`towns-${index}`}>
            {/* Update the href to include the town name */}
            <a href={`/fire-door-inspection-london/${town.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-900 hover:bg-green-800 hover:text-white block p-2 bg-white">
            Fire Door Inspection {town.charAt(0).toUpperCase() + town.slice(1)}
</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FireDoorInspectionLondon;
 