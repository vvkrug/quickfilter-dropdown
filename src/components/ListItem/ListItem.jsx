import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { IconCircle } from '../IconCircle/IconCircle';
import './ListItem.scss';

// Мемоизируем компонент для предотвращения ререндеров при поиске и выборе элементов
export const ListItem = memo(({ item, isSelected, onItemSelect }) => (
  <li className="dropdown-list-item" onClick={() => onItemSelect(item)}>
    {item}
    <IconCircle
      type="outlined"
      isSelected={isSelected}
    />
  </li>
));

// Предотвращаем баги и улучшаем документированность кода, валидируя пропсы
ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};