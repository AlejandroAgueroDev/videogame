import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Page from './views/Landing/Page'
import Home from './views/Home/Home'
import Nav from "./components/Nav/Nav";
import GameDetail from './components/GameDetail/GameDetail'

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Page />} /> 
          <Route path="/home" element={
          <div>
            <Nav />
            <Home />            
          </div>
          } />
          <Route path="/detail/:id" element={
            <div>
              <GameDetail/>
            </div>
          } />
        </Routes>
      </div>
    
  );
}
export default App;
