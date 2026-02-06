import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Semaine from "./Semaine.jsx";
import Header from "./Header.jsx";
import Snowfall from "react-snowfall";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Snowfall />
    <Header />
    <Semaine />
  </StrictMode>
);
