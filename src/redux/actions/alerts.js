import {alertActionsTypes} from '../constants/index';

function success(message) {
  return { type: alertActionsTypes.SUCCESS, message };
}

function error(message) {
  return { type: alertActionsTypes.ERROR, message };
}

export default {success, error};