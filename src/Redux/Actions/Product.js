
import { FETCH_PRODUCTS_CATEGORY } from '../ActionTypes';
import { ProductCatalog } from './../../Constants/Common';

const compare = {
    Price: (a, b) => {
      if (a.discountedprice < b.discountedprice) return -1;
      if (a.discountedprice > b.discountedprice) return 1;
      return 0;
    },
    Date: (a, b) => {
      if (a.createdDate > b.createdDate) return -1;
      if (a.createdDate < b.createdDate) return 1;
      return 0;
    },
    Name: (a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
    }
  };

export const reducerProducts = (categoryid , sortBy , lowerPrice, upperPrice) => {
    let productList = ProductCatalog.filter(m => m.categoryid === categoryid);

    if (!!sortBy) {
        productList = productList.sort(compare[sortBy]);
    }

    if (!!lowerPrice && !!upperPrice) {
      productList = productList.filter(m => m.discountedprice >= lowerPrice && m.discountedprice <= upperPrice);
    }

    return dispatch => {
        return dispatch({
            type: FETCH_PRODUCTS_CATEGORY,
            payload: productList
        });
    }
};