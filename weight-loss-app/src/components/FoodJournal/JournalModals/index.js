import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            food: '',
            calories: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            food: nextProps.food,
            calories: nextProps.calories,
        });
    }

    foodHandler(e) {
        this.setState({ food: e.target.value });
    }

    caloriesHandler(e) {
        this.setState({ calories: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-food" id="exampleModalLabel">Edit Jewel</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Food:  </span><input value={this.state.food} onChange={(e) => this.foodHandler(e)} /></p>
                            <p><span className="modal-lable">Calories:  </span><input value={this.state.calories} onChange={(e) => this.caloriesHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;