import {userActionsTypes} from "../constants";

let token = JSON.parse(localStorage.getItem('token'));
const initialState = token ? { loggedIn: true , token} : {};

export function authorization(state = initialState, action) {
  switch (action.type) {
    case userActionsTypes.LOGIN_REQUEST:
      return {
        loggingIn: true,
        token: action.payload
      };
    case userActionsTypes.LOGIN_SUCCESS:
      return {
        token: action.payload.token,
        loggedIn: action.payload.loggedIn,
      };
    case userActionsTypes.LOGIN_FAILURE:
      return {};
    case userActionsTypes.LOGOUT:
      return {};
    default:
      return state
  }
}

export function profile(state = initialState, action) {
  switch (action.type) {
    case userActionsTypes.PROFILE_REQUEST:
      return {
        user: action
      };
    case userActionsTypes.PROFILE_SUCCESS:
      return {
        user: action.data.data
      };
    case userActionsTypes.PROFILE_FAILURE:
      return {};
    default:
      return state
  }
}
