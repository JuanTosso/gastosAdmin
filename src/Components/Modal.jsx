import { useState, useEffect } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModale,
  guardarGasto,
  gastoEditar,
}) => {
  const [input, setInput] = useState({
    nombre: "",
    cantidad: "",
    categoria: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setInput(gastoEditar);
    }
  }, []);

  const handleForm = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const ocultarModal = () => {
    setAnimarModale(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.nombre === "" ||
      input.cantidad === "" ||
      input.categoria === ""
    ) {
      setError("Todos los campos son obligatorios");
    } else {
      setError("");
      guardarGasto(input);
    }
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend> {gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade gasto"
            id="nombre"
            name="nombre"
            value={input.nombre}
            onChange={handleForm}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="text"
            placeholder="Añade monto del gasto"
            id="cantidad"
            name="cantidad"
            value={input.cantidad}
            onChange={handleForm}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={input.categoria}
            onChange={handleForm}
          >
            <option value=""> -- Seleccione-- </option>
            <option value="ahorro"> Ahorro </option>
            <option value="comida"> Comida </option>
            <option value="casa"> Casa </option>
            <option value="gastos"> Gastos Varios</option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="suscripciones"> Suscripciones </option>
          </select>
        </div>

        <input
          type="submit"
          value={gastoEditar.nombre ? "Guardar cambios" : "Añadir gasto"}
        />
        {error.length > 0 && <Mensaje tipo="error">{error}</Mensaje>}
      </form>
      <p>Modal</p>
    </div>
  );
};

export default Modal;
