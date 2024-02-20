import React from "react";
import { useState } from "react";
import validator from "./validation";

const Publish = () => {

  const dietList = []
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
      return
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler} noValidate>
        <h1>Crear Nueva Receta</h1>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
          required
        />
        {errors.name && <p >{errors.name}</p>}
        <br />
        <label for="resumen">Resumen del plato:</label>
        <textarea
          name="summary"
          value={form.summary}
          onChange={changeHandler}
          required
        ></textarea>
        {errors.summary && <p>{errors.summary}</p>}
        <br />
        <label for="healthScore">
          Nivel de comida saludable (del 1 al 100):
        </label>
        <input
          type="number"
          name="healthScore"
          value={form.healthScore}
          onChange={changeHandler}
          required
        />
        {errors.healthScore && <p>{errors.healthScore}</p>}
        <br />
        <label for="pasos">Paso a paso:</label>
        <textarea
          name="instructions"
          value={form.instructions}
          onChange={changeHandler}
          required
        ></textarea>
        {errors.instructions && <p>{errors.instructions}</p>}
        <br />
        <label for="imagen">Imagen:</label>
        <input
          type="text"
          name="image"
          value={form.image}
          autoComplete="off"
          onChange={changeHandler}
        ></input>
        {errors.image && <p>{errors.image}</p>}
        <br />
        <label>Tipos de dieta:</label>
        {errors.diets && <p>{errors.diets}</p>}
        <br />
        {dietList.map((diet, index) => {
          return (
            <div key={index}>
              <label htmlFor={diet.id}>{diet.name}</label>
              <input
                type="checkbox"
                id={diet.id}
                value={form.diets}
                onChange={dietsHandler}
              />
            </div>
          );
        })}
        <button type="submit">Crear Receta</button>
      </form>
    </div>
  );
};

export default Publish;
