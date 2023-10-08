import { useState } from "react";
import Header from "./Components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./Helpers";
import Modal from "./Components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModale] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModale(true);
    }, 500);
  };

  const guardarGasto = (input) => {
    input.id = generarId();
    setGastos([...gastos, input]);
    setAnimarModale(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <div className="nuevo-gasto">
          <img
            src={IconoNuevoGasto}
            alt="Nuevo Gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModale={setAnimarModale}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App;
