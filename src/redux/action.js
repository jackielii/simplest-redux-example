export const GET_DETAILS = 'GET_DETAILS';
export const ADD_DETAILS = 'ADD_DETAILS';
export const UPDATE_DETAILS = 'UPDATE_DETAILS';
export const DELETE_DETAILS = 'DELETE_DETAILS';

export function getDetails() {
    return dispatch => {
        return dispatch({
            type: GET_DETAILS
        });
    }
};

export function editDetails(payload) {
    return dispatch => {
        return dispatch({
            type: UPDATE_DETAILS,
            payload : payload
        });
    }
};

export function addDetails(payload) {
    return dispatch => {
        return dispatch({
            type: ADD_DETAILS,
            payload : payload
        });
    }
};

export function deleteDetails(payload) {
    return dispatch => {
        return dispatch({
            type: DELETE_DETAILS,
            payload : payload
        });
    }
};