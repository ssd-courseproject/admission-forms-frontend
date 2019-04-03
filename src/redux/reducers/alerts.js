import {alertActionsTypes} from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertActionsTypes.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertActionsTypes.ERROR:
      return {
        type: 'alert-error',
        message: action.message
      };
    case alertActionsTypes.HIDE:
      return {};
    default:
      return state
  }
}