
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_DETAILS = 'ADD_DETAILS';
export const UPDATE_DETAILS = 'UPDATE_DETAILS';
export const DELETE_DETAILS = 'DELETE_DETAILS';

const staticData = [
    {  "Id": 1, "Name": "Ankit Kanojia", "Profession": "Adept Coder", "ContactNo": "(+91)-9099673090" },
    {  "Id": 2,"Name": "Dixita Kanojia", "Profession": "Developer", "ContactNo": "(+91)-9898989898" },
    {  "Id": 3,"Name": "Rio Webs", "Profession": "Manger", "ContactNo": "(+91)-9898989898" }
];

const initialState = {
    dataCollection: staticData,
    id : 3
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
                dataCollection: state.dataCollection.concat({ "Id": state.id +1 , "Name": action.payload.name, "Profession": action.payload.profession, "ContactNo": action.payload.contactno })
            };
        case UPDATE_DETAILS:
            return {
                ...state,
                dataCollection: state.dataCollection.map(item => item.Id === action.payload.Id ? action.payload : item)
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