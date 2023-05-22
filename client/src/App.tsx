import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pages from "./pages/Pages";
import { GlobalStyles } from "./styles/Global.styled";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Pages />
        <GlobalStyles />
      </QueryClientProvider>
    </>
  );
}

export default App;
