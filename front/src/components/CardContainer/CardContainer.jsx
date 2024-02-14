import React from "react";
import Card from "../Card/Card";

const CardsContainer = ({ products }) => {
  return (
    <div className="container">
      {products.length > 0 ? (
        products.map((p) => {
          return (
            <div className="card" key={p.userId}>
              <Card
                name={p.name}
                description={p.description}
                weight={p.weight}
                userId={p.userId}
                quantity={p.quantity}
              />
            </div>
          );
        })
      ) : (
        <div className="noProducts">
          <h1>No se encontraron productos con esos parámetros</h1>
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
