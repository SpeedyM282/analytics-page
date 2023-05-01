import React, { useEffect, useState } from "react";
import rightArrow from '../../assets/icons/right-arrow.svg';
import './style.scss';

const ModalWindow = ({modalWindowData}) => {
  const [modalWindowItems, setModalWindowItems] = useState([]);

  useEffect(() => {
    setModalWindowItems(modalWindowData.map((e, i) => (
      <p key={i} className="modal-window__item pointer" >
        {e.text} 
        {
          e.icon && 
          <img className="modal-window__item-image" src={rightArrow} alt="Not Found" />
        }
      </p>
    )));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="modal-window">
      {modalWindowItems}
    </div>
  );
}

export default ModalWindow;