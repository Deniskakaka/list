import { LIST_PEOPLE, SHOW_VIDEO } from './main.actions';

const initialState = {
    listPeople: [],
    show: false
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST_PEOPLE: {
            return {
                ...state,
                listPeople: action.payload.array
            }
        };
        case SHOW_VIDEO: {
            return {
                ...state,
                show: action.payload.boolean
            }
        }
        default :
        return state
    }
};

export default mainReducer;