import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Page.module.css'


const Page = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }

  return (
    <div className={styles.background}>
      <h1 className={styles.h1}>Que comience la aventura...</h1>
      <div>
        <button className={styles.button} onClick={handleClick}>PLAY...</button>
      </div>
      <h4 className={styles.h4}>
        <p>“Si no sabes lo que quieres, no puedes conseguirlo.” Fallout</p>
      </h4>
    </div>
  );
}

export default Page;