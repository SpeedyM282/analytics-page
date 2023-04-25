import React from "react";
import Menu from "../Menu";
import logo from '../../assets/logo.png';
import './style.scss';

const Sidebar = ({user}) => {
  return (
    <div className="sidebar" >
      <div className="sidebar__upper">
        <div className="sidebar__upper-logo">
          <img className="sidebar__upper-logo-image" src={logo} alt="Not Found" />
        </div>
        
        <div className="sidebar__text">
          <Menu />
        </div>
      </div>

      
      <div className="sidebar__footer">
        <span className="sidebar__footer-account">{user[0]}</span>{user}
      </div>
    </div>
  )
}

export default Sidebar;