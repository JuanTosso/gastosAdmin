import Gasto from "./Gasto";

const ListadoNuevosGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  console.log(gastosFiltrados);
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2> {gastosFiltrados.length ? "Gastos" : "Aun no hay gastos"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2> {gastos.length ? "Gastos" : "Aun no hay gastos"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoNuevosGastos;
