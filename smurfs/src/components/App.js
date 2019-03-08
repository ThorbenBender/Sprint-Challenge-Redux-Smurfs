import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSmurfs, spinnerOn, spinnerOff, addSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    if (this.props.spinner) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div className="App">
        {
          this.props.smurfs.map((smurf, idx) => <Smurf key={idx} smurf={smurf} id={idx} />)
        }
        <SmurfForm addSmurf={this.props.addSmurf}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    spinner: state.spinner
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSmurfs,
    spinnerOn,
    spinnerOff,
    addSmurf,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
