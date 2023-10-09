import { useEffect, useState } from "react";
import { cantidad } from "../Helpers";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValid,
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const gastoTotal = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0
    );

    setGastado(gastoTotal);
    setDisponible(presupuesto - gastoTotal);

    setTimeout(() => {
      setPorcentaje(((gastoTotal / presupuesto) * 100).toFixed(2));
    }, 1000);
  }, [gastos]);

  const handleResetApp = () => {
    const resultado = confirm("Deseas reiniciar presupuesto y gastos");
    if (resultado) {
      setGastos([]);
      setPresupuesto(0);
      setIsValid(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: "#3B82F6",
          })}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto</span> {cantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""} `}>
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
