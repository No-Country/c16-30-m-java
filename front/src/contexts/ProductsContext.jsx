import { createContext, useState } from "react";
import products from "../products.json";

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState(products);

  const [productName, setProductName] = useState("");

  const nameHandler = () => {
    if (productName) {
      setProductName(productName);
    }
  };
  return (
    <ProductsContext.Provider value={{ data, setData, nameHandler }}>
      {children}
    </ProductsContext.Provider>
  );
};
