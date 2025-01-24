import React from 'react';

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-bar mb-8 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search for products..."
        className="px-4 py-3 w-full sm:w-96 md:w-1/2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
