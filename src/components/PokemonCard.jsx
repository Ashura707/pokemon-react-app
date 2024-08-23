
import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img
        className="w-24 h-24 mx-auto"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
