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

function App() {
  return (
    <>
      <Routes>
        <ProductsProvider>
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
          </Route>
        </ProductsProvider>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
