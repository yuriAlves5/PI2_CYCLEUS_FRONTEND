import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Station from './pages/Station';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Station />} />
      </Routes>
    </Router>
  );
};

export default App;