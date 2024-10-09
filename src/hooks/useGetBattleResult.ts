import { SelectedMove } from "../models/SelectedMove";
import { Pokemon } from "../models/Pokemon";

type P = {
    myPokemonSelectedMove: SelectedMove;
    wildPokemonSelectedMove: SelectedMove;
    myPokemon: Pokemon;
    wildPokemon: Pokemon;
}

export const useGetBattleResult = ({ myPokemonSelectedMove, wildPokemonSelectedMove, myPokemon, wildPokemon}: P) => {
    const myPokemonMovePower = myPokemonSelectedMove.power;
    const wildPokemonMovePower = wildPokemonSelectedMove.power;

    if (myPokemonMovePower === wildPokemonMovePower) {
        return 'Draw!';
    }

    if (myPokemonMovePower > wildPokemonMovePower) {
        return `${myPokemon.name} lands a decisive blow with ${myPokemonSelectedMove.name} knocking out ${wildPokemon.name}!`;
    }

    return `${wildPokemon.name} lands a decisive blow with ${wildPokemonSelectedMove.name} knocking out ${myPokemon.name}!`;
};
