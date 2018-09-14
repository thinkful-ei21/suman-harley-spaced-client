import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
    type: FETCH_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = data => ({
    type: FETCH_QUESTION_SUCCESS,
    data
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});

export const FETCH_RESULT_SUCCESS = 'FETCH_RESULT_SUCCESS';
export const fetchResultSuccess = data => ({
    type: FETCH_RESULT_SUCCESS,
    data
});

export const FETCH_RESULT_ERROR = 'FETCH_RESULT_ERROR';
export const fetchResultError = error => ({
    type: FETCH_RESULT_ERROR,
    error
});

export const fetchQuestion = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {            
            const result = data;
            dispatch(fetchQuestionSuccess(result));
        })
        .catch(err => {
            dispatch(fetchQuestionError(err));
        });
};


export const fetchResult = (userAnswer) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchRequest());    
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        body:JSON.stringify({answer: userAnswer})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {            
            const result = data;
            dispatch(fetchResultSuccess(result));
        })
        .catch(err => {
            dispatch(fetchResultError(err));
        });
};
