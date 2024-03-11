import React from "react";
import { useSelector } from "react-redux"
import GameCard from "../Card/GameCard"

function GameList() {
  const searchredGames = useSelector((state) => state.searchredGames);

  return (
    <div className="game-list">
      {searchredGames.map((game) => (
        <GameCard game={game} key={game.id} /> 
      ))}
    </div>
  );
}

export default GameList;