import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/navbar.js';
import Home from './components/Home/home.js';

export default function App(props) {
  // Routes replaces Switch and Navigate replaces Redirect
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home prop=""/>
        <Routes>
        </Routes>
      </Router>
      <footer>
        <div>
          <p>An E-Commerce Platform</p>
          <p><a href="mailto:informatics@uw.edu"><span>Email:</span> informatics@uw.edu</a></p>
          <p>&copy; 2022 INFO442 Project</p>
        </div>
      </footer>
    </div>
  );
}