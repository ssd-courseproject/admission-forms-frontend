import {combineReducers} from 'redux';
import {authorization} from "./auth";


const admissionFormsReducer = combineReducers({
  authorization
});

export default admissionFormsReducer;