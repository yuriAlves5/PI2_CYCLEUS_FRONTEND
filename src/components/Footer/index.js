import "./footer.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  const navigateToStation = () => {
    navigate('/station');
  }

  const navigateToMain = () => {
    navigate('/main_station');
  }

  const navigateToUnlock = () => {
    navigate('/unlock');
  }

  const className = (path) => {
    return path === currentPath ? "border" : '';
  }


  const isUnlock = (path) => {
    return path === currentPath ? "unlock" : '';
  }

  const handleLogout = () => {
    // Lógica para fazer logout ou redirecionar para a página de logout
    navigate('/logout');
  }

  const footerColor = (img) => {
    // mudar a cor do footer 

    return "/unlock" === currentPath || "/station" === currentPath ? img + '-marine.png' : img + '.png';
  }



  return (
    <div className="footer-wrapper">
      <div className={`footer-container ${isUnlock("/unlock")} ${isUnlock("/station")}`}>
        <button className={`${className("/main_station")}`} onClick={navigateToMain}>
          <img src={footerColor('./home')} alt="Home" />
          Home
        </button>

        <button className={`${className("/station")}`} onClick={navigateToStation}>
          <img src={footerColor('./comment')} alt="Travar" /> Travar
        </button>
        
        <button className={`${className("/unlock")}`}><img src={footerColor('./comment')} alt="Destravar" onClick={navigateToUnlock} /> Destravar
        </button>
        
        <button onClick={handleLogout}><img src={footerColor('./home')} alt="Sair" /> Sair</button>
      </div>
    </div>
  );
};

export default Footer;
