import {
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR,
    FETCH_RESULT_SUCCESS,
    FETCH_RESULT_ERROR
} from '../actions/protected-data';

const initialState = {
    data: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTION_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_QUESTION_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === FETCH_RESULT_SUCCESS) {
        console.log(action.data);
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    }else if (action.type === FETCH_RESULT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
