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
        type: 'alert-danger',
        message: action.message
      };
    case alertActionsTypes.CLEAR:
      return {};
    default:
      return state
  }
}