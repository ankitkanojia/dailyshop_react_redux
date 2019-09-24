import React, { Component } from 'react';
import Cart from './Cart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromCart } from './../Redux/Actions/CartProducts';
import { Link } from 'react-router-dom';

class Header extends Component {

    static propTypes = {
        cartProducts: PropTypes.array.isRequired,
        removeFromCart : PropTypes.func.isRequired
    };

    render() {
        
        const cartSection = this.props.cartProducts.map(p => {
            return (
                <Cart removeFromCart={this.props.removeFromCart} product={p} key={p.id} />
            );
        });

        return (
            <React.Fragment>
                <header id="aa-header">
                    <div className="aa-header-top">
                        <div className="container"> 
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="aa-header-top-area">
                                        <div className="aa-header-top-left">
                                            <div className="aa-language">
                                                <div className="dropdown">
                                                    <a className="btn dropdown-toggle" href="javascript:void(0)">
                                                        &nbsp;
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="cellphone hidden-xs">
                                                <p><span className="fa fa-phone"></span>00-62-658-658</p>
                                            </div>
                                        </div>
                                        <div className="aa-header-top-right">
                                            <ul className="aa-head-top-nav-right">
                                                <li><a href="javascript:void(0)">&nbsp;</a></li>
                                                <li className="hidden-xs"><Link to="/wishlist">Wishlist</Link></li>
                                                <li className="hidden-xs"><Link to="/checkout">My Cart / Checkout</Link></li>
                                                <li className="hidden-xs"><Link to="/signup">Login / Sign-Up</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="aa-header-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="aa-header-bottom-area">
                                        <div className="aa-logo">
                                            <Link to="/">
                                                <span className="fa fa-shopping-cart"></span>
                                                <p>daily<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                                            </Link>
                                        </div>
                                        <div className="aa-cartbox">
                                            <a className="aa-cart-link" href="javascript:void(0)">
                                                <span className="fa fa-shopping-basket"></span>
                                                <span className="aa-cart-title">SHOPPING CART</span>
                                                <span className="aa-cart-notify">{cartSection.length}</span>
                                            </a>
                                            <div className="aa-cartbox-summary">
                                                <ul>
                                                    {cartSection}
                                                    {!cartSection.length && (
                                                        <li><strong>No product(s) in cart</strong></li>
                                                    )}
                                                </ul>
                                                {cartSection.length > 0 && (
                                                    <Link className="aa-cartbox-checkout aa-primary-btn" to="/checkout">Checkout</Link> 
                                                )}
                                            </div>
                                        </div>
                                        <div className="aa-search-box">
                                            <form action="">
                                                <input type="text" name="" id="" placeholder="Search here ex. 'man' " />
                                                <button type="submit"><span className="fa fa-search"></span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cartProducts: state.cart.cartProducts
});

export default connect(mapStateToProps, { removeFromCart })(Header);