import React from 'react';

const GameCard = ({ game }) => {
    return (
      <div>
        <h2>{game.name}</h2>
        <img src={game.image} alt="Imagen del juego" />
        <p>Rating: {game.rating}</p>
        <p>Genres: {game.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    );
};

export default GameCard;
