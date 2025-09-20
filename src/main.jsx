import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreConstextProvider from "./Context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/repo-name">
    <StoreConstextProvider>
      <App />
    </StoreConstextProvider>
  </BrowserRouter>
);
