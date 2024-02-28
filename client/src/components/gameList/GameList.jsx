import React from "react";
import { useSelector } from "react-redux"
import GameCard from "../Card/GameCard"

function GameList() {
  // Selector para obtener el estado de los juegos filtrados
  const searchredGames = useSelector((state) => state.searchredGames);

  // Renderizo los juegos filtrados usando el componente GameCard
  return (
    <div className="game-list">
      {searchredGames.map((game) => (
        <GameCard game={game} key={game.id} /> // Le paso el juego y la prop key a cada GameCard
      ))}
    </div>
  );
}

export default GameList;