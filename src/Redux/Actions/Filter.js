
import { UPDATE_SORT } from '../ActionTypes';

export function updateSort(sortOption) {
    return dispatch => {
        return dispatch({
            type: UPDATE_SORT,
            payload: sortOption
        });
    }
};