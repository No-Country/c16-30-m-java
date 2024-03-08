import React, { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import validator from "./validation";

const PublicationForm = () => {
  const { postProduct } = useContext(ProductsContext);

  const [form, setForm] = useState({
    ownerId: 14,
    userId: 22,
    name: "",
    description: "",
    type: "",
    category: "",
    product: "",
    quantity: 1,
    weight: "",
  });
  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });

    const validationErrors = validator({ ...form, [name]: value });
    setErrors({
      ...errors,
      [name]: validationErrors[name] ? validationErrors[name] : "",
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const validationErrors = validator(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Enviar formulario", form);
      try {
        await postProduct(form)();
      } catch (error) {
        console.error("Error al publicar el producto:", error);
      }
    }
  };

  return (
    <div className="py-32 px-10 min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={submitHandler} noValidate>
          <h1 className="text-2xl font-semibold mb-5 text-center">
            Crear Publicación
          </h1>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Nombre:</label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              name="name"
              value={form.name}
              onChange={changeHandler}
              required
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Descripción:</label>
            <textarea
              name="description"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.description}
              onChange={changeHandler}
              required
            ></textarea>
            {errors.description && (
              <span className="text-red-500">{errors.description}</span>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Tipo:</label>
            <select
              name="type"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.type}
              onChange={changeHandler}
              required
            >
              <option value="">Seleccione uno</option>
              <option value="FOOD">Comida</option>
              <option value="NOT_FOOD">No Comida</option>
            </select>
            {errors.type && <span className="text-red-500">{errors.type}</span>}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Categoría:</label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              name="category"
              value={form.category}
              onChange={changeHandler}
              required
            />
            {errors.category && (
              <span className="text-red-500">{errors.category}</span>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Producto:</label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              name="product"
              value={form.product}
              onChange={changeHandler}
              required
            />
            {errors.product && (
              <span className="text-red-500">{errors.product}</span>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Cantidad:</label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={changeHandler}
              required
              min={1}
            />
            {errors.quantity && (
              <span className="text-red-500">{errors.quantity}</span>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Peso:</label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              name="weight"
              value={form.weight}
              onChange={changeHandler}
              required
            />
            {errors.weight && (
              <span className="text-red-500">{errors.weight}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Crear Publicación
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublicationForm;
