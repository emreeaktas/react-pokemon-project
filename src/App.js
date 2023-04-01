import "./App.css";
import "./utilities.css";
import Header from "./components/shared/header/Header";
import Form from "./components/app/form/Form";
import PokemonList from "./components/app/list/PokemonList";
import { useState } from "react";

//useRef kullanmak daha iyi olabilir.

function App() {
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

  const [entries, setEntries] = useState([]);

  const handleClear = () => {
    setPokemon({ name: "", type: "", power: "" });
    setEntries([]);
    setError({ name: true, type: true, power: true });
  };

  const handleCreatePokemon = (event) => {
    event.preventDefault();
    setError({ ...pokemon });
    if (!Object.values(pokemon).some((value) => !value)) {
      setEntries([
        ...entries,
        { id: `${Date.now()}${Math.floor(Math.random() * 1000)}`, ...pokemon },
      ]);
      setPokemon({ name: "", type: "", power: "" });
    }
  };

  const handleDeletePokemon = (pokemonId) => {
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
      <PokemonList
        entries={entries}
        handleDeletePokemon={handleDeletePokemon}
      />
    </div>
  );
}

export default App;
