import {userActionsTypes} from '../constants';
import {userService} from '../services/users';
import history from '../../history';
import alerts from './alerts';


function login(email, password) {
  console.log(localStorage);

  return dispatch => {
    dispatch(request({email}));

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
          dispatch(alerts.error(error));
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
        user => dispatch(success(user)),
        error => {
          dispatch(failure(error));
          dispatch(alerts.error(error))
        }
      );
  };

  function request() {
    return {type: userActionsTypes.PROFILE_REQUEST}
  }

  function success(data) {
    return {type: userActionsTypes.PROFILE_SUCCESS, data}
  }

  function failure(error) {
    return {type: userActionsTypes.PROFILE_FAILURE, error}
  }
}

function logout() {
  userService.logout();
  history.push('/');
  return {type: userActionsTypes.LOGOUT};
}

export default {login, logout, getProfile};
