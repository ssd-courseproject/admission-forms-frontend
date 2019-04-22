import {testsActionsTypes} from "../constants";

export function testsList(state = [], action) {

    console.log(action);

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
        default:
            return state
    }
}
