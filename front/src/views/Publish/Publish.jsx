import React, { useState } from "react";
import validator from "./validation";
import { createProduct } from "../../services/createProduct";
import { useNavigate } from "react-router-dom";
import { categories, types } from "../../utils/enums";

const PublicationForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    description: "",
    type: types.FOOD,
    name: "",
    category: "",
    product: "",
    quantity: "",
    weight: "",
  });

  const [errors, setErrors] = useState({});

  const createProductHandler = (data) => {
    const payload = {
      ...data,
      quantity: +data.quantity,
      weight: +data.weight,
      userId: 0,
      ownerId: 0,
    };
    try {
      const res = createProduct(payload);
      if (res.status !== 400) {
        alert("Enviado con exito");
        navigate("/home");
      }
    } catch (error) {
      console.error("An error has ocurred", error);
      alert("Ocurrio un erro");
    }
  };

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

  const submitHandler = (event) => {
    event.preventDefault();
    const validationErrors = validator(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      createProductHandler(form);
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
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              type="text"
              name="name"
              placeholder="Ingrese el nombre del producto"
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
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              value={form.description}
              placeholder="Ingrese la descripción"
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
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              value={form.type}
              onChange={changeHandler}
              required
            >
              <option value={types.FOOD}>Comida</option>
              <option value={types.NOT_FOOD}>No Comida</option>
            </select>
            {errors.type && <span className="text-red-500">{errors.type}</span>}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Categoría:</label>
            <select
              name="category"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              value={form.category}
              onChange={changeHandler}
              required
            >
              <option value="">Seleccione uno</option>
              <option value={categories.ELECTRONICS}>Electrónica</option>
              <option value={categories.CLOTHES}>Ropa</option>
              <option value={categories.CLEANING}>Limpieza</option>
              <option value={categories.TOYS}>Juguetes</option>
              <option value={categories.BOOKS}>Libros</option>
              <option value={categories.OTHERS}>Otros</option>
            </select>
            {errors.category && (
              <span className="text-red-500">{errors.category}</span>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Producto:</label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              type="text"
              name="product"
              value={form.product}
              onChange={changeHandler}
              placeholder="Ingrese el producto"
              required
            />
            {errors.product && (
              <span className="text-red-500">{errors.product}</span>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Cantidad:</label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              type="number"
              name="quantity"
              value={form.quantity}
              placeholder="0"
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
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              type="number"
              name="weight"
              value={form.weight}
              onChange={changeHandler}
              placeholder="0"
              min={0}
              required
            />
            {errors.weight && (
              <span className="text-red-500">{errors.weight}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:brightness-110 transition duration-200"
          >
            Crear Publicación
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublicationForm;
