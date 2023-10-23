import classNames from 'classnames'; // Библиотека для динамического присваивания классов
import React from 'react';
import tick from '../../assets/images/tick.svg';
import './IconCircle.scss';

// Отображает круг с числом или галочкой, в зависимости от переданных свойств
export const IconCircle = ({ number, isSelected, onClick }) => {
	if (number === 0) {
		return null; // Не рендерим компонент, если не выбрано ни одного элемента
	}

	// Определяем нужно ли закрасить круг
  const isFilled = isSelected || number !== undefined && number > 0;

  const style = classNames({
    baseCircle: true, // Базовый класс всегда применяется
    filledCircle: isFilled, // Применяется если круг закрашен
    outlinedCircle: !isFilled, // Применяется если круг не закрашен
    check: isFilled && number === undefined,
  });

  return (
    <div className={style} onClick={onClick}>
      {isFilled && number !== undefined && <span>{number}</span>} {/* Если круг закрашен и число определено, выводим это число */}
      {isFilled && number === undefined && <img src={tick} alt="Selected" />} {/* Если круг закрашен, но число не определено, отображаем галочку */}
    </div>
  );
}
