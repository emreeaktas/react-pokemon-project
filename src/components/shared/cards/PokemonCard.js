import React from "react";

const PokemonCard = ({ entry, handleClearPokemon }) => {
  return (
    <ul className="created-list">
      <h2 className="card-number">id #{entry.id}</h2>
      <li>
        {`Your Pokemon Name: ${entry.pokemonName} \n Your Pokemon Type: ${entry.pokemonType} \n Your Pokemon Power: ${entry.pokemonPower}`}
      </li>
      <button
        className="escape-button btn"
        onClick={() => handleClearPokemon(entry.id)}
      >
        X
      </button>
    </ul>
  );
};
export default PokemonCard;
