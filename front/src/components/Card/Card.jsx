import React from "react";

const Card = (props) => {
  return (
    <div>
      <h3>Nombre: {props.name}</h3>
      <p>Descripción: {props.description}</p>
      <p>Peso: {props.weight}</p>
      <p>Cantidad: {props.quantity}</p>
    </div>
  );
};

export default Card;
