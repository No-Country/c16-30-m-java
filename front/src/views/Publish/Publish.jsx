import React from "react";
import { useState } from "react";
import validator from "./validation";

const Publish = () => {
  const dietList = [];
  // Estados locales
  const [form, setForm] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: 0,
    instructions: "",
    diets: [],
  });
  const [errors, setErrors] = useState({});
  const [aux, setAux] = useState([]);

  //Funciones Handlers
  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    const validationErrors = validator({ ...form, [property]: value });

    if (validationErrors[property]) {
      setErrors({
        ...errors,
        [property]: validationErrors[property],
      });
    } else {
      setErrors({
        ...errors,
        [property]: "",
      });
    }
  };

  const dietsHandler = (event) => {
    const id = event.target.id;

    setAux([...aux, Number(id)]);

    const countOccurrences = (array, number) => {
      return array.reduce((count, current) => {
        if (current === number) {
          return count + 1;
        }
        return count;
      }, 0);
    };

    const finalCount = countOccurrences(aux, Number(id));

    if (finalCount % 2 === 0) {
      setForm({ ...form, diets: [...form.diets, Number(id)] });
    } else if (finalCount % 2 === 1) {
      const filteredDiets = form.diets.filter(
        (dietId) => dietId !== Number(id)
      );
      setForm({ ...form, diets: filteredDiets });
      if (form.diets.length);
    }

    const validationErrors = validator({ ...form, diets: form.diets });
    setErrors({
      ...errors,
      diets: form.diets.length === 0 ? [] : validationErrors.diets || "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const validationErrors = validator(form);
    setErrors(validationErrors);
    console.log(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      return;
    }
  };
  return (
    <div className="py-32 px-10 min-h-screen bg-gray-50">
      <div className="bg-white shadow-xl rounded-lg p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={submitHandler} noValidate>
          <h1 className="text-2xl font-semibold mb-5 text-center">
            Crear Nueva Receta
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
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">
              Resumen del plato:
            </label>
            <textarea
              name="summary"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.summary}
              onChange={changeHandler}
              required
            ></textarea>
            {errors.summary && (
              <p className="text-red-500 text-xs mt-1">{errors.summary}</p>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">
              Nivel de comida saludable (del 1 al 100):
            </label>
            <input
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="number"
              name="healthScore"
              value={form.healthScore}
              onChange={changeHandler}
              required
            />
            {errors.healthScore && (
              <p className="text-red-500 text-xs mt-1">{errors.healthScore}</p>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Paso a paso:</label>
            <textarea
              name="instructions"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.instructions}
              onChange={changeHandler}
              required
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-xs mt-1">{errors.instructions}</p>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">Imagen:</label>
            <input
              type="text"
              name="image"
              className="py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.image}
              autoComplete="off"
              onChange={changeHandler}
            ></input>
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">{errors.image}</p>
            )}
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2 font-bold text-gray-700">
              Tipos de dieta:
            </label>
            {errors.diets && (
              <p className="text-red-500 text-xs mt-1">{errors.diets}</p>
            )}
            {dietList.map((diet, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={diet.id}
                  className="mr-2"
                  value={form.diets}
                  onChange={dietsHandler}
                />
                <label htmlFor={diet.id} className="text-gray-700">
                  {diet.name}
                </label>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Crear Receta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
