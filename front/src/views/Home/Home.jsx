import React from "react";
import CardsContainer from "../../components/CardContainer/CardContainer";
import products from "../../products.json";
import Pagination from "../../components/Pagination/Pagination";
import { useState, useEffect } from "react";
import PublishSign from "../../components/PublishSign/PublishSign";
import ToolBar from "../../components/ToolBar/ToolBar";

const Home = () => {
  const [appProducts, setAppProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const appProductsPerPage = 4;

  useEffect(() => {
    const initialAppProducts = products.slice(0, appProductsPerPage);
    setAppProducts(initialAppProducts);
  }, []);

  const loadMore = () => {
    const indexOfLastAppProduct = currentPage * appProductsPerPage;
    const newAppProducts = products.slice(0, indexOfLastAppProduct);
    setAppProducts(newAppProducts);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-bold mr-4">Ultimas Publicaciones!</h1>
        <PublishSign />
      </div>
      <div className="flex justify-between">
        <ToolBar className="mr-auto" />{" "}
        {/* Estilo para que esté a la izquierda */}
        <div className="ml-auto">
          {" "}
          {/* Contenedor para alinear CardsContainer a la derecha */}
          <CardsContainer currentAppProducts={appProducts} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {" "}
        {/* Centrar el componente de paginación */}
        <Pagination loadMore={loadMore} />
      </div>
    </div>
  );
};

export default Home;
