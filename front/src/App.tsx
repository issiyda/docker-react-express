import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import UserPage from './pages/user';
import React from 'react';
import Router from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Router />

    </div>
  );
}

export default App;
