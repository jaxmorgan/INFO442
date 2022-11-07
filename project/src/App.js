import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/navbar.js';
import About from './components/About/about.js';
import Home from './components/Home/home.js';
import Items from './components/Items/items';
import { ItemsContent } from "./data/productsData";


export default function App(props) {
  // Routes replaces Switch and Navigate replaces Redirect
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" render={() => <Navigate to="/Home" />} />
          <Route path="/About" element={<About />} />
        </Routes>        
      </Router>

    </div>
  );
}