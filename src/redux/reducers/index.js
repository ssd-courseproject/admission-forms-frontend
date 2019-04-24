import {combineReducers} from 'redux';
import {authorization, profile} from "./auth";
import {alert} from './alerts';
import {testsList, singleTest} from "./tests";


const admissionFormsReducer = combineReducers({
  authorization,
  alert,
  profile,
  testsList,
  singleTest
});

export default admissionFormsReducer;
