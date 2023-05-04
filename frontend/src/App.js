
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CreateExercize from './components/CreateExercize';
import Welcome from './components/Welcome';

function App() {

  const [menuOption, setMenuOption] = useState('HOME');
  return (
    <Router>
      <div className="App">
        <NavBar setMenuOption={setMenuOption} />
        <Routes>
          <Route path='/' element={<Welcome />} />

          <Route path='/create' element={<CreateExercize />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
