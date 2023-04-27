import React, { useEffect, useState } from 'react';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import settingsIconFocused from '../../assets/icons/settings-icon-focused.svg';
import './style.scss';

const Navbar = ({navbarData}) => {
  const [icon, setIcon] = useState(settingsIcon);
  const [navbarItems, setNavbarItems] = useState([]);
  const img = document.querySelector('.navbar__subheadings-settingsIcon');

  document.addEventListener('click', (event) => {
    if(img?.contains(event.target)) {
      setIcon(settingsIconFocused);
    } else {
      setIcon(settingsIcon);
    }
  })
  
  useEffect(() => {
    setNavbarItems(navbarData.items.map(e => <li key={e} className='navbar__subheadings-items-item pointer' >{e}</li>));
    // eslint-disable-next-line
  }, []);

  return (
    <nav className='navbar' >
      <h1 className='navbar__heading' >{navbarData.heading}</h1>
      
      <div className='navbar__subheadings'>
        <ul className='navbar__subheadings-items' >
          {navbarItems}
        </ul>
          
        <img className='navbar__subheadings-settingsIcon pointer' src={icon} alt='Not Found' />
      </div>
    </nav>
  );
}

export default Navbar;