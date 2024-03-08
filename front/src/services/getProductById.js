// import { helpHttp } from "../common/helpHttp";
import products from "../products.json";

export const getProductById = async (id) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      const response = products.find((product) => product.userGiverId === id);
      resolve(response);
    }, 1000)
  );
};
// let api = helpHttp();

// export const getProductById = async (id) => {
//   try {
//     const data = await api.get("publications/" + id, {});
//     return data.response;
//   } catch (error) {
//     console.error("An error has ocurred", error);
//   }
// };
