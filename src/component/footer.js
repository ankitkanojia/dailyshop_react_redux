import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer id="aa-footer">
                    {/*  footer bottom */}
                    <div class="aa-footer-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="aa-footer-top-area">
                                        <div class="row">
                                            <div class="col-md-3 col-sm-6">
                                                <div class="aa-footer-widget">
                                                    <h3>Main Menu</h3>
                                                    <ul class="aa-footer-nav">
                                                        <li><a href="#">Home</a></li>
                                                        <li><a href="#">Our Services</a></li>
                                                        <li><a href="#">Our Products</a></li>
                                                        <li><a href="#">About Us</a></li>
                                                        <li><a href="#">Contact Us</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <div class="aa-footer-widget">
                                                    <div class="aa-footer-widget">
                                                        <h3>Knowledge Base</h3>
                                                        <ul class="aa-footer-nav">
                                                            <li><a href="#">Delivery</a></li>
                                                            <li><a href="#">Returns</a></li>
                                                            <li><a href="#">Services</a></li>
                                                            <li><a href="#">Discount</a></li>
                                                            <li><a href="#">Special Offer</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <div class="aa-footer-widget">
                                                    <div class="aa-footer-widget">
                                                        <h3>Useful Links</h3>
                                                        <ul class="aa-footer-nav">
                                                            <li><a href="#">Site Map</a></li>
                                                            <li><a href="#">Search</a></li>
                                                            <li><a href="#">Advanced Search</a></li>
                                                            <li><a href="#">Suppliers</a></li>
                                                            <li><a href="#">FAQ</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3 col-sm-6">
                                                <div class="aa-footer-widget">
                                                    <div class="aa-footer-widget">
                                                        <h3>Contact Us</h3>
                                                        <address>
                                                            <p> 25 Astor Pl, NY 10003, USA</p>
                                                            <p><span class="fa fa-phone"></span>+1 212-982-4589</p>
                                                            <p><span class="fa fa-envelope"></span>dailyshop@gmail.com</p>
                                                        </address>
                                                        <div class="aa-footer-social">
                                                            <a href="#"><span class="fa fa-facebook"></span></a>
                                                            <a href="#"><span class="fa fa-twitter"></span></a>
                                                            <a href="#"><span class="fa fa-google-plus"></span></a>
                                                            <a href="#"><span class="fa fa-youtube"></span></a>
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
                    {/*  footer-bottom */}
                    <div class="aa-footer-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="aa-footer-bottom-area">
                                        <p>Designed by <a href="http://www.markups.io/">MarkUps.io</a></p>
                                        <div class="aa-footer-payment">
                                            <span class="fa fa-cc-mastercard"></span>
                                            <span class="fa fa-cc-visa"></span>
                                            <span class="fa fa-paypal"></span>
                                            <span class="fa fa-cc-discover"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;