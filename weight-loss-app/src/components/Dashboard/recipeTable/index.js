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
                {this.state.recipes.map(recipe => <td>{recipe.title} {recipe.recipelink}</td>)}
            </tr>
        </main>
    )
}
}