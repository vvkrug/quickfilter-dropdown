import React, { useState } from 'react';
import './App.scss';
import search from './assets/images/search.svg';
import { Dropdown } from './components/Dropdown/Dropdown';
import { IconCircle } from './components/IconCircle/IconCircle';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

	const [isOpen, setIsOpen] = useState(false);

	const handleDropdownSelect = (items) => {
    setSelectedItems(items);
  };

  return (
    <section className="location">
      <label className="location-label">Локация</label>
			<div className={`location-search ${isOpen ? 'open' : ''}`}>
        <button className="location-button">
          <img src={search} alt="Поиск" />
        </button>
        <input 
          type="text" 
          placeholder={'ЖК, ОКРУГ, РАЙОН, МЕТРО'}
          className="location-input" 
          onClick={() => setIsOpen(!isOpen)}
      	/>
				<IconCircle 
					type="filled" 
					number={selectedItems.length}
				/>
      </div>
      {isOpen && <Dropdown onSelect={handleDropdownSelect} />}
    </section>
  );
};

export default App;
