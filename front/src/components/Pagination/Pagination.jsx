import React from "react";

const Pagination = ({ loadMore }) => {
  return (
    <nav>
      <button onClick={loadMore}>Cargar más</button>
    </nav>
  );
};

export default Pagination;
