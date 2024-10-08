import AttackTag from "../AttackTag/AttackTag";
import { Move } from "../../models/Move";

type P = {
  pokemonName: string;
  move: Move;
}

function PokemonName({ pokemonName, move }: P) {
  return (
    <div className="pokemon-name">{pokemonName} <AttackTag name={move?.name} power={move?.power} /></div>
  );
}

export default PokemonName;
