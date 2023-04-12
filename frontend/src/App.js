
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  const [menuOption, setMenuOption] = useState('HOME');
  return (
    <Router>
      <div className="App">
        <NavBar setMenuOption={setMenuOption} />
        <header className="App-header">
          <p>
            Gym Trkr
          </p>
        </header>
      </div>
    </Router>
  );
}

export default App;
