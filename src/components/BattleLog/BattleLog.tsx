import { useState } from 'react';
import { Pokemon } from '../../models/Pokemon';
import { useGetBattleResult } from '../../hooks/useGetBattleResult';
import { SelectedMove } from '../../models/SelectedMove';

type P = {
  myPokemon: Pokemon;
  wildPokemon: Pokemon;
  myPokemonSelectedMove: SelectedMove;
  wildPokemonSelectedMove: SelectedMove;
}

function BattleLog({ myPokemonSelectedMove, wildPokemonSelectedMove, myPokemon, wildPokemon }: P) {
  const [battleStarted, setBattleStarted] = useState(false);

  const battleResult = useGetBattleResult({myPokemonSelectedMove, wildPokemonSelectedMove, myPokemon, wildPokemon});

  return (
      <div className="battle-log" data-testid="battle-log">
        <div className="battle-box" data-testid="battle-result">{battleStarted ? battleResult : '...'}</div>
        <div>
          <button className="button" onClick={() => setBattleStarted(true)} data-testid="start-btn" >Start Battle!</button>
        </div>
      </div>
  );
}

export default BattleLog;
