import React, { useState } from 'react';

const Search = (props) => {
  // Состояние для выбранной категории
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Обработчик изменения категории
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Фильтрация элементов по выбранной категории
  const filteredItems = props.items.filter((item) => {
    if (selectedCategory === 'all') {
      return true;
    } else {
      if (selectedCategory === 'name') {
        return item.name.toLowerCase().includes(props.search.toLowerCase());
      } else if (selectedCategory === 'description') {
        return item.description.toLowerCase().includes(props.search.toLowerCase());
      } else if (selectedCategory === 'price') {
        return item.price.toString().includes(props.search);
      }
    }
  });

  return (
    <div>
     
      <select onChange={handleCategoryChange}>
        <option value="all">Все</option>
        <option value="name">Название</option>
        <option value="description">Описание</option>
        <option value="price">Цена</option>
      </select>

      {/* Отображение отфильтрованных элементов */}
      <div>
        {filteredItems.map((obj) => (
          <div key={obj.id}>
            <img src={obj.img} alt="" />
            <h2>{obj.name}</h2>
            <p>{obj.description}</p>
            <p>{obj.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;