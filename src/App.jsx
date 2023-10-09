import { useState, useEffect } from "react";
import Header from "./Components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./Helpers";
import Modal from "./Components/Modal";
import ListadoNuevosGastos from "./Components/ListadoNuevosGastos";
import Filter from "./Components/Filter";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto" ?? 0))
  );
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModale] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );

  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModale(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ? presupuesto : 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto" ?? 0));
    if (presupuestoLS > 0) {
      setIsValid(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gastos", gastos ? JSON.stringify(gastos) : []);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter((g) => g.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModale(true);
    }, 500);
  };

  const guardarGasto = (input) => {
    if (input.id) {
      //Editar
      const nuevosGastos = gastos.map((g) => (g.id === input.id ? input : g));

      setGastos(nuevosGastos);
      setGastoEditar({});
    } else {
      //Nuevo gasto
      input.id = generarId();
      input.fecha = Date.now();
      setGastos([...gastos, input]);
    }

    setAnimarModale(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const nuevosGastos = gastos.filter((g) => g.id !== id);
    setGastos(nuevosGastos);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        gastos={gastos}
        setGastos={setGastos}
      />
      {isValid && (
        <>
          <main>
            <Filter filtro={filtro} setFiltro={setFiltro} />
            <ListadoNuevosGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModale={setAnimarModale}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
