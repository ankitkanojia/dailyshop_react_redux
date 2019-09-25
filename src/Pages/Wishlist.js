import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart, removeFromWishList } from './../Redux/Actions/CartProducts';

class Wishlist extends Component {

    static propTypes = {
        cartProducts: PropTypes.array.isRequired,
        wishListProducts: PropTypes.array.isRequired,
        addToCart: PropTypes.func.isRequired,
        removeFromWishList: PropTypes.func.isRequired
    };

    handleAddToWishList(product) {

        this.props.removeFromWishList(product);

        let productAlreadyInCart = false;
        this.props.cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            this.props.addToCart(product);
        }
    }

    render() {
        const wishListCart = this.props.wishListProducts.map(p => {
            return (
                <tr key={p.id}>
                    <td><a onClick={() => this.props.removeFromWishList(p)} className="remove" href="javascript:void(0)"><span className="fa fa-close"></span></a></td>
                    <td><a href="#"><img src={"Content/img/" + p.imgurl} alt="img" /></a></td>
                    <td><a className="aa-cart-title" href="#">{p.title}</a></td>
                    <td>{p.currency}{p.discountedprice}</td>
                    <td>In Stock</td>
                    <td><a onClick={() => this.handleAddToWishList(p)} href="javascript:void(0)" className="aa-add-to-cart-btn">Add To Cart</a></td>
                </tr>
            )
        });

        return (<React.Fragment>
            <section id="aa-catg-head-banner">
                <img src="Content/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Wishlist Page</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Wishlist</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cart-view"  style={{marginBottom : 50}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cart-view-area">
                                <div className="cart-view-table aa-wishlist-table">
                                    <form action="">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th>&nbsp;</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Stock Status</th>
                                                        <th>&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {wishListCart}
                                                    {!wishListCart.length && (
                                                        <tr>
                                                            <td colSpan="6"><strong>No Product(s) added in wishlist</strong></td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>)
    }
}

const mapStateToProps = state => ({
    wishListProducts: state.cart.wishListProducts,
    cartProducts: state.cart.cartProducts,
});

export default connect(mapStateToProps, { addToCart, removeFromWishList })(Wishlist);