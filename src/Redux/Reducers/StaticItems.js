import { FETCH_STATICBLOGS, FETCH_STATICTESTIMONIALS, FETCH_STATICSLIDER, FETCH_PRODUCTS, FETCH_MENU , UPDATE_PRODUCTWISHLISTFLAG } from '../ActionTypes';

const initialState = {
    blogs: [],
    testimonials: [],
    sliderdetails: [],
    products: [],
    menu: []
}

const reducerStaticItems = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU:
            return {
                ...state,
                menu: action.payload
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case UPDATE_PRODUCTWISHLISTFLAG:
            return {
                ...state,
                products: state.products.map(
                    (content, i) => content.id === action.payload.id ? {...content, isWishList : action.payload.isWishList}
                                            : content)
            };
        case FETCH_STATICBLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        case FETCH_STATICTESTIMONIALS:
            return {
                ...state,
                testimonials: action.payload
            };
        case FETCH_STATICSLIDER:
            return {
                ...state,
                sliderdetails: action.payload
            };
        default:
            return state;
    }
}

export default reducerStaticItems;