import "./footer.scss";

import { useLocation, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';


const Footer = () => {

  const navigate = useNavigate();

  const navigateToStation = () => {
    navigate('/station');
  }

  // tela da trava... 
  
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location.pathname)
  },[location])
  
  const className = (path) => {
    return path === currentPath? "border": '';
  }

  const footerColor = (img) => {
    return "/unlock" === currentPath? img + '-marine.png': img + '.png';
  }

  const isUnlock = (path) => {
    return path === currentPath? "unlock": '';
  }





  return (
    <div className="footer-wrapper">
        <div className= {`footer-container ${isUnlock("/unlock")}`}>
            <button className={`${className("/station")}`}><img src= {footerColor('./home')} alt="Home" />Home</button>
            <button className={`${className("/lock")}`} ><img src={footerColor('./comment')}/> Travar </button>
            <button className={`${className("/unlock")}`}><img src={footerColor('./comment')}/> Destravar</button>
            <button ><img src={footerColor('./home')}/> Sair</button>
        </div>
    </div>
  );
};

export default Footer;