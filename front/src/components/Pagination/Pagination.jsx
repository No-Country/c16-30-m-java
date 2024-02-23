import React from "react";

const Pagination = ({ loadMore }) => {
  return (
    <nav className="mt-4">
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={loadMore}
      >
        Cargar más
      </button>
    </nav>
  );
};

export default Pagination;
