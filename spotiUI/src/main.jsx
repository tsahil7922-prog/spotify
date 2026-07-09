import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./styles/theme.css";
import { MusicProvider } from "./context/MusicContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client instance
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MusicProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MusicProvider>
  </StrictMode>,
);
