import { LIST_PEOPLE, LOADER } from './main.actions';

const initialState = {
    listPeople: [],
    loader: true
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST_PEOPLE: {
            return {
                ...state,
                listPeople: action.payload.array
            }
        }
        case LOADER: {
            return {
                ...state,
                loader: action.payload.boolean
            }
        }
        default :
        return state
    }
};

export default mainReducer;