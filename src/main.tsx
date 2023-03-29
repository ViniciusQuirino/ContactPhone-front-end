import GlobalLoading from "./components/GlobalLoading";
import React from "react";
import Reset from "./reset";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./contexts/UserContext";
import ContactProvider from "./contexts/contactContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalLoading>
        <ContactProvider>
          <Providers>
            <App />
          </Providers>
        </ContactProvider>
      </GlobalLoading>
    </BrowserRouter>
  </React.StrictMode>
);
