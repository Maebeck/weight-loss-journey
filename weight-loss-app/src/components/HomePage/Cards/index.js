/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './cards.css';
function Cards() {
    return (
      <main className='cardDiv'>
        <div class="row ">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <h5 class='card-title cardTitle'>Track Your Daily Calories!</h5>
      <ul className ='homeList'>
      <li> Tell us what you ate</li>
      <li> Input how many calories</li> 
      <li> Track if you've gone over your daily calorie limit</li>
      </ul>  
      <a href='/journal' class='btn btn-primary cardButton'>Try Food Journal</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <h5 class='card-title cardTitle'>Plan Out Your Meals!</h5>
      <ul className ='homeList'>
      <li> Enter how many calories you can have a day</li>
      <li> Check out the meals that will keep you in that calorie range</li> 
      <li> Even get the recipe and save to your dashboard for later use!</li>
      </ul>
      <a href='/MealPlan' class='btn btn-primary cardButton'>Get Meal Plan</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title cardTitle">Find a good workout plan to maximize weight loss!</h5>
        <ul className ='homeList'>
      <li> Track the workouts you do and the calories you've burned!</li>
      <li> Incorporate your burned calories into the calorie tracker!</li> 
      <li> Get suggestions on what workouts to do for that day!</li>
      </ul>
        <a href='' class='btn btn-primary cardButton'>Coming Soon</a>
      </div>
    </div>
  </div>
</div>
      </main>
    )
};

export default Cards;