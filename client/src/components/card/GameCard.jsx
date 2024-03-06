import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'


function GameCard({ game }) {
  return (
    <div className={styles.card}>
        <h3>{game.name}</h3>
      <Link to={`/detail/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
      </Link>
        <h4>Géneros: {game.genres && game.genres.map(genre => genre.name).join(', ')}</h4>
        <h4>Puntuación: {game.rating} / 5</h4>
    </div>
  );
}

export default GameCard;

