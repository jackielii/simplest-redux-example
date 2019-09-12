
export const GET_DETAILS = 'GET_DETAILS';

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
                dataCollection: initialState.dataCollection
            };
        default:
            return state;
    }
}

export default reducerCollection;