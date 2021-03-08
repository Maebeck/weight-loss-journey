import axios from 'axios';
import React from 'react';

export default class recipeTable extends React.Component {
    state={
        recipes: []
    } 
    componentDidMount(){
        axios.get('http://localhost:3001/mealplan')
        .then(res => {
            this.setState({recipes: res.data});
            console.log(res);
    });
    }
   render () {
 
    return (
        <main>
            <tr>
              <h1>your saved recipes!</h1>  
            <td><ul>{this.state.recipes.map(recipe => {return(<li>{recipe.title}</li>)})}</ul></td>
          <td><ul>{this.state.recipes.map(recipe => {return(<li>{recipe.recipelink}</li>)})}</ul></td>
            </tr>
        </main>
    )
}
}