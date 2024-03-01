import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_genres } from "../../redux/action";
import { useState } from "react";
import { createGame } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const FormCreate = () => {
 const dispatch = useDispatch();
 const genres = useSelector((state) => state.get_genres);
 const [gameData, setGameData] = useState({
  name: "",
  description_raw: "",
  platforms: "",
  background_image: "",
  releaseDate: "",
  rating: "",
  genres: "",
 });
 const navigate = useNavigate();

 
 const handleChange = (event) => {
  setGameData({
   ...gameData,
   [event.target.name]: event.target.value,
  });
 };

 
 const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    dispatch(createGame(gameData));
    navigate("/home", { state:  alert('Juego creado correctamente') });
  } catch (error) {   
    alert("Error creando juego:", error);
    
  }
 };

 useEffect(() => {
  dispatch(get_genres());
 }, []);

 return (
  <>
   <Link to="/home">
    <button>Home</button>
   </Link>

   <h1>Este es el FormCreate</h1>
   
   <form  onSubmit={handleSubmit}>
    <div>
     <label>Ingrese nombre: </label>
     <input type="text" id="name" 
      name="name" 
      placeholder="Ingrese el nombre"
      value={gameData.name}
      onChange={handleChange}
     />
    </div>

    <div>
     <label>Descripción: </label>
     <textarea
      id="description_raw"
      name="description_raw"
      placeholder="description"
      value={gameData.description_raw}
      onChange={handleChange}
     ></textarea>
    </div>

    <div>
     <label>Plataformas: </label>
     <input
      type="text"
      name="platforms"
      id="platforms"
      placeholder="platforms"
      value={gameData.platforms}
      onChange={handleChange}
     />
    </div>

    <div>
     <label>URL de imagen</label>
     <input
      type="url"
      id="background_image"
      name="background_image"
      placeholder="background_image"
      value={gameData.background_image}
      onChange={handleChange}
     />
    </div>

    <div>
     <label>Fecha de Creación: </label>
     <input type="date" 
      id="releaseDate" 
      name="releaseDate"
      value={gameData.releaseDate}
      onChange={handleChange} 
     />
    </div>

    <div>
     <label>Rating:</label>
     <input
      type="number"
      id="rating"
      name="rating"
      min="0"
      max="5"
      step="1"
      placeholder="Rating"
      value={gameData.rating}
      onChange={handleChange}
     />
    </div>

    <div>
     <label>Seleccione genero: </label>
     <select id="genres" name="genres" onChange={handleChange}>
      <option hidden
      >--Seleccione genero--</option>
      {genres.map((genre) => (
       <option key={genre.id} value={genre.id}>
        {genre.name}
       </option>
      ))}
     </select>
    </div>

    <button type="submit">
     Crear juego
    </button>
   </form>
   
  </>
 );
};

export default FormCreate;