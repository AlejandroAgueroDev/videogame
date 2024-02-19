
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=YOUR_API_KEY`);
      setGame(response.data);
    };
    fetchGame();
  }, [id]);

  return (
    <div className="game-detail">
      {game ? (
        <>
          <h1>{game.name}</h1>
          <img src={game.background_image} alt={game.name} />
          <p>{game.description_raw}</p>
          <p>Géneros: {game.genres.map(genre => genre.name).join(', ')}</p>
          <p>Plataformas: {game.platforms.map(platform => platform.platform.name).join(', ')}</p>
          <p>Puntuación: {game.rating} / {game.rating_top}</p>
          <p>Enlaces: {game.stores.map(store => <a href={store.url} target="_blank" rel="noreferrer">{store.store.name}</a>)}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default GameDetail;
