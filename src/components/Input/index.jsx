import React from "react";
import {TriangleIcon} from './TriangleIcon';
import './style.scss';

const Input = ({withLink}) => {
  return (
    <div className="input__block" >
      <input className="input__block-input" /> 
      {
        withLink &&
        <div className="triangleicon__block">
          <TriangleIcon />
        </div> 
      }
    </div>
  )
}

export default Input;