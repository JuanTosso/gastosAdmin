export const generarId = () => {
  const id = Math.random().toString(36).substring(2) + Date.now().toString(36);
  return id;
};

export const formatearFecha = (fecha) => {
  const newDate = new Date(fecha);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("es-ES", options);
};

//Formateador USD
export const cantidad = (cantidad) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
