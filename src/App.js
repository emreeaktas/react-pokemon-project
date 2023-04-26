import "./App.css";
import "./utilities.css";
import Header from "./components/shared/header/Header";
import Form from "./components/app/pokemon-form/PokemonForm";
import PokemonList from "./components/app/pokemon-list/PokemonList";
import PokemonProvider from "./context/pokemon-context/PokemonContext";
//useRef kullanmak daha iyi olabilir.

function App() {
  return (
    <PokemonProvider>
      <div className="app">
        <Header
          logoTitle="Pokemon World"
          navbarItems={["Profile", "Settings", "Logout"]}
        />
        <Form />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
