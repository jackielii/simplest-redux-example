
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_DETAILS = 'ADD_DETAILS';

const staticData = [
    { "Name": "Ankit Kanojia", "Profession": "Adept Coder", "ContactNo": "(+91)-9099673090" },
    { "Name": "Dixita Kanojia", "Profession": "Developer", "ContactNo": "(+91)-9898989898" },
    { "Name": "Rio Webs", "Profession": "Manger", "ContactNo": "(+91)-9898989898" }
];

const initialState = {
    dataCollection: staticData
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
                dataCollection: state.dataCollection.concat({ "Name": action.payload.name, "Profession": action.payload.profession, "ContactNo": action.payload.contactno })
            };
        default:
            return state;
    }
}

export default reducerCollection;