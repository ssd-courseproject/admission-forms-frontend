import {singleTestActionsTypes, testsActionsTypes} from "../constants";

export function testsList(state = [], action) {
switch (action.type) {
    case testsActionsTypes.TESTS_LIST_REQUEST:
      return {
        list: []
      };
    case testsActionsTypes.TESTS_LIST_SUCCESS:
      return {
        list: action.payload,
        filteredList: action.payload
      };
    case testsActionsTypes.TESTS_LIST_FAILED:
      return {};
    case testsActionsTypes.TESTS_LIST_MODIFY:
      return {
        list: action.payload.initialList,
        filteredList: action.payload.initialList.filter(test => action.payload.condition(test))
      };
    default:
      return state;
  }
}

export function singleTest(state = [], action) {

  switch (action.type) {
    case singleTestActionsTypes.TESTS_LIST_REQUEST:
      return {
        info: action.payload
      };
    case singleTestActionsTypes.TESTS_LIST_SUCCESS:
      return {
        info: action.payload
      };
    case singleTestActionsTypes.TESTS_LIST_FAILED:
      return {};
    default:
      return state;
  }

}
