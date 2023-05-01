import React from "react";
import Button from '../Button';
import './style.scss';

const Box = ({isButton, isTable, isTableRow}) => {
  const style = {
    padding: isButton ? '20px 25px' : isTable
  };
  return (
    <div style={style} className="box">
      {
        isButton &&
        <Button />
      }
    </div>
  );
}

export default Box;