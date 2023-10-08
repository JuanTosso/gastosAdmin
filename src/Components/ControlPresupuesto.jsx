import React from "react";

const ControlPresupuesto = ({ presupuesto }) => {
  //Formateador
  const cantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto</span> {cantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible</span> {cantidad(0)}
        </p>
        <p>
          <span>Gastado</span> {cantidad(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
