import "./login.scss"

import React from 'react';

const Home = () => {
  return (
    <div className="home-wrapper">

      <div className="home-container">
        
        <img className="logo" src="./cycleus-marine.png"/> 
        <img className="bike" src="./bike.png"/> 
        <div className="buttons">
        <button className="login">Login</button>
        <button className="register">CADASTRE-SE</button>
        </div>

      </div>
    </div>
  );
};

export default Home;