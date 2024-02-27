import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Bar from "../searchBar/Bar"
import { orderByName, allGame } from "../../redux/action";


const Nav = () => {

  const dispatch=useDispatch()
  
  const handleGenreChange = (event) => {
  };

  const handleOriginChange = (event) => {
    dispatch(allGame(event.target.value))
  };

  const handleOrderChange = (event) => {
    dispatch(orderByName(event.target.value))
  };

  

  return (
    <div>
      <Bar />
      
      <label htmlFor="genre">Género:</label>
      <select id="genre" onChange={handleGenreChange}>
        <option value="">Todos</option>
        <option value="Accion">Acción</option>
        <option value="Aventura">Aventura</option>
      </select>

      
      <label htmlFor="origin">Origen:</label>
      <select id="origin" onChange={handleOriginChange}>
        <option value="TODOS">Seleccione Origen</option>
        <option value="API">API</option>
        <option value="BD">Base de Datos</option>
      </select>

      
      <label htmlFor="order">Ordenar por:</label>
      <select id="order" onChange={handleOrderChange}>
        <option value="Por defecto">Por defecto</option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>
    </div>
  );
};

export default Nav;
