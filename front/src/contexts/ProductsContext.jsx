import { createContext, useState } from "react";
import products from "../products.json";

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState(products);
  return (
    <ProductsContext.Provider value={{ data, setData }}>
      {children}
    </ProductsContext.Provider>
  );
};
