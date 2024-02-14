import React from "react";
import CardsContainer from "../../components/CardContainer/CardContainer";
import products from "../../products.json";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <CardsContainer products={products} />
    </div>
  );
};

export default Home;
