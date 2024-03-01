import { Routes, Route, /*useLocation*/ } from "react-router-dom";
import {
  Home,
  MisPublicaciones,
  MiCuenta,
  Mensajes,
  Favorites,
  About,
  Legalities,
  Publish,
} from "./views";
import NavBar from "./views/NavBar/NavBar";
import { Footer } from "./layout";

function App() {
  //const location = useLocation();

  return (
    <div>
      {/*location.pathname !== "/" && */<NavBar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/legalities" element={<Legalities />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/mispublicaciones" element={<MisPublicaciones />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
      {/*location.pathname !== "/" && */<Footer />}
    </div>
  );
}

export default App;
