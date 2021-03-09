import axios from 'axios';
import React from 'react';
import './recipeTable.css'

export default class recipeTable extends React.Component {
    state={
        recipes: []
    } 
    componentDidMount(){
        axios.get(process.env.WEIGHT_LOSS_URI + '/mealplan')
        .then(res => {
            this.setState({recipes: res.data});
            console.log(res);
    });
    }
   render () {
 
    return (
        <main>
            <h1 className='recipetableTitle'>your saved recipes!</h1> 
            <tr className='recipeTableline'>   
            <td><ul>{this.state.recipes.map(recipe => {return(<li>{recipe.title}</li>)})}</ul></td>
          <td><ul>{this.state.recipes.map(recipe => {return(<li>{recipe.recipelink}</li>)})}</ul></td>
            </tr>
        </main>
    )
}
}