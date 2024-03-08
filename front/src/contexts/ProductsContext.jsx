import { createContext, useState } from "react";
/* import products from "../products.json";
 */ import axios from "axios";

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoged, setIsLoged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: "NOT_FOOD",
    name: "",
    category: "all",
  });

  const [productName, setProductName] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://giveit-app.onrender.com/api/publications"
      );
      const products = response.data.response;
      setData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axios.get(
        `https://giveit-app.onrender.com/api/publications/${id}`
      );
      const product = response.data.response;
      console.log(product);
      return product;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const nameHandler = (name) => {
    if (name) {
      setProductName(name);
    }
  };

  const searchByName = (name) => {
    const filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    setData(filteredProducts);
  };

  const postProduct = (product) => {
    return async () => {
      try {
        const response = await axios.post(
          "https://giveit-app.onrender.com/api/publications",
          product
        );

        if (response.status === 200) {
          alert("Producto Creado");
        }
      } catch (error) {
        const errorMessage =
          error.response && error.response.data.error
            ? error.response.data.error
            : "Error al crear el producto";

        alert(errorMessage);
      }
    };
  };

  return (
    <ProductsContext.Provider
      value={{
        data,
        setData,
        filters,
        setFilters,
        nameHandler,
        searchByName,
        isLoged,
        setIsLoged,
        isOpen,
        setIsOpen,
        getProducts,
        getProductById,
        postProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
