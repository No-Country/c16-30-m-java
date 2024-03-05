import { useState, useEffect, useContext } from "react";
import CardsContainer from "../../components/CardContainer/CardContainer";
/* import products from "../../products.json";*/
import Pagination from "../../components/Pagination/Pagination";
import { Hero } from "../../layout";
import { Link } from "react-router-dom";
import mapLogo from "../../assets/map.svg";
import Switch from "../../components/Switch/Switch";
import Filters from "../../components/Filters/Filters";
import Spacer from "../../components/Spacer/Spacer";
import { ProductsContext } from "../../contexts/ProductsContext";

const foodFilters = {
  noFood: "No comida",
  food: "Comida",
};

const Home = () => {
  const { data } = useContext(ProductsContext);
  const [appProducts, setAppProducts] = useState([]);
  const [filters, setFilters] = useState(foodFilters.noFood);
  const [currentPage, setCurrentPage] = useState(1);
  const appProductsPerPage = 4;

  const filterProds = (filter, page) => {
    const filteredProducts = data
      .filter((product) => product.type === filter)
      .slice(0, page);
    setAppProducts(filteredProducts);
  };

  useEffect(() => {
    setAppProducts(data.slice(0, appProductsPerPage));
  }, [data]);

  useEffect(() => {
    filterProds(filters, appProductsPerPage);
  }, [filters]);
  const handleSwitch = () => {
    if (filters === foodFilters.noFood) {
      setFilters(foodFilters.food);
      filterProds(foodFilters.food, appProductsPerPage);
    } else {
      setFilters(foodFilters.noFood);
      filterProds(foodFilters.noFood, appProductsPerPage);
    }
  };

  const loadMore = () => {
    const indexOfLastAppProduct = currentPage * appProductsPerPage;
    filterProds(filters, indexOfLastAppProduct);
    const newAppProducts = data.slice(
      0,
      Math.min(indexOfLastAppProduct, data.length)
    );
    setAppProducts(newAppProducts);
    setCurrentPage(currentPage + 1);
  };

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
            <Switch
              isPressed={filters === foodFilters.noFood}
              handleSwitch={handleSwitch}
            />
            <Spacer height={40} />
            <Filters />
          </aside>
          <aside>
            <CardsContainer currentAppProducts={appProducts} />
            <Pagination loadMore={loadMore} />
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Home;
