import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.js';
import ProjectDisplay from './Components/Pages/ProjectDisplay.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/ProjectDisplay' element={<ProjectDisplay/>} />
          </Routes> 
      </Router>
    </>
  );
}

export default App;
