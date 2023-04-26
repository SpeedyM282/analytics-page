import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import burger from './burger.svg';
import upArrow from './up-arrow.svg';
import downArrow from './down-arrow.svg';
import { updateIdAction } from "../../store/reducer";
import './style.scss';

const MenuLink = ({links, id}) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const linkId = useSelector(state => state.id);

  const linkStyle = {
    color: '#FD8301',
    borderLeft: '1px solid #FD8301',
  }
  
  const handleLinkClick = () => {
    dispatch(updateIdAction(id));
  }
  
  const handleArrowClick = () => {
    setDropdownOpen(prev => !prev);
  }
  
  useEffect(() => {
    if(links.subtitles) {
      setOptions(links.subtitles.map(e => <p key={e} className="menulink__subtitles-option pointer" >{e}</p>))
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="menulink" >
      <div style={linkId === id ? linkStyle : {}} className="menulink__link" >
        <div className="menulink__link-titleAndBurger">
          <img src={burger} className="menulink__link-titleAndBurger-burger pointer" alt="Not Found" />
          <p onClick={handleLinkClick} className="menulink__link-titleAndBurger-title pointer" >{links.title}</p>
        </div>
        {
          links.subtitles &&
          <img className="menulink__link-title-arrow pointer" onClick={handleArrowClick} src={dropdownOpen ? upArrow : downArrow} alt="Not Found" />
        }
      </div>

      {
        (links.subtitles && dropdownOpen) &&
        <div className="menulink__subtitles" >
          {options}
        </div>
      }
    </div>
  )
}

export default MenuLink;