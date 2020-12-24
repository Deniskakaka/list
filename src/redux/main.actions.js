import { getList } from '../getFunction';

export const LIST_PEOPLE = 'LIST_PEOPLE';
export const LOADER = 'LOADER';

export const list = (array) => {
    return {
        type: LIST_PEOPLE,
        payload: {
            array
        }
    }
};

const loader = (boolean) => {
    return {
        type: LOADER,
        payload: {
            boolean
        }
    }
}

export function getListPeople(data) {
    return function(dispatch) {
        getList(data).then(res => {
            dispatch(list(res))
            dispatch(loader(false))
        })
    }
}