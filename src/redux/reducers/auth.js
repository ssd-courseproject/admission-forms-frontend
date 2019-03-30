import {userActionsTypes} from "../constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authorization(state = initialState, action) {
  switch (action.type) {
    case userActionsTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userActionsTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userActionsTypes.LOGIN_FAILURE:
      return {};
    case userActionsTypes.LOGOUT:
      return {};
    default:
      return state
  }
}