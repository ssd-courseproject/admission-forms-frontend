import {alertActionsTypes, userActionsTypes} from '../constants';
import {userService} from '../services/users';
import history from '../../history';


function login(username, password) {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActionsTypes.error(error));
        }
      );
  };

  function request(user) {
    return {type: userActionsTypes.LOGIN_REQUEST, user}
  }

  function success(user) {
    return {type: userActionsTypes.LOGIN_SUCCESS, user}
  }

  function failure(error) {
    return {type: userActionsTypes.LOGIN_FAILURE, error}
  }
}

function getProfile() {
  return dispatch => {
    dispatch(request());

    userService.getProfile()
      .then(
        users => dispatch(success(users)),
        error => {
          dispatch(failure(error));
          dispatch(alertActionsTypes.error(error))
        }
      );
  };

  function request() {
    return {type: userActionsTypes.PROFILE_REQUEST}
  }

  function success(users) {
    return {type: userActionsTypes.PROFILE_SUCCESS, users}
  }

  function failure(error) {
    return {type: userActionsTypes.PROFILE_FAILURE, error}
  }
}

function logout() {
  userService.logout();
  return {type: userActionsTypes.LOGOUT};
}

export default {login, logout};