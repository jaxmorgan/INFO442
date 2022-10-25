import React from 'react';
//import logo from './';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';

export default function App(props) {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/Home">
              
            </Route>
            <Route path="/">
              <Navigate path="/Home" />
            </Route>
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