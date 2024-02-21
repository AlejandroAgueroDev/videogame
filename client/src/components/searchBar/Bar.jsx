import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchGames } from "../../redux/action";

const Bar=()=>{

 const [input, setInput]=useState('')
 const dispatch=useDispatch()
 const filteredGames = useSelector((state) => state.filteredGames);


 const handleChange=(event)=>{
  setInput(event.target.value)
 }


 const handleSearch=()=>{
  dispatch(searchGames(input))
  setInput('')
  
}

 useEffect(()=>{
  
  if (filteredGames.length === 0) { // Si no hay juegos filtrados, mostramos un alert
    alert("No se encontró el juego indicado");
  }
  
}, [filteredGames])


  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Bar;