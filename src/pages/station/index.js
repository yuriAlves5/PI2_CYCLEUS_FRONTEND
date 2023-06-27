import "./station.scss"

import React from 'react';

const Station = () => {
  return (
    <div className="station-wrapper">

      <div className="station-container">
        
        <div className="station-header"><img className="logo" src="./cycleus-marine.png"/> </div>

        <input className="station-input" type="text" placeholder="Pesquisar"/>

        <div className="stations-buttons">
            <div className="fga-station">
                    <p>Está a [x] km de você</p>
                    <button>Estação UNB/FGA </button>
            </div>
            <div className="fce-station">
                    <p>Está a [x] km de você</p>
                    <button>Estação UNB/FCE </button>
            </div>
            <div className="darcy-station">
                    <p>Está a [x] km de você</p>
                    <button>Estação UNB/DARCY </button>
            </div>
            <div className="fal-station">
                    <p>Está a [x] km de você</p>
                    <button>Estação UNB/FAL </button>
            </div>
        </div>
        

      </div>
    </div>
  );
};

export default Station;