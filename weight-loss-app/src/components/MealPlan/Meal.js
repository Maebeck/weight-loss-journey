import React, { useState, useEffect } from "react";
import axios from 'axios';
import './mealplan.css';

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  function saveRecipe() {
    const recipe = {
      title: meal.title,
      recipelink: meal.sourceUrl,
    }
    console.log(recipe);
    axios.post('/api/mealplan/add', recipe)
    .then(res => console.log(res))
    }


  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c1c27430815e43a4b6910adae8512d44&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  
  return (
    
      <article>
        <h1 className='mealTitle'>{meal.title}</h1>
        <img src={imageUrl} className='recipeimg' alt="recipe" />
        <ul className="instructions">
          <li>Preparation time: {meal.readyInMinutes} minutes</li>
          <li>Number of servings: {meal.servings}</li>
        </ul>
  
        <button className = 'btn btn-primary recipebtn' href={meal.sourceUrl}>Go to Recipe</button>
        <button className='btn btn-primary recipebtn' onClick={saveRecipe}>Save This Recipe!</button>
      </article>
    );
  }