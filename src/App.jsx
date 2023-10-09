import { useState, useEffect } from "react";
import Header from "./Components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./Helpers";
import Modal from "./Components/Modal";
import ListadoNuevosGastos from "./Components/ListadoNuevosGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModale] = useState(false);
  const [gastos, setGastos] = useState([]);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModale(true);
      }, 500);
    }
  }, [gastoEditar]);

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
      console.log(nuevosGastos);
      setGastos(nuevosGastos);
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

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        gastos={gastos}
      />
      {isValid && (
        <>
          <main>
            <ListadoNuevosGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
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
        />
      )}
    </div>
  );
}

export default App;
