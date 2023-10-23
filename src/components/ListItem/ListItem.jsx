import React from 'react';
import { IconCircle } from '../IconCircle/IconCircle';
import './ListItem.scss';

export const ListItem = ({ item, isSelected, onItemSelect }) => (
  <li className="dropdown-list-item" onClick={() => onItemSelect(item)}>
    {item}
    <IconCircle
      type="outlined"
      isSelected={isSelected}
    />
  </li>
);