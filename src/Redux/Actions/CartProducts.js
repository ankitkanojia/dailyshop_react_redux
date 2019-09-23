import { ADD_PRODUCT , REMOVE_PRODUCT, ADD_WISHLIST, REMOVE_WISHLIST, UPDATE_PRODUCTCOUNT } from './../ActionTypes';

export function addToCart(Product) {
  return dispatch => {
    return dispatch({
      type: ADD_PRODUCT,
      payload: Product
    });
  }
};

export function removeFromCart(Product) {
  return dispatch => {
    return dispatch({
      type: REMOVE_PRODUCT,
      payload: Product
    });
  }
};

export function addToWishList(Product) {
  return dispatch => {
    return dispatch({
      type: ADD_WISHLIST,
      payload: Product
    });
  }
};

export function removeFromWishList(Product) {
  return dispatch => {
    return dispatch({
      type: REMOVE_WISHLIST,
      payload: Product
    });
  }
};

export function updateProductCount(Product) {
  return dispatch => {
    return dispatch({
      type: UPDATE_PRODUCTCOUNT,
      payload: Product
    });
  }
};