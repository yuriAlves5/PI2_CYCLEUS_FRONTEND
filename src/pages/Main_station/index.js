import "./Main_station.scss"
import Footer from "../../components/Footer";
import React from 'react';
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";

const Main_station = () => {
  const navigate = useNavigate();

  const navigateToStation = () => {
    navigate('/station')
  }

  const alertaEstacao = () => {
    alert("Essa estação ainda não está pronta!")
  }

  return (
    <div className="station-wrapper">

        <Header/>

      <div className="station-container">
        
        <div className="station-logo-bike"><img src="bike.png"/></div>

        <div className="stations-buttons">
            <div className="fga-station">
                    <button onClick={navigateToStation} >Estação UNB/FGA </button>
            </div>
            <div className="fce-station">
                    <button onClick={alertaEstacao}>Estação UNB/FCE </button>
            </div>
            <div className="darcy-station">
                    <button onClick={alertaEstacao}>Estação UNB/DARCY </button>
            </div>
            <div className="fal-station">
                    <button onClick={alertaEstacao}>Estação UNB/FAL </button>
            </div>
        </div>        
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main_station;