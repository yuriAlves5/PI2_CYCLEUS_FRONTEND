import React from "react";
import "./Header.css";
import logo from "../assests/LOGO.png"


const Header = () =>{
    return (
        <div id="header">
            <img id="logo" src={logo}></img>
        </div>
    );
};
export default Header;
