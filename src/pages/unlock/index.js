import './unlock.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useState } from 'react';

const Unlock = () => {
    
    const [vaga, setVaga] = useState('Vaga 1')
    
    return (
        <div className="unlock-wrapper">
            
            <Header/>

            <div className="unlock-container">
                <h1>Estação UNB/GAMA</h1>
                <span>Sua bike está estácionada na</span>
                <span>{vaga}</span>

                <div className="unlock-logo-bike"><img src="bike.png"/></div>

                <button>Liberar bicicleta</button>
            </div>

            <Footer/>
        </div>
    );
};

export default Unlock;