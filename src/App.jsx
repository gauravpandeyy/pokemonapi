
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=105');
      setPokemon(response.data.results);
      setFilteredPokemon(response.data.results);
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const filtered = pokemon.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemon]);

  return (
    <div className="app">
      <h1>Pokémon Finder</h1>
      <input 
        type="text" 
        placeholder="Search Pokémon..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <div className="pokemon-container">
        {filteredPokemon.map((p, index) => (
          <PokemonCard key={index} pokemon={p} />
        ))}
      </div>
    </div>
  );
};

export default App;
