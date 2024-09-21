
import React, { useState } from 'react';

const arr="https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg"
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={arr}  alt={pokemon?.name} />
      <h3>{pokemon?.name}</h3>
    </div>
  );
};

export default PokemonCard;
