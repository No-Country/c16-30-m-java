import { helpHttp } from "../common/helpHttp";

let api = helpHttp();

export const getAllProducts = async () => {
  try {
    const data = await api.get("publications", {});
    return data.response;
  } catch (error) {
    console.error("An error has ocurred", error);
  }
};
