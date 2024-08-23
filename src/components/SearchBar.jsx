
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      value={searchTerm}
      onChange={onSearchChange}
      className="p-2 border-2 border-gray-300 rounded-lg w-full max-w-md text-lg"
    />
  );
};

export default SearchBar;
