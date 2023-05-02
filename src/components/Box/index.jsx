import React from "react";
import Button from '../Button';
import Table from '../Table';
import './style.scss';

const Box = ({isButton, isTable, isTableRow}) => {
  const style = {
    padding: isButton ? '20px 25px' : 
              isTableRow ? '15px' : '0'
  };
  return (
    <div style={style} className="box">
      {
        isButton &&
        <Button />
      }
      {
        isTable &&
        <Table />
      }
    </div>
  );
}

export default Box;