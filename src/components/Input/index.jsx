import React from "react";
import rightTriangle from '../../assets/icons/right-triangle.svg';
import './style.scss';

const Input = ({withLink, disabled, value}) => {
  return (
    <div className="input__block" >
      <input className="input__block-input" value={value} disabled={disabled} /> 
      {
        withLink &&
        <div className="triangleicon__block pointer">
          <img src={rightTriangle} alt="Not Found" />
        </div> 
      }
    </div>
  )
}

export default Input;