import axios from 'axios';
import history from '../../history';

// TODO fill in url
const url = 'http://127.0.0.1:5000/';

async function register(params) {
  const {data} = await axios.post(`${url}/register`, {params});

  return data;
}

function login(params) {
  let bodyFormData = new FormData();
  console.log(bodyFormData);
  bodyFormData.set('username', params.username);
  bodyFormData.set('password', params.password);

  axios({
    method: 'post',
    url: `${url}auth/login`,
    data: bodyFormData,
    config: {headers: {'Content-Type': 'multipart/form-data'}}
  })
    .then(function (response) {
      localStorage.setItem('token', response.data.data.access_token);
      history.push('/profile');
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.message || error);
    });
}

function logout() {
  localStorage.removeItem('token');
}

async function loginMock(params) {
  await setTimeout((() => ({
    token: ''
  })), 1000);
}

async function registerMock(params) {
  await setTimeout((() => ({
    token: ''
  })), 1000);
}

export default {
  register,
  login,
  logout,
};
