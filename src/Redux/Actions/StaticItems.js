import { FETCH_MENU, FETCH_PRODUCTS, FETCH_STATICBLOGS, FETCH_STATICTESTIMONIALS, FETCH_STATICSLIDER } from './../ActionTypes';
import { BlogDetails, Testimonials, SliderDetails, Menus, ProductCatalog } from './../../Constants/Common';

export const fetchMenu = () => dispatch => {
  return dispatch({
    type: FETCH_MENU,
    payload: Menus
  });
};

export const fetchProducts = () => dispatch => {
  return dispatch({
    type: FETCH_PRODUCTS,
    payload: ProductCatalog
  });
};

export const fetchBlogs = () => dispatch => {
  return dispatch({
    type: FETCH_STATICBLOGS,
    payload: BlogDetails
  });
};

export const fetchTestimonials = () => dispatch => {
  return dispatch({
    type: FETCH_STATICTESTIMONIALS,
    payload: Testimonials
  });
};

export const fetchSliderDetails = () => dispatch => {
  return dispatch({
    type: FETCH_STATICSLIDER,
    payload: SliderDetails
  });
};
