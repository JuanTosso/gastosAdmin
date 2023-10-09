import { useEffect, useState } from "react";
import { cantidad } from "../Helpers";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const gastoTotal = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );

    setGastado(gastoTotal);
    setDisponible(presupuesto - gastoTotal);
  }, [gastos]);

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
          <span>Disponible</span> {cantidad(disponible)}
        </p>
        <p>
          <span>Gastado</span> {cantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
