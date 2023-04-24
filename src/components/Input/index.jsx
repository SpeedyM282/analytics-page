import React from "react";
import {TriangleIcon} from './TriangleIcon';
import './style.scss';

const Input = ({withLink, disabled}) => {
  return (
    <div className="input__block" >
      <input className="input__block-input" disabled={disabled} /> 
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