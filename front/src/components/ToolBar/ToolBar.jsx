import React from "react";

const ToolBar = () => {
  return (
    <div className="flex flex-col  md:items-center mb-4">
      <div className="flex space-x-2 mb-2 md:mb-0">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-200">
          Comida
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-200">
          No Comida
        </button>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2">
        <select className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4">
          <option>Ordenar...</option>
          <option>De la A a la Z</option>
          <option>De la Z a la A</option>
          <option>Menos Antiguos</option>
          <option>Más Antiguos!</option>
        </select>
        <select className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4">
          <option>Ciudades</option>
          <option>Ciudad 1</option>
          <option>Ciudad 2</option>
          <option>Ciudad 3</option>
        </select>
        <select className="bg-gray-200 text-gray-700 rounded-lg py-2 px-4">
          <option>Categorías</option>
          <option>Categoría 1</option>
          <option>Categoría 2</option>
          <option>Categoría 3</option>
        </select>
      </div>
    </div>
  );
};

export default ToolBar;
