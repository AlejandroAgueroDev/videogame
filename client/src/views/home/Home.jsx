import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allGame } from "../../redux/action";
import GameCard from "../../components/Card/GameCard";
import Nav from "../../components/Nav/Nav";
import styles from "./Home.module.css";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect } from "react";

const Home = () => {
 const videoGames = useSelector((state) => state.videoGames);
 const dispatch = useDispatch();

 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 
 const itemsPerPage = 20; 

 const totalPages = Math.ceil(videoGames.length / itemsPerPage);

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

 const onPageChange = (page) => {
  setCurrentPage(page);
 };

 return (
  <div className={styles.home}>
   <div>
    <Nav />
   </div>

   <div>
    {searchredGames.length > 0 //aca me muestra los juegos segun el search
     ? searchredGames.map((game) => <GameCard key={game.id} game={game} />)
     : videoGames
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((game) => <GameCard key={game.id} game={game} />)}
   </div>

   <div>
    <Pagination
     currentPage={currentPage}
     totalPages={totalPages}
     onPageChange={onPageChange}
    />
   </div>
  </div>
 );
};

export default Home;
