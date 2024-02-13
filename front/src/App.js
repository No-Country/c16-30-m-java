import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  LandingPage,
  Home,
  MisPublicaciones,
  MiCuenta,
  Mensajes,
} from "./views";
import NavBar from "./views/NavBar/NavBar";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/mispublicaciones" element={<MisPublicaciones />} />
        <Route path="/mensajes" element={<Mensajes />} />
      </Routes>
    </div>
  );
}

export default App;
