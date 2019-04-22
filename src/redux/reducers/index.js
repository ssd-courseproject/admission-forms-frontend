import {combineReducers} from 'redux';
import {authorization, profile} from "./auth";
import {alert} from './alerts';
import {testsList} from "./tests";


const admissionFormsReducer = combineReducers({
  authorization,
  alert,
  profile,
  testsList
});

export default admissionFormsReducer;
