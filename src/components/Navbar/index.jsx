import React, { useEffect, useState } from 'react';
import ModalWindow from '../ModalWindow';
import {SETTINGS_MODAL_WINDOW_DATA} from '../../data';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import settingsIconFocused from '../../assets/icons/settings-icon-focused.svg';
import './style.scss';

const Navbar = ({navbarData}) => {
  const [icon, setIcon] = useState(settingsIcon);
  const [showModal, setShowModal] = useState(false);
  const [navbarItems, setNavbarItems] = useState([]);
  const img = document.querySelector('.navbar__subheadings-settings-settingsIcon');

  document.addEventListener('click', (event) => {
    if(img?.contains(event.target)) {
      setIcon(settingsIconFocused);
      setShowModal(true);
    } else {
      setIcon(settingsIcon);
      setShowModal(false);
    }
  });
  
  useEffect(() => {
    setNavbarItems(navbarData.items.map(e => <li key={e} className='navbar__subheadings-items-item pointer' >{e}</li>));
    // eslint-disable-next-line
  }, []);

  return (
    <nav className='navbar' >
      <h1 className='navbar__heading' >{navbarData.heading}</h1>
      
      <div className='navbar__subheadings' >
        <ul className='navbar__subheadings-items' >
          {navbarItems}
        </ul>
          
        <div className='navbar__subheadings-settings' >
          <img className='navbar__subheadings-settings-settingsIcon pointer' src={icon} alt='Not Found' />
          {
            showModal &&
            <ModalWindow modalWindowData={SETTINGS_MODAL_WINDOW_DATA} />
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;