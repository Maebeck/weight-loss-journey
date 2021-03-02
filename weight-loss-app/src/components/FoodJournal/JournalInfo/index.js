import React, { Component } from 'react';
import Modal from '../JournalModals';

class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          dow: "Sunday",
          food: "Food",
          calories: "Calories"
        }, {
          dow: "Monday",
          food: "Food",
          calories: "Calories"
        }, {
          dow: "Tuesday",
          food: "Food",
          calories: "Calories"
        }
        , {
          dow: "Wednesday",
          food: "Food",
          calories: "Calories"
        }
        , {
          dow: "Thursday",
          food: "Food",
          calories: "Calories"
        }, {
          dow: "Friday",
          food: "Food",
          calories: "Calories"
        }, {
          dow: "Saturday",
          food: "Food",
          calories: "Calories"
        }
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(item) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(item.calories, item.food, 1);
    this.setState({ brochure: tempBrochure });
  }

  // totalCal() {
    
  // }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      console.log(item);
      return (
        <tr key={index}>
          <td>{item.dow}</td>
          <td>{item.food}</td>
          <td>{" "} - {" "}</td>
          <td>{item.calories}</td>
          <td>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>Edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>Clear</button>
          </td>
          <td>Total Calories: {}</td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>My Food Journal</h1>
          <h6>Track what you've eaten and how many calories!</h6>
        </div>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
          food={modalData.food}
          calories={modalData.calories}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;