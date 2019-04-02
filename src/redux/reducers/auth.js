import {userActionsTypes} from "../constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authorization(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case userActionsTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.payload
      };
    case userActionsTypes.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case userActionsTypes.LOGIN_FAILURE:
      return {};
    case userActionsTypes.LOGOUT:
      return {};
    default:
      return state
  }
}

export function profileFetching(state = initialState, action) {
  switch (action.type) {
    case userActionsTypes.PROFILE_REQUEST:
      return {
        user: action.user
      };
    case userActionsTypes.PROFILE_SUCCESS:
      return {
        user: action.user
      };
    case userActionsTypes.PROFILE_FAILURE:
      return {};
    default:
      return state
  }
}