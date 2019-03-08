import React from 'react';


export default class SmurfForm extends React.Component {
    state = {
        smurfName: '',
        smurfAge: 0,
        smurfHeight: '0 cm'
    }
    onChangeHandler = event => {
        console.log(event.target.value);
        if (event.target.name === 'name') {
            this.setState({smurfName: event.target.value})
        } else if (event.target.name === 'age') {
            this.setState({smurfAge: event.target.value});
        } else if (event.target.name === 'height') {
            this.setState({ smurfHeight: event.target.value});
        }
    }
    render() {
        return (
            <form>
                <input type="text" onChange={this.onChangeHandler} name="name" value={this.state.smurfName} placeholder="Name..."></input>
                <input type="number" onChange={this.onChangeHandler} name="age" value={this.state.smurfAge} placeholder="Age..."></input>
                <input type="text" onChange={this.onChangeHandler} name="height" value={this.state.smurfHeight} placeholder="Height..."></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}