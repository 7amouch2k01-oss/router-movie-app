import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { MoviesProvider } from "./context/MovieContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App/> */}
      <MoviesProvider>
        <Home />
      </MoviesProvider>
    </BrowserRouter>
  </StrictMode>,
);
