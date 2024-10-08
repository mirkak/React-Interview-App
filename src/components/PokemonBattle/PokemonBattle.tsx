import random from 'lodash.random';
import { useMoveQuery } from '../../services/useMoveQuery';
import { usePokemonDetailQuery } from '../../services/usePokemonDetailQuery';
import { useEffect, useState } from 'react';
import { PokemonMove } from '../../models/Pokemon';
import BattleLog from '../BattleLog/BattleLog';
import PokemonName from '../PokemonName/PokemonName';

type P = {
  myPokemonId?: number;
  wildPokemonId?: number;
}

function PokemonBattle({ myPokemonId, wildPokemonId }: P) {
  const [randomMyPokemonMove, setRandomMyPokemonMove] = useState<PokemonMove>();
  const [randomWildPokemonMove, setRandomWildPokemonMove] = useState<PokemonMove>();

  const { data: wildPokemonData, isFetching: isFetchingWildPokemon } = usePokemonDetailQuery({ pokemonId: wildPokemonId, enabled: wildPokemonId !== undefined });
  const { data: myPokemonData, isFetching: isFetchingMyPokemon } = usePokemonDetailQuery({ pokemonId: myPokemonId, enabled: myPokemonId !== undefined });

  const { data: myPokemonMoveData, isFetching: isFetchingMyPokemonMove } = useMoveQuery({ moveName: randomMyPokemonMove?.move.name, enabled: randomMyPokemonMove !== undefined });
  const { data: wildPokemonMoveData, isFetching: isFetchingWildPokemonMove } = useMoveQuery({ moveName: randomWildPokemonMove?.move.name, enabled: randomWildPokemonMove !== undefined });
  
  useEffect(() => {
    setRandomMyPokemonMove(myPokemonData?.moves[random(1, myPokemonData?.moves.length + 1)]);
    setRandomWildPokemonMove(myPokemonData?.moves[random(1, myPokemonData?.moves.length + 1)]);
  }, [myPokemonData, wildPokemonData]);

  if (isFetchingWildPokemon || isFetchingMyPokemon || isFetchingMyPokemonMove || isFetchingWildPokemonMove || !wildPokemonData || !myPokemonData || !myPokemonMoveData || !wildPokemonMoveData) {
    return <>Loading..</>
  }

  return (
    <>
      <div className="battle-box">
        <div className="pokemon-row">
          <PokemonName pokemonName={wildPokemonData.name} move={wildPokemonMoveData} />
          <div>
            <img
              src={wildPokemonData.frontSprite ?? ''}
              alt="Wild pokemon"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="pokemon-row">
          <div>
            <img
              src={myPokemonData.backSprite ?? ''}
              alt="My pokemon"
              width={300}
              height={300}
            />
          </div>
          <PokemonName pokemonName={myPokemonData.name} move={myPokemonMoveData} />
        </div>
      </div>
      <BattleLog myPokemonMoveData={myPokemonMoveData} wildPokemonMoveData={wildPokemonMoveData} myPokemonData={myPokemonData} wildPokemonData={wildPokemonData} />
    </>
  );
}

export default PokemonBattle;
