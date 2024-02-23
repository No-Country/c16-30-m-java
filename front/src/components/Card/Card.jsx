import React from "react";

const Card = (props) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md mb-4 w-full sm:w-80">
      <h3 className="text-lg font-bold mb-2">Nombre: {props.name}</h3>
      <p className="mb-2">Descripción: {props.description}</p>
      <p className="mb-2">Peso: {props.weight}</p>
      <p className="mb-2">Cantidad: {props.quantity}</p>
    </div>
  );
};

export default Card;
