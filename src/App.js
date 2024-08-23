// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const promises = response.data.results.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return details.data;
        });
        const results = await Promise.all(promises);
        setPokemons(results);
        setFilteredPokemons(results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    const results = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(results);
  }, [searchTerm, pokemons]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Pokémon List</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
