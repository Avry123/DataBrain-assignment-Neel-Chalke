import React, { useState } from 'react';
import MealList from './MealList';

const MealSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = ['Canadian', 'Indian', 'American', 'Japanese', 'Chinese'];

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Meal Selector</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="categorySelect" style={{ marginRight: '10px' }}>
          Select a Category:
        </label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ padding: '5px' }}
        >
          <option value="">-- Select Category --</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory && <MealList category={selectedCategory} />}
    </div>
  );
};

export default MealSelector;
