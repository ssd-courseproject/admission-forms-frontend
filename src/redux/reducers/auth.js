import {userActions} from "../constants";

export function authorization(state = null, action) {
  switch (action.type) {
    case userActions.LOGIN_SUCCESS:
      return Object.assign({}, state, {user: action.payload});
    default:
      return state;
  }
} 