import {combineReducers} from 'redux';
import {authorization, profile} from "./auth";
import {alert} from './alerts';


const admissionFormsReducer = combineReducers({
  authorization,
  alert,
  profile,
});

export default admissionFormsReducer;