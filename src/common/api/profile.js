import axios from 'axios';

// TODO fill in url
const url = '';

async function fetch(params) {
  const {data} = await axios.post(`${url}/profile`, {params});

  return data;
}

export default {
  fetch,
};
