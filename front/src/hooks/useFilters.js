import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

export const useFilters = () => {
  const { filters, setFilters } = useContext(ProductsContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.type === filters.type &&
        (filters.category === "all" || product.category === filters.category) &&
        (filters.name === "" ||
          product.name.toLowerCase().includes(filters.name.toLowerCase()))
      );
    });
  };

  return { filterProducts, filters, setFilters };
};
