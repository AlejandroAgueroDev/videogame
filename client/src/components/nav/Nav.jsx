import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bar from "../SearchBar/Bar"
import { orderByName, allGame, get_genres, select_genres, refreshOrder } from "../../redux/action";
import { Link } from "react-router-dom";
import styles from './Nav.module.css'


const Nav = () => {

  const dispatch = useDispatch()
  const genres = useSelector(state => state.get_genres);
  const [refresh, setRefresh] = useState("");  
  const [forseUpdate, setForseUpdate]=useState(true)
  

  const handleGenreChange = (event) => {
    dispatch(select_genres(event.target.value))
    setForseUpdate(!forseUpdate)
    setRefresh(event.target.value);
  };

  const handleOriginChange = (event) => {
    setRefresh(event.target.value);
    dispatch(allGame(event.target.value))
    setForseUpdate(!forseUpdate)
  };

  const handleOrderChange = (event) => {
    setRefresh(event.target.value);
    dispatch(orderByName(event.target.value))
    setForseUpdate(!forseUpdate)
  };

  const handleRefresh = (event) => {
    dispatch(allGame(event.target.value))
    dispatch(refreshOrder())
    setRefresh("")
    setForseUpdate(!forseUpdate)
  };

  useEffect(() => {
    dispatch(get_genres());
  }, []);

  return (
    <>

      <div>
        <Bar />
      </div>
      <div className={styles.navBar}>

        <label htmlFor="genre">Género:</label>
        <select className={styles.select} id="genre" value={refresh} onChange={handleGenreChange}>
          <option value="Todos" >Todos</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>


        <label htmlFor="origin">Origen:</label>
        <select className={styles.select} id="origin" value={refresh} onChange={handleOriginChange}>
          <option className={styles.option} value="API">API</option>
          <option className={styles.option} value="BD">Base de Datos</option>
        </select>


        <label htmlFor="order">Ordenar por:</label>
        <select className={styles.select} id="order" value={refresh} onChange={handleOrderChange}>
          <option className={styles.option} value="Por defecto" hidden>ORDENAR</option>
          <option className={styles.option} value="ascendente">A-Z</option>
          <option className={styles.option} value="descendente">Z-A</option>
        </select>

        <button className={styles.button} onClick={handleRefresh}>Refresh</button>

        <Link to='/create'>
          <button className={styles.button}>CreateGame</button>
        </Link>

      </div>
    </>
  );
};

export default Nav;
