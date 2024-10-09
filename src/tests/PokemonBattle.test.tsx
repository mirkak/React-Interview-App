import { getByTestId, render, screen, waitFor } from '@testing-library/react';
import PokemonBattle from '../components/PokemonBattle/PokemonBattle';
import { wait } from '@testing-library/user-event/dist/utils';
import TestQueryProvider from './TestQueryProvider';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node'

// it is recommended to mock requests instead of letting components make requests to backend
// TODO edit jest config, this throws Jest failed to parse a file error 
// const server = setupServer(
//   http.get('https://pokeapi.co/api/v2/pokemon/1', ({ }) => {
//     return HttpResponse.json(
//       {
//         id: 'f8dd058f-9006-4174-8d49-e3086bc39c21',
//         name: 'bulbasaur',
//       },
//     )
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())


it('should render battle view', async () => {
  render(
    <PokemonBattle
      myPokemonId={1}
      wildPokemonId={4}
    />,
    { wrapper: TestQueryProvider }
  );

  await waitFor(() => {
    expect(screen.getByTestId('battle-box')).toBeDefined();
    expect(screen.getByTestId('battle-log')).toBeDefined();
    expect(screen.getByTestId('start-btn')).toBeDefined();
  });
});

it('should log battle result', async () => {
  render(
    <PokemonBattle
      myPokemonId={1}
      wildPokemonId={4}
    />,
    { wrapper: TestQueryProvider }
  );

  await waitFor(() => {
    expect(screen.getByTestId('battle-box')).toBeDefined();
    expect(screen.getByTestId('battle-log')).toBeDefined();
    screen.getByTestId('start-btn').click();
    expect(screen.getByTestId('battle-result'))
      .toHaveTextContent(new RegExp(/^(bulbasaur|charmander) lands a decisive blow with .+ knocking out (bulbasaur|charmander)!$|Draw!$/));
  });
});
