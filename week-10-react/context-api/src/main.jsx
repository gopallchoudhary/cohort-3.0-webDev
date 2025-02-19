import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BulbContextProvider from "./context/BulbContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BulbContextProvider>
    <App />
  </BulbContextProvider>
);
