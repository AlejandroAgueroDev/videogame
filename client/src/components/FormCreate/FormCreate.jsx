import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_genres } from "../../redux/action";
import { useState } from "react";
import { createGame } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import { validateForm } from "./validateForm";
import styles from "./Form.module.css";

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

  useEffect(() => {
    dispatch(get_genres());
  }, []);

  useEffect(() => {
    const errors = validateForm(gameData);
    setErrors(errors);

    const allFieldsFilled = Object.values(gameData).every((field) => field);
    setButtonDisabled(!allFieldsFilled);
  }, [gameData]);

  return (
    <div className={styles.background}>
      <Link to="/home">
        <button className={styles.button}>Home</button>
      </Link>
      <div>
        <h1 className={styles.form}>¿CREAMOS UN JUEGO?</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label className={styles.label}>Ingrese nombre: </label>
          </div>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Insert name"
            value={gameData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error_message}>{errors.name}</p>}
        </div>

        <div>
          <div>
            <label className={styles.label}>Descripción: </label>
          </div>
          <textarea
            className={styles.textArea}
            id="description_raw"
            name="description_raw"
            placeholder="Description"
            value={gameData.description_raw}
            onChange={handleChange}
          ></textarea>
          {errors.description_raw && (
            <p className={styles.error_message}>{errors.description_raw}</p>
          )}
        </div>

        <div>
          <div>
            <label className={styles.label}>Plataformas: </label>
          </div>
          <input
            className={styles.input}
            type="text"
            name="platforms"
            id="platforms"
            placeholder="Platforms"
            value={gameData.platforms}
            onChange={handleChange}
          />
          {errors.platforms && (
            <p className={styles.error_message}>{errors.platforms}</p>
          )}
        </div>

        <div>
          <div>
            <label className={styles.label}>URL de imagen:</label>
          </div>
          <input
            className={styles.input}
            type="url"
            id="background_image"
            name="background_image"
            placeholder="Background_image"
            value={gameData.background_image}
            onChange={handleChange}
          />
          {errors.background_image && (
            <p className={styles.error_message}>{errors.background_image}</p>
          )}
        </div>

        <div>
          <div>
            <label className={styles.label}>Fecha de Creación: </label>
          </div>
          <input
            className={styles.releaseDate}
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={gameData.releaseDate}
            onChange={handleChange}
          />
          {errors.releaseDate && (
            <p className={styles.error_message}>{errors.releaseDate}</p>
          )}
        </div>

        <div>
          <label className={styles.label}>Rating:</label>
        </div>
        <div className={styles.rating}>
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            className={styles.rating__input}
            onChange={handleChange}
          />
          <label htmlFor="star5" className={styles.rating__label} />
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            className={styles.rating__input}
            onChange={handleChange}
          />
          <label htmlFor="star4" className={styles.rating__label} />
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            className={styles.rating__input}
            onChange={handleChange}
          />
          <label htmlFor="star3" className={styles.rating__label} />
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            className={styles.rating__input}
            onChange={handleChange}
          />
          <label htmlFor="star2" className={styles.rating__label} />
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            className={styles.rating__input}
            onChange={handleChange}
          />
          <label htmlFor="star1" className={styles.rating__label} />
        </div>
        {errors.rating && <p className={styles.error_message}>{errors.rating}</p>}

        <div>
          <div>
            <label className={styles.label}>Seleccione genero: </label>
          </div>
          <select
            className={styles.releaseDateSelect}
            id="genres"
            name="genres"
            onChange={handleChange}
          >
            <option hidden>Seleccione genero</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          {errors.genres && <p className={styles.error_message}>{errors.genres}</p>}
        </div>

        {/* <button className={styles.button} type="submit" disabled={buttonDisabled}>
          Crear juego
        </button> */}

        <button
          className={styles.button}
          type="submit"
          onClick={(event) => {
            if (buttonDisabled) {
              event.preventDefault();
            } else {
              handleSubmit(event);
            }
          }}
        >
          Crear juego
        </button>

      </form>


    </div>
  );
};

export default FormCreate;