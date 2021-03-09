import axios from 'axios';
import React from 'react';

export default class journalTable extends React.Component {
    state={
        journalEntries: []
    } 
    componentDidMount(){
        axios.get(process.env.WEIGHT_LOSS_URI + '/journal')
        .then(res => {
            this.setState({journalEntries: res.data});
            console.log(res);
    });
    }
   render () {
 
    return (
        <main>
            <tr>
                {this.state.journalEntries.map(journal => <td>{journal.meals} {journal.calories} {journal.date}</td>)}
            </tr>
</main>
    )
}
}