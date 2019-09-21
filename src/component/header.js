import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="wpf-loader-two">
                    <div class="wpf-loader-two-inner">
                        <span>Loading</span>
                    </div>
                </div>

                <a class="scrollToTop" href="#"><i class="fa fa-chevron-up"></i></a>

                <header id="aa-header">
                    <div class="aa-header-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="aa-header-top-area">
                                        <div class="aa-header-top-left">
                                            <div class="aa-language">
                                                <div class="dropdown">
                                                    <a class="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        <img src="img/flag/english.jpg" alt="english flag" />ENGLISH
                                    <span class="caret"></span>
                                                    </a>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <li><a href="#"><img src="img/flag/french.jpg" alt="" />FRENCH</a></li>
                                                        <li><a href="#"><img src="img/flag/english.jpg" alt="" />ENGLISH</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="aa-currency">
                                                <div class="dropdown">
                                                    <a class="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        <i class="fa fa-usd"></i>USD
                                    <span class="caret"></span>
                                                    </a>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <li><a href="#"><i class="fa fa-euro"></i>EURO</a></li>
                                                        <li><a href="#"><i class="fa fa-jpy"></i>YEN</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="cellphone hidden-xs">
                                                <p><span class="fa fa-phone"></span>00-62-658-658</p>
                                            </div>
                                        </div>
                                        <div class="aa-header-top-right">
                                            <ul class="aa-head-top-nav-right">
                                                <li><a href="account.html">My Account</a></li>
                                                <li class="hidden-xs"><a href="wishlist.html">Wishlist</a></li>
                                                <li class="hidden-xs"><a href="cart.html">My Cart</a></li>
                                                <li class="hidden-xs"><a href="checkout.html">Checkout</a></li>
                                                <li><a href="" data-toggle="modal" data-target="#login-modal">Login</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="aa-header-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="aa-header-bottom-area">
                                        <div class="aa-logo">
                                            <a href="index.html">
                                                <span class="fa fa-shopping-cart"></span>
                                                <p>daily<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                                            </a>
                                        </div>
                                        <div class="aa-cartbox">
                                            <a class="aa-cart-link" href="#">
                                                <span class="fa fa-shopping-basket"></span>
                                                <span class="aa-cart-title">SHOPPING CART</span>
                                                <span class="aa-cart-notify">2</span>
                                            </a>
                                            <div class="aa-cartbox-summary">
                                                <ul>
                                                    <li>
                                                        <a class="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" alt="img" /></a>
                                                        <div class="aa-cartbox-info">
                                                            <h4><a href="#">Product Name</a></h4>
                                                            <p>1 x $250</p>
                                                        </div>
                                                        <a class="aa-remove-product" href="#"><span class="fa fa-times"></span></a>
                                                    </li>
                                                    <li>
                                                        <a class="aa-cartbox-img" href="#"><img src="img/woman-small-1.jpg" alt="img" /></a>
                                                        <div class="aa-cartbox-info">
                                                            <h4><a href="#">Product Name</a></h4>
                                                            <p>1 x $250</p>
                                                        </div>
                                                        <a class="aa-remove-product" href="#"><span class="fa fa-times"></span></a>
                                                    </li>
                                                    <li>
                                                        <span class="aa-cartbox-total-title">
                                                            Total
                                    </span>
                                                        <span class="aa-cartbox-total-price">
                                                            $500
                                    </span>
                                                    </li>
                                                </ul>
                                                <a class="aa-cartbox-checkout aa-primary-btn" href="checkout.html">Checkout</a>
                                            </div>
                                        </div>
                                        <div class="aa-search-box">
                                            <form action="">
                                                <input type="text" name="" id="" placeholder="Search here ex. 'man' " />
                                                <button type="submit"><span class="fa fa-search"></span></button>
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

export default Header;