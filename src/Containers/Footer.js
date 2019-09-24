import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                {window.location.pathname === "/" &&
                    <section id="aa-subscribe">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="aa-subscribe-area">
                                        <h3>Subscribe our newsletter </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, velit!</p>
                                        <form action="" className="aa-subscribe-form">
                                            <input type="email" name="" id="" placeholder="Enter your Email" />
                                            <input type="submit" value="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>}
                <footer id="aa-footer">
                    <div className="aa-footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="aa-footer-top-area">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="aa-footer-widget">
                                                    <h3>Main Menu</h3>
                                                    <ul className="aa-footer-nav">
                                                        <li><a href="javascript:void(0)">Home</a></li>
                                                        <li><a href="javascript:void(0)">Our Services</a></li>
                                                        <li><a href="javascript:void(0)">Our Products</a></li>
                                                        <li><a href="javascript:void(0)">About Us</a></li>
                                                        <li><a href="javascript:void(0)">Contact Us</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="aa-footer-widget">
                                                    <div className="aa-footer-widget">
                                                        <h3>Knowledge Base</h3>
                                                        <ul className="aa-footer-nav">
                                                            <li><a href="javascript:void(0)">Delivery</a></li>
                                                            <li><a href="javascript:void(0)">Returns</a></li>
                                                            <li><a href="javascript:void(0)">Services</a></li>
                                                            <li><a href="javascript:void(0)">Discount</a></li>
                                                            <li><a href="javascript:void(0)">Special Offer</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="aa-footer-widget">
                                                    <div className="aa-footer-widget">
                                                        <h3>Useful Links</h3>
                                                        <ul className="aa-footer-nav">
                                                            <li><a href="javascript:void(0)">Site Map</a></li>
                                                            <li><a href="javascript:void(0)">Search</a></li>
                                                            <li><a href="javascript:void(0)">Advanced Search</a></li>
                                                            <li><a href="javascript:void(0)">Suppliers</a></li>
                                                            <li><a href="javascript:void(0)">FAQ</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="aa-footer-widget">
                                                    <div className="aa-footer-widget">
                                                        <h3>Contact Us</h3>
                                                        <address>
                                                            <p> 25 Astor Pl, NY 10003, USA</p>
                                                            <p><span className="fa fa-phone"></span>+1 212-982-4589</p>
                                                            <p><span className="fa fa-envelope"></span>dailyshop@gmail.com</p>
                                                        </address>
                                                        <div className="aa-footer-social">
                                                            <a href="javascript:void(0)"><span className="fa fa-facebook"></span></a>
                                                            <a href="javascript:void(0)"><span className="fa fa-twitter"></span></a>
                                                            <a href="javascript:void(0)"><span className="fa fa-google-plus"></span></a>
                                                            <a href="javascript:void(0)"><span className="fa fa-youtube"></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aa-footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="aa-footer-bottom-area">
                                        <p>Designed by <a href="http://www.markups.io/">MarkUps.io</a></p>
                                        <div className="aa-footer-payment">
                                            <span className="fa fa-cc-mastercard"></span>
                                            <span className="fa fa-cc-visa"></span>
                                            <span className="fa fa-paypal"></span>
                                            <span className="fa fa-cc-discover"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4>Login or Register</h4>
                                <form className="aa-login-form" action="">
                                    <label>Username or Email address<span>*</span></label>
                                    <input type="text" placeholder="Username or email" />
                                    <label>Password<span>*</span></label>
                                    <input type="password" placeholder="Password" />
                                    <button className="aa-browse-btn" type="submit">Login</button>
                                    <label className="rememberme"><input type="checkbox" id="rememberme" /> Remember me </label>
                                    <p className="aa-lost-password"><a href="javascript:void(0)">Lost your password?</a></p>
                                    <div className="aa-register-now">
                                        Don't have an account?<a href="account.html">Register now!</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;