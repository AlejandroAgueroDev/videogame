import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_genres } from "../../redux/action";

const FormCreate = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.get_genres);


  useEffect(() => {
    dispatch(get_genres());
  }, []);

  return (
    <>
      <Link to="/home">
        <button>Home</button>
      </Link>

      <h1>Este es el FormCreate</h1>

      <form action="http://localhost:3001/videogames/create" method="POST">

        <div>
          <label >Ingrese nombre: </label>
          <input type="text" id="name" name="name" placeholder="Ingrese el nombre" />
        </div>

        <div>
          <label >Descripción: </label>
          <textarea
            id="description_raw"
            name="description_raw"
            placeholder="description"
          ></textarea>
        </div>

        <div>
          <label >Plataformas: </label>
          <input
            type="text"
            name="platforms"
            id="platforms"
            placeholder="platforms"
          />
        </div>

        <div>
          <label>URL de imagen</label>
          <input
            type="url"
            id="background_image"
            name="background_image"
            placeholder="background_image"
          />
        </div>

        <div>
          <label >Fecha de Creación: </label>
          <input type="date" id="releaseDate" name="releaseDate" />
        </div>

        <div>
          <label >Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="1"
            placeholder="Rating"
          />
        </div>

        <div>
          <label >Seleccione genero: </label>
          <select id="genres" name="genres">
            <option value="" >--Seleccione genero--</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Crear juego</button>
      </form>
    </>
  );
};

export default FormCreate;




  // const handleGenreChange = (event) => {
  //   dispatch(get_genres(event.target.value));
  // };