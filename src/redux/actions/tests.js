import {singleTestActionsTypes, testsActionsTypes} from '../constants';
import {testsService} from '../services/tests';
import alerts from './alerts';


function fetchTestsList() {
  return dispatch => {
    dispatch(request());

    testsService.testsList()
      .then(
        payload => {
          dispatch(success(payload));
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

function modifyTestsList(initialList, condition) {
  return {type: testsActionsTypes.TESTS_LIST_MODIFY, payload: {initialList, condition}}
}


function fetchSingleTest(test_id) {
  return dispatch => {
    dispatch(request());

    testsService.singleTest(test_id)
      .then(
        payload => {
          dispatch(success(payload));
          dispatch(alerts.success('Single test has been fetched'));
        },
        error => {
          dispatch(failure(error));
          dispatch(alerts.error(error));
        }
      );
  };

  function request() {
    return {type: singleTestActionsTypes.TESTS_LIST_REQUEST}
  }

  function success(payload) {
    return {type: singleTestActionsTypes.TESTS_LIST_SUCCESS, payload}
  }

  function failure(error) {
    return {type: singleTestActionsTypes.TESTS_LIST_FAILED, error}
  }
}


export default {fetchTestsList, modifyTestsList, fetchSingleTest};


