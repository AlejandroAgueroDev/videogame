import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_genres } from "../../redux/action";
import { useState } from "react";
import { createGame } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import { validateForm } from "./validateForm";

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
 const [errors, setErrors] = useState({}); 
 const [buttonDisabled, setButtonDisabled] = useState(true);

 const handleChange = (event) => {
  setGameData({
   ...gameData,
   [event.target.name]: event.target.value,
  });
 };

 const handleSubmit = async (event) => {
  event.preventDefault();

  const errors = validateForm(gameData);

  if (Object.keys(errors).length === 0) {
    
    dispatch(createGame(gameData));
    navigate("/home");
  } else {
    
    setErrors(errors); 
  }
};

//  const handleSubmit = async (event) => {
//   event.preventDefault();
//   dispatch(createGame(gameData));
//   navigate("/home");
//  };

 useEffect(() => {
  dispatch(get_genres());
 }, []);

 useEffect(() => {
  const errors = validateForm(gameData);
  setErrors(errors);

  const allFieldsFilled = Object.values(gameData).every((field) => field);
  setButtonDisabled(!allFieldsFilled)
}, [gameData]);

 return (
  <>
   <Link to="/home">
    <button>Home</button>
   </Link>

   <h1>Este es el FormCreate</h1>

   <form onSubmit={handleSubmit}>
    <div>
     <label>Ingrese nombre: </label>
     <input
      type="text"
      id="name"
      name="name"
      placeholder="Ingrese el nombre"
      value={gameData.name}
      onChange={handleChange}
     />
     {errors.name && <p className="error-message">{errors.name}</p>}
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
     {errors.description_raw && <p className="error-message">{errors.description_raw}</p>}
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
     {errors.platforms && <p className="error-message">{errors.platforms}</p>}
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
     {errors.background_image && <p className="error-message">{errors.background_image}</p>}
    </div>

    <div>
     <label>Fecha de Creación: </label>
     <input
      type="date"
      id="releaseDate"
      name="releaseDate"
      value={gameData.releaseDate}
      onChange={handleChange}
     />
     {errors.releaseDate && <p className="error-message">{errors.releaseDate}</p>}
    </div>

    <div>
     <label>Rating:</label>
     <input
      type="number"
      id="rating"
      name="rating"
      min="1"
      max="5"
      step="1"
      placeholder="Rating"
      value={gameData.rating}
      onChange={handleChange}
     />
     {errors.rating && <p className="error-message">{errors.rating}</p>}
    </div>

    <div>
     <label>Seleccione genero: </label>
     <select id="genres" name="genres" onChange={handleChange}>
      <option hidden>--Seleccione genero--</option>
      {genres.map((genre) => (
       <option key={genre.id} value={genre.id}>
        {genre.name}
       </option>
      ))}
     </select>
     {errors.genres && <p className="error-message">{errors.genres}</p>}
    </div>

    <button type="submit" disabled={buttonDisabled}>Crear juego</button>
   </form>
  </>
 );
};

export default FormCreate;

//  const handleSubmit = async (event) => {
//   event.preventDefault();
//   try {
//     dispatch(createGame(gameData));
//     navigate("/home", { state:  alert('Juego creado correctamente') });
//   } catch (error) {
//     alert("Error creando juego:", error);

//   }
//  };
