import React, {useEffect, useState} from "react";
import downArrow from './down-arrow.svg';
import upArrow from './up-arrow.svg';
import './style.scss';

const MenuLink = ({links}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(links.subtitles) {
      setOptions(links.subtitles.map(e => <p key={e} className="menulink__subtitles-option pointer" >{e}</p>))
    }
    // eslint-disable-next-line
  }, [])

  const handleClick = () => {
    setDropdownOpen(prev => !prev);
  }

  return (
    <div className="menulink" >
      <div className="menulink__link" >
        <p className="menulink__link-title pointer" >{links.title}</p>
        {
          links.subtitles &&
          <img className="menulink__link-title-arrow pointer" onClick={handleClick} src={dropdownOpen ? upArrow : downArrow} alt="Not Found" />
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