import React from "react";
import CardsContainer from "../../components/CardContainer/CardContainer";
import products from "../../products.json";
import Pagination from "../../components/Pagination/Pagination";
import { useState, useEffect } from "react";

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
      <h1>Home</h1>
      <CardsContainer currentAppProducts={appProducts} />
      <Pagination loadMore={loadMore} />
    </div>
  );
};

export default Home;
