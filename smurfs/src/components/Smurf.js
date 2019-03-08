import React from 'react';

export default class Smurf extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.smurf.name}</h4>
                <p>{this.props.smurf.age}</p>
                <p>{this.props.smurf.height}</p>
                <button onClick={this.props.deleteSmurf}>Delete</button>
            </div>
        )
    }
}