import {testsActionsTypes} from "../constants";

export function testsList(state = [], action) {

    console.log(state);

    switch (action.type) {
        case testsActionsTypes.TESTS_LIST_REQUEST:
            return {
                list: []
            };
        case testsActionsTypes.TESTS_LIST_SUCCESS:
            return {
                list: action.payload
            };
        case testsActionsTypes.TESTS_LIST_FAILED:
            return {};
        case testsActionsTypes.TESTS_LIST_MODIFY:
            return {
                list: state.list.list.filter(test => action.condition(test))
            };
        default:
            return state
    }
}
