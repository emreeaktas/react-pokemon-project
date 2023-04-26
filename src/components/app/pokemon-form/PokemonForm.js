import React, { useContext, useState } from "react";
import { PokemonContext } from "../../../context/pokemon-context/PokemonContext";

const PokemonForm = ({ children }) => {
  const { createPokemon } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState({
    name: "",
    type: "",
    power: "",
  });

  const [error, setError] = useState({
    name: true,
    type: true,
    power: true,
  });
  const handleClear = () => {
    setPokemon({ name: "", type: "", power: "" });
    setEntries([]);
    setError({ name: true, type: true, power: true });
  };
  const updatePokemonInput = (pokemonProp) => {
    setPokemon((prevPokemon) => ({ ...prevPokemon, ...pokemonProp }));
  };

  const addPokemon = (event) => {
    event.preventDefault();
    setError({ ...pokemon });
    if (!Object.values(pokemon).some((value) => !value)) {
      createPokemon(pokemon);
      setPokemon({ name: "", type: "", power: "" });
    }
  };
  return (
    <form className="d-flex flex-column">
      <h2>Create a Pokemon:</h2>
      <div className="input-container d-flex flex-column">
        <label>Pokemon Name:</label>
        <input
          type="text"
          placeholder="Enter a Pokemon Name"
          onChange={(event) => updatePokemonInput({ name: event.target.value })}
          value={pokemon.name}
        />
        {!error.name && (
          <span className="error-span">Please fill this field!</span>
        )}
      </div>
      <div className="input-container d-flex flex-column">
        <label>Pokemon Type:</label>
        <input
          type="text"
          placeholder="Enter a Pokemon Type"
          onChange={(event) => updatePokemonInput({ type: event.target.value })}
          value={pokemon.type}
        />
        {!error.type && (
          <span className="error-span">Please fill this field!</span>
        )}
      </div>
      <div className="input-container d-flex flex-column">
        <label>Pokemon Power:</label>
        <input
          type="number"
          placeholder="Enter Pokemon Power"
          onChange={(event) =>
            updatePokemonInput({ power: event.target.value })
          }
          value={pokemon.power}
        />
        {!error.power && (
          <span className="error-span">Please fill this field!</span>
        )}
      </div>
      <div className="button-container d-flex justify-content-evenly">
        <input
          className="btn-submit"
          type="submit"
          value="Submit"
          onClick={addPokemon}
        />
        <input
          className="btn-reset"
          type="reset"
          value="Reset"
          onClick={handleClear}
        />
      </div>
      {children}
    </form>
  );
};

export default PokemonForm;
