export const GET_DETAILS = 'GET_DETAILS';
export const ADD_DETAILS = 'ADD_DETAILS';

export function getDetails() {
    return dispatch => {
        return dispatch({
            type: GET_DETAILS
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