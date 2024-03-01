import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Page from './views/Landing/Page'
import Home from './views/Home/Home'
import Nav from "./components/Nav/Nav";
import GameDetail from './components/GameDetail/GameDetail'
import FormCreate from './components/FormCreate/FormCreate'

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Page />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<GameDetail/>} />
          <Route path="/create" element={<FormCreate/>}></Route>
        </Routes>
      </div>
    
  );
}
export default App;
