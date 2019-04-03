import {combineReducers} from 'redux';
import {authorization, profileFetching} from "./auth";
import {alert} from './alerts';


const admissionFormsReducer = combineReducers({
  authorization,
  alert,
  profileFetching,
});

export default admissionFormsReducer;