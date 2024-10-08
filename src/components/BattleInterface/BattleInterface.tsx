import random from 'lodash.random';
import { usePokemonsQuery } from '../../services/usePokemonsQuery';
import PokemonBattle from '../PokemonBattle/PokemonBattle';
import { useEffect, useState } from 'react';

function BattleInterface() {
    const { data } = usePokemonsQuery();
    const count = data?.count; // TODO this returns higher number than pokemon available so most of the time the pokemon data are missing

    const [myPokemonId, setMyPokemonId] = useState<number>();
    const [wildPokemonId, setWildPokemonId] = useState<number>();

    useEffect(() => {
        setMyPokemonId(random(1, 600));
        setWildPokemonId(random(1, 600));
    }, [])

    return (
        <div style={{padding: 32}}>
          <PokemonBattle myPokemonId={myPokemonId} wildPokemonId={wildPokemonId} />
        </div>
    );
}

export default BattleInterface;
