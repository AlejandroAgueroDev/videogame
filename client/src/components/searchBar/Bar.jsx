import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchGames } from "../../redux/action";

const Bar=()=>{

 const [input, setInput]=useState('')
 const dispatch=useDispatch()

 const notFound = useSelector(state => state.notFound);

 const handleChange=(event)=>{
  setInput(event.target.value)
 }

 const handleSearch=()=>{
  dispatch(searchGames(input))
  setInput('')  
 }

 useEffect(() => {
  if (notFound) {
    alert("No se han encontrado videojuegos");
  }
}, [notFound]);


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