import React from "react";
import { useEffect, useState } from "react";
import GameCard from "../../components/card/GameCard";
import axios from 'axios'

const API_KEY='3ef5d6b08fed4e12a529f69e400935ad'



const Home = () => {
  const [games, setGames]=useState([])

  useEffect(()=>{
    const fetchGames = async () => {
      const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
      setGames(response.data.results);
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h1>Este es el home</h1>
      <div>
      {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;





// const games = [
  //   {
  //     id: 1,
  //     name: "Nombre del Juego 1",
  //     image: "ruta/a/la/imagen1.jpg",
  //     rating: 4.5,
  //     genres: [{ id: 1, name: "Género 1" }, { id: 2, name: "Género 2" }],
  //   }]