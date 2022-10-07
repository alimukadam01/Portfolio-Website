import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.js';
import SoftwareProjectDisplay from './Components/Pages/SoftwareProjectDisplay.js';
import GraphicProjectDisplay from './Components/GraphicProjectDisplay';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/SoftwareProjectDisplay' element={<SoftwareProjectDisplay/>} />
              <Route path='/GraphicProjectDisplay' element={<GraphicProjectDisplay/>} />
          </Routes> 
      </Router>
    </>
  );
}

export default App;
