import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./GameDetail.module.css";

function GameDetail() {
 const { id } = useParams();
 const [game, setGame] = useState();
 const navigate = useNavigate();

 useEffect(() => {
  const fetchGame = async () => {
   const response = await axios.get(
    `http://localhost:3001/videogames/id/${id}`
   );
   setGame(response.data);
  };
  fetchGame();
 }, [id]);

 const handleClick = () => {
  navigate("/home");
 };

 return (
  <div >
   {game ? (
    <>
     <button onClick={handleClick}>Home</button>
    <div >

     <h1>{game.id}</h1>
     <h2>{game.name}</h2>
     <img className={styles.img} src={game.background_image} alt={game.name} />
     <p>PLATFORMS: {game.platforms}</p>
     <p>DESCRIPTION: {game.description_raw}</p>
     <p>GENRE: {game.genres}</p>
     <p>RATING: {game.rating}</p>
    </div>
    </>
   ) : (
    // <p>Cargando...</p>
    <div className={styles.loaderContainer}>
     {" "}
     {/* Use a separate class */}
     <div className={styles.loader}>
      {" "}
      {/* Nested class for styles */}
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
     </div>
    </div>
   )}
  </div>
 );
}

export default GameDetail;
