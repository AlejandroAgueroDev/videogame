import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bar from "../SearchBar/Bar"
import { orderByName, allGame, get_genres, select_genres } from "../../redux/action";
import { Link } from "react-router-dom";
import { useState } from "react";



const Nav = () => {

  const dispatch=useDispatch()
  const genres = useSelector(state => state.get_genres);
  // const [update, setUpdate]=useState(true)

  const handleGenreChange = (event) => {
    dispatch(select_genres(event.target.value))
  };

  const handleOriginChange = (event) => {
    dispatch(allGame(event.target.value))
    // setUpdate(!update)
  };

  const handleOrderChange = (event) => {
    dispatch(orderByName(event.target.value))
    // setUpdate(!update)
  };

  useEffect(() => {
    dispatch(get_genres());
  },[]);

  return (
    <div>
      <Bar />
      
      <label htmlFor="genre">Género:</label>
      <select id="genre" onChange={handleGenreChange}>
        <option value="Todos" >Todos</option>
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

      <Link to='/create'>
        <button>CreateGame</button>
      </Link>

    </div>
  );
};

export default Nav;
