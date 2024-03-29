import { Routes, Route } from "react-router-dom";
import {
  Home,
  MisPublicaciones,
  MiCuenta,
  Mensajes,
  Favorites,
  About,
  Legalities,
  Publish,
  NotFound,
} from "./views";
import DetailView from "./views/DetailView/DetailView";
import { Layout } from "./layout";
import { ProductsProvider } from "./contexts/ProductsContext";
import UnderConstruction from "./views/UnderConstruction/UnderConstruction";

function App() {
  return (
    <>
      <ProductsProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/legalities" element={<Legalities />} />
            <Route path="/micuenta" element={<MiCuenta />} />
            <Route path="/mispublicaciones" element={<MisPublicaciones />} />
            <Route path="/detailview/:productId" element={<DetailView />} />
            <Route path="/mensajes" element={<Mensajes />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/underconstruction" element={<UnderConstruction />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}

export default App;
