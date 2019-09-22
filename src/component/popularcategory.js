import React, { Component } from 'react';

class Popularcategory extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="aa-popular-category">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="aa-popular-category-area">
                                        {/*  start prduct navigation */}
                                        <ul class="nav nav-tabs aa-products-tab">
                                            <li class="active"><a href="#popular" data-toggle="tab">Popular</a></li>
                                            <li><a href="#featured" data-toggle="tab">Featured</a></li>
                                            <li><a href="#latest" data-toggle="tab">Latest</a></li>
                                        </ul>
                                        {/*  Tab panes */}
                                        <div class="tab-content">
                                            {/*  Start men popular category */}
                                            <div class="tab-pane fade in active" id="popular">
                                                <ul class="aa-product-catg aa-popular-slider">
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sale" href="#">SALE!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-2.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                        </figure>
                                                        <figcaption>
                                                            <h4 class="aa-product-title"><a href="#">T-Shirt</a></h4>
                                                            <span class="aa-product-price">$45.50</span>
                                                        </figcaption>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-3.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-4.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-hot" href="#">HOT!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-hot" href="#">HOT!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">This is Title</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sale" href="#">SALE!</span>
                                                    </li>
                                                </ul>
                                                <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                                            </div>
                                            {/*  / popular product category */}

                                            {/*  start featured product category */}
                                            <div class="tab-pane fade" id="featured">
                                                <ul class="aa-product-catg aa-featured-slider">
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sale" href="#">SALE!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-2.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                        </figure>
                                                        <figcaption>
                                                            <h4 class="aa-product-title"><a href="#">T-Shirt</a></h4>
                                                            <span class="aa-product-price">$45.50</span>
                                                        </figcaption>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-3.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-4.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-hot" href="#">HOT!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-hot" href="#">HOT!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">This is Title</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sale" href="#">SALE!</span>
                                                    </li>
                                                </ul>
                                                <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                                            </div>
                                            {/*  / featured product category */}

                                            {/*  start latest product category */}
                                            <div class="tab-pane fade" id="latest">
                                                <ul class="aa-product-catg aa-latest-slider">
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sale" href="#">SALE!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-2.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                        </figure>
                                                        <figcaption>
                                                            <h4 class="aa-product-title"><a href="#">T-Shirt</a></h4>
                                                            <span class="aa-product-price">$45.50</span>
                                                        </figcaption>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sold-out" href="#">Sold Out!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-3.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-4.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-hot" href="#">HOT!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-hot" href="#">HOT!</span>
                                                    </li>
                                                    {/*  start single product item */}
                                                    <li>
                                                        <figure>
                                                            <a class="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img" /></a>
                                                            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
                                                            <figcaption>
                                                                <h4 class="aa-product-title"><a href="#">This is Title</a></h4>
                                                                <span class="aa-product-price">$45.50</span><span class="aa-product-price"><del>$65.50</del></span>
                                                            </figcaption>
                                                        </figure>
                                                        <div class="aa-product-hvr-content">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                                                            <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>
                                                        </div>
                                                        {/*  product badge */}
                                                        <span class="aa-badge aa-sale" href="#">SALE!</span>
                                                    </li>
                                                </ul>
                                                <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                                            </div>
                                            {/*  / latest product category */}
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

export default Popularcategory;