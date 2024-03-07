import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { categories } from "../utils/enums";

export const useFilters = () => {
  const { filters, setFilters } = useContext(ProductsContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.type === filters.type &&
        (filters.category === categories.ALL ||
          product.category === filters.category)
      );
    });
  };

  return { filterProducts, filters, setFilters };
};
