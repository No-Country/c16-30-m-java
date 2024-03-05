import React, { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

const SearchBar = () => {
  const [name, setName] = useState("");

  const setNameHandler = (event) => {
    setName(event.target.value);
  };

  const { data } = useContext(ProductsContext);
  console.log("Productos", data);

  const { nameHandler } = useContext(ProductsContext);
  console.log("name function", nameHandler);

  const svgArrowBuscar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M24.0002 15.9999C23.9937 15.2984 23.711 14.6278 23.2135 14.1333L17.4935 8.39993C17.2437 8.1516 16.9057 8.01221 16.5535 8.01221C16.2012 8.01221 15.8633 8.1516 15.6135 8.39993C15.4885 8.52388 15.3893 8.67135 15.3216 8.83383C15.254 8.99631 15.2191 9.17058 15.2191 9.3466C15.2191 9.52261 15.254 9.69689 15.3216 9.85936C15.3893 10.0218 15.4885 10.1693 15.6135 10.2933L20.0002 14.6666H6.66683C6.31321 14.6666 5.97407 14.8071 5.72402 15.0571C5.47397 15.3072 5.3335 15.6463 5.3335 15.9999C5.3335 16.3535 5.47397 16.6927 5.72402 16.9427C5.97407 17.1928 6.31321 17.3333 6.66683 17.3333H20.0002L15.6135 21.7199C15.3624 21.9692 15.2207 22.308 15.2194 22.6619C15.2182 23.0157 15.3575 23.3555 15.6068 23.6066C15.8561 23.8577 16.195 23.9994 16.5488 24.0007C16.9026 24.0019 17.2424 23.8625 17.4935 23.6132L23.2135 17.8799C23.7143 17.3821 23.9972 16.706 24.0002 15.9999Z"
        fill="#128260"
      />
    </svg>
  );

  const svgLupa = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <g clipPath="url(#clip0_352_6849)">
        <path
          d="M20.9147 20.4358L15.8241 14.9642C17.2113 13.1406 17.8934 10.8136 17.7292 8.46463C17.565 6.11564 16.5671 3.92435 14.9419 2.34401C13.3167 0.763667 11.1885 -0.0848162 8.99756 -0.025937C6.80664 0.0329421 4.72058 0.994679 3.17088 2.66035C1.62118 4.32601 0.726397 6.56817 0.671617 8.92304C0.616837 11.2779 1.40625 13.5653 2.87657 15.3122C4.34689 17.059 6.38562 18.1316 8.57107 18.3081C10.7565 18.4846 12.9215 17.7514 14.6181 16.2604L19.7088 21.732C19.8696 21.8989 20.0851 21.9913 20.3087 21.9892C20.5323 21.9872 20.7462 21.8907 20.9043 21.7208C21.0625 21.5508 21.1521 21.3209 21.1541 21.0806C21.156 20.8402 21.0701 20.6087 20.9147 20.4358ZM9.22473 16.5005C7.87531 16.5005 6.55619 16.0704 5.43419 15.2646C4.31219 14.4588 3.43769 13.3135 2.92129 11.9735C2.40489 10.6336 2.26978 9.15907 2.53304 7.73654C2.7963 6.31401 3.4461 5.00734 4.40029 3.98175C5.35447 2.95616 6.57018 2.25773 7.89367 1.97477C9.21716 1.69182 10.589 1.83704 11.8357 2.39208C13.0824 2.94713 14.148 3.88706 14.8977 5.09302C15.6474 6.29898 16.0475 7.7168 16.0475 9.1672C16.0455 11.1115 15.326 12.9754 14.0469 14.3502C12.7678 15.725 11.0336 16.4984 9.22473 16.5005Z"
          fill="#128260"
        />
      </g>
      <defs>
        <clipPath id="clip0_352_6849">
          <rect
            width="20.4684"
            height="22"
            fill="white"
            transform="translate(0.696289)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="h-10 w-[770px] flex items-center border-[1px] border-dove-gray rounded-[4px]">
      <div className="w-[50px] h-full flex justify-center items-center">
        {svgLupa}
      </div>
      <input
        className="w-full h-full outline-none"
        type="search"
        placeholder="¿Qué estás buscando hoy?"
        autoComplete="off"
        onChange={setNameHandler}
        value={name}
      />
      <button>{svgArrowBuscar}</button>
    </div>
  );
};

export default SearchBar;
// Modificacion
