import React, { useState } from 'react';
import { IconCircle } from '../IconCircle/IconCircle';
import { InteractiveList } from '../InteractiveList/InteractiveList';
import './dropdown.scss';

const residentialComplexes = ["Изумрудные холмы", "Новое Тушино", "Скай Форт", "Лайф-Ботанический сад", "Зиларт", "Сити-квартал Люблино", "Московский", "Северное Чертаново", "Панорама", "Нахимов"];
const districts = ["Центральный", "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный", "Южный", "Юго-Западный", "Западный", "Северо-Западный", "Зеленоградский"];
const areas = ["Арбат", "Басманный", "Замоскворечье", "Красносельский", "Мещанский", "Пресненский", "Таганский", "Тверской", "Хамовники", "Якиманка"];
const metroStations = ["Авиамоторная", "Академическая", "Александровский сад", "Алексеевская", "Алма-Атинская", "Алтуфьево", "Аннино", "Арбатская", "Аэропорт", "Бабушкинская"];

export const Dropdown = ({ onSelect, selectedItems, searchText }) => { // Передаём selectedItems как проп для сохранения выбранных элементов
  const [activeTab, setActiveTab] = useState(1);

	const handleItemSelect = (item) => {
		let updatedItems;
		if (selectedItems.includes(item)) {
			updatedItems = selectedItems.filter(i => i !== item);
		} else {
			updatedItems = [...selectedItems, item];
		}		
		onSelect(updatedItems);
	};
	

  const renderList = (items) => (
    <ul className="nav-list">
      {items
        .filter(item => item.toLowerCase().includes(searchText.toLowerCase())) // Фильтруем элементы на основе текста поиска
        .map(item => (
          <li className="dropdown-list-item" key={item} onClick={() => handleItemSelect(item)}>
            {item}
            <IconCircle 
              type="outlined" 
              isSelected={selectedItems.includes(item)} 
            />
          </li>
        ))
      }
    </ul>
  );

  return (
    <div className="location-dropdown">
      <ul className="location-tabs">
        {['ЖК', 'ОКРУГ', 'РАЙОН', 'МЕТРО'].map((tabName, index) => (
          <li
            key={index}
            className={`location-tab ${activeTab === index + 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(index + 1)}
          >
            {tabName}
          </li>
        ))}
      </ul>
			<InteractiveList selectedItems={selectedItems} onRemove={handleItemSelect} />
      {activeTab === 1 && <div className="location-content" data-content="1">{renderList(residentialComplexes)}</div>}
      {activeTab === 2 && <div className="location-content" data-content="2">{renderList(districts)}</div>}
      {activeTab === 3 && <div className="location-content" data-content="3">{renderList(areas)}</div>}
      {activeTab === 4 && <div className="location-content" data-content="4">{renderList(metroStations)}</div>}			
  	</div>
  );
};