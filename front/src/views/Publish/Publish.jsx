import React, { useState } from "react";
import validator from "./validation";

const PublicationForm = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "", // 'food' o 'notFood'
    category: "",
    product: "",
    quantity: 0,
    weight: "",
    timeLimit: "",
  });
  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    /*  const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });

    const validationErrors = validator({ ...form, [name]: value });
    setErrors({
      ...errors,
      [name]: validationErrors[name] ? validationErrors[name] : "",
    }); */
  };

  const submitHandler = (event) => {
    /* event.preventDefault();
    const validationErrors = validator(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario válido, enviar datos:", form);
    }
    console.log("Enviar formulario", form); */
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
              <option value="food">Comida</option>
              <option value="notFood">No Comida</option>
            </select>
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
            />
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
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">
              Límite de Tiempo:
            </label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              name="timeLimit"
              value={form.timeLimit}
              onChange={changeHandler}
              required
            />
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
