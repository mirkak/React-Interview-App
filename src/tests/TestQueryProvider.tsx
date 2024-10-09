import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

function TestQueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  )
}


export default TestQueryProvider;
