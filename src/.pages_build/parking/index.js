import React from 'react';
import './parking.scss';
import { useNavigate } from 'react-router-dom';

const Parking = () => {
  const navigate = useNavigate();

  const handleLock = () => {
    // Lógica para travar a vaga
    navigate('/qrcode');
  };

  const handleUnlock = () => {
    // Lógica para destravar a vaga
    navigate('/qrcode');
  };
  return (
    <div className="parking-wrapper">
      <div className="parking-container">
        <div className="parking-header">
          <img className="logo" src="./cycleus-marine.png" alt="Cycleus Logo" />
        </div>

        <div className="parking-card">
          <div className="parking-image"></div>
          <div className="bike-spots">
            <div className="bike-spot"></div>
            <div className="bike-spot"></div>
            <div className="bike-spot"></div>
            <div className="bike-spot"></div>
          </div>
          <div className="parking-buttons">
            <button className="lock" onClick={handleLock}>Travar</button>
            <button className="unlock" onClick={handleUnlock}>Destravar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parking;
