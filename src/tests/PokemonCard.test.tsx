import { render, screen, waitFor } from '@testing-library/react';
import TestQueryProvider from './TestQueryProvider';
import PokemonCard from '../components/PokemonCard/PokemonCard';

const move = {
  name: 'razor-wind',
  url: 'https://pokeapi.co/api/v2/move/13/',
  power: 80,
}

it('should render pokemon card', async () => {
  render(
    <PokemonCard
      pokemonName='bulbasaur'
      move={move}
    />,
    { wrapper: TestQueryProvider }
  );

  await waitFor(() => {
    expect(screen.getByTestId('pokemon-card')).toBeDefined();
    expect(screen.getByTestId('pokemon-card')).toHaveTextContent('bulbasaur razor-wind 80');
  });
});
