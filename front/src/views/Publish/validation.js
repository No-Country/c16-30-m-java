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

  if (!data.category) {
    errors.category = "La categoría es requerida";
  }

  if (!data.product.trim()) {
    errors.product = "El producto es requerido";
  }

  if (!data.quantity.trim()) {
    errors.quantity = "La cantidad debe ser mayor que cero";
  } else if (!/^[1-9]\d*$/.test(data.quantity)) {
    errors.quantity = "La cantidad debe ser un número válido";
  }

  if (!data.weight.trim()) {
    errors.weight = "El peso es requerido";
  } else if (!/^\d+(\.\d{1,2})?$/.test(data.weight)) {
    errors.weight = "El peso debe ser un número válido";
  }

  return errors;
};

export default validator;
