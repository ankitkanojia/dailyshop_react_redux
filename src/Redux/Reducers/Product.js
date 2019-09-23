
import { FETCH_PRODUCTS_CATEGORY } from './../ActionTypes';

const initialState = {
    products: [],
}

const reducerProducts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_CATEGORY:
            return {
                ...state,
                products: action.payload 
            };
        default:
            return state;
    }
}

export default reducerProducts;