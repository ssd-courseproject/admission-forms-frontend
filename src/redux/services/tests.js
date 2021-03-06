import {authHeader} from '../utils';
import api from '../../common/api';
import history from "../../history";

export const testsService = {
    testsList,
    singleTest,
    createTest
};

const testListUrl = api.baseURL + '/tests/list';
const singleTestUrl = test_id => api.baseURL + `/tests/${test_id}`;
const createTestUrl = api.baseURL + '/tests/create';

function testsList() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(testListUrl, requestOptions).then(handleResponse);
}

function createTest(data) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    return fetch(createTestUrl, requestOptions).then(handleResponse);
}

function singleTest(test_id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(singleTestUrl(test_id), requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
