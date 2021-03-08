import React from 'react';

import RecipeTable from '../components/Dashboard/recipeTable';
import JournalTable from '../components/Dashboard/journalTable';
function Dashboard() {
    
    return (
        <div>

            <form> 
            <input placeholder='Current weight...'></input>
            <input placeholder ='Desired weight...'></input>
            <input placeholder = 'Height...'></input>
            </form>
 
            
            <RecipeTable />
            <JournalTable />
        </div>
    
    )
};

export default Dashboard;

// Calorie-Calculation = BMR x 1.375