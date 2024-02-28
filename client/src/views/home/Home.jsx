import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allGame } from "../../redux/action";
import GameCard from "../../components/Card/GameCard";



const Home = () => {
  const videoGames = useSelector((state) => state.videoGames);
  const dispatch = useDispatch();

  // let dbData;
  // let ApiData;

  const searchredGames = useSelector((state) => state.searchredGames);

  useEffect(() => {
    dispatch(allGame());
  },[]);

 
  // if(videoGames.db){
  //   dbData=videoGames.db.map((game2) => <GameCard key={game2.id} game2={game2} />)
  // }

  // if(videoGames.db_api){
  //   ApiData=videoGames.db_api.map((game) => <GameCard key={game.id} game={game} />)
  // }


  console.log(videoGames)

  return (
    <div>
      <h1>Este es el home</h1>
      <div>
        {searchredGames.length > 0 //aca me muestra los juegos segun el search
          ? searchredGames.map((game) => <GameCard key={game.id} game={game} />)
          // : dbData && ApiData
          : videoGames.map((game) => <GameCard key={game.id} game={game} />)
        }
      </div>
    </div>
  );
};

export default Home;
