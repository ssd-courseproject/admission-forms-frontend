import {userActions} from "../constants";

export function login(user) {
  return {type: userActions.LOGIN_SUCCESS, payload: user};
}