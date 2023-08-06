import React, { useState, useEffect } from "react";
import Logo from './image/Logo.svg'
import { Outlet, NavLink } from "react-router-dom";

import "./Navbar.scss"

function Navbar() {
    return (
      <div>
        <nav className="Navbar">
            <img src={Logo} />
            <ul className="navList">
                <li className="items"><NavLink to="/">HOME</NavLink></li>
                <li className="items"><NavLink to="/AbautePage">ABOUT US</NavLink></li>
                <li className="items"><NavLink to="/CreatePage">Create your plan</NavLink></li>
            </ul>
        </nav>
        <Outlet />

      </div>
    );
  }
  
  export default Navbar;
  