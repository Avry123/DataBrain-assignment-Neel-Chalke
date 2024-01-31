import React, { useState, useEffect } from 'react';

const MealList = ({ category }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch data from the API based on the selected category
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`)
      .then(response => response.json())
      .then(data => setMeals(data.meals))
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{category} Meals</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {meals.map(meal => (
          <div key={meal.idMeal} style={{ width: '200px', margin: '10px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '5px' }}>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: '100%', height: 'auto', marginBottom: '5px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealList;
