import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokemonContext = createContext();

const PokemonProvider = () => {
  const [entries, setEntries] = useState([]);
  const [isEntriesLoading, setIsEntriesLoading] = useState(false);

  const deletePokemon = (pokemonId) => {
    setEntries((previousEntries) =>
      previousEntries.filter((entry) => entry.id !== pokemonId)
    );
  };

  const createPokemon = (pokemon) =>
    setEntries((prevEntries) => [
      ...prevEntries,
      { id: crypto.randomUUID(), ...pokemon },
    ]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setIsEntriesLoading(true);
        const response = await axios("http://localhost:5050/pokemonlist");
        setEntries(response.data);
        setIsEntriesLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        entries,
        isEntriesLoading,
        deletePokemon,
        createPokemon,
      }}
    ></PokemonContext.Provider>
  );
};

export default PokemonProvider;
