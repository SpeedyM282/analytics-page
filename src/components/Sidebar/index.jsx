import React from "react";
import logo from '../../assets/logo.png';
import './style.scss';

const Sidebar = () => {
  return (
    <div className="sidebar" >
      <div className="sidebar__upper">
        <div className="sidebar__upper-logo">
          <img className="sidebar__upper-logo-image" src={logo} alt="Not Found" />
        </div>
        
        <div className="sidebar__text">
          <ul className="sidebar__text-items">
            <li>HELLO</li>
            <li>WORLD</li>
            <li>GOODBYE</li>
            <li>WORLD</li>
            <li>LOREM</li>
            <li>IPSUM</li>
          </ul>
        </div>
      </div>

      
      <div className="sidebar__footer">
        <span className="sidebar__footer-account">D</span>DENIS POTEMKIN
      </div>
    </div>
  )
}

export default Sidebar;