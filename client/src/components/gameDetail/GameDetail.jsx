import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  <div className="game-detail">
   {game ? (
    <>
     <button onClick={handleClick}>Home</button>

     <h1 >{game.id}</h1> 
     <h2>{game.name}</h2>
     <img src={game.background_image} alt={game.name} />
     <p>Platforms: {game.platforms}</p>
     <p>Description: {game.description_raw}</p>
     <p>Genres: {game.genres}</p>
     <p>Rating: {game.rating}</p>    
     
    </>
   ) : (
    <p>Cargando...</p>
   )}
  </div>
 );
}

export default GameDetail;
