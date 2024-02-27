import React from "react";

const Card = (props) => {
  const img = "https://s3-alpha-sig.figma.com/img/2b2b/6aef/dcb3b2ccb96f89eb652bc254a5c0afb1?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IAhAdu5OmD8lvhB~krSDZL6L09gAleLx44xBjA1hFPV~O5Otzr3FyH3jGDVYzL8IWCd48vlJcKPGU0wsmtOpmKMKjSEp5LhnwjCZV6V0MCZepUrinazsg-6rfFHQXMIKIwBclJeDdij4s~5nj7Um0jgyVQBNH~1nki5K6INrKI-Cp2iZK5uSisg9YDnMBYKwaByfxt9WD9lklz1umfF~Cmmg1HeqhV1v21dv3oVx7FrteI7rIBa7R5jVgx9U5ZHcnJ9uN~jghM-2oppCOm25Ld036EaF2IlMhzN9yF92-JcFKZf7ooAEMBipO5lyK0~FTsUGT2OoSZO5aWwqhMKK9A__"
  return (
    <div className="flex bg-concrete rounded-lg p-4 shadow-md mb-4 w-[824px] h-[200px]">
      <img className="w-[219px] h-[169px]"  src={img} alt="imagen de la card"/>
      <div>
      <h3 className="text-lg font-bold mb-2 text-xl">Nombre: {props.name}</h3>
      <p className="mb-2">Descripción: {props.description}</p>
      <p className="mb-2">Peso: {props.weight}</p>
      <p className="mb-2">Cantidad: {props.quantity}</p>
      </div>
    </div>
  );
};

export default Card;
