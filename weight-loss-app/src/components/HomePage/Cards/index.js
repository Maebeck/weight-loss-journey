/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './cards.css';
function Cards() {
    return (
        <main class= 'container' >        
            <div class = 'row'>
        <div class='card col-lg-4'>
  <div class='card-body cardbackOne'>
    <h5 class='card-title'>Track Your Daily Calories!</h5>
    <p class='card-text'>
      <ul>
      <li>Tell us what you ate</li>
      <li>Input how many calories</li> 
      <li>Track if you've gone over your daily calorie limit</li>
      </ul>
    </p>
    <a href='/journal' class='btn btn-primary'>Try Food Journal</a>
  </div>
  </div>
</div>
  <div class='row'>
<div class='card col-lg-4'>
  <div class='card-body cardbackTwo'>
    <h5 class='card-title'>Plan Out Your Meals!</h5>
    <p class='card-text'>
      <ul>
      <li>Enter how many calories you can have a day</li>
      <li>Check out the meals that will keep you in that calorie range</li> 
      <li>Even get the recipe and save to your dashboard for later use!</li>
      </ul>
    </p>
    <a href='/MealPlan' class='btn btn-primary'>Get Meal Plan</a>
  </div>
  </div>
  </div>
  <div class='row'>
<div class='card col-lg-4'>
  <div class='card-body cardbackThree'>
    <h5 class='card-title'>Track Your Workouts</h5>
    <p class='card-text'>
      <ul>
      <li>Track the workouts you do and the calories you've burned!</li>
      <li>Incorporate your burned calories into the calorie tracker!</li> 
      <li>Get suggestions on what workouts to do for that day!</li>
      </ul>
    </p>
    <a href='' class='btn btn-primary'>Coming Soon</a>
  </div>
  </div>
</div>
</main>
    )
};

export default Cards;