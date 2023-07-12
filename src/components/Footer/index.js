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

  const className = (path) => {
    return path === currentPath ? "border" : '';
  }

  const footerColor = (img) => {
    return "/unlock" === currentPath ? img + '-marine.png' : img + '.png';
  }

  const isUnlock = (path) => {
    return path === currentPath ? "unlock" : '';
  }

  const handleLogout = () => {
    // Lógica para fazer logout ou redirecionar para a página de logout
    navigate('/logout');
  }

  const handleLockClick = () => {
    // Lógica para travar a bicicleta
    navigateToStation();
  }

  return (
    <div className="footer-wrapper">
      <div className={`footer-container ${isUnlock("/unlock")}`}>
        <button className={`${className("/station")}`} onClick={navigateToStation}>
          <img src={footerColor('./home')} alt="Home" />
          Home
        </button>
        <button className={`${className("/lock")}`} onClick={handleLockClick}>
          <img src={footerColor('./comment')} alt="Travar" /> Travar
        </button>
        <button className={`${className("/unlock")}`}><img src={footerColor('./comment')} alt="Destravar" /> Destravar</button>
        <button onClick={handleLogout}><img src={footerColor('./home')} alt="Sair" /> Sair</button>
      </div>
    </div>
  );
};

export default Footer;
