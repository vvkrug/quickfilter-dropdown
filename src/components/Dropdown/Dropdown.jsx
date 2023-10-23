import React, { useCallback, useEffect, useRef, useState } from 'react';
import { InteractiveList } from '../InteractiveList/InteractiveList';
import { ListItem } from '../ListItem/ListItem';
import './dropdown.scss';

const residentialComplexes = ["Изумрудные холмы", "Новое Тушино", "Скай Форт", "Лайф-Ботанический сад", "Зиларт", "Сити-квартал Люблино", "Московский", "Северное Чертаново", "Панорама", "Нахимов"];
const districts = ["Центральный", "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный", "Южный", "Юго-Западный", "Западный", "Северо-Западный", "Зеленоградский"];
const areas = ["Арбат", "Басманный", "Замоскворечье", "Красносельский", "Мещанский", "Пресненский", "Таганский", "Тверской", "Хамовники", "Якиманка"];
const metroStations = ["Авиамоторная", "Академическая", "Александровский сад", "Алексеевская", "Алма-Атинская", "Алтуфьево", "Аннино", "Арбатская", "Аэропорт", "Бабушкинская"];

export const Dropdown = ({ onSelect, selectedItems, searchText }) => { // Передаём selectedItems как проп для сохранения выбранных элементов
  const [activeTab, setActiveTab] = useState(1);
  const dropdownRef = useRef(null);

  const handleItemSelect = useCallback((item) => {
    let updatedItems;
    if (selectedItems.includes(item)) {
      updatedItems = selectedItems.filter(i => i !== item);
    } else {
      updatedItems = [...selectedItems, item];
    }
    onSelect(updatedItems);
  }, [onSelect, selectedItems]);

	const renderList = useCallback((items) => (
    <ul className="nav-list">
      {items
        .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
        .map(item => (
          <ListItem
            key={item}
            item={item}
            isSelected={selectedItems.includes(item)}
            onItemSelect={handleItemSelect}
          />
        ))
      }
    </ul>
  ), [handleItemSelect, searchText, selectedItems]);

	// Скрываем стиль нижней части списка при малом количестве элементов (отсутствии скроллбара)
  useEffect(() => {
    const dropdownElement = dropdownRef.current;
    const contentElement = dropdownElement.querySelector('.nav-list');
    if (contentElement.scrollHeight <= contentElement.clientHeight) {
      dropdownElement.classList.add('no-scrollbar');
    } else {
      dropdownElement.classList.remove('no-scrollbar');
    }
  }, [selectedItems, searchText]);

  return (
    <div className="location-dropdown" ref={dropdownRef}>
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
