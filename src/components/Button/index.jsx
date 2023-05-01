import React from "react";
import plusIcon from '../../assets/icons/plus.svg';
import './style.scss';

const Button = () => {
  const btnText = 'Добавить строку';

  return (
    <button className="button pointer" >
      <img src={plusIcon} alt="Not Found" />
      {btnText}
    </button>
  )
}

export default Button;