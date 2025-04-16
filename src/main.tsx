import "@/globals.css";
import { App } from "@/App";
import { Toaster } from "sonner";
import { StrictMode } from "react";
import { store } from "@redux/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById(`root`)!).render(
  <StrictMode>
    <Provider store={store}>
      <App />

      <Toaster richColors duration={3000} />
    </Provider>
  </StrictMode>,
);
