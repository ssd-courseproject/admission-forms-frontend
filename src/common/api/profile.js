import axios from 'axios';

// TODO fill in url
const url = '';

async function fetch(params) {
    const {data} = await axios.post(`${url}/profile`, {params});

    return data;
}

async function fetchMock(params) {
    await setTimeout((() => ({
        firstName: 'Ruslan',
        lastName: 'Farkhutdinov',

    })), 1000);
}

export default {
    fetch,
};
