import {alertActionsTypes} from '../constants/index';

function success(message) {
  return { type: alertActionsTypes.SUCCESS, message };
}

function error(message) {
  return { type: alertActionsTypes.ERROR, message };
}

function hide() {
  return { type: alertActionsTypes.HIDE };
}

export default {success, error, hide};