/* eslint-disable jsx-a11y/alt-text */
import "./home.scss"

import { useNavigate } from 'react-router-dom';


import React from 'react';

const Home = () => {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  }

  const navigateToRegister = () =>{
    navigate('/register');
  }

  return (
    <div className="home-wrapper">

      <div className="home-container">
        
        <img className="home-logo" src="./cycleus-marine.png"/> 
        <img className="home-bike" src="./bike.png"/> 

        <div className="home-buttons">
          <button className="botoes" onClick={navigateToLogin } >Login</button>
          <button className="botoes" onClick={navigateToRegister}>CADASTRE-SE</button>
        </div>

      </div>
    </div>
  );
};

export default Home;