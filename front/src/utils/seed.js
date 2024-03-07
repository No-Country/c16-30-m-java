import batch from "../data/batch.json";
import { createProduct } from "../services/createProduct";

export const sendBatch = () => {
  batch.forEach((item, index) => {
    const payload = {
      ...item,
      userId: index,
      ownerId: index * 2,
    };
    createProduct(payload);
  });
};
