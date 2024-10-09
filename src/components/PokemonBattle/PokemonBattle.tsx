import random from 'lodash.random';
import { useMoveQuery } from '../../services/useMoveQuery';
import { usePokemonDetailQuery } from '../../services/usePokemonDetailQuery';
import { useEffect, useState } from 'react';
import { PokemonMove } from '../../models/Pokemon';
import BattleLog from '../BattleLog/BattleLog';
import PokemonCard from '../PokemonCard/PokemonCard';

type P = {
  myPokemonId?: number;
  wildPokemonId?: number;
}

function PokemonBattle({ myPokemonId, wildPokemonId }: P) {
  const [randomMyPokemonMove, setRandomMyPokemonMove] = useState<PokemonMove>();
  const [randomWildPokemonMove, setRandomWildPokemonMove] = useState<PokemonMove>();

  // fetches 2 pokemon
  const { data: wildPokemon, isFetching: isFetchingWildPokemon } = usePokemonDetailQuery({ pokemonId: wildPokemonId, enabled: wildPokemonId !== undefined });
  const { data: myPokemon, isFetching: isFetchingMyPokemon } = usePokemonDetailQuery({ pokemonId: myPokemonId, enabled: myPokemonId !== undefined });

  // fetches move detail for each pokemon after pokemon is fetched
  const { data: myPokemonSelectedMove, isFetching: isFetchingMyPokemonSelectedMove } = useMoveQuery({ moveName: randomMyPokemonMove?.move.name, enabled: randomMyPokemonMove !== undefined });
  const { data: wildPokemonSelectedMove, isFetching: isFetchingWildPokemonSelectedMove } = useMoveQuery({ moveName: randomWildPokemonMove?.move.name, enabled: randomWildPokemonMove !== undefined });

  useEffect(() => {
    // selects random move
    setRandomMyPokemonMove(myPokemon?.moves[random(1, myPokemon?.moves.length + 1)]);
    setRandomWildPokemonMove(wildPokemon?.moves[random(1, wildPokemon?.moves.length + 1)]);
  }, [myPokemon, wildPokemon]);

  if (isFetchingWildPokemon || isFetchingMyPokemon || isFetchingMyPokemonSelectedMove || isFetchingWildPokemonSelectedMove) {
    return <>Loading..</>
  }

  if (!wildPokemon || !myPokemon || !myPokemonSelectedMove || !wildPokemonSelectedMove) {
    return <>Something went wrong..</>
  }

  return (
    <>
      <div className="battle-box" data-testid="battle-box" >
        <div className="pokemon-row">
          <PokemonCard pokemonName={wildPokemon.name} move={wildPokemonSelectedMove} />
          <div>
            <img
              src={wildPokemon.frontSprite ?? ''}
              alt="Wild pokemon"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="pokemon-row">
          <div>
            <img
              src={myPokemon.backSprite ?? ''}
              alt="My pokemon"
              width={300}
              height={300}
            />
          </div>
          <PokemonCard pokemonName={myPokemon.name} move={myPokemonSelectedMove} />
        </div>
      </div>
      <BattleLog
        myPokemonSelectedMove={myPokemonSelectedMove}
        wildPokemonSelectedMove={wildPokemonSelectedMove}
        myPokemon={myPokemon}
        wildPokemon={wildPokemon}
      />
    </>
  );
}

export default PokemonBattle;
