import React, { Component } from 'react';
import { fetchProducts, fetchBlogs, fetchTestimonials } from '../Redux/Actions/StaticItems';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart, addToWishList, removeFromWishList } from '../Redux/Actions/CartProducts';
import HeaderSlider from '../Containers/HeaderSlider';
import Modal from 'react-awesome-modal';
import ModalPopup from "../Components/ModalPopup";
import { UPDATE_PRODUCTWISHLISTFLAG } from '../Redux/ActionTypes';
import { Link } from 'react-router-dom';

class Home extends Component {
    static propTypes = {
        fetchProducts: PropTypes.func.isRequired,
        fetchBlogs: PropTypes.func.isRequired,
        fetchTestimonials: PropTypes.func.isRequired,
        products: PropTypes.array.isRequired,
        blogs: PropTypes.array.isRequired,
        testimonials: PropTypes.array.isRequired,
        cartProducts: PropTypes.array.isRequired,
        addToCart: PropTypes.func.isRequired,
        addToWishList: PropTypes.func.isRequired,
        wishListProducts: PropTypes.array.isRequired,
        removeFromWishList: PropTypes.func.isRequired
    }

    state = {
        productDetails: {
            category: "",
            sizes: "",
            description: "",
            productImages: "",
            imgurl: "",
            discountedprice: "",
            currency: "",
            status: ""
        },
        visible: false,
        totalPiece: 1
    };

    openModal(product) {
        //this.state.productDetails = product;
        this.setState({
            productDetails: product,
            totalPiece: 1
        }, () => {
            window.test();
        });
        this.state.visible = true;
    }

    closeModal() {
        this.setState({
            visible: false,
            totalPiece: 1
        });
    }

    handleAddToCart(product) {
        product.count = this.state.totalPiece;
        let productAlreadyInCart = false;
        this.props.cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            this.state.visible = false;
            this.props.addToCart(product);
            this.props.removeFromWishList(product);
        }
    }

    handleAddToWishList(product, isWishListed) {
        if (isWishListed) {
            this.props.removeFromWishList(product);
            product.isWhishList = false;
            return dispatch => {
                return dispatch({
                    type: UPDATE_PRODUCTWISHLISTFLAG,
                    payload: product
                });
            }
        } else {
            let productAlreadyInCart = false;
            this.props.wishListProducts.forEach(cp => {
                if (cp.id === product.id) {
                    productAlreadyInCart = true;
                }
            });

            if (!productAlreadyInCart) {
                this.props.addToWishList(product);
            }

            product.isWhishList = true;
            return dispatch => {
                return dispatch({
                    type: UPDATE_PRODUCTWISHLISTFLAG,
                    payload: product
                });
            }
        }
    }

    componentDidMount() {
        this.props.fetchBlogs();
        this.props.fetchTestimonials();
        this.props.fetchProducts();
        window.initializeTestimonials();
    }

    handleChange(e) {
        this.setState({ totalPiece: e.target.value });
    }

    componentDidUpdate(){
        window.initializeTestimonials();
    }

    render() {

        return (
            <React.Fragment>
                <HeaderSlider />
                <section id="aa-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="aa-product-area">
                                        <div className="aa-product-inner">
                                            <ul className="nav nav-tabs aa-products-tab">
                                                <li className="active"><a href="#men" data-toggle="tab">Men</a></li>
                                                <li><a href="#women" data-toggle="tab">Women</a></li>
                                                <li><a href="#sports" data-toggle="tab">Sports</a></li>
                                                <li><a href="#electronics" data-toggle="tab">Electronics</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane fade in active" id="men">
                                                    <ul className="aa-product-catg">
                                                        {
                                                            this.props.products.filter(m => m.type == "men").map(p => {
                                                                return (<li key={p.id}>
                                                                    <figure>
                                                                        <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                        <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                        <figcaption>
                                                                            <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                            <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <div className="aa-product-hvr-content">
                                                                        <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                        <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                        <Link to={{ pathname: '/productdetails', state: { product:  p }}} title="Product Details"><span className="fa fa-list"></span></Link>
                                                                    </div>
                                                                    {p.tag.length > 0 &&
                                                                        <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                                    }
                                                                </li>)
                                                            })
                                                        }
                                                    </ul>
                                                    <a className="aa-browse-btn" href="javascript:void(0)">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                                </div>
                                                <div className="tab-pane fade in" id="women">
                                                    <ul className="aa-product-catg">
                                                        {
                                                            this.props.products.filter(m => m.type == "women").map(p => {
                                                                return (<li key={p.id}>
                                                                    <figure>
                                                                        <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                        <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                        <figcaption>
                                                                            <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                            <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <div className="aa-product-hvr-content">
                                                                        <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                        <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                         <Link to={{ pathname: '/productdetails', state: { product:  p }}} title="Product Details"><span className="fa fa-list"></span></Link>
                                                                    </div>
                                                                    {p.tag.length > 0 &&
                                                                        <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                                    }
                                                                </li>)
                                                            })
                                                        }
                                                    </ul>
                                                    <a className="aa-browse-btn" href="javascript:void(0)">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                                </div>
                                                <div className="tab-pane fade in" id="sports">
                                                    <ul className="aa-product-catg">
                                                        {
                                                            this.props.products.filter(m => m.type == "sports").map(p => {
                                                                return (<li key={p.id}>
                                                                    <figure>
                                                                        <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                        <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                        <figcaption>
                                                                            <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                            <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <div className="aa-product-hvr-content">
                                                                        <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                        <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                         <Link to={{ pathname: '/productdetails', state: { product:  p }}} title="Product Details"><span className="fa fa-list"></span></Link>
                                                                    </div>
                                                                    {p.tag.length > 0 &&
                                                                        <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                                    }
                                                                </li>)
                                                            })
                                                        }
                                                    </ul>
                                                    <a className="aa-browse-btn" href="javascript:void(0)">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                                </div>
                                                <div className="tab-pane fade in" id="electronics">
                                                    <ul className="aa-product-catg">
                                                        {
                                                            this.props.products.filter(m => m.type == "electronics").map(p => {
                                                                return (<li key={p.id}>
                                                                    <figure>
                                                                        <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                        <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                        <figcaption>
                                                                            <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                            <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <div className="aa-product-hvr-content">
                                                                        <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                        <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                         <Link to={{ pathname: '/productdetails', state: { product:  p }}} title="Product Details"><span className="fa fa-list"></span></Link>
                                                                    </div>
                                                                    {p.tag.length > 0 &&
                                                                        <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                                    }
                                                                </li>)
                                                            })
                                                        }
                                                    </ul>
                                                    <a className="aa-browse-btn" href="javascript:void(0)">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="aa-banner-area">
                                        <a href="javascript:void(0)"><img src="Content/img/fashion-banner.jpg" alt="fashion banner img" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-popular-category">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="aa-popular-category-area">
                                        <ul className="nav nav-tabs aa-products-tab">
                                            <li className="active"><a href="#popular" data-toggle="tab">Popular</a></li>
                                            <li><a href="#featured" data-toggle="tab">Featured</a></li>
                                            <li><a href="#latest" data-toggle="tab">Latest</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade in active" id="popular">
                                                <ul className="aa-product-catg aa-popular-slider">
                                                    {
                                                        this.props.products.filter(m => m.type == "popular").map(p => {
                                                            return (<li key={p.id}>
                                                                <figure>
                                                                    <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                    <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                    <figcaption>
                                                                        <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                        <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                    </figcaption>
                                                                </figure>
                                                                <div className="aa-product-hvr-content">
                                                                    <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                    <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                     <Link to={{ pathname: '/productdetails', state: { product:  p }}} title="Product Details"><span className="fa fa-list"></span></Link>
                                                                </div>
                                                                {p.tag.length > 0 &&
                                                                    <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                                }
                                                            </li>)
                                                        })
                                                    }
                                                </ul>
                                                <a className="aa-browse-btn" href="javascript:void(0)">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                            </div>
                                            <div className="tab-pane fade" id="featured">
                                                <ul className="aa-product-catg aa-featured-slider">
                                                    {
                                                        this.props.products.filter(m => m.type == "featured").map(p => {
                                                            return (<li key={p.id}>
                                                                <figure>
                                                                    <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                    <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                    <figcaption>
                                                                        <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                        <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                    </figcaption>
                                                                </figure>
                                                                <div className="aa-product-hvr-content">
                                                                    <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                    <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                     <Link to={{ pathname: '/productdetails', state: { product:  p }}} title="Product Details"><span className="fa fa-list"></span></Link>
                                                                </div>
                                                                {p.tag.length > 0 &&
                                                                    <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                                }
                                                            </li>)
                                                        })
                                                    }
                                                </ul>
                                                <a className="aa-browse-btn" href="javascript:void(0)">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                            </div>

                                            <div className="tab-pane fade" id="latest">
                                                <ul className="aa-product-catg aa-latest-slider">
                                                    {
                                                        this.props.products.filter(m => m.type == "latest").map(p => {
                                                            return (<li key={p.id}>
                                                                <figure>
                                                                    <a className="aa-product-img" href="javascript:void(0)"><img src={"Content/img/" + p.imgurl} alt="polo shirt img" /></a>
                                                                    <a onClick={() => this.handleAddToCart(p)} className="aa-add-card-btn" href="javascript:void(0)"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                                                    <figcaption>
                                                                        <h4 className="aa-product-title"><a href="javascript:void(0)">{p.title}</a></h4>
                                                                        <span className="aa-product-price">{p.currency}{p.discountedprice}</span><span className="aa-product-price"><del>{p.currency}{p.price}</del></span>
                                                                    </figcaption>
                                                                </figure>
                                                                <div className="aa-product-hvr-content">
                                                                    <a onClick={() => this.handleAddToWishList(p, p.isWhishList)} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span style={{ color: (p.isWhishList) ? "#ff6666" : "#333333" }} className="fa fa-heart"></span></a>
                                                                    <a onClick={() => this.openModal(p)} href="javascript:void(0)"><span className="fa fa-search"></span></a>
                                                                     <Link to={{ pathname: '/productdetails', state: { product:  p }}} title="Product Details"><span className="fa fa-list"></span></Link>
                                                                </div>
                                                                {p.tag.length > 0 &&
                                                                    <span className="aa-badge aa-sale" href="javascript:void(0)">{p.tag}</span>
                                                                }
                                                            </li>)
                                                        })
                                                    }
                                                </ul>
                                                <a className="aa-browse-btn" href="javascript:void(0)">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-support">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-support-area">
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="aa-support-single">
                                            <span className="fa fa-truck"></span>
                                            <h4>FREE SHIPPING</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="aa-support-single">
                                            <span className="fa fa-clock-o"></span>
                                            <h4>30 DAYS MONEY BACK</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="aa-support-single">
                                            <span className="fa fa-phone"></span>
                                            <h4>SUPPORT 24/7</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-testimonial-area">
                                    <ul className="aa-testimonial-slider">
                                        {
                                            this.props.testimonials.map(p => {
                                                return (<li key={p.id}>
                                                    <div className="aa-testimonial-single">
                                                        <img className="aa-testimonial-img" src={p.imageUrl} alt="testimonial img" />
                                                        <span className="fa fa-quote-left aa-testimonial-quote"></span>
                                                        <p>{p.decription}</p>
                                                        <div className="aa-testimonial-info">
                                                            <p>{p.name}</p>
                                                            <span>{p.role}</span>
                                                            <a href="javascript:void(0)">{p.company}</a>
                                                        </div>
                                                    </div>
                                                </li>)
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-latest-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="aa-latest-blog-area">
                                    <h2>LATEST BLOG</h2>
                                    <div className="row">
                                        {
                                            this.props.blogs.slice(0, 3).map(p => {
                                                return (<div className="col-md-4 col-sm-4" key={p.id}>
                                                    <div className="aa-latest-blog-single">
                                                        <figure className="aa-blog-img">
                                                            <a href="javascript:void(0)"><img src={"Content/img/" + p.imageName} alt="img" /></a>
                                                            <figcaption className="aa-blog-img-caption">
                                                                <span href="javascript:void(0)"><i className="fa fa-clock-o"></i>{new Date(p.createDate).toLocaleString("en-US",{ year: 'numeric', month: 'short', day: 'numeric'})}</span>
                                                            </figcaption>
                                                        </figure>
                                                        <div className="aa-blog-info">
                                                            <h3 className="aa-blog-title"><a href="javascript:void(0)">{p.title}</a></h3>
                                                            <p>{p.decription}</p>
                                                            <a href="javascript:void(0)" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right"></span></a>
                                                        </div>
                                                    </div>
                                                </div>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="aa-client-brand">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="aa-client-brand-area">
                                    <ul class="aa-client-brand-slider">
                                        <li><a href="#"><img src="content/img/client-brand-java.png" alt="java img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-jquery.png" alt="jquery img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-html5.png" alt="html5 img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-css3.png" alt="css3 img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-wordpress.png" alt="wordPress img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-joomla.png" alt="joomla img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-java.png" alt="java img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-jquery.png" alt="jquery img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-html5.png" alt="html5 img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-css3.png" alt="css3 img" /></a></li>
                                        <li><a href="#"><img src="content/img/client-brand-wordpress.png" alt="wordPress img" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal
                    visible={this.state.visible}
                    width="800"
                    height="400"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <ModalPopup productDetails={this.state.productDetails} handleChange={this.handleChange.bind(this)} closeModal={() => this.closeModal()} addToCart={() => this.handleAddToCart(this.state.productDetails)} />
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    products: state.staticitems.products,
    blogs: state.staticitems.blogs,
    testimonials: state.staticitems.testimonials,
    cartProducts: state.cart.cartProducts,
    wishListProducts: state.cart.wishListProducts,
});

export default connect(mapStateToProps, { addToWishList, addToCart, removeFromWishList, fetchProducts, fetchBlogs, fetchTestimonials })(Home);