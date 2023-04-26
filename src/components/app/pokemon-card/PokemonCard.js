import { useContext } from "react";

const PokemonCard = ({ pokemon }) => {
  const { handleDeletePokemon: deletePokemon } = useContext(PokemonContext);
  return (
    <ul className="created-list">
      <h2 className="card-number">Pokemon {entry.id}</h2>
      <li>
        {`Name: ${entry.name} \n Type: ${entry.type} \n Power: ${entry.power}`}
      </li>
      <button
        className="escape-button btn"
        onClick={() => handleDeletePokemon(entry.id)}
      >
        X
      </button>
    </ul>
  );
};
export default PokemonCard;
