import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allGame } from "../../redux/action";
import GameCard from "../../components/Card/GameCard";
import Nav from "../../components/Nav/Nav";
import styles from './Home.module.css'
import { useState } from "react";


const Home = () => {
  const videoGames = useSelector((state) => state.videoGames);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const searchredGames = useSelector((state) => state.searchredGames);

  useEffect(() => {
    dispatch(allGame()).then(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
       <div className={styles.loaderContainer}>
     <div className={styles.loader}>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
      <div className={styles.loaderSquare}></div>
     </div>
    </div>
      </div>
    );
  }

  return (
    <div className={styles.home}>
      <div >
        <Nav />
      </div>

      <div>
        {searchredGames.length > 0 //aca me muestra los juegos segun el search
          ? searchredGames.map((game) => <GameCard key={game.id} game={game} />)
          : videoGames.map((game) => <GameCard key={game.id} game={game} />)
        }
      </div>
    </div>
  );
};

export default Home;
