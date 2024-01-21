import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPencil,faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPencil, faPlus);


import './Card.css'

const Card = ({ 
  tasks,
  category,
  inputComponent,
  }) => {

  return(
    <div className={`card ${category}`} value="todo">
      <div className="items-wrapper">
        <ul>
      
          <Items tasks={tasks} />

        </ul>
      </div>
      
      {inputComponent}
    </div>
  );
};

const Items = ({ tasks }) => {
  
  return(
    <>
       {tasks.map((item, index) => (
        <li key={index}>
          <Item item={item} />
        </li>
       ))}
    </>
  )
}

const Item = ({ item }) => {
   const [isItemFocused, setIsItemFocused] = React.useState(
    false
  );
  const handleItemFocus = () => {
    setIsItemFocused(true);  
  };
  const handleItemBlur = () => {
    setIsItemFocused(false);
  }

   /*inline style only for icons*/
  const plusButtonBaseStyle = {
    color: '#F5F5F5',
    transition: 'transform 150ms ease',
    cursor: 'pointer',
  }
  const plusButtonStyleHover = {
    transform: 'rotate(-45deg)',
  }
  const iconContainerStyle = {
    width: '100px',
    height: '50px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexShrink: '0',
  };
  const iconBaseStyle = {
    color: '#A0A0A0',
    cursor: 'pointer',
    transition: 'color 100ms ease',
  };
  const editIconStyleHover = {
    color: '#4D724D',
  };
  const deleteIconStyleHover = {
    color: '#CC0000',
  };

  //custom hook for hover icons
  const useHover = (baseStyle, hoverStyle) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const combinedStyles = isHovered ? {...baseStyle, ...hoverStyle}    : baseStyle;
    return {
      isHovered,
      handleMouseEnter,
      handleMouseLeave,
      combinedStyles,
    }
  };
  
  const { isHovered: isHoveredPlus, 
    handleMouseEnter: handleMouseEnterPlus, 
    handleMouseLeave: handleMouseLeavePlus, 
    combinedStyles: combinedStylesPlus } =
    useHover(plusButtonBaseStyle, plusButtonStyleHover);
  const { isHovered: isHoveredEdit, 
    handleMouseEnter: handleMouseEnterEdit, 
    handleMouseLeave: handleMouseLeaveEdit, 
    combinedStyles: combinedStylesEdit } 
    = useHover(iconBaseStyle, editIconStyleHover);
  const { isHovered: isHoveredDelete, 
    handleMouseEnter: handleMouseEnterDelete, 
    handleMouseLeave: handleMouseLeaveDelete, 
    combinedStyles: combinedStylesDelete } 
    = useHover(iconBaseStyle, deleteIconStyleHover);

  return(
    <>
      <div
        tabIndex={0}
        onClick={handleItemFocus}
        onBlur={handleItemBlur}
        className={`item-text-zone ${isItemFocused ? 'item-shrinker' : ''}`} >
       
        <span>{item.task}</span>
        <FontAwesomeIcon
          style={combinedStylesPlus}
          onMouseEnter={handleMouseEnterPlus}
          onMouseLeave={handleMouseLeavePlus}
          className="plus-button"
          icon={faPlus} />
      </div>
      
      <div style={iconContainerStyle}>

        <FontAwesomeIcon 
          style={combinedStylesEdit}
          onMouseEnter={handleMouseEnterEdit}
          onMouseLeave={handleMouseLeaveEdit}
          className="edit-icon" 
          icon={faPencil} />

        <FontAwesomeIcon 
          style={combinedStylesDelete}
          onMouseEnter={handleMouseEnterDelete}
          onMouseLeave={handleMouseLeaveDelete}
          className="delete-icon" 
          icon={faTrash} />

      </div>
    </>
  );
};
export default Card
