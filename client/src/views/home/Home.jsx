import React from "react";
import { useEffect } from "react";
import GameCard from "../../components/card/GameCard";
import { useDispatch, useSelector } from "react-redux";
import { allGame } from "../../redux/action";

const Home = () => {
  const videoGames=useSelector((state)=>state.videoGames)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(allGame())
  })

  return (
    <div>
      <h1>Este es el home</h1>
      <div>
      {videoGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;