import Gasto from "./Gasto";

const ListadoNuevosGastos = ({ gastos, setGastoEditar }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2> {gastos.length ? "Gastos" : "Aun no hay gastos"}</h2>
      {gastos.map((gasto) => (
        <Gasto gasto={gasto} key={gasto.id} setGastoEditar={setGastoEditar} />
      ))}
    </div>
  );
};

export default ListadoNuevosGastos;
