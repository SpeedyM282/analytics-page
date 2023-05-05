import React, { useState } from "react";
import rightTriangle from '../../assets/icons/right-triangle.svg';
import './style.scss';

const Input = ({withLink, disabled, val, width}) => {
  const [value, setValue] = useState(val);

  return (
    <div className="input__block" >
      <input 
        value={value} 
        disabled={disabled} 
        style={{width: '100%'}} 
        className="input__block-input" 
        onChange={(e) => setValue(e.target.value)} 
      /> 
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