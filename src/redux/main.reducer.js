import { LIST_PEOPLE } from './main.actions';

const initialState = {
    listPeople: [],
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST_PEOPLE: {
            return {
                ...state,
                listPeople: action.payload.array
            }
        }
        default :
        return state
    }
};

export default mainReducer;