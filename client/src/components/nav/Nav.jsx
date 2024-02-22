import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortGame } from "../../redux/action";
import Bar from "../searchBar/Bar";

const Nav = ({ setGenresFilter, setOriginFilter}) => {

  const [order, setOrder] = useState("")
  const dispatch = useDispatch()
  const sortedGames = useSelector((state) => state.sortedGames)
  
  const handleGenreChange = (event) => {
    setGenresFilter(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOriginFilter(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  useEffect(() => {
    dispatch(sortGame(order))
  }, [order])

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
        <option value="">Todos</option>
        <option value="api">API</option>
        <option value="base_datos">Base de Datos</option>
      </select>

      
      <label htmlFor="order">Ordenar por:</label>
      <select id="order" onChange={handleOrderChange}>
        <option value="">Por defecto</option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
      </select>
    </div>
  );
};

export default Nav;
