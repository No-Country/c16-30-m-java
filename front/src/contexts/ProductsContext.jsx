import { createContext, useState } from "react";
import products from "../products.json";

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState(products);
  const [isLoged, setIsLoged] = useState(false);
  const [filters, setFilters] = useState({
    type: "No comida",
    name: "",
    category: "all",
  });

  const [productName, setProductName] = useState("");


  const nameHandler = (name) => {
    if (name) {
      setProductName(name);
    }
  };

  const searchByName = (name) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    setData(filteredProducts);
  };

  return (
    <ProductsContext.Provider
      value={{ data, setData, filters, setFilters, nameHandler, searchByName, isLoged, setIsLoged }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
