import "./App.css";
import "./utilities.css";
import Header from "./components/shared/header/Header";
import Form from "./components/shared/form/Form";
import PokemonList from "./components/shared/cards/PokemonList";
import { useState } from "react";

//useRef kullanmak daha iyi olabilir.

function App() {
  const [pokemon, setPokemon] = useState({
    pokemonName: "",
    pokemonType: "",
    pokemonPower: "",
  });

  const [error, setError] = useState({
    nameError: true,
    typeError: true,
    powerError: true,
  });

  const [entries, setEntries] = useState([]);

  const handleClear = () => {
    setPokemon({ pokemonName: "", pokemonType: "", pokemonPower: "" });
    setEntries([]);
    setError({ nameError: false, typeError: false, powerError: false });
  };

  const handleCreatePokemon = (event) => {
    event.preventDefault();
    setError({ ...pokemon });
    if (!Object.values(pokemon).some((value) => !value)) {
      setEntries([
        ...entries,
        { id: `${Date.now()}${Math.floor(Math.random() * 1000)}`, ...pokemon },
      ]);
      setPokemon({ pokemonName: "", pokemonType: "", pokemonPower: "" });
    }
  };

  const handleClearPokemon = (pokemonId) => {
    setEntries((previousEntries) =>
      previousEntries.filter((entries) => entries.id !== pokemonId)
    );
  };

  return (
    <div className="app">
      <Header
        logoTitle="Pokemon World"
        navbarItems={["Profile", "Settings", "Logout"]}
      />
      <Form
        pokemon={pokemon}
        setPokemon={setPokemon}
        handleCreatePokemon={handleCreatePokemon}
        error={error}
        handleClear={handleClear}
      />
      <PokemonList entries={entries} handleClearPokemon={handleClearPokemon} />
    </div>
  );
}

export default App;
