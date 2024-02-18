import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Page from './views/landing/Page'
import Home from './views/home/Home'
import Nav from "./components/nav/Nav";

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Page />} /> 
          <Route path="/home" element={
          <div>
            <Nav />
            <Home />            
          </div>
          } /> 
        </Routes>
      </div>
    
  );
}
export default App;
