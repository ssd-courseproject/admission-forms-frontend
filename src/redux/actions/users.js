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
        payload => {
          localStorage.setItem('token', JSON.stringify(payload.data.access_token));
          history.push('/profile');
          dispatch(success({token: payload.data.access_token, loggedIn: true}));
          dispatch(alerts.success(payload.message));
        },
        error => {
          dispatch(failure(error));
          dispatch(alerts.error(error));
        }
      );
  };

  function request(payload) {
    return {type: userActionsTypes.LOGIN_REQUEST, payload}
  }

  function success(payload) {
    return {type: userActionsTypes.LOGIN_SUCCESS, payload}
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
