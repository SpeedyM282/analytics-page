import React from "react";
import Box from "../../components/Box";
import { NAVBAR_DATA } from "../../data";
import Navbar from '../../components/Navbar';
import './style.scss';

const Analytics = () => {
  return (
    <div className="analytics">
      <Navbar navbarData={NAVBAR_DATA} />
      <Box isButton={true} />
      <Box isTable={true} />
    </div>
  );
}

export default Analytics;