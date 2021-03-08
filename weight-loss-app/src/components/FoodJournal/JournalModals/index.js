import React, { Component } from 'react';
import axios from 'axios';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            
            foodInput: '',
            food: [],
            calories: [],
            caloriesInput: '',
            date: new Date()
        }
    }

    savetoDatabase(){
        const journal = {
            meals: this.state.food,
            calories: this.state.calories,
            dow: this.state.dow,
            date: this.state.date
        }
        console.log(journal);
        axios.post('http://localhost:3001/journal/add', journal )
        .then(res => console.log(res));
        // window.location = '/journal';
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            food: nextProps.food,
            calories: nextProps.calories,
        });
    }

    foodHandler(e) {
        this.setState({ foodInput: e.target.value });
    }

    caloriesHandler(e) {
        this.setState({ caloriesInput: e.target.value });
    }

    handleSave(e) {
        console.log(e);
        e.preventDefault();
        const item = this.state;
        this.props.saveModalDetails(item)
        this.savetoDatabase();
        
    }
    addFood = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            const foodinfo = {
                foodInput: '',
                caloriesInput: '',
                food:  [...prevState.food, prevState.foodInput],
                calories: [...prevState.calories, prevState.caloriesInput]
            }
            console.log(prevState)
            console.log(foodinfo)
       return (foodinfo)
          
        });
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-food" id="exampleModalLabel">Edit Daily Food</h5>
                            
                            <h6>Please list all items and calories before saving!</h6>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul>{this.state.food.map(food => {return(<li>Food item: {food}</li>)})}</ul>
                            <ul>{this.state.calories.map(calories => {return(<li>Calories: {calories}</li>)})}</ul>
                            <p><span className="modal-lable">Food:  </span><input value={this.state.foodInput} onChange={(e) => this.foodHandler(e)} /></p>
                            <p><span className="modal-lable">Calories:  </span><input value={this.state.caloriesInput} onChange={(e) => this.caloriesHandler(e)} /></p>
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.addFood}>Add To List</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => { this.handleSave(e) }}>Save changes</button>
                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;