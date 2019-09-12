export const GET_DETAILS = 'GET_DETAILS';

export function getDetails() {
    return dispatch => {
        return dispatch({
            type: GET_DETAILS
        });
    }
};