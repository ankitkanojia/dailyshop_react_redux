import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Wishlist from '../Pages/Wishlist';
import Checkout from '../Pages/Checkout';
import ProductDetails from '../Pages/ProductDetails';
import Products from '../Pages/Products';
import Blog from '../Pages/Blog';
import BlogDetail from '../Pages/BlogDetail';
import Registration from '../Pages/Registration';
import Page404 from '../Pages/Page404';
import Contact from '../Pages/Contact';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/wishlist' component={Wishlist} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/productdetails' component={ProductDetails} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/blogdetail' component={BlogDetail} />
            <Route exact path='/signup' component={Registration} />
            <Route exact path='/page404' component={Page404} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
)

export default Main;
