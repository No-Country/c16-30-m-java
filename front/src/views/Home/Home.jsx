import { useContext, useState, useEffect } from "react";
import CardsContainer from "../../components/CardContainer/CardContainer";
import Pagination from "../../components/Pagination/Pagination";
import { Hero } from "../../layout";
import { Link } from "react-router-dom";
import mapLogo from "../../assets/map.svg";
import Switch from "../../components/Switch/Switch";
import Filters from "../../components/Filters/Filters";
import Spacer from "../../components/Spacer/Spacer";
/* import initialProds from "../../products.json";*/
import { useFilters } from "../../hooks/useFilters";
import { ProductsContext } from "../../contexts/ProductsContext";

const Home = () => {
  const { filterProducts } = useFilters();
  const { getProducts, data } = useContext(ProductsContext);
  const filteredProducts = filterProducts(data);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const currentAppProducts = filteredProducts.slice(0, visibleProducts);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(data);
  return (
    <main>
      <Hero />
      <div className="home-rows font-main mx-16 mb-14">
        <section className="flex justify-between my-9">
          <h1 className="text-2xl font-bold">Ultimas publicaciones</h1>
          <Link
            target="_blank"
            className="font-bold text-sm underline inline-flex gap-2 items-center"
            to="https://www.google.com/maps"
          >
            <img src={mapLogo} alt="map icon" />
            Ver en el mapa
          </Link>
        </section>
        <section className="home-cols justify-center">
          <aside className="px-4 border-r border-opacity-30 border-gray-600 border-solid">
            <Switch />
            <Spacer height={40} />
            <Filters />
          </aside>
          <aside>
            <CardsContainer currentAppProducts={currentAppProducts} />
            {visibleProducts < filteredProducts.length && (
              <Pagination loadMore={loadMoreProducts} />
            )}
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Home;
