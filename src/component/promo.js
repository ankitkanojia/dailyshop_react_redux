import React, { Component } from 'react';

class Promo extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="aa-promo">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="aa-promo-area">
                                    <div class="row">
                                        {/*  promo left */}
                                        <div class="col-md-5 no-padding">
                                            <div class="aa-promo-left">
                                                <div class="aa-promo-banner">
                                                    <img src="img/promo-banner-1.jpg" alt="img" />
                                                    <div class="aa-prom-content">
                                                        <span>75% Off</span>
                                                        <h4><a href="#">For Women</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  promo right */}
                                        <div class="col-md-7 no-padding">
                                            <div class="aa-promo-right">
                                                <div class="aa-single-promo-right">
                                                    <div class="aa-promo-banner">
                                                        <img src="img/promo-banner-3.jpg" alt="img" />
                                                        <div class="aa-prom-content">
                                                            <span>Exclusive Item</span>
                                                            <h4><a href="#">For Men</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="aa-single-promo-right">
                                                    <div class="aa-promo-banner">
                                                        <img src="img/promo-banner-2.jpg" alt="img" />
                                                        <div class="aa-prom-content">
                                                            <span>Sale Off</span>
                                                            <h4><a href="#">On Shoes</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="aa-single-promo-right">
                                                    <div class="aa-promo-banner">
                                                        <img src="img/promo-banner-4.jpg" alt="img" />
                                                        <div class="aa-prom-content">
                                                            <span>New Arrivals</span>
                                                            <h4><a href="#">For Kids</a></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="aa-single-promo-right">
                                                    <div class="aa-promo-banner">
                                                        <img src="img/promo-banner-5.jpg" alt="img" />
                                                        <div class="aa-prom-content">
                                                            <span>25% Off</span>
                                                            <h4><a href="#">For Bags</a></h4>
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
                </section>
            </React.Fragment>
        )
    }
}

export default Promo;