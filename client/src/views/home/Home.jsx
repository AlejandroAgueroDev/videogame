import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allGame } from "../../redux/action";
import GameCard from "../../components/card/GameCard";

const Home = () => {
  const videoGames = useSelector((state) => state.videoGames);
  const dispatch = useDispatch();

  const searchredGames = useSelector((state) => state.searchredGames);

  useEffect(() => {
    dispatch(allGame());
  },[]);

 

  return (
    <div>
      <h1>Este es el home</h1>
      <div>
        {searchredGames.length > 0 //aca me muestra los juegos segun el search
          ? searchredGames.map((game) => <GameCard key={game.id} game={game} />)
          : videoGames.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default Home;
