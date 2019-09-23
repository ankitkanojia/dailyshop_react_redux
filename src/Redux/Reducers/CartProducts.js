import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_WISHLIST, REMOVE_WISHLIST, UPDATE_PRODUCTCOUNT } from '../ActionTypes';

const initialState = {
    cartProducts: [],
    wishListProducts: []
}

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.concat(action.payload)// [...state.cartProducts, action.payload]
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                cartProducts: state.cartProducts.filter(item => item !== action.payload)
            };
        case UPDATE_PRODUCTCOUNT:
            return {
                ...state,
                cartProducts: state.cartProducts.map(
                    (content, i) => content.id === action.payload.id ? {...content, count: action.payload.count}
                                            : content)
            };
        case ADD_WISHLIST:
            return {
                ...state,
                wishListProducts: state.wishListProducts.concat(action.payload)// [...state.cartProducts, action.payload]
            };
        case REMOVE_WISHLIST:
            return {
                ...state,
                wishListProducts: state.wishListProducts.filter(item => item !== action.payload)
            };
        default:
            return state;
    }
}

export default reducerCart;
