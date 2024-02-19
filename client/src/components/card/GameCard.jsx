import React from 'react';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <div className="game-card">
      <Link to={`/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
        <h3>{game.name}</h3>
      </Link>
    </div>
  );
}

export default GameCard;



 // return (
    //   <div>
    //     <h2>{game.name}</h2>
    //     <img src={game.image} alt="Imagen del juego" />
    //     <p>Rating: {game.rating}</p>
    //     <p>Genres: {game.genres.map((genre) => genre.name).join(", ")}</p>
    //   </div>
    // );