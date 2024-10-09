import AttackTag from "../AttackTag/AttackTag";
import { SelectedMove } from "../../models/SelectedMove";

type P = {
  pokemonName: string;
  move: SelectedMove;
}

function PokemonCard({ pokemonName, move }: P) {
  return (
    <div className="pokemon-card" data-testid="pokemon-card">{pokemonName} <AttackTag name={move?.name} power={move?.power} /></div>
  );
}

export default PokemonCard;
