  
import React, { useState } from "react";
import MealList from "../components/MealPlan/MealList";
import './meal.css';

function MealPage() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  };
 
  return (
    <div className="MealPage">
      <div className='recipeDiv'>
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button className='recipebtn btn btn-primary'onClick={getMealData}>Get Your Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
    </div>
  );
}

export default MealPage;