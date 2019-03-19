import axios from 'axios';

// TODO fill in url
const url = '';

async function register(params) {
  const {data} = await axios.post(`${url}/register`, {params});

  return data;
}

async function login(params) {
  const {data} = await axios.post(`${url}/login`, {params});

  return data;
}

async function logout() {
  const {data} = await axios.post(`${url}/logout`);

  return data;
}

export default {
  register,
  login,
  logout,
};
