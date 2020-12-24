import { getList } from '../getFunction';

export const LIST_PEOPLE = 'LIST_PEOPLE';
export const SHOW_VIDEO = 'SHOW_VIDEO';

export const list = (array) => {
    return {
        type: LIST_PEOPLE,
        payload: {
            array
        }
    }
};

export const video = (boolean) => {
    return {
        type: SHOW_VIDEO,
        payload: {
            boolean
        }
    }
}

export function getListPeople(data) {
    return function(dispatch) {
        getList(data).then(res => dispatch(list(res)))
    }
}