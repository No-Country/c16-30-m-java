import { Routes, Route, useLocation } from "react-router-dom";
import {
  LandingPage,
  RegistrationForm,
  Home,
  MisPublicaciones,
  MiCuenta,
  Mensajes,
  About,
  Legalities,
} from "./views";
import NavBar from "./views/NavBar/NavBar";
import { Footer } from "./layout";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/registrationForm" element={<RegistrationForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/legalities" element={<Legalities />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/mispublicaciones" element={<MisPublicaciones />} />
        <Route path="/mensajes" element={<Mensajes />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
