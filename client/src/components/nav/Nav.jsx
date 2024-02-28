import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bar from "../SearchBar/Bar"
import { orderByName, allGame, get_genres } from "../../redux/action";


const Nav = () => {

  const dispatch=useDispatch()
  const genres = useSelector(state => state.get_genres);
  

  const handleOriginChange = (event) => {
    dispatch(allGame(event.target.value))
  };

  const handleOrderChange = (event) => {
    dispatch(orderByName(event.target.value))
  };

  useEffect(() => {
    dispatch(get_genres());
  }, [dispatch]);

  return (
    <div>
      <Bar />
      
      <label htmlFor="genre">Género:</label>
      <select id="genre">
        <option value="">--Seleccione genero--</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
        
      </select>

      
      <label htmlFor="origin">Origen:</label>
      <select id="origin" onChange={handleOriginChange}>
        {/* <option value="Default">Seleccione Origen</option> */}
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
