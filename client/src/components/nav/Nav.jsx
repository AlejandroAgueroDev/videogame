import React from "react";
import Bar from "../searchBar/Bar";

const Nav = ({ setGenresFilter, setOriginFilter, setOrderBy }) => {
  const handleGenreChange = (event) => {
    setGenresFilter(event.target.value);
  };

  const handleOriginChange = (event) => {
    setOriginFilter(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <div>
      <Bar />
      {/* Lista desplegable para filtrar por género */}
      <label htmlFor="genre">Género:</label>
      <select id="genre" onChange={handleGenreChange}>
        <option value="">Todos</option>
        <option value="Accion">Acción</option>
        <option value="Aventura">Aventura</option>
        {/* Aquí podrías agregar más opciones si los géneros vienen de la base de datos */}
      </select>

      {/* Lista desplegable para filtrar por origen */}
      <label htmlFor="origin">Origen:</label>
      <select id="origin" onChange={handleOriginChange}>
        <option value="">Todos</option>
        <option value="api">API</option>
        <option value="base_datos">Base de Datos</option>
      </select>

      {/* Lista desplegable para ordenar */}
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
