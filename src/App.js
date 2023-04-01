import "./App.css";
import "./utilities.css";
import Header from "./components/shared/header/Header";
import Form from "./components/app/pokemon-form/PokemonForm";
import PokemonList from "./components/app/pokemon-list/PokemonList";
import { useState } from "react";
import axios from "axios";

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

  axios("http://localhost:5000/pokemonlist").then((res) =>
    console.log(res.data)
  );

  const [entries, setEntries] = useState([
    {
      id: "0001",
      name: "Okan Akkurt",
      type: "Frontend Dev",
      power: 15,
    },
    {
      id: "0002",
      name: "Eralp Nitelik",
      type: "Java Boost",
      power: 16,
    },
    {
      id: "0003",
      name: "Firat Can Tas",
      type: ".Net Boost",
      power: 17,
    },
    {
      id: "0004",
      name: "Onurcan Pozan",
      type: "React Native",
      power: 18,
    },
  ]);

  const handleClear = () => {
    setPokemon({ name: "", type: "", power: "" });
    setEntries([]);
    setError({ name: true, type: true, power: true });
  };

  const handleCreatePokemon = (event) => {
    event.preventDefault();
    setError({ ...pokemon });
    if (!Object.values(pokemon).some((value) => !value)) {
      setEntries([...entries, { id: crypto.randomUUID, ...pokemon }]);
      setPokemon({ name: "", type: "", power: "" });
    }
  };

  const handleDeletePokemon = (pokemonId) => {
    setEntries((previousEntries) =>
      previousEntries.filter((entries) => entries.id !== pokemonId)
    );
  };

  const updatePokemonInput = (pokemonInput) => {
    setPokemon((prevPokemon) => ({ ...prevPokemon, ...pokemonInput }));
  };

  return (
    <div className="app">
      <Header
        logoTitle="Pokemon World"
        navbarItems={["Profile", "Settings", "Logout"]}
      />
      <Form
        pokemon={pokemon}
        updatePokemonInput={updatePokemonInput}
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
