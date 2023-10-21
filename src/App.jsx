import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import search from './assets/images/search.svg';
import { Dropdown } from './components/Dropdown/Dropdown';
import { IconCircle } from './components/IconCircle/IconCircle';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef(null);
	// const inputRef = useRef(null); 

	const handleClickOutside = (event) => {
    // проверяем, не является ли элемент, по которому был произведен клик, полем ввода
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);  // закрываем выпадающий список, если клик произошел вне компонента и вне поля ввода
    }
  };

	// Устанавливаем и очищаем обработчик событий
	useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

	const handleDropdownSelect = (items) => {
    setSelectedItems(items);
  };

  return (
    <section className="location" ref={dropdownRef}>
      <label className="location-label">Локация</label>
			<div className={`location-search ${isOpen ? 'open' : ''}`}>
        <button className="location-button">
          <img src={search} alt="Поиск" />
        </button>
				<input 
					type="text" 
					placeholder={'ЖК, ОКРУГ, РАЙОН, МЕТРО'}
					className="location-input" 
					onClick={() => setIsOpen(true)} // Открытие дропдауна при клике на инпут
					value={searchText} // Связываем введенное значение
					onChange={(e) => setSearchText(e.target.value)} // Обработчик изменений текста поиска
					// ref={inputRef}
				/>
				<IconCircle 
					type="filled" 
					number={selectedItems.length}
				/>
      </div>
			{ /* Передаём состояние selectedItems для его сохранения между рендерами компонента Dropdown */}
      {isOpen && <Dropdown onSelect={handleDropdownSelect} selectedItems={selectedItems} searchText={searchText} />}
    </section>
  );
};

export default App;
