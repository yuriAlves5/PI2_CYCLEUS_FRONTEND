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





  return (
    <div className="footer-wrapper">
        <div className="footer-container">
            <button className={`${className("/station")}`}><img src="./home.png" alt="Home" />Home</button>
            <button className={`${className("/trava")}`} ><img src="./comment.png"/> Trava</button>
            <button ><img src="./comment.png"/> trava</button>
            <button ><img src="./perfil.png"/> Sair</button>
        </div>
    </div>
  );
};

export default Footer;