import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bar from "../SearchBar/Bar"
import { orderByName, allGame, get_genres, select_genres, refreshOrder } from "../../redux/action";
import { Link } from "react-router-dom";


const Nav = () => {

  const dispatch = useDispatch()
  const genres = useSelector(state => state.get_genres);
  const [refresh, setRefresh] = useState("");

  const handleGenreChange = (event) => {
    dispatch(select_genres(event.target.value))
  };

  const handleOriginChange = (event) => {
    setRefresh(event.target.value);
    dispatch(allGame(event.target.value))
  };

  const handleOrderChange = (event) => {
    setRefresh(event.target.value);
    dispatch(orderByName(event.target.value))
  };

  const handleRefresh = (event) => {
    dispatch(allGame(event.target.value))
    dispatch(refreshOrder())
    setRefresh("")
  };

  useEffect(() => {
    dispatch(get_genres());
  }, []);

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
      <select id="origin" value={refresh} onChange={handleOriginChange}>
        <option value="API">API</option>
        <option value="BD">Base de Datos</option>
      </select>


      <label htmlFor="order">Ordenar por:</label>
      <select id="order" value={refresh} onChange={handleOrderChange}>
        <option value="Por defecto">Por defecto</option>
        <option value="ascendente">A-Z</option>
        <option value="descendente">Z-A</option>
      </select>

      <button onClick={handleRefresh}>Refresh</button>

      <Link to='/create'>
        <button>CreateGame</button>
      </Link>

    </div>
  );
};

export default Nav;
