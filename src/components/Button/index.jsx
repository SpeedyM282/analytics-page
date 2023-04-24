import React from "react";
import {PlusIcon} from './PlusIcon';
import './style.scss';

const Button = () => {
  const btnText = 'Добавить строку';

  return (
    <button className="button" >
      <PlusIcon/>
      {btnText}
    </button>
  )
}

export default Button;