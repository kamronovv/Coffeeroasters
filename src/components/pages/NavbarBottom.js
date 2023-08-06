
import React from 'react';
import "../homePage/HomePage.scss";
// images
import Fackebook from "../homePage/homeImage/facebook.svg";
import Instagram from "../homePage/homeImage/instagram.svg";
import Twitr from "../homePage/homeImage/twitter.svg";
import LogoBotton from "../homePage/homeImage/LogoBotton.svg"
import { Outlet, NavLink } from "react-router-dom";




function NavbarBotton() {
    return (
      <div className='NavBotton'>
        <a></a><img className='LogoBooton' src={LogoBotton} />
        <ul className="BottonList">
                <li className="items"><NavLink to="/">HOME</NavLink></li>
                <li className="items"><NavLink to="/AbautePage">ABOUT US</NavLink></li>
                <li className="items"><NavLink to="/CreatePage">Create your plan</NavLink></li>
            </ul>
            <ul className='logotip'>
                <a href='#'><img src={Fackebook} /></a>
                <a href='#'><img src={Twitr} /></a>
                <a href='#'><img src={Instagram} /></a>     
            </ul>
      </div>
    );
  }
  
  export default NavbarBotton;
  