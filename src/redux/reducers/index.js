import {combineReducers} from 'redux';
import {authorization, profile, profiles} from "./users";
import {alert} from './alerts';
import {testsList, singleTest} from "./tests";


const admissionFormsReducer = combineReducers({
  authorization,
  alert,
  profile,
  profiles,
  testsList,
  singleTest
});

export default admissionFormsReducer;
