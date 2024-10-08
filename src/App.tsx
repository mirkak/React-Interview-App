import './App.css';
import './components/index.css';
import BattleInterface from './components/BattleInterface/BattleInterface';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
      },
    },
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      <BattleInterface />
    </QueryClientProvider>
  );
}

export default App;
