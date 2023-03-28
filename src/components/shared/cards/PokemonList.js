import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ entries, handleClearPokemon }) => {
  return (
    <div className="card-container d-flex flex-wrap justify-content-start">
      {entries.length !== 0 &&
        entries.map((entry) => (
          <PokemonCard
            key={entry.id}
            entry={entry}
            handleClearPokemon={handleClearPokemon}
          />
        ))}
    </div>
  );
};

export default PokemonList;
