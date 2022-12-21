import React from "react";
import './header.css'
import Logo from './Logo/header-logo.png' 
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return(
         <div className="header d-flex justify-content-center">
            <div className="header_logo">
                <img src={Logo} alt='Logo'></img>
            </div>
            <div className="header_center main">
               <p className="ghostItem">Model S</p>
               <p className="ghostItem">Model 3</p>
               <p className="ghostItem">Model X</p>
               <p className="ghostItem">Model Y</p>
               <p className="ghostItem">Solar Roof</p>
               <p className="ghostItem">Solar Panel</p>
            </div>
            
            <div className="header_right d-flex justify-content-end ">
            <p className="ghostItem mx-2 my-2">Shop</p>
            <p className="ghostItem mx-2 my-2">Account</p>
            <p className="ghostItem mx-2 my-2">Menu</p>
            </div>
        </div> 
        
    )
}

export default Header;