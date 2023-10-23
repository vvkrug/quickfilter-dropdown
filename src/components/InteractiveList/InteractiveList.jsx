import 'dragscroll';
import React, { memo, useEffect } from 'react';
import { dragscroll } from '../../../dragscroll';
import close from '../../assets/images/close.svg';
import './interactiveList.scss';

export const InteractiveList = memo(({ selectedItems, onRemove }) => {
	if (selectedItems.length === 0) return null;
	
	useEffect(() => {
		const element = document.getElementById("selected-items");
		if(element) {
				dragscroll(element);
		}
	}, []);

  return (
    <div id="selected-items" className="dragscroll">
      {selectedItems.map((item) => (
        <div key={item} className="selected-item">
          {item}
          <span className="close-btn" onClick={() => onRemove(item)} aria-label="Убрать элемент"><img src={close} alt="Крестик"/></span>
        </div>
      ))}
    </div>
  );
});
