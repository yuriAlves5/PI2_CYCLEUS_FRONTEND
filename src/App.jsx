import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';

import Unlock from './pages/unlock';
import Station from './pages/Station';
import Main_station from './pages/Main_station';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Station />} />
        <Route path="/station" element={<Station />} />
        <Route path="/main_station" element={<Main_station />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unlock" element={<Unlock />} />
        <Route path="/register" element= {<Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;