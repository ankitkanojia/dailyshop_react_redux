import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Wishlist from '../Pages/Wishlist';
import Checkout from '../Pages/Checkout';
import ProductDetails from '../Pages/ProductDetails';
import Products from '../Pages/Products';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/wishlist' component={Wishlist} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/productdetails' component={ProductDetails} />
            <Route exact path='/products' component={Products} />
        </Switch>
)

export default Main;
