import { useEffect, useState } from "react";

const Filter = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form action="" className="campo">
        <label htmlFor="">Filtrar Gastos</label>
        <select
          name=""
          id=""
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value=""> --Todas las categorias-- </option>
          <option value="ahorro"> Ahorro </option>
          <option value="comida"> Comida </option>
          <option value="casa"> Casa </option>
          <option value="gastos"> Gastos Varios</option>
          <option value="ocio"> Ocio </option>
          <option value="salud"> Salud </option>
          <option value="suscripciones"> Suscripciones </option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
