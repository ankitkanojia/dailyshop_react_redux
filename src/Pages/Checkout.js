import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart, updateProductCount } from './../Redux/Actions/CartProducts';
import InputControl from './../Components/InputControl';

class Checkout extends Component {
    static propTypes = {
        cartProducts: PropTypes.array.isRequired,
        removeFromCart: PropTypes.func.isRequired,
        updateProductCount: PropTypes.func.isRequired
    };

    state = {
        cartTotal: 0
    };

    calculateTotal(){
        let newCartTotal = 0;
        this.props.cartProducts.map(p => {
            newCartTotal = newCartTotal + (p.discountedprice * p.count);
        })
        this.setState({
            cartTotal: newCartTotal
        });
        this.forceUpdate();
    }

    componentDidMount(){
        this.calculateTotal();
    }

    changeQTY = idx => evt => {
        var updatedArray = this.props.cartProducts.find(m => m.id === idx);
        updatedArray.count = evt.target.value;
        this.props.updateProductCount(updatedArray);
        this.calculateTotal();
    };

    removeFromCartCalculations(p) {
        let newCartTotal = this.state.cartTotal - (p.discountedprice * p.count);
        this.setState({
            cartTotal: newCartTotal
        });
        this.props.removeFromCart(p);
    }

    render() {
        const cartSection = this.props.cartProducts.map((p) => {
            p.producttotal = p.discountedprice * p.count;
            //this.state.cartTotal = this.state.cartTotal + p.producttotal;
            return (<tr key={p.id}>
                <td><a onClick={() => this.removeFromCartCalculations(p)} className="remove" href="javascript:void(0)"><span className="fa fa-close"></span></a></td>
                <td><a href="#"><img src={"Content/img/" + p.imgurl} alt="img" /></a></td>
                <td><a className="aa-cart-title" href="#">{p.title}</a></td>
                <td>{p.currency}{p.discountedprice}</td>
                <td>
                    <InputControl
                        className={'aa-cart-quantity'}
                        inputType={'number'}
                        minvalue={1}
                        controlFunc={this.changeQTY(p.id)}
                        value={p.count.toString()} />
                </td>
                <td>{p.currency}{p.producttotal}</td>
            </tr>)
        })

        return (<React.Fragment>
            <section id="aa-catg-head-banner">
                <img src="Content/img/fashion/fashion-header-bg-8.jpg" alt="fashion img" />
                <div className="aa-catg-head-banner-area">
                    <div className="container">
                        <div className="aa-catg-head-banner-content">
                            <h2>Cart Page</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Cart</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cart-view" style={{marginBottom : 50}}> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cart-view-area">
                                <div className="cart-view-table">
                                    <form action="">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>&nbsp;</th>
                                                        <th>&nbsp;</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartSection}
                                                    {!cartSection.length && (
                                                        <tr>
                                                            <td colSpan="6"><strong>No Product(s) added in cart</strong></td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                    {cartSection.length > 0 && (
                                        <div className="cart-view-total">
                                            <h4>Cart Totals</h4>
                                            <table className="aa-totals-table">
                                                <tbody>
                                                    <tr>
                                                        <th>Total</th>
                                                        <td>${this.state.cartTotal}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a href="#" className="aa-cart-view-btn">Proced to Checkout</a>
                                        </div>
                                    )}
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
    cartProducts: state.cart.cartProducts,
});

export default connect(mapStateToProps, { removeFromCart, updateProductCount })(Checkout);