import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import burger from '../../assets/icons/burger.svg';
import upArrow from '../../assets/icons/up-arrow.svg';
import downArrow from '../../assets/icons/down-arrow.svg';
import { updateIdAction } from "../../store/reducers/menuReducer";
import './style.scss';

const MenuLink = ({linkData, onDragEnd, onDragOver, onDragStart, onDrop}) => {
  const dispatch = useDispatch();
  
  const [options, setOptions] = useState([]);
  const [draggable, setDraggable] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const linkId = useSelector(state => state.menuReducer.id);

  const linkStyle = {
    color: '#FD8301',
    borderLeft: '1px solid #FD8301',
  }
  
  const handleLinkClick = () => {
    dispatch(updateIdAction(linkData.id));
  }
  
  const handleArrowClick = () => {
    setDropdownOpen(prev => !prev);
  }
  
  useEffect(() => {
    if(linkData.subtitles) {
      setOptions(linkData.subtitles.map(e => <p key={e} className="menulink__subtitles-option pointer" >{e}</p>))
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div 
      className="menulink" 
      draggable={draggable}
      onDragEnd={e => onDragEnd(e)}
      onDragLeave={e => onDragEnd(e)}
      onDragOver={e => onDragOver(e)}
      onDrop={e => onDrop(e, linkData)}
      onDragStart={e => onDragStart(e, linkData)}
    >
      <div style={linkId === linkData.id ? linkStyle : {}} className="menulink__link" >
        <div className="menulink__link-titleAndBurger">
          <img 
            src={burger} 
            alt="Not Found"
            onMouseUp={() => setDraggable(true)}
            onMouseDown={() => setDraggable(false)}
            className="menulink__link-titleAndBurger-burger pointer" 
          />
          
          <p 
            onClick={handleLinkClick} 
            className="menulink__link-titleAndBurger-title pointer" 
          >
            {linkData.title}
          </p>
        </div>
        {
          linkData.subtitles &&
          <img 
            alt="Not Found" 
            onClick={handleArrowClick} 
            src={dropdownOpen ? upArrow : downArrow} 
            className="menulink__link-title-arrow pointer" 
          />
        }
      </div>
      
      <div
        className="menulink__subtitles" 
        style={{display: (linkData.subtitles && dropdownOpen) ? 'flex' : 'none'}} 
      >
        {options}
      </div>
    </div>
  )
}

export default MenuLink;