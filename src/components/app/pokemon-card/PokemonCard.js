import { useContext } from "react";
import { PokemonContext } from "../../../context/pokemon-context/PokemonContext";

const PokemonCard = ({ entry }) => {
  const { deletePokemon } = useContext(PokemonContext);
  return (
    <ul className="created-list">
      <h2 className="card-number">Pokemon {entry.id}</h2>
      <li>
        {`Name: ${entry.name} \n Type: ${entry.type} \n Power: ${entry.power}`}
      </li>
      <button
        className="escape-button btn"
        onClick={() => deletePokemon(entry.id)}
      >
        X
      </button>
    </ul>
  );
};
export default PokemonCard;
