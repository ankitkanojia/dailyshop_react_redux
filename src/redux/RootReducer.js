import { combineReducers } from 'redux';
import reducerStaticItems from './Reducers/StaticItems';
import reducerCart from './Reducers/CartProducts';
import reducerProducts from './Reducers/Product';
import reducerSort from './Reducers/Filter';

export default combineReducers({
  staticitems: reducerStaticItems,
  cart: reducerCart,
  productscontainer : reducerProducts,
  filter : reducerSort
});
