
import { UPDATE_SORT } from './../ActionTypes';

const initialState = {
    sortOption: "Default"
}

const reducerSort = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SORT:
            return {
                ...state,
                sortOption: action.payload 
            };
        default:
            return state;
    }
}

export default reducerSort;