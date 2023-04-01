import React from "react";

const PokemonForm = ({
  pokemon,
  setPokemon,
  handleCreatePokemon,
  error,
  handleClear,
}) => {
  return (
    <form className="d-flex flex-column">
      <h2>Create a Pokemon:</h2>
      <div className="input-container d-flex flex-column">
        <label>Pokemon Name:</label>
        <input
          type="text"
          placeholder="Enter a Pokemon Name"
          onChange={(event) =>
            setPokemon((prevPokemon) => ({
              ...prevPokemon,
              name: event.target.value,
            }))
          }
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
          onChange={(event) =>
            setPokemon({ ...pokemon, type: event.target.value })
          }
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
            setPokemon({ ...pokemon, power: event.target.value })
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
          onClick={handleCreatePokemon}
        />
        <input
          className="btn-reset"
          type="reset"
          value="Reset"
          onClick={handleClear}
        />
      </div>
    </form>
  );
};

export default PokemonForm;
