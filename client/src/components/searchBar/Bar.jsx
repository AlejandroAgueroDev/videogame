import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGames } from "../../redux/action";

const Bar=()=>{

 const [input, setInput]=useState('')
 const dispatch=useDispatch()


 const handleChange=(event)=>{
  setInput(event.target.value)
 }

 const handleSearch=()=>{
  dispatch(searchGames(input))
  setInput('')  
 }


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