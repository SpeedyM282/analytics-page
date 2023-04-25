import React, {useState} from "react";
import downArrow from './down-arrow.svg';
import upArrow from './up-arrow.svg';
import './style.scss';

const MenuLink = ({links}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setDropdownOpen(prev => !prev);
  }

  return (
    <div className="menulink" >
      <div className="menulink__link" >
        <span className="menulink__link-title" >{links.title}</span>
        {
          links.subtitles &&
          <img className="menulink__link-title-arrow" onClick={handleClick} src={dropdownOpen ? upArrow : downArrow} alt="Not Found" />
        }
      </div>

      {
        links.subtitles &&
        <div className="menulink__subtitles" >
        </div>
      }
    </div>
  )
}

export default MenuLink;