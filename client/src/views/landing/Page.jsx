import React from "react";
import { useNavigate } from "react-router-dom";


const Page=()=> {

  const navigate=useNavigate()
  
  const handleClick=()=>{
    navigate('/home')
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      <button onClick={handleClick}>HOME</button>        
    </div>
  );
}

export default Page;