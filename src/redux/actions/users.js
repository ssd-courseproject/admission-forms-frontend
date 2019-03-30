import {alertActionsTypes, userActionsTypes} from '../constants';
import {userService} from '../services/users';


function login(username, password) {
  console.log('login action');

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

function logout() {
  userService.logout();
  return {type: userActionsTypes.LOGOUT};
}

export default {login, logout};