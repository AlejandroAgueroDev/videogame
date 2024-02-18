import React from "react";
import GameCard from "../../components/card/GameCard";

const Home = () => {
  const games = [
    {
      id: 1,
      name: "Nombre del Juego 1",
      image: "ruta/a/la/imagen1.jpg",
      rating: 4.5,
      genres: [{ id: 1, name: "Género 1" }, { id: 2, name: "Género 2" }],
    }]


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
