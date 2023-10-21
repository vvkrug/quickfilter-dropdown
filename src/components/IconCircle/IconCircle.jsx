import React from 'react';
import tick from '../../assets/images/tick.svg';
import './IconCircle.scss';

export const IconCircle = ({ type, number, isSelected, onClick }) => {
	if (number === 0) {
		return null; 
	}
  let style = "baseCircle";

	if (isSelected || number !== undefined && <span>{number}</span>) {
		type = 'filled';
    style = number !== undefined ? "filledCircle" : "filledCircle check";
  } else {
    style = isSelected ? "filledCircle" : "outlinedCircle";
  }

  return (
    <div className={style} onClick={onClick}>
      {type === 'filled' && number !== undefined && <span>{number}</span>}
      {type === 'filled' && number === undefined && <img src={tick}/>}
    </div>
  );
}
