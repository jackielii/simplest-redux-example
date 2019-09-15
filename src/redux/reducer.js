
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_DETAILS = 'ADD_DETAILS';
export const UPDATE_DETAILS = 'UPDATE_DETAILS';
export const DELETE_DETAILS = 'DELETE_DETAILS';

const staticData = [
    { "id": 1, "name": "Ankit Kanojia", "profession": "Adept Coder", "contactno": "(+91)-9099673090" },
    { "id": 2, "name": "Dixita Kanojia", "profession": "Developer", "contactno": "(+91)-9898989898" },
    { "id": 3, "name": "Rio Webs", "profession": "Manger", "contactno": "(+91)-9898989898" }
];

const initialState = {
    dataCollection: staticData,
    id: 3
}

const reducerCollection = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                ...state,
                dataCollection: state.dataCollection
            };
        case ADD_DETAILS:
            return {
                ...state,
                dataCollection: state.dataCollection.concat({ "id": state.id + 1, "name": action.payload.name, "profession": action.payload.profession, "contactno": action.payload.contactno })
            };
        case UPDATE_DETAILS:
            return {
                ...state,
                dataCollection: state.dataCollection.map((item) => item.id === action.payload.id ? action.payload : item)
            };
        case DELETE_DETAILS:
            return {
                ...state,
                dataCollection: state.dataCollection.filter((data) => data !== action.payload)
            };
        default:
            return state;
    }
}

export default reducerCollection;