import React from "react";
import { useSelector } from "react-redux"; // Importamos el selector
import GameCard from "../card/GameCard"; // Importamos el componente GameCard

function GameList() {
  // Usamos el selector para obtener el estado de los juegos filtrados
  const filteredGames = useSelector((state) => state.filteredGames);

  // Renderizamos los juegos filtrados usando el componente GameCard
  return (
    <div className="game-list">
      {filteredGames.map((game) => (
        <GameCard game={game} key={game.id} /> // Le pasamos el juego y la prop key a cada GameCard
      ))}
    </div>
  );
}

export default GameList;