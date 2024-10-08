import { Pokemon } from "../models/Pokemon";

export const useGetBattleResult = (myPokemonMoveData: any, wildPokemonMoveData: any, myPokemonData?: Pokemon, wildPokemonData?: Pokemon) => {
    const myPokemonMovePower = myPokemonMoveData?.power;
    const wildPokemonMovePower = wildPokemonMoveData?.power;

    if (myPokemonMovePower === wildPokemonMovePower) {
        return 'Draw!';
    }

    if (myPokemonMovePower > wildPokemonMovePower) {
        return `${myPokemonData?.name} lands a decisive blow with ${myPokemonMoveData?.name} knocking out ${wildPokemonData?.name}!`;
    }

    return `${wildPokemonData?.name} lands a decisive blow with ${wildPokemonMoveData?.name} knocking out ${myPokemonData?.name}!`;
};
