import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <p>
          Hi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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

