import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CategoryList from './components/CategoryList'
import MealSelector from './components/MealSelector'
import MultiStepForm from './components/MultiStepForm'

function App() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [categories, setCategories] = useState([]);
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className="material-container">
    <h1>Operation To Perform, Please Select</h1>
    <div className="radio-group">
      <label className={`radio-label ${selectedOption === 'beef' && 'selected'}`}>
        <input
          type="radio"
          value="beef"
          checked={selectedOption === 'beef'}
          onChange={() => handleOptionChange('beef')}
        />
        <span>Personal Info</span>
      </label>
      <label className={`radio-label ${selectedOption === 'goat' && 'selected'}`}>
        <input
          type="radio"
          value="goat"
          checked={selectedOption === 'goat'}
          onChange={() => handleOptionChange('goat')}
        />
        <span>Select Category Filter</span>
      </label>
      <label className={`radio-label ${selectedOption === 'chicken' && 'selected'}`}>
        <input
          type="radio"
          value="chicken"
          checked={selectedOption === 'chicken'}
          onChange={() => handleOptionChange('chicken')}
        />
        <span>Fetch request</span>
      </label>
    </div>
    <div className="content-container">
      {selectedOption === 'beef' && <MultiStepForm />}
      {selectedOption === 'goat' && <MealSelector />}
      {selectedOption === 'chicken' && <CategoryList />}
    </div>
  </div>
  )
}

export default App
