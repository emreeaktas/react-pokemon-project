import React from "react";
import PokemonCard from "../pokemon-card/PokemonCard";

const PokemonList = ({ entries, handleDeletePokemon }) => {
  return (
    <div className="card-container d-flex flex-wrap justify-content-start">
      {entries.length !== 0 &&
        entries.map((entry) => (
          <PokemonCard
            key={entry.id}
            entry={entry}
            handleDeletePokemon={handleDeletePokemon}
          />
        ))}
    </div>
  );
};

export default PokemonList;
