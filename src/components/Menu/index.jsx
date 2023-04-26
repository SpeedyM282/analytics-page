import React, {useEffect, useState} from "react";
import { nanoid } from 'nanoid';
import MenuLink from '../MenuLink';
import { MENU_LINKS_TEXT } from "../../data";

import './style.scss';

const Menu = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(MENU_LINKS_TEXT.map((e, i) => <MenuLink key={i} id={nanoid()} links={e} />))
  }, []);

  return (
    <div className="menu" >
      {links}
    </div>
  );
}

export default Menu;