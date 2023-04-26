import React, { useContext } from "react";
import PokemonCard from "../pokemon-card/PokemonCard";
import { PokemonContext } from "../../../context/pokemon-context/PokemonContext";

const PokemonList = () => {
  const { entries, isEntriesLoading } = useContext(PokemonContext);
  return (
    <div className="card-container d-flex flex-wrap justify-content-start">
      {isEntriesLoading ? (
        <p>Loading...</p>
      ) : (
        entries.length !== 0 &&
        entries.map((entry) => <PokemonCard key={entry.id} entry={entry} />)
      )}
    </div>
  );
};

export default PokemonList;
