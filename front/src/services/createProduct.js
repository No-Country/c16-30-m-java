import { helpHttp } from "../common/helpHttp";

let api = helpHttp();

export const createProduct = async (data) => {
  try {
    const res = await api.post("publications", data);
    return res;
  } catch (error) {
    console.error("An error has ocurred", error);
  }
};
