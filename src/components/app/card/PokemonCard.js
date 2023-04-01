import React from "react";

const PokemonCard = ({ entry, handleDeletePokemon }) => {
  return (
    <ul className="created-list">
      <h2 className="card-number">id #{entry.id}</h2>
      <li>
        {`Your Pokemon Name: ${entry.name} \n Your Pokemon Type: ${entry.type} \n Your Pokemon Power: ${entry.power}`}
      </li>
      <button
        className="escape-button btn"
        onClick={() => handleDeletePokemon(entry.id)}
      >
        X
      </button>
    </ul>
  );
};
export default PokemonCard;
