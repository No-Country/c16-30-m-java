const validator = (data) => {
  let errors = {};

  if (!data.name.trim()) {
    errors.name = "El nombre es requerido";
  } else if (data.name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres";
  }

  if (!data.description.trim()) {
    errors.description = "La descripción es requerida";
  } else if (data.description.length < 10) {
    errors.description = "La descripción debe tener al menos 10 caracteres";
  }

  if (!data.type) {
    errors.type = "El tipo es requerido";
  }

  if (!data.category.trim()) {
    errors.category = "La categoría es requerida";
  }

  if (!data.product.trim()) {
    errors.product = "El producto es requerido";
  }

  if (data.quantity <= 0) {
    errors.quantity = "La cantidad debe ser mayor que cero";
  }

  if (!data.weight.trim()) {
    errors.weight = "El peso es requerido";
  } else if (!/^\d+(\.\d{1,2})?$/.test(data.weight)) {
    errors.weight = "El peso debe ser un número válido";
  }

  if (!data.timeLimit.trim()) {
    errors.timeLimit = "El límite de tiempo es requerido";
  } else if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(data.timeLimit)) {
    errors.timeLimit = "El límite de tiempo debe tener el formato HH:MM";
  }

  return errors;
};

export default validator;
