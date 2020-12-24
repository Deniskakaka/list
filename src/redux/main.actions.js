import { getList } from '../getFunction';

export const LIST_PEOPLE = 'LIST_PEOPLE';

export const list = (array) => {
    return {
        type: LIST_PEOPLE,
        payload: {
            array
        }
    }
};

export function getListPeople(data) {
    return function(dispatch) {
        getList(data).then(res => dispatch(list(res)))
    }
}