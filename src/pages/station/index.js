import "./station.scss"
import Footer from "../../components/Footer";
import React from 'react';
import Header from "../../components/Header";
const Station = () => {
  return (
    <div className="station-wrapper">

        <Header/>

      <div className="station-container">
        
        <div className="station-logo-bike"><img src="bike.png"/></div>

        <div className="stations-buttons">
            <div className="fga-station">
                    <button>Estação UNB/FGA </button>
            </div>
            <div className="fce-station">
                    <button>Estação UNB/FCE </button>
            </div>
            <div className="darcy-station">
                    <button>Estação UNB/DARCY </button>
            </div>
            <div className="fal-station">
                    <button>Estação UNB/FAL </button>
            </div>
        </div>        
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Station;