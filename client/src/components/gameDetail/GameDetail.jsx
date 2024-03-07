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
  <div className={styles.background}>
   {game ? (
    <>
     <button className={styles.button} onClick={handleClick}>Home</button>

     <div>
      <section>
        <label className={styles.label}><span className={styles.underline}>ID</span>: </label>
       <h1 className={styles.h1}>{game.id}</h1>
      </section>

      <section>
       <h2 className={styles.h2}><span className={styles.underline}>NAME</span>: {game.name}</h2>
      </section>

      <section>
       <img
        className={styles.img}
        src={game.background_image}
        alt={game.name}
       />
      </section>

      <section>
       <p className={styles.p}><span className={styles.underline}>PLATFORMS</span>: {game.platforms}</p>
      </section>

      <section>
       <p className={styles.p}><span className={styles.underline}>DESCRIPTION</span>: {game.description_raw}</p>
      </section>

      <section>
       <p className={styles.p}><span className={styles.underline}>GENRE</span>: {game.genres}</p>
      </section>

      <section>
       <p className={styles.p}><span className={styles.underline}>RATING</span>: {game.rating}</p>
      </section>
     </div>
    </>
   ) : (   
    <div className={styles.loaderContainer}>
     <div className={styles.loader}>
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
