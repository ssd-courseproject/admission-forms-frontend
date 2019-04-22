import {authHeader} from '../utils';
import api from '../../common/api';
import history from "../../history";

export const testsService = {
    testsList,
};

const testListUrl = api.baseURL + '/tests/list';


function testsList() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(testListUrl, requestOptions).then(handleResponse);
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
