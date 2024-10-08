import { useState } from 'react';
import { Pokemon } from '../../models/Pokemon';
import { useGetBattleResult } from '../../hooks/useGetBattleResult';

type P = {
  myPokemonData?: Pokemon;
  wildPokemonData?: Pokemon;
  myPokemonMoveData?: any;
  wildPokemonMoveData?: any;
}

function BattleLog({ myPokemonMoveData, wildPokemonMoveData, myPokemonData, wildPokemonData }: P) {
  const [battleStarted, setBattleStarted] = useState(false);

  const battleResult = useGetBattleResult(myPokemonMoveData, wildPokemonMoveData, myPokemonData, wildPokemonData);

  return (
      <div className="battle-log">
        <div className="battle-box">{battleStarted ? battleResult : '...'}</div>
        <div>
          <button className="button" onClick={() => setBattleStarted(true)}>Start Battle!</button>
        </div>
      </div>
  );
}

export default BattleLog;
