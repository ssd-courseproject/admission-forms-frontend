import axios from 'axios';

// TODO fill in url
const url = 'http://127.0.0.1:5000';

async function fetch(params) {
  const {data} = await axios.post(`${url}/profile`, {params});

  return data;
}

function fetchProfile() {
  let data;

  axios({
    method: 'get',
    url: `${url}/profile`,
    config: {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}
  })
    .then(function (response) {
      data = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.message || error);
    });

  return data;
}

function fetchMock(params) {
  return {
    firstName: 'Ruslan',
    lastName: 'Farkhutdinov',
    email: 'email@gmail.com',
  };
}

export default {
  fetchProfile,
  fetchMock,
  fetch,
};
