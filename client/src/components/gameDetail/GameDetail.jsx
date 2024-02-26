import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_KEY='1bf00cc003174451abd0517b04f9090a'

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState();
  const navigate=useNavigate()

  useEffect(() => {
    const fetchGame = async () => {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
      setGame(response.data);
    };
    fetchGame();
  }, [id]);


  const handleClick=()=>{
    navigate('/home')
  }
  
  return (
    <div className="game-detail">
      {game ? (
        <>
          <button onClick={handleClick}>Home</button>
          
          <h1>{game.name}</h1>
          <h2>{game.id}</h2>
          <img src={game.background_image} alt={game.name} />
          <p>{game.description_raw}</p>
          // Aquí agregamos la prop key a cada elemento de la lista de géneros
          <p>Géneros: {game.genres.map(genre => <span key={genre.id}>{genre.name}</span>).join(', ')}</p>
          // Aquí agregamos la prop key a cada elemento de la lista de plataformas
          <p>Plataformas: {game.platforms.map(platform => <span key={platform.platform.id}>{platform.platform.name}</span>).join(', ')}</p>
          <p>Puntuación: {game.rating} / {game.rating_top}</p>
          // Aquí agregamos la prop key a cada elemento de la lista de enlaces
          <p>Enlaces: {game.stores.map(store => <a key={store.store.id} href={store.url} target="_blank" rel="noreferrer">{store.store.name}</a>)}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default GameDetail;





// useEffect(() => {
  //   const fetchGame = async () => {
  //     try{

  //       const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  //       const data=response.data;
  
  //       if(data.name){
  //         setGame(data)
  //       }else{
  //         window.alert('No hay personajes con ese id')
  //       }

  //     }catch(error){
  //       console.error("Error fetching character details:", error)
  //     }
        
      
  //   };
  //   fetchGame();

  //   return()=>setGame({})
  // }, [id]);
