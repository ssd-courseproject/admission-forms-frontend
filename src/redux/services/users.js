import {authHeader} from '../utils';
import api from '../../common/api';

export const userService = {
  login,
  logout,
  getProfile,
  register,
};

const loginUrl = api.baseURL + '/auth/login';
const registerUrl = api.baseURL + '/profile/register';
const logoutUrl = api.baseURL + '/auth/logout';
const profileUrl = api.baseURL + '/profile';
const profilesListUrl = api.baseURL + '/users/list/';

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  };

  return fetch(loginUrl, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return fetch(registerUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('token', JSON.stringify(user));
    });
}

function logout() {
  localStorage.removeItem('token');

  fetch(logoutUrl, {method: 'POST'});
}

function getProfile() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(profileUrl, requestOptions).then(handleResponse);
}

function getProfilesList() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(profilesListUrl, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}