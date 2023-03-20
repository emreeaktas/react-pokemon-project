import { useState } from "react";
import "./App.css";
import "./utilities.css";

function App() {
  const [pokemonName, setName] = useState("");
  const [pokemonType, setType] = useState("");
  const [pokemonPower, setPower] = useState("");
  const [entries, setEntries] = useState([]);

  const [nameError, setNameError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [powerError, setPowerError] = useState(false);

  const handleClear = () => {
    setEntries("");
    setName("");
    setType("");
    setPower("");
    setNameError("");
    setTypeError("");
    setPowerError("");
  };
  const handleClearPokemon = (pokemonId) => {
    setEntries((previousEntries) => {
      previousEntries.filter((entries) => entries.id !== pokemonId);
    });
  };
  const handleCreatePokemon = (event) => {
    event.preventDefault();
    setNameError(false);
    setTypeError(false);
    setPowerError(false);
    if (pokemonName && pokemonType && pokemonPower) {
      setEntries([
        ...entries,
        {
          id: `${Date.now()}${Math.floor(Math.random() * 1000)}`,
          name: pokemonName,
          type: pokemonType,
          power: pokemonPower,
        },
      ]);
      setName("");
      setType("");
      setPower("");
    } else {
      !pokemonName && setNameError(true);
      !pokemonType && setTypeError(true);
      !pokemonPower && setPowerError(true);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Welcome to Pokemon World!</h1>
        <h2>Create a Pokemon:</h2>
      </header>
      <form className="d-flex flex-column">
        <label>Pokemon Name: </label>
        <input
          type="text"
          placeholder="Enter a Pokemon Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={pokemonName}
        />
        {nameError && (
          <span className="error-span">Please fill the field! </span>
        )}
        <label>Pokemon Type: </label>
        <input
          type="text"
          onChange={(e) => {
            setType(e.target.value);
          }}
          placeholder="Enter a Pokemon Type"
          value={pokemonType}
        />
        {typeError && (
          <span className="error-span">Please fill the field! </span>
        )}
        <label>Pokemon Power: </label>
        <input
          type="number"
          placeholder="Enter Pokemon Power"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || (value >= 1 && value <= 1000)) {
              setPower(value);
            }
          }}
          value={pokemonPower}
        />
        {powerError && (
          <span className="error-span">Please fill the field! </span>
        )}
        <div className="button-container d-flex justify-content-center align-items-center">
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

      {entries.length !== 0 &&
        entries.map((entry) => (
          <div
            key={entry.id}
            className="created-pokemon d-flex flex-wrap justify-content-start"
          >
            <ul className="ul-class">
              <h2 className="card-number">id #{entry.id}</h2>
              <li>
                {`Your Pokemon Name: ${entry.name} \n Your Pokemon Type: ${entry.type} \n Your Pokemon Power: ${entry.power}`}
              </li>
              <button
                className="escape-button btn"
                onClick={() => handleClearPokemon(entry.id)}
              >
                X
              </button>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default App;
