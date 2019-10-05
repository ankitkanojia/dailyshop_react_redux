import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="aa-catg-head-banner">
                    <img src="content/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                    <div class="aa-catg-head-banner-area">
                        <div class="container">
                            <div class="aa-catg-head-banner-content">
                                <h2>Contact</h2>
                                <ol class="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">Contact</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="aa-contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="aa-contact-area">
                                    <div class="aa-contact-top" style={{paddingBottom:0}}>
                                        <h2>We are wating to assist you..</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quos.</p>
                                    </div>
                                    <div class="aa-contact-address">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="aa-contact-address-left">
                                                    <form class="comments-form contact-form" action="">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input type="text" placeholder="Your Name" class="form-control" required />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input type="email" placeholder="Email" class="form-control" required />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input type="text" placeholder="Subject" class="form-control" required />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <input type="text" placeholder="Company" class="form-control" required />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <textarea style={{width:'100%'}} class="form-control" rows="3" placeholder="Message"></textarea>
                                                        </div>
                                                        <button class="aa-secondary-btn">Send</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="aa-contact-address-right">
                                                    <address>
                                                        <h4>DailyShop</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum modi dolor facilis! Nihil error, eius.</p>
                                                        <p><span class="fa fa-home"></span>Huntsville, AL 35813, USA</p>
                                                        <p><span class="fa fa-phone"></span>+ 021.343.7575</p>
                                                        <p><span class="fa fa-envelope"></span>Email: support@dailyshop.com</p>
                                                    </address>
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

export default Contact;