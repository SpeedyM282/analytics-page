import React, {useState} from "react";
import MenuLink from '../MenuLink';
import { MENU_LINKS_TEXT } from "../../data";

import './style.scss';

const Menu = () => {
  const [links, setLinks] = useState(MENU_LINKS_TEXT);
  const [currentLink, setCurrentLink] = useState(null);

  const dragStartHandler = (e, link) => {
    // e.preventDefault();
    setCurrentLink(link);
  }

  const dragEndHandler = (e) => {
    e.target.style.background = 'transparent';
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = '#1F2123';
  }

  const dropHandler = (event, link) => {
    event.preventDefault();

    event.target.style.background = 'transparent';

    setLinks(links.map(e => {
      if(e.id === link.id) {
        return {...e, order: currentLink.order}
      }
      
      if(e.id === currentLink.id) {
        return {...e, order: link.order}
      }
      return e;
    }));
  }

  const sortLinks = (a, b) => {
    if(a.order > b.order) return 1;
    else return -1;
  }

  return (
    <div className="menu" >
      {links.sort(sortLinks).map((e, i) => {
        return (
          <MenuLink 
            key={i}
            linkData={e}
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
          />
        );
      })}
    </div>
  );
}

export default Menu;