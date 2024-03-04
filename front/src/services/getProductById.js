import products from "../products.json";

export const getProductById = async (id) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      const response = products.find((product) => product.userGiverId === id);
      resolve(response);
    }, 1000)
  );
};
