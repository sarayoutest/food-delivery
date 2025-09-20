
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter  } from "react-router-dom";
import StoreConstextProvider from "./Context/StoreContext.jsx";
createRoot(document.getElementById("root")).render(
  <HashRouter>
  <StoreConstextProvider>
    <App />
  </StoreConstextProvider>
  </HashRouter >
);
