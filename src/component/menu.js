import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="menu">
                    <div class="container">
                        <div class="menu-area">
                            {/*  Navbar */}
                            <div class="navbar navbar-default" role="navigation">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <div class="navbar-collapse collapse">
                                    {/*  Left nav */}
                                    <ul class="nav navbar-nav">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Men <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Casual</a></li>
                                                <li><a href="#">Sports</a></li>
                                                <li><a href="#">Formal</a></li>
                                                <li><a href="#">Standard</a></li>
                                                <li><a href="#">T-Shirts</a></li>
                                                <li><a href="#">Shirts</a></li>
                                                <li><a href="#">Jeans</a></li>
                                                <li><a href="#">Trousers</a></li>
                                                <li><a href="#">And more.. <span class="caret"></span></a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">Sleep Wear</a></li>
                                                        <li><a href="#">Sandals</a></li>
                                                        <li><a href="#">Loafers</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Women <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Kurta & Kurti</a></li>
                                                <li><a href="#">Trousers</a></li>
                                                <li><a href="#">Casual</a></li>
                                                <li><a href="#">Sports</a></li>
                                                <li><a href="#">Formal</a></li>
                                                <li><a href="#">Sarees</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">And more.. <span class="caret"></span></a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">Sleep Wear</a></li>
                                                        <li><a href="#">Sandals</a></li>
                                                        <li><a href="#">Loafers</a></li>
                                                        <li><a href="#">And more.. <span class="caret"></span></a>
                                                            <ul class="dropdown-menu">
                                                                <li><a href="#">Rings</a></li>
                                                                <li><a href="#">Earrings</a></li>
                                                                <li><a href="#">Jewellery Sets</a></li>
                                                                <li><a href="#">Lockets</a></li>
                                                                <li class="disabled"><a class="disabled" href="#">Disabled item</a></li>
                                                                <li><a href="#">Jeans</a></li>
                                                                <li><a href="#">Polo T-Shirts</a></li>
                                                                <li><a href="#">SKirts</a></li>
                                                                <li><a href="#">Jackets</a></li>
                                                                <li><a href="#">Tops</a></li>
                                                                <li><a href="#">Make Up</a></li>
                                                                <li><a href="#">Hair Care</a></li>
                                                                <li><a href="#">Perfumes</a></li>
                                                                <li><a href="#">Skin Care</a></li>
                                                                <li><a href="#">Hand Bags</a></li>
                                                                <li><a href="#">Single Bags</a></li>
                                                                <li><a href="#">Travel Bags</a></li>
                                                                <li><a href="#">Wallets & Belts</a></li>
                                                                <li><a href="#">Sunglases</a></li>
                                                                <li><a href="#">Nail</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Kids <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Casual</a></li>
                                                <li><a href="#">Sports</a></li>
                                                <li><a href="#">Formal</a></li>
                                                <li><a href="#">Standard</a></li>
                                                <li><a href="#">T-Shirts</a></li>
                                                <li><a href="#">Shirts</a></li>
                                                <li><a href="#">Jeans</a></li>
                                                <li><a href="#">Trousers</a></li>
                                                <li><a href="#">And more.. <span class="caret"></span></a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="#">Sleep Wear</a></li>
                                                        <li><a href="#">Sandals</a></li>
                                                        <li><a href="#">Loafers</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Sports</a></li>
                                        <li><a href="#">Digital <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Mobile</a></li>
                                                <li><a href="#">Tablet</a></li>
                                                <li><a href="#">Laptop</a></li>
                                                <li><a href="#">Accesories</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Furniture</a></li>
                                        <li><a href="blog-archive.html">Blog <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="blog-archive.html">Blog Style 1</a></li>
                                                <li><a href="blog-archive-2.html">Blog Style 2</a></li>
                                                <li><a href="blog-single.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="#">Pages <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="product.html">Shop Page</a></li>
                                                <li><a href="product-detail.html">Shop Single</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>{/* /.nav-collapse */}
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Menu;