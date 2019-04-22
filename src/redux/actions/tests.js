import {testsActionsTypes} from '../constants';
import {testsService} from '../services/tests';
import history from '../../history';
import alerts from './alerts';


function fetchTestsList() {
    return dispatch => {
        dispatch(request());

        testsService.testsList()
            .then(
                payload => {
                    dispatch(success({list: payload}));
                    dispatch(alerts.success('Tests have been fetched'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alerts.error(error));
                }
            );
    };

    function request() {
        return {type: testsActionsTypes.TESTS_LIST_REQUEST}
    }

    function success(payload) {
        return {type: testsActionsTypes.TESTS_LIST_SUCCESS, payload}
    }

    function failure(error) {
        return {type: testsActionsTypes.TESTS_LIST_FAILED, error}
    }
}

function modifyTestsList(condition) {
    return {type: testsActionsTypes.TESTS_LIST_MODIFY, condition}
}

export default {fetchTestsList, modifyTestsList};
