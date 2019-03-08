import axios from 'axios';
import { types } from 'util';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURFS';
export const SPINNER_ON = 'SPINNER_ON';
export const SPINNER_OFF = 'SPINNER_OFF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch(spinnerOn);
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data })
      dispatch(spinnerOff);
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch(spinnerOn);
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data })
      dispatch(spinnerOff);
    })
}


export function spinnerOn() {
  return {
    type: SPINNER_ON,
  }
}

export function spinnerOff() {
  return {
    type: SPINNER_OFF,
  }
}