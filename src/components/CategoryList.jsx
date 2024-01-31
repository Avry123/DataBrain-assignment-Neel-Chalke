import React, { useState, useEffect } from 'react';
import '../assets/CategoryList.css'

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="category-list-container">
      <h1>Meal Categories</h1>
      <div className="category-cards">
        {categories.map(category => (
          <div key={category.idCategory} className="category-card">
            <h2>{category.strCategory}</h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <p>{category.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
