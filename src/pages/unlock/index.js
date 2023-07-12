import './unlock.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useState } from 'react';

const Unlock = () => {
  const [vaga, setVaga] = useState('Vaga 1');

  const fecharTrava = () => {
    // Faz a solicitação GET para fechar a trava
    fetch('http://192.168.38.23/abrir_trava')
      .then(response => response.text())
      .then(data => alert(data)); // Exibe a mensagem como um alerta
  };

  return (
    <div className="unlock-wrapper">
      <Header />

      <div className="unlock-container">
        <h1>Estação UNB/GAMA</h1>
        <span>Sua bike está estacionada na</span>
        <span>{vaga}</span>

        <div className="unlock-logo-bike">
          <img src="bike.png" alt="Bike" />
        </div>

        <button onClick={fecharTrava}>Liberar bicicleta</button>
      </div>

      <Footer />
    </div>
  );
};

export default Unlock;
