import React from "react";
import { NAVBAR_DATA } from "../../data";
import Navbar from '../../components/Navbar';
import './style.scss';

const Analytics = () => {
  return (
    <div className="analytics">
      <Navbar navbarData={NAVBAR_DATA} />
    </div>
  );
}

export default Analytics;