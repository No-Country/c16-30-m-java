import React from "react";
import Card from "../Card/Card";

const CardsContainer = ({ currentAppProducts }) => {
  return (
    <div className="container mx-auto px-8">
      <div className="flex flex-col">
        {currentAppProducts.map((p) => (
          <div className="card-container" key={p.userId}>
            <Card
              name={p.name}
              description={p.description}
              weight={p.weight}
              userId={p.userId}
              quantity={p.quantity}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
