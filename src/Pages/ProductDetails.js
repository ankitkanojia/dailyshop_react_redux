import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addToCart, addToWishList, removeFromWishList } from './../Redux/Actions/CartProducts';
import { UPDATE_PRODUCTWISHLISTFLAG } from './../Redux/ActionTypes';
import { connect } from 'react-redux';
import SelectControl from './../Components/SelectControl';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
    
    state = {
        productDetails : this.props.location.state.product,
        totalPiece: this.props.location.state.product.count
    }

    static propTypes = {
        addToCart: PropTypes.func.isRequired,
        cartProducts: PropTypes.array.isRequired,
        wishListProducts: PropTypes.array.isRequired,
        addToWishList: PropTypes.func.isRequired,
        removeFromWishList: PropTypes.func.isRequired
    }

    componentDidMount()
    {
        window.test();
    }

    handleChange(e) {
        this.setState({ totalPiece: e.target.value });
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

    render() {
        return <React.Fragment>
            <section id="aa-catg-head-banner">
                <img src="Content/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>T-Shirt</h2>
                            <ol className="breadcrumb">
                                <li><Link to="/">Home</Link></li>
                                <li><a href="javascript:void(0)">Product</a></li>
                                <li className="active">{this.state.productDetails.category}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section id="aa-product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-product-details-area">
                                <div className="aa-product-details-content">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5 col-xs-12">
                                            <div className="aa-product-view-slider">
                                                <div id="demo-1" className="simpleLens-gallery-container">
                                                    <div className="simpleLens-container">
                                                        <div className="simpleLens-big-image-container">
                                                            <a data-lens-image={"Content/img/" + this.state.productDetails.imgurl}
                                                                className="simpleLens-lens-image">
                                                                <img width="250" height="300" src={"Content/img/" + this.state.productDetails.imgurl} className="simpleLens-big-image" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="simpleLens-thumbnails-container">
                                                        <a data-big-image={"Content/img/" + this.state.productDetails.imgurl}
                                                            data-lens-image={"Content/img/" + this.state.productDetails.imgurl}
                                                            className="simpleLens-thumbnail-wrapper" href="javascript:void(0)">
                                                            <img width="45" height="55" src={"Content/img/" + this.state.productDetails.imgurl} />
                                                        </a>
                                                        {this.state.productDetails.productImages ? (
                                                            this.state.productDetails.productImages.map(p => {
                                                                return (
                                                                    <a key={p} data-big-image={"Content/img/" + p}
                                                                        data-lens-image={"Content/img/" + p}
                                                                        className="simpleLens-thumbnail-wrapper" href="javascript:void(0)">
                                                                        <img width="45" height="55" src={"Content/img/" + p} />
                                                                    </a>
                                                                )
                                                            })
                                                        ) : (<a></a>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-7 col-xs-12">
                                            <div className="aa-product-view-content">
                                                <h3>{this.state.productDetails.title}</h3>
                                                <div className="aa-price-block">
                                                    <span className="aa-product-view-price">{this.state.productDetails.currency}{this.state.productDetails.discountedprice}</span>
                                                    <p className="aa-product-avilability">Avilability: <span>{this.state.productDetails.status}</span></p>
                                                </div>
                                                <p>{this.state.productDetails.description}</p>
                                                <h4>Size</h4>
                                                <div className="aa-prod-view-size">
                                                {this.state.productDetails.sizes ? (
                                                    this.state.productDetails.sizes.map(p => {
                                                        return <a href="javascript:void(0)" key={p}>{p}</a>
                                                    })
                                                ) : (<a></a>)
                                                }
                                                </div>
                                                <h4>Color</h4>
                                                <div className="aa-color-tag">
                                                    <a href="javascript:void(0)" className="aa-color-green"></a>
                                                    <a href="javascript:void(0)" className="aa-color-yellow"></a>
                                                    <a href="javascript:void(0)" className="aa-color-pink"></a>
                                                    <a href="javascript:void(0)" className="aa-color-black"></a>
                                                    <a href="javascript:void(0)" className="aa-color-white"></a>
                                                </div>
                                                <div className="aa-prod-quantity">
                                                    <SelectControl options={["1", "2", "3", "4", "5", "6"]} controlFunc={this.handleChange.bind(this)} selectedOption={this.state.totalPiece} />
                                                    <p className="aa-prod-category">
                                                        Category: <a href="javascript:void(0)">{this.state.productDetails.category}</a>
                                                    </p>
                                                </div>
                                                <div className="aa-prod-view-bottom">
                                                    <a onClick={() => this.handleAddToCart(this.state.productDetails)} className="aa-add-to-cart-btn" href="javascript:void(0)">Add To Cart</a>
                                                    <a onClick={() => this.handleAddToWishList(this.state.productDetails, this.state.productDetails.isWhishList)} className="aa-add-to-cart-btn" href="javascript:void(0)" style={{color: (this.state.productDetails.isWhishList) ? "#ff6666" : "#555" , border: (this.state.productDetails.isWhishList) ? "1px solid #ff6666" : "1px solid #ccc"  }}>Wishlist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aa-product-details-bottom">
                                    <ul className="nav nav-tabs" id="myTab2">
                                        <li><a href="#description" data-toggle="tab">Description</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade in active" id="description">
                                        <div dangerouslySetInnerHTML={{ __html: this.state.productDetails.productDescription }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    };
}

const mapStateToProps = state => ({
    cartProducts: state.cart.cartProducts,
    wishListProducts: state.cart.wishListProducts,
    handleChange: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { addToWishList, addToCart, removeFromWishList })(ProductDetails);